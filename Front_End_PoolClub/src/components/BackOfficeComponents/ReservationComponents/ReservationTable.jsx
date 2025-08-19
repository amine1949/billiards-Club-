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
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input"
//Icons
import {
    ArrowUpDown,
    ChevronLeft,
    ChevronRight,
    ChevronsLeft,
    ChevronsRight,
    Check,
    Trash2,
    CircleX
} from "lucide-react"

//data
const getData = async () => {
    // Fetch data from your API here
    return [
        {
            id: "728ed52f",
            name: "Salah Oumouch",
            telephone: "06 32 43 54 23",
            table: "table 2",
            status: "reserved",
            date: "2025 - 09 - 31",
        },
        {
            id: "728ed52f",
            name: "Salah Oumouch",
            telephone: "06 32 43 54 23",
            table: "table 2",
            status: "reserved",
            date: "2025 - 09 - 31",
        },
        {
            id: "728ed52f",
            name: "Salah Oumouch",
            telephone: "06 32 43 54 23",
            table: "table 2",
            status: "reserved",
            date: "2025 - 09 - 31",
        },
    ];
};

const ReservationTable = () => {

    const [data, setData] = useState([]);
    const [sorting, setSorting] = useState([]);
    const [columnFilters, setColumnFilters] = useState([])
    const [columnVisibility, setColumnVisibility] = useState({})
    const [rowSelection, setRowSelection] = useState({})


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
                        Full Name
                        <ArrowUpDown className="ml-2 h-4 w-4" />
                    </Button>
                )
            },
        },
        {
            accessorKey: "telephone",
            header: "Telephone",
        },
        {
            accessorKey: "table",
            header: "Table",
        },
        {
            accessorKey: "status",
            header: "status",
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
            cell: () => {

                return (
                    <>
                        <div className="space-x-2">
                            <Button variant="ghost" className="p-0">
                                <Check className="text-green-700" size={20} />
                            </Button >
                            <Button variant="ghost" className="p-0">
                                <CircleX className="text-red-500" size={20} />
                            </Button >
                            <Button variant="ghost" className="p-0">
                                <Trash2 className="text-red-900" size={20} />
                            </Button >
                        </div>

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
                <h1 className="text-lg font-medium text-[#333333]">List All Reservation</h1>
                <div>
                    <div className="flex">
                        <div className="flex items-center py-4">
                            <Input
                                placeholder="Filter by Name..."
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

export default ReservationTable;