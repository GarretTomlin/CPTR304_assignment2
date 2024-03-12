"use client"

import useSession from '@/hooks/useSession';
import Navbar from '@/layout/navbar';



import * as React from "react"
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table"
import { ArrowUpDown, ChevronDown, MoreHorizontal } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import Footer from '@/layout/footer';


const data: CourseEnrollment[] = [
    {
      id: "m5gr84i9",
      courseCode: "CS101",
      status: "enrolled",
      instructor: "Dr. Smith",
      grade: "A",
    },
    {
      id: "3u1reuv4",
      courseCode: "MATH202",
      status: "enrolled",
      instructor: "Prof. Johnson",
      grade: "B+",
    },
    {
      id: "derv1ws0",
      courseCode: "PHYS101",
      status: "pending",
      instructor: "Dr. Brown",
      grade: "-",
    },
    {
      id: "5kma53ae",
      courseCode: "ENG301",
      status: "enrolled",
      instructor: "Prof. Davis",
      grade: "A-",
    },
    {
      id: "bhqecj4p",
      courseCode: "CHEM201",
      status: "failed",
      instructor: "Dr. Miller",
      grade: "F",
    },
  ];
  
  export type CourseEnrollment = {
    id: string;
    courseCode: string;
    status: "pending" | "enrolled" | "failed";
    instructor: string;
    grade: string;
  };
  
  export const columns: ColumnDef<CourseEnrollment>[] = [
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
      accessorKey: "status",
      header:  () => <div className="text-white">Status</div>,
      cell: ({ row }) => (
        <div className="capitalize  text-white">{row.getValue("status")}</div>
      ),
    },
    {
      accessorKey: "courseCode",
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            <p className="text-white">Course Code</p>
            <ArrowUpDown className="ml-2 h-4 w-4  text-white" />
          </Button>
        );
      },
      cell: ({ row }) => <div className="lowercase  text-white">{row.getValue("courseCode")}</div>,
    },
    {
      accessorKey: "instructor",
      header: () => <div className="text-right text-white">Instructor</div>,
      cell: ({ row }) => <div className="text-right font-medium text-white">{row.getValue("instructor")}</div>,
    },
    {
      accessorKey: "grade",
      header: () => <div className="text-right  text-white">Grade</div>,
      cell: ({ row }) => <div className="text-right font-medium  text-white">{row.getValue("grade")}</div>,
    },
    {
      id: "actions",
      enableHiding: false,
      cell: ({ row }) => {
        const course = row.original;
  
        return (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Open menu</span>
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Actions</DropdownMenuLabel>
              <DropdownMenuItem
                onClick={() => navigator.clipboard.writeText(course.id)}
              >
                Copy enrollment ID
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>View course details</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        );
      },
    },
  ];
  

export function Dashboard() {
  const [sorting, setSorting] = React.useState<SortingState>([])
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  )
  const sessionData = useSession();
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({})
  const [rowSelection, setRowSelection] = React.useState({})

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  })

  return (
    <><Navbar /><div className="w-full mt-28">
          <p className='text-xl font-semibold text-white'>Welcome {sessionData?.username}</p>
          <div className="flex items-center py-4  text-white">
              <Input
                  placeholder="Filter emails..."
                  value={(table.getColumn("email")?.getFilterValue() as string) ?? ""}
                  onChange={(event) => table.getColumn("email")?.setFilterValue(event.target.value)}
                  className="max-w-sm " />
              <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                      <Button variant="outline" className="ml-auto">
                          <p className='text-black'>Column</p> <ChevronDown className="ml-2 h-4 w-4 " />
                      </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                      {table
                          .getAllColumns()
                          .filter((column) => column.getCanHide())
                          .map((column) => {
                              return (
                                  <DropdownMenuCheckboxItem
                                      key={column.id}
                                      className="capitalize"
                                      checked={column.getIsVisible()}
                                      onCheckedChange={(value) => column.toggleVisibility(!!value)}
                                  >
                                      {column.id}
                                  </DropdownMenuCheckboxItem>
                              );
                          })}
                  </DropdownMenuContent>
              </DropdownMenu>
          </div>
          <div className="rounded-md border">
              <Table className='bg-lime-700'>
                  <TableHeader>
                      {table.getHeaderGroups().map((headerGroup) => (
                          <TableRow key={headerGroup.id}>
                              {headerGroup.headers.map((header) => {
                                  return (
                                      <TableHead key={header.id}>
                                          {header.isPlaceholder
                                              ? null
                                              : flexRender(
                                                  header.column.columnDef.header,
                                                  header.getContext()
                                              )}
                                      </TableHead>
                                  );
                              })}
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
                                      <TableCell key={cell.id}>
                                          {flexRender(
                                              cell.column.columnDef.cell,
                                              cell.getContext()
                                          )}
                                      </TableCell>
                                  ))}
                              </TableRow>
                          ))
                      ) : (
                          <TableRow>
                              <TableCell
                                  colSpan={columns.length}
                                  className="h-24 text-center"
                              >
                                  No results.
                              </TableCell>
                          </TableRow>
                      )}
                  </TableBody>
              </Table>
          </div>
          <div className="flex items-center justify-end space-x-2 py-4">
              <div className="flex-1 text-sm text-muted-foreground">
                  {table.getFilteredSelectedRowModel().rows.length} of{" "}
                  {table.getFilteredRowModel().rows.length} row(s) selected.
              </div>
              <div className="space-x-2">
                  <Button
                      variant="outline"
                      size="sm"
                      onClick={() => table.previousPage()}
                      disabled={!table.getCanPreviousPage()}
                  >
                      Previous
                  </Button>
                  <Button
                      variant="outline"
                      size="sm"
                      onClick={() => table.nextPage()}
                      disabled={!table.getCanNextPage()}
                  >
                      Next
                  </Button>
              </div>
          </div>
      </div>
      <Footer />
      </>
  )
}
export default Dashboard