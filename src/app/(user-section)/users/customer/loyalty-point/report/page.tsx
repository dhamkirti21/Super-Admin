"use client"
import CustomBox from '@/components/Shared/CustomComponents/CustomBox'
import CustomHeader from '@/components/Shared/CustomComponents/CustomHeader'
import CustomButton from '@/components/styled/CustomButtonWithProps'
import CustomSearchButton from '@/components/styled/CustomSearchButton'
import { Autocomplete, TableRow, TextField, Typography, styled } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import { BiSearch } from 'react-icons/bi'
import { CiDollar } from 'react-icons/ci'
import TableRowReport from './TableRowReport'


const Page = () => {

    const DataBox = (props: any) => {
        return (
            <div className="flex flex-row justify-start items-center px-6 w-[300px] py-8 rounded-md"
                style={{
                    backgroundColor: props.backgroundColor,
                }}
            >
                <div className="flex flex-row gap-4 justify-start items-center">
                    <div className='p-2 bg-white rounded-[50%] w-[50px] h-[50px]'>
                        <Image
                            src={props.icon}
                            alt={props.title}
                            width={30}
                            height={30}
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <Typography variant="p" fontSize={"14px"} fontWeight={"bold"} color={props.valueColor}>
                            {props.value}
                        </Typography>
                        <Typography variant="p" fontSize={"12px"} fontWeight={"500"} color={"#93a8ab"}>
                            {props.title}
                        </Typography>
                    </div>
                </div>
            </div>
        )
    }

    const titles = [
        "SL",
        "Transaction ID",
        "Customer Info",
        "Points Earned",
        "Points Converted",
        "Current Points In Wallet",
        "Transaction Type",
        "Reference",
    ]

    const RowData = [
        {
            sl: 1,
            transaction_id: "TRX-0001",
            customer_info: "John Doe",
            points_earned: 100,
            points_converted: 0,
            current_points_in_wallet: 100,
            transaction_type: "Add Fund",
            reference: "TRX-0001"
        },
        {
            sl: 2,
            transaction_id: "TRX-0002",
            customer_info: "John Doe",
            points_earned: 100,
            points_converted: 0,
            current_points_in_wallet: 100,
            transaction_type: "Add Fund",
            reference: "TRX-0002"
        },
    ]

    return (
        <>
            <CustomHeader
                title="Customer Loyalty Point Report"
                icon={
                    <Image
                        src="/images/customer-loyalty.png"
                        alt="Wallet Report"
                        width={20}
                        height={20}
                    />
                }
            />
            <CustomBox
                style={{
                    width: "100%",
                    marginTop: "20px",
                    position: "relative",
                    left: "-20px"
                }}
            >
                <Typography variant="p" fontSize={"14px"} fontWeight={"bold"} color={"#5b6777"}>
                    Filter Options
                </Typography>
                <div className='flex flex-row gap-5'>
                    <div>
                        <div style={{
                            display: "flex",
                            flexDirection: "row",
                            marginTop: "8px"
                        }}>
                            <label style={{
                                fontSize: "12px",
                            }}>Add Fund Type</label>
                        </div>
                        <Autocomplete
                            sx={{
                                marginTop: "8px",
                                width: "300px"
                            }}
                            size='small'
                            options={["Zone"]}
                            renderInput={(params) => <TextField {...params} placeholder="All Transaction" />}
                        />
                    </div>
                    <div>
                        <div style={{
                            display: "flex",
                            flexDirection: "row",
                            marginTop: "8px"
                        }}>
                            <label style={{
                                fontSize: "12px",
                            }}>Customer</label>
                        </div>
                        <Autocomplete
                            sx={{
                                marginTop: "8px",
                                width: "300px"
                            }}
                            size='small'
                            options={["Zone"]}
                            renderInput={(params) => <TextField {...params} placeholder="Select Customer" />}
                        />
                    </div>
                    <div>
                        <div style={{
                            display: "flex",
                            flexDirection: "row",
                            marginTop: "8px"
                        }}>
                            <label style={{
                                fontSize: "12px",
                            }}>Duration</label>
                        </div>
                        <Autocomplete
                            sx={{
                                marginTop: "8px",
                                width: "300px"
                            }}
                            size='small'
                            options={["Zone"]}
                            renderInput={(params) => <TextField {...params} placeholder="All Time" />}
                        />
                    </div>
                </div>
                <div style={{
                    display: "flex",
                    flexDirection: "row",
                    gap: "20px",
                    position: "relative",
                    justifyContent: "flex-end",
                }}>
                    <CustomButton
                        backgroundColor="#cccccc"
                        Color="#404c5d"
                        hoverColor="#404c5d"
                        hoverBackgroundColor="#dbdcdc"
                    >Cancel</CustomButton>
                    <CustomButton
                        backgroundColor="#26cbd5"
                        Color="white"
                        hoverColor="white"
                        hoverBackgroundColor="#20a7af"
                    >Submit</CustomButton>
                </div>
            </CustomBox >
            <CustomBox>
                <div className="flex flex-row gap-4">
                    <DataBox
                        icon="/images/debit.png"
                        title="Total Transaction"
                        value="9,395.05"
                        valueColor="#006fbd"
                        backgroundColor="#e5fcff"
                    />
                    <DataBox
                        icon="/images/debit.png"
                        title="Total Transaction"
                        value="9,395.05"
                        valueColor="#006fbd"
                        backgroundColor="#e5fcff"
                    />
                    <DataBox
                        icon="/images/debit.png"
                        title="Total Transaction"
                        value="9,395.05"
                        valueColor="#006fbd"
                        backgroundColor="#e5fcff"
                    />
                </div>
            </CustomBox>
            <CustomBox>
                <div className="flex flex-row justify-between">
                    <CustomHeader
                        title="Transactions"
                        icon={<CiDollar size={20} />}
                        count={24}
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
                            RowData.map((data, index) => {
                                return (
                                    <TableRowReport
                                        key={index}
                                        sl={data.sl}
                                        transaction_id={data.transaction_id}
                                        customer_info={data.customer_info}
                                        points_earned={data.points_earned}
                                        points_converted={data.points_converted}
                                        current_points_in_wallet={data.current_points_in_wallet}
                                        transaction_type={data.transaction_type}
                                        reference={data.reference}
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