import { Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react'

interface TableRowReportProps {
    sl: number,
    transaction_id: string,
    customer_info: string,
    credit: number,
    debit: number,
    bonus: number,
    transaction_type: string,
    reference: string,
    created_at: string,
}




const TableRowReport = (props: TableRowReportProps) => {
    return (
        <tr style={{
            textAlign: "left",
            marginTop: "10px",
            padding: "20px"
        }}>
            <td style={{
                paddingLeft: "20px",
                paddingTop: "20px",
                fontSize: "14px",
                color: "#677788"
            }}>
                {props.sl}
            </td>
            <td style={{
                paddingLeft: "20px",
                paddingTop: "20px",
                fontSize: "14px",
                color: "#677788"
            }}>
                {props.transaction_id}
            </td>
            <td style={{
                paddingLeft: "20px",
                paddingTop: "20px",
                fontSize: "14px",
                color: "#677788"
            }}>
                {props.customer_info}
            </td>
            <td style={{
                paddingLeft: "20px",
                paddingTop: "20px",
                fontSize: "14px",
                color: "#677788"
            }}>
                {props.credit}
            </td>
            <td style={{
                paddingLeft: "20px",
                paddingTop: "20px",
                fontSize: "14px",
                color: "#677788"
            }}>
                {props.debit}
            </td>
            <td style={{
                paddingLeft: "20px",
                paddingTop: "20px",
                fontSize: "14px",
                color: "#677788"
            }}>
                {props.transaction_type}
            </td>
            <td style={{
                paddingLeft: "20px",
                paddingTop: "20px",
                fontSize: "14px",
                color: "#677788"
            }}>
                {props.reference}
            </td>
            <td style={{
                paddingLeft: "20px",
                paddingTop: "20px",
                fontSize: "14px",
                color: "#677788"
            }}>
                {props.created_at}
            </td>
        </tr>
    )
}

export default TableRowReport;