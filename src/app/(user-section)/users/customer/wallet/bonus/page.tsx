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
import TableRowBonus from './TableRowBonus'

const page = () => {

    const titles = [
        "SL",
        "Bonus Title",
        "Bonus Info",
        "Bonus Amount",
        "Started On",
        "Expire On",
        "Status",
        "Action"
    ]

    const RowData = [
        {
            sl: 1,
            bonus_title: "EID Dhamaka",
            bonus_info: "EID Dhamaka",
            bonus_amount: "100",
            started_on: "2021-08-12",
            expire_on: "2021-08-12",
            status: true,
            action: ["Edit", "Delete"]
        }
    ]
    return (
        <>
            <CustomHeader
                title="Wallet Bonus Setup"
                icon={
                    <Image
                        src="/images/add.png"
                        alt="Wallet Bonus Setup"
                        width={20}
                        height={20}
                    />
                }
            />
            <CustomBox>
                <div className="flex flex-col">
                    <div className="flex flex-row gap-4">
                        <CustomLabelInput
                            label="Bonus Title (Default)"
                            input={
                                <TextField
                                    variant="outlined"
                                    size="small"
                                    fullWidth
                                    style={{ width: "450px" }}
                                    placeholder='Ex EID Dhamaka'
                                    required
                                />
                            }
                        />
                        <CustomLabelInput
                            label="Short Description (Default)"
                            input={
                                <TextField
                                    variant="outlined"
                                    size="small"
                                    fullWidth
                                    placeholder='Ex EID Dhamaka'
                                    style={{ width: "450px" }}
                                    required
                                />
                            }
                        />
                    </div>
                    <div className="flex flex-row gap-2">
                        <CustomLabelInput
                            label="Bonus Type"
                            input={
                                <Select
                                    variant="outlined"
                                    size="small"
                                    fullWidth
                                    style={{ width: "300px" }}
                                    placeholder='Ex EID Dhamaka'
                                    required
                                >
                                    <MenuItem value={"Percentage"}>Percentage</MenuItem>
                                    <MenuItem value={"Amount"}>Amount($)</MenuItem>
                                </Select>
                            }
                        />
                        <CustomLabelInput
                            label="Bonus Amount ($)"
                            input={
                                <TextField
                                    variant="outlined"
                                    size="small"
                                    fullWidth
                                    placeholder='Ex EID Dhamaka'
                                    style={{ width: "300px" }}
                                    required
                                />
                            }
                        />
                        <CustomLabelInput
                            label="Minimum Add Money Amount ($)"
                            input={
                                <TextField
                                    variant="outlined"
                                    size="small"
                                    fullWidth
                                    placeholder='Ex 100'
                                    style={{ width: "300px" }}
                                    required
                                />
                            }
                        />
                    </div>
                    <div className='flex flex-row gap-2'>
                        <CustomLabelInput
                            label="Maximum Bonus ($)"
                            input={
                                <TextField
                                    variant="outlined"
                                    size="small"
                                    fullWidth
                                    placeholder='Ex 100'
                                    style={{ width: "300px" }}
                                    required
                                />
                            }
                        />
                        <CustomLabelInput
                            label="Start Date"
                            input={
                                <TextField
                                    type='date'
                                    size="small"
                                    fullWidth
                                    placeholder='Ex 100'
                                    style={{ width: "300px" }}
                                    required
                                />
                            }
                        />
                        <CustomLabelInput
                            label="Expire Date"
                            input={
                                <TextField
                                    type='date'
                                    size="small"
                                    fullWidth
                                    placeholder='Ex 100'
                                    style={{ width: "300px" }}
                                    required
                                />
                            }
                        />
                    </div>
                    <div className="flex flex-row gap-2 justify-end pt-4 pr-12">
                        <CustomButton
                            backgroundColor="#cccccc"
                            Color="#404c5d"
                            hoverColor="#404c5d"
                            hoverBackgroundColor="#dbdcdc"
                        >Reset</CustomButton>
                        <CustomButton
                            backgroundColor="#26cbd5"
                            Color="white"
                            hoverColor="white"
                            hoverBackgroundColor="#20a7af"
                        >Submit</CustomButton>
                    </div>
                </div>
            </CustomBox>
            <CustomBox>
                <div className="flex flex-row justify-between">
                    <CustomHeader
                        title="Bonus List"
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
                            RowData.map((data, index) => {
                                return (
                                    <TableRowBonus
                                        key={index}
                                        sl={data.sl}
                                        bonus_title={data.bonus_title}
                                        bonus_info={data.bonus_info}
                                        bonus_amount={data.bonus_amount}
                                        started_on={data.started_on}
                                        expire_on={data.expire_on}
                                        status={data.status}
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

export default page