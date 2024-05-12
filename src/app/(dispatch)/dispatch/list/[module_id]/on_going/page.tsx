"use client"
import React from 'react'
import CustomBox from '@/components/Shared/CustomComponents/CustomBox'
import PageHeader from '@/components/Shared/PageHeader'
import CustomSearchButton from '@/components/styled/CustomSearchButton'
import { TextField, Typography } from '@mui/material'
import { BiSearch } from 'react-icons/bi'
import CustomTable from '@/components/Shared/CustomComponents/CustomTable'
import TableRow from './TableRow'

const Page = ({ params }: { params: { module_id: string } }) => {

    const { module_id } = params
    const totalDeliveryMan = 12;
    const titles = [
        "Sl",
        "Order Id",
        "Order Date",
        "Customer Information",
        "Store",
        "Total Amount",
        "Order Status",
        "Action"
    ]

    const row = [
        {
            sl: 1,
            orderId: "101",
            orderDate: "2021-10-10",
            customer: {
                name: "John Doe",
                phone: "01812345678",
            },
            store: "Store 1",
            totalAmount: {
                amount: 1000,
                pending: true
            },
            orderStatus: {
                status: "Pending",
                delivery_type: "Home Delivery"
            },
            action: ["View", "Generate Invoice"]
        }
    ]


    const Row = ({ row }: any) => {
        return (
            <React.Fragment>
                {row.map((item: any, index: number) => {
                    return <TableRow key={index} {...item} />;
                })}
            </React.Fragment>
        );
    };


    return (
        <>
            <div className="flex flex-row gap-2 items-center">
                <PageHeader
                    title='On Going Orders'
                    path="/images/items.png"
                    iconSize={30}
                    titleSize={24}
                />
                <Typography
                    variant="body2"
                    fontSize="12px"
                    fontWeight={550}
                    className='p-2 bg-slate-300 rounded-lg'
                >
                    {totalDeliveryMan}
                </Typography>
            </div>
            <CustomBox>
                <div className="flex flex-row justify-end">
                    <div className='flex flex-row'>
                        <TextField
                            style={{ width: "220px" }}
                            placeholder="Ex 10110"
                            variant="outlined"
                            size="small"
                        />
                        <CustomSearchButton>
                            <BiSearch size={15} color={"white"} />
                        </CustomSearchButton>
                    </div>
                </div>
                <CustomTable
                    titles={titles}
                    body={<Row row={row} />}
                />
            </CustomBox>
        </>
    )
}

export default Page
