import { useState, useEffect } from "react";
import { flexRender, getCoreRowModel, useReactTable, getPaginationRowModel, getSortedRowModel, getFilteredRowModel } from "@tanstack/react-table";
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
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input"
//Icons
import { 
    MoreHorizontal, 
    ArrowUpDown, 
    ChevronLeft,
    ChevronRight,
    ChevronsLeft,
    ChevronsRight
 } from "lucide-react"

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


const PartiesTable = () => {


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
                const payment = row.original
                return (
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="h-8 w-8 p-0">
                                <span className="sr-only">Open menu</span>
                                <MoreHorizontal className="h-3 w-3" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                            <DropdownMenuItem
                                onClick={() => navigator.clipboard.writeText(payment.id)}
                            >
                                Copy payment ID
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>Update Tournament</DropdownMenuItem>
                            <DropdownMenuItem>View Tournament Details</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                )
            },
        },
    ];

    
    const [data, setData] = useState([]);
    const [sorting, setSorting] = useState([]);
    const [columnFilters, setColumnFilters] = useState([])
    const [columnVisibility, setColumnVisibility] = useState({})
    const [rowSelection, setRowSelection] = useState({})


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
        <hr className="mt-4 h-2"/>
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