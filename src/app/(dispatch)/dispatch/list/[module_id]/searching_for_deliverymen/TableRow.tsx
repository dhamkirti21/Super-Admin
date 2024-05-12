import { ActionList, CustomTableRow } from '@/components/Shared/CustomComponents/CustomTable'
import React from 'react'

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
                    <p>{props.totalAmount.pending ? "Unpaid" : "Paid"}</p>
                </CustomTableRow>
                <CustomTableRow>
                    <p>{props.orderStatus.status}</p>
                    <p>{props.orderStatus.delivery_type}</p>
                </CustomTableRow>
                <CustomTableRow>
                    {ActionList(props.action)}
                </CustomTableRow>
            </tr>
        </>
    )
}

export default TableRow