"use client"
import CustomBox from '@/components/Shared/CustomComponents/CustomBox'
import CustomHeader from '@/components/Shared/CustomComponents/CustomHeader'
import TableRowDeliveryManReview from '@/components/Users/reviews/TableRowDeliveryManReview'
import CustomSearchButton from '@/components/styled/CustomSearchButton'
import { Autocomplete, TextField } from '@mui/material'
import { link } from 'fs'
import Image from 'next/image'
import React from 'react'
import { BiSearch } from 'react-icons/bi'

const page = () => {

    const titles = [
        "SL",
        "Order ID",
        "Delivery Man",
        "Customer",
        "Rating",
        "Review",
        "Action"
    ]

    const TableData = [
        {
            sl: 1,
            orderId: "1234",
            name: "John Doe",
            link: "#",
            contactInfo: "8991898198",
            imagePath: "/images/profile.png",
            star: 4,
            customer: "John Doe",
            review: "Good",
            action: ["View"],
        },
        {
            sl: 2,
            orderId: "1234",
            name: "John Doe",
            link: "#",
            contactInfo: "8991898198",
            imagePath: "/images/profile.png",
            star: 4,
            customer: "John Doe",
            review: "Good",
            action: ["View"],
        },
    ]

    return (
        <>
            <CustomHeader
                title="Deliveryman Reviews"
                icon={
                    <Image
                        src="/images/delivery-man.png"
                        alt="Deliveryman Reviews"
                        width={20}
                        height={20}
                    />
                }
                count={1}
            />
            <CustomBox>
                <div style={{
                    display: "flex",
                    flexDirection: "row",
                    gap: "5px",
                    justifyContent: "flex-end",
                    alignItems: "center",
                }}>
                    <Autocomplete
                        disablePortal
                        options={["Delhi"]}
                        size='small'
                        renderInput={(params) =>
                            <TextField {...params} label="All DeliveryMan" style={{
                                width: "200px",
                                fontSize: "12px"
                            }} />
                        } />
                    <Autocomplete
                        disablePortal
                        options={["Latest Rating"]}
                        size='small'
                        renderInput={(params) =>
                            <TextField {...params} label="Latest Rating" style={{
                                width: "200px",
                            }} />
                        } />

                    <div style={{
                        display: "flex",
                        flexDirection: "row",
                        gap: "0px",
                        alignItems: "center",
                    }}>

                        <input
                            type="text"
                            width="40px"
                            height={"10px"}
                            placeholder='Ex : Search by Name, Phone, Email, Zone, Status'
                            style={{
                                borderRadius: "5px 0 0 5px",
                                padding: "8px",
                                fontSize: "14px",
                                border: "1px solid #559da2",
                                margin: "0",
                            }}
                        />

                        <CustomSearchButton style={{ margin: "0" }}>
                            <BiSearch size={14} color={"white"} />
                        </CustomSearchButton>
                    </div>
                </div>
                <table>
                    <tr style={{
                        backgroundColor: "#f5f5f5",
                    }}>
                        {

                            titles.map((title, index) => {
                                return (
                                    <th key={index} style={{
                                        fontSize: "12px",
                                        padding: "16px",
                                        color: "#334257",
                                        textAlign: "left",
                                        backgroundColor: "#f5f5f5",
                                    }}>{title}</th>

                                )
                            })
                        }
                    </tr>
                    {
                        TableData.map((data, index) => {
                            return (
                                <TableRowDeliveryManReview
                                    key={index}
                                    sl={data.sl}
                                    orderId={data.orderId}
                                    name={data.name}
                                    link={data.link}
                                    contactInfo={data.contactInfo}
                                    imagePath={data.imagePath}
                                    star={data.star}
                                    customer={data.customer}
                                    review={data.review}
                                    action={data.action}
                                />
                            )
                        })
                    }
                </table>
            </CustomBox >
        </>
    )
}

export default page