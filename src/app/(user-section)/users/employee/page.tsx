"use client"
import CustomBox from '@/components/Shared/CustomComponents/CustomBox'
import CustomHeader from '@/components/Shared/CustomComponents/CustomHeader'
import CustomLabelInput from '@/components/Shared/CustomLabelInput'
import CustomButton from '@/components/styled/CustomButtonWithProps'
import CustomSearchButton from '@/components/styled/CustomSearchButton'
import { Input, MenuItem, Select, TableRow, TextField } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import { BiSearch } from 'react-icons/bi'
import TableRowList from './TableRowBonus'

const Page = () => {

    const titles = [
        "SL",
        "Name",
        "Email",
        "Phone",
        "Role",
        "Action"
    ]

    const RowData = [
        {
            sl: 1,
            name: "Md. Shakil Ahmed",
            email: "jdsodi002@gmail.com",
            phone: "01712345678",
            role: "Admin",
            action: ["Edit", "Delete"]
        }
    ]
    return (
        <>
            <div className="p-2">
                <CustomHeader
                    title="Employee List"
                    icon={
                        <Image
                            src="/images/role.png"
                            alt="Wallet Bonus Setup"
                            width={20}
                            height={20}
                        />
                    }
                />
            </div>
            <CustomBox className='mt-2'>
                <div className="flex flex-row justify-between">
                    <CustomHeader
                        title="Employee Table"
                        count={6}
                    />
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
                            className='placeholder:font-small'
                            style={{
                                borderRadius: "5px 0 0 5px",
                                padding: "7.5px",
                                border: "1px solid #559da2",
                            }}
                        />

                        <CustomSearchButton style={{
                            backgroundColor: "#8a96a7",
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
                            width: "100%",
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
                            RowData.map((data, index) => {
                                return (
                                    <TableRowList
                                        key={index}
                                        sl={data.sl}
                                        name={data.name}
                                        email={data.email}
                                        phone={data.phone}
                                        role={data.role}
                                        action={data.action}
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

export default Page