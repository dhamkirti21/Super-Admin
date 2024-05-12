import { ActionList, CustomTableRow } from '@/components/Shared/CustomComponents/CustomTable'
import { Typography } from '@mui/material'
import React from 'react'

const PaidUnpaid = (props: any) => {
    if (props.pending) {
        return (
            <p className='text-red-400'>Unpaid</p>
        )
    } else {
        <p className='text-green-500'>Paid</p>
    }

}

const Status = (status: string) => {
    return (
        <Typography
            variant="p"
            fontSize={"12px"}
            fontWeight={"600"}
            padding={"5px"}
            borderRadius={"5px"}
            border={status === "Denied" ? "1px solid #f08aa7" : "1px solid #58f4fd"}
            color={status === "Denied" ? "#ed4c78" : "#2cbdc5"}
            backgroundColor={status === "Denied" ? "#f4e6ed" : "#dcf7fb"}
        >
            {status}
        </Typography >
    )
}


const TableRow = (props: any) => {
    return (
        <>
            <tr>
                <CustomTableRow>
                    {props.sl}
                </CustomTableRow>
                <CustomTableRow>
                    {props.orderId}
                </CustomTableRow>
                <CustomTableRow>
                    {props.orderDate}
                </CustomTableRow>
                <CustomTableRow>
                    <p>{props.customer.name}</p>
                    <p>{props.customer.phone}</p>
                </CustomTableRow>
                <CustomTableRow>
                    {props.store}
                </CustomTableRow>
                <CustomTableRow>
                    <p>{props.totalAmount.amount}</p>
                    {PaidUnpaid(props.totalAmount)}
                </CustomTableRow>
                <CustomTableRow>
                    {Status(props.orderStatus.status)}
                    <p className='mt-2'>{props.orderStatus.delivery_type}</p>
                </CustomTableRow>
                <CustomTableRow>
                    {ActionList(props.action)}
                </CustomTableRow>
            </tr>
        </>
    )
}

export default TableRow