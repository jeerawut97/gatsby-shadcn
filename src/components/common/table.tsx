import * as React from "react"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"


const cash_book = [
    {
        uuid: 1,
        date: "2024-05-06",
        method: "Expense",
        amount: 250.00,
        title: "Buy Ticket",
    },
    {
        uuid: 2,
        date: "2024-05-07",
        method: "Income",
        amount: 10000.00,
        title: "Sell Ticket",
    }
]

const TableCustom: React.FC = () => {
    return (
        <Table>
            <TableHeader>
            <TableRow>
                <TableHead className="w-[120px] text-center">Date</TableHead>
                <TableHead className="w-[100px] text-center">Method</TableHead>
                <TableHead className="text-center">List</TableHead>
                <TableHead className="text-right">Amount</TableHead>
            </TableRow>
            </TableHeader>
            <TableBody>
            {cash_book.map((cash) => (
                <TableRow key={cash.uuid}>
                <TableCell className="font-medium text-center">{cash.date}</TableCell>
                <TableCell className="text-center">{cash.method}</TableCell>
                <TableCell className="text-center">{cash.title}</TableCell>
                <TableCell className="text-right">{cash.amount}</TableCell>
                </TableRow>
            ))}
            </TableBody>
        </Table>
    )
}

export default TableCustom;