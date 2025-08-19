import { useState, useEffect } from "react";
import { flexRender, getCoreRowModel, useReactTable, getPaginationRowModel, getSortedRowModel, getFilteredRowModel } from "@tanstack/react-table";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { cn } from "@/lib/utils"
//Component Shadcn
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuShortcut,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader
} from "@/components/ui/dialog"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Textarea } from "@/components/ui/textarea"
import { Calendar } from "@/components/ui/calendar"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { format } from "date-fns"
//Icons
import {
    MoreHorizontal,
    ArrowUpDown,
    ChevronLeft,
    ChevronRight,
    ChevronsLeft,
    ChevronsRight,
    CalendarIcon
} from "lucide-react"
import partiePic from '../../../assets/Partie.jpg'

//data
const getData = async () => {
    // Fetch data from your API here
    return [
        {
            id: "728ed52f",
            name: "Partie 1",
            image: "Image 1",
            date: "2025 - 09 - 31",
        },
        {
            id: "728ed52f",
            name: "Partie 2",
            image: "Image 2",
            date: "2025 - 09 - 31",
        },
        {
            id: "728ed52f",
            name: "Partie 3",
            image: "Image 3",
            date: "2025 - 09 - 31",
        },
    ];
};

const formSchema = z.object({
    namePartie: z.string().optional(),
    titlePartie: z.string().optional(),
    descriptionPartie: z.string().optional(),
    imagePartie: z.string().optional(),
    datePartie: z.string().optional(),
})


const PartiesTable = () => {

    const [currentRowData, setCurrentRowData] = useState([]);
    const [ShowUpdateDialog, setShowUpdateDialog] = useState(false);
    const [ShowMoreInfoDialog, setShowMoreInfoDialog] = useState(false);
    const [data, setData] = useState([]);
    const [sorting, setSorting] = useState([]);
    const [columnFilters, setColumnFilters] = useState([])
    const [columnVisibility, setColumnVisibility] = useState({})
    const [rowSelection, setRowSelection] = useState({})


    // 1. Define your form.
    const editPartie = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            namePartie: "",
            titlePartie: "",
            descriptionPartie: "",
            imagePartie: "",
            datePartie: "",
        },
    })

    // 2. Define a submit handler.
    function onSubmit(values) {
        console.log(values)
    }


    //Column
    const columns = [
        {
            id: "select",
            header: ({ table }) => (
                <Checkbox
                    checked={
                        table.getIsAllPageRowsSelected() ||
                        (table.getIsSomePageRowsSelected() && "indeterminate")
                    }
                    onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
                    aria-label="Select all"
                />
            ),
            cell: ({ row }) => (
                <Checkbox
                    checked={row.getIsSelected()}
                    onCheckedChange={(value) => row.toggleSelected(!!value)}
                    aria-label="Select row"
                />
            ),
            enableSorting: false,
            enableHiding: false,
        },
        {
            accessorKey: "id",
            header: "ID",
        },
        {
            accessorKey: "name",
            header: ({ column }) => {
                return (
                    <Button
                        variant="ghost"
                        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                    >
                        Nom
                        <ArrowUpDown className="ml-2 h-4 w-4" />
                    </Button>
                )
            },
        },
        {
            accessorKey: "image",
            header: "Image",
        },
        {
            accessorKey: "date",
            header: ({ column }) => {
                return (
                    <Button
                        variant="ghost"
                        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                    >
                        Date
                        <ArrowUpDown className="ml-2 h-4 w-4" />
                    </Button>
                )
            },
        },
        {
            id: "actions",
            cell: ({ row }) => {

                //This for open Edit Tournament Dialog
                const handleEdit = (rowData) => {
                    setCurrentRowData(rowData);
                    setShowUpdateDialog(true)
                }

                //This for More Info Tournament 
                const handleInfo = (rowData) => {
                    setCurrentRowData(rowData);
                    setShowMoreInfoDialog(true);
                }
                return (
                    <>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="ghost" className="h-8 w-8 p-0">
                                    <span className="sr-only">Open menu</span>
                                    <MoreHorizontal className="h-3 w-3" />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                                <DropdownMenuItem
                                    onSelect={() => handleEdit(row.original)}>
                                    Update Partie
                                </DropdownMenuItem>
                                <DropdownMenuItem
                                    onSelect={() => handleInfo(row.original)}>
                                    View Partie Details
                                </DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem>
                                    Delete
                                    <DropdownMenuShortcut>⌘⌫</DropdownMenuShortcut>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>


                        {/* Update Tournament  */}
                        <Dialog open={ShowUpdateDialog} onOpenChange={setShowUpdateDialog}>
                            <DialogContent className='flex flex-col sm:max-w-[50%]'>
                                <DialogHeader className='text-xl font-semibold'>
                                    Update {currentRowData.name}
                                </DialogHeader>
                                <DialogDescription className='text-sm mt-[-8px]'>
                                    Update the Partie details and save the changes
                                </DialogDescription>
                                <div>
                                    <Form {...editPartie}>
                                        <form onSubmit={editPartie.handleSubmit(onSubmit)} className="space-y-8">
                                            <div className="flex justify-between">
                                                <div className="w-1/2 space-y-2">
                                                    <FormField
                                                        control={editPartie.control}
                                                        name="namePartie"
                                                        render={({ field }) => (
                                                            <FormItem className="w-[90%]">
                                                                <FormLabel className="font-medium text-[#333333]">Name Partie</FormLabel>
                                                                <FormControl>
                                                                    <Input placeholder="Name Partie" {...field} />
                                                                </FormControl>
                                                                <FormMessage />
                                                            </FormItem>
                                                        )}
                                                    />
                                                    <FormField
                                                        control={editPartie.control}
                                                        name="descriptionPartie"
                                                        render={({ field }) => (
                                                            <FormItem>
                                                                <FormLabel>description Partie</FormLabel>
                                                                <FormControl>
                                                                    <Textarea
                                                                        placeholder="Create a description for the Partie"
                                                                        className="resize-none w-[90%]"
                                                                        {...field}
                                                                    />
                                                                </FormControl>
                                                                <FormMessage />
                                                            </FormItem>
                                                        )}
                                                    />
                                                </div>
                                                <div className="w-1/2 space-y-2">
                                                    <FormField
                                                        control={editPartie.control}
                                                        name="titlePartie"
                                                        render={({ field }) => (
                                                            <FormItem className="w-[90%]">
                                                                <FormLabel className="font-medium text-[#333333]">Title Partie</FormLabel>
                                                                <FormControl>
                                                                    <Input placeholder="Title Partie" {...field} />
                                                                </FormControl>
                                                                <FormMessage />
                                                            </FormItem>
                                                        )}
                                                    />
                                                    <FormField
                                                        control={editPartie.control}
                                                        name="imagePartie"
                                                        render={({ field }) => (
                                                            <FormItem className="w-[90%]">
                                                                <FormLabel className="font-medium text-[#333333]">Image Partie</FormLabel>
                                                                <FormControl>
                                                                    <Input placeholder="Image Partie" type="file" {...field} />
                                                                </FormControl>
                                                                <FormMessage />
                                                            </FormItem>
                                                        )}
                                                    />
                                                    <FormField
                                                        control={editPartie.control}
                                                        name="datePartie"
                                                        render={({ field }) => (
                                                            <FormItem className="flex flex-col">
                                                                <FormLabel className="mt-2">Date of Partie</FormLabel>
                                                                <Popover >
                                                                    <PopoverTrigger asChild>
                                                                        <FormControl>
                                                                            <Button
                                                                                variant={"outline"}
                                                                                className={cn(
                                                                                    "pl-3 text-left font-normal w-[90%]",
                                                                                    !field.value && "text-muted-foreground"
                                                                                )}
                                                                            >
                                                                                {field.value ? (
                                                                                    format(field.value, "PPP")
                                                                                ) : (
                                                                                    <span>Pick a date</span>
                                                                                )}
                                                                                <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                                                            </Button>
                                                                        </FormControl>
                                                                    </PopoverTrigger>
                                                                    <PopoverContent className="w-auto p-0" align="start">
                                                                        <Calendar
                                                                            mode="single"
                                                                            selected={field.value}
                                                                            onSelect={field.onChange}
                                                                            disabled={(date) =>
                                                                                date < new Date()
                                                                            }
                                                                            captionLayout="dropdown"
                                                                        />
                                                                    </PopoverContent>
                                                                </Popover>
                                                                <FormMessage />
                                                            </FormItem>
                                                        )}
                                                    />
                                                </div>
                                            </div>
                                            <Button type="submit" className="w-[30%] bg-[#538083] font-semibold">Update Partie</Button>
                                        </form>
                                    </Form>
                                </div>
                            </DialogContent>
                        </Dialog>

                        {/* More Info Tournament  */}
                        <Dialog open={ShowMoreInfoDialog} onOpenChange={setShowMoreInfoDialog}>
                            <DialogContent className='flex flex-col sm:max-w-[50%]'>
                                <DialogHeader className='text-xl font-semibold'>
                                    More Information _ {currentRowData.name}
                                </DialogHeader>
                                <div className="flex justify-between items-center">
                                    <div className="w-1/3">
                                        <img src={partiePic} alt="" className="w-[200px] h-[250px] rounded bg-cover" />
                                    </div>
                                    <div className="w-2/3 flex">
                                        <div className="w-1/3 flex flex-col space-y-2">
                                            <label className="font-semibold">Name Partie :</label>
                                            <label className="font-semibold">Title Partie :</label>
                                            <label className="font-semibold">Date :</label>
                                            <label className="font-semibold">Description :</label>
                                        </div>
                                        <div className="w-2/3 flex flex-col space-y-2">
                                            <label>Partie 1</label>
                                            <label>Title</label>
                                            <label>06 - 08 - 2025</label>
                                            <label>Description</label>
                                        </div>
                                    </div>
                                </div>
                            </DialogContent>
                        </Dialog>
                    </>
                )
            },
        },
    ];



    useEffect(() => {
        const fetchData = async () => {
            const fetchedData = await getData();
            setData(fetchedData);
        };
        fetchData();
    }, []);

    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        onSortingChange: setSorting,
        getSortedRowModel: getSortedRowModel(),
        onColumnFiltersChange: setColumnFilters,
        getFilteredRowModel: getFilteredRowModel(),
        onColumnVisibilityChange: setColumnVisibility,
        onRowSelectionChange: setRowSelection,
        state: {
            sorting,
            columnFilters,
            columnVisibility,
            rowSelection
        },
    });

    return (
        <>
            <hr className="mt-4 h-2" />
            <div className="mt-10">
                <h1 className="text-lg font-medium text-[#333333]">List All Parties</h1>
                <div>
                    <div className="flex">
                        <div className="flex items-center py-4">
                            <Input
                                placeholder="Filter by Partie..."
                                value={table.getColumn("name")?.getFilterValue() ?? ""}
                                onChange={(event) =>
                                    table.getColumn("name")?.setFilterValue(event.target.value)
                                }
                                className="w-[400px]"
                            />
                        </div>
                    </div>

                    <Table>
                        <TableHeader>
                            {table.getHeaderGroups().map((headerGroup) => (
                                <TableRow key={headerGroup.id}>
                                    {headerGroup.headers.map((header) => (
                                        <TableHead key={header.id}>
                                            {header.isPlaceholder
                                                ? null
                                                : flexRender(
                                                    header.column.columnDef.header,
                                                    header.getContext()
                                                )}
                                        </TableHead>
                                    ))}
                                </TableRow>
                            ))}
                        </TableHeader>
                        <TableBody>
                            {table.getRowModel().rows?.length ? (
                                table.getRowModel().rows.map((row) => (
                                    <TableRow
                                        key={row.id}
                                        data-state={row.getIsSelected() && "selected"}
                                    >
                                        {row.getVisibleCells().map((cell) => (
                                            <TableCell key={cell.id} className='h-[20px]'>
                                                {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                            </TableCell>
                                        ))}
                                    </TableRow>
                                ))
                            ) : (
                                <TableRow>
                                    <TableCell colSpan={columns.length} className="h-18 text-center">
                                        No results.
                                    </TableCell>
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                    <div className="flex justify-between items-center mb-4 mx-6">
                        <div className="flex text-sm text-muted-foreground">
                            {table.getFilteredSelectedRowModel().rows.length} of{" "}
                            {table.getFilteredRowModel().rows.length} row(s) selected.
                        </div>
                        <div className="flex">
                            <p className="mr-4 font-semibold">Lignes par page :</p>
                            <select
                                value={table.getState().pagination.pageSize}
                                onChange={e => {
                                    table.setPageSize(Number(e.target.value))
                                }}
                                className='border-[#B6B6B6] bg-white rounded-xl w-14 h-8 px-1 border-2'

                            >
                                {[10, 20, 30, 40, 50].map(pageSize => (
                                    <option key={pageSize} value={pageSize} className="rounded-xl">
                                        {pageSize}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="flex items-center justify-end space-x-2 py-4">
                            <Button
                                variant="outline"
                                className="border-[#B6B6B6] bg-white rounded-xl"
                                size="sm"
                                onClick={() => table.firstPage()}
                                disabled={!table.getCanPreviousPage()} // Correct attribute
                            >
                                <ChevronsLeft />
                            </Button>
                            <Button
                                variant="outline"
                                className="border-[#B6B6B6] bg-white rounded-xl"
                                size="sm"
                                onClick={() => table.previousPage()}
                                disabled={!table.getCanPreviousPage()} // Correct attribute
                            >
                                <ChevronLeft />
                            </Button>
                            <Button
                                variant="outline"
                                className="border-[#B6B6B6] bg-white rounded-xl"
                                size="sm"
                                onClick={() => table.nextPage()}
                                disabled={!table.getCanNextPage()} // Correct attribute
                            >
                                <ChevronRight />
                            </Button>
                            <Button
                                variant="outline"
                                className="border-[#B6B6B6] bg-white rounded-xl"
                                size="sm"
                                onClick={() => table.lastPage()}
                                disabled={!table.getCanNextPage()} // Correct attribute
                            >
                                <ChevronsRight />
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PartiesTable;