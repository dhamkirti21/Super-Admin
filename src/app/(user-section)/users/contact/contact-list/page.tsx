"use client"
import CustomBox from '@/components/Shared/CustomComponents/CustomBox'
import CustomHeader from '@/components/Shared/CustomComponents/CustomHeader'
import CustomSearchButton from '@/components/styled/CustomSearchButton'
import { Table } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import { BiSearch } from 'react-icons/bi'
import TableRowSub from './TableRowSub'

const Page = () => {

    const titles = [
        "SL",
        "Name",
        "Email",
        "Subject",
        "Seen/Unseen",
        "Action"
    ]

    const RowData: any = [
        // {
        //     sl: 1,
        //     email: "dk002@gmai.com",
        //     created_at: "2021-10-10 10:10:10"
        // }
    ]

    return (
        <>
            <div className="p-4">
                <CustomHeader
                    title="All Message List"
                    count={0}
                />
            </div>
            <CustomBox>
                <div className="flex flex-row justify-end">
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
                                padding: "7.5px",
                                border: "1px solid #559da2",
                            }}
                        />

                        <CustomSearchButton style={{
                            backgroundColor: "#69c2c8",
                        }}>
                            <BiSearch size={16} color={"white"} />
                        </CustomSearchButton>
                    </div>
                </div>
                <table style={{
                    width: "104.25%",
                    marginLeft: "-23px",
                }}> <tbody>
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
                            RowData.length !== 0 ? (
                                RowData.map((data: any, index: number) => {
                                    return (
                                        <TableRowSub
                                            key={index}
                                            sl={data.sl}
                                            email={data.email}
                                            created_at={data.created_at}
                                        />
                                    );
                                })
                            ) : null
                        }
                    </tbody>
                </table>
                {
                    RowData.length === 0 && (
                        <div style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            height: "200px",
                            gap: "10px",
                        }}>
                            <Image
                                src="/svg/sorry.svg"
                                alt="No Data"
                                width={100}
                                height={100}
                            />
                            <p style={{
                                fontSize: "14px",
                                color: "#677788"
                            }}>No Data Found</p>
                        </div>
                    )
                }
            </CustomBox>
        </>
    )
}


export default Page