"use client"
import Header from '@/components/Dashboard/header/Header'
import SideBar from '@/components/Shared/sidebars/SideBar'
import { Box, styled } from '@mui/material'
import styles from "./transaction.module.css"
import { Typography } from '@mui/material'
import React from 'react'
import Image from 'next/image'
import { BiSearch } from 'react-icons/bi'
import { BsEye, BsEyeFill } from 'react-icons/bs'
import TableRow from './TableRow'
import CustomBox from '@/components/Shared/CustomComponents/CustomBox'

const WithDrawList = () => {

    const noOfTrnasactions = 6;



    const titles = [
        "SL",
        "Amount",
        "Store",
        "Request Time",
        "Status",
        "Action"

    ]

    const Wishlist_Data = [
        {
            sl: 1,
            amount: "$736.36",
            store: "Click & Collect",
            request_time: "27 Nov 2023 01:46:pm",
            status: "Approved"
        }
    ]


    const CustomSearchButton = styled('button')({
        display: 'flex',
        backgroundColor: '#559da2',
        padding: '12px',
        justifyContent: 'center',
        borderRadius: '0 5px 5px 0',
        border: 'none',
        alignItems: 'center',
        '&:hover': {
            backgroundColor: '#20a7af',
            cursor: "pointer"
        },
    });


    return (
        <>
            <div style={{
                display: "flex",
                gap: "10px",
                alignItems: "center",
                padding: "10px"
            }}>
                <Image
                    src="/images/wallet.png"
                    alt="withdraw"
                    width={25}
                    height={25}
                />
                <Typography variant="p" fontSize={"20px"} fontWeight={"600"}>Store Withdraw Transaction</Typography>
            </div>
            <CustomBox>
                <div
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        gap: "5px",
                        alignItems: "center",
                        justifyContent: "space-between",
                    }}
                >
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            gap: "6px",
                        }}
                    >
                        <Typography variant="p" fontSize={"16px"} fontWeight={"600"}>Transaction History
                        </Typography>
                        <Typography
                            variant="p"
                            fontSize={"12px"}
                            fontWeight={"600"}
                            padding={"5px"}
                            borderRadius={"50%"}
                            backgroundColor={"#F5F5F5"}
                        >
                            {noOfTrnasactions}
                        </Typography>
                    </div>
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            gap: "10px",
                            alignItems: "center",
                        }}
                    >
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
                                placeholder='Ex : search store name'
                                style={{
                                    borderRadius: "5px 0 0 5px",
                                    padding: "12px",
                                    border: "1px solid #559da2",
                                }}
                            />

                            <CustomSearchButton >
                                <BiSearch size={16} color={"white"} />
                            </CustomSearchButton>
                        </div>
                        <select
                            style={{
                                height: "40px",
                                paddingLeft: "10px",
                                width: "120px",
                                borderRadius: "5px",
                                border: "1px solid #559da2"
                            }}>
                            <option value="All">All</option>
                            <option value="Approved">Approved</option>
                            <option value="Denied">Denied</option>
                            <option value="Pending">Pending</option>
                        </select>
                    </div>
                </div>
                <table style={{
                    width: "104.25%",
                    marginLeft: "-23px",
                }}>
                    <tbody>
                        <tr style={{
                            backgroundColor: "#f8fafd",
                        }}>
                            {titles.map((title, index) => {
                                return (
                                    <th key={index} style={{
                                        fontSize: "12px",
                                        padding: "16px",
                                        color: "#334257",
                                        textAlign: "left",
                                    }}>{title}</th>
                                )
                            })}
                        </tr>
                        {
                            Wishlist_Data.map((data, index) => {
                                return (
                                    <TableRow
                                        key={index}
                                        sl={data.sl}
                                        amount={data.amount}
                                        request_time={data.request_time}
                                        store={data.store}
                                        status={data.status}
                                    />
                                )
                            })
                        }
                    </tbody>
                </table>
            </CustomBox>
        </>
    )
}

export default WithDrawList