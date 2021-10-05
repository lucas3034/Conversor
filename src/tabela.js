import React, { useMemo } from "react";
import { useTable } from 'react-table';
import { COLUMNS } from './columns'
import { months } from "./jurosComp";

export const BasicTable = () => {

    const colunas = useMemo(() => COLUMNS, [])
    const meses = useMemo(() => months, [])

    const tableInstance = useTable({
        colunas,
        meses
    })
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = tableInstance

    return (
        <table {...getTableProps()}>
            <thead>
                {headerGroups.map((headerGroup) => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map((column) => (
                            <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                        ))}
                    </tr>
                ))}
            </thead>
            <tbody {...getTableBodyProps()}>
                <tr>
                    <td></td>
                </tr>
            </tbody>
        </table>
    )
}