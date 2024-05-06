"use client"
import { Autocomplete, Box, Button, FormControl, FormGroup, InputLabel, MenuItem, Select, Stack, TextField, styled } from '@mui/material'
import { Typography } from '@mui/material'
import React from 'react'
import Image from 'next/image'
import CustomBox from '@/components/Shared/CustomComponents/CustomBox'
import { BiDownload, BiSearch } from 'react-icons/bi'
import { FaUserAlt } from 'react-icons/fa'
import CustomHeader from '@/components/Shared/CustomComponents/CustomHeader'
import CustomSearchButton from '@/components/styled/CustomSearchButton'
import CustomButton from '@/components/styled/CustomButtonWithProps'
import TableRow from '@/components/transactions/provide-deliveryman-earning/TableRow'

const WithDrawList = () => {

    const titles = [
        "Sl",
        "Name",
        "Received At",
        "Amount",
        "Method",
        "Reference"
    ]

    const deliveryManData = [
        {
            sl: 1,
            name: "Rahim",
            receievedAt: "12/12/2021",
            amount: 1000,
            method: "Cash",
            reference: "Collect Cash"
        },
        {
            sl: 2,
            name: "Karim",
            receievedAt: "12/12/2021",
            amount: 1000,
            method: "Cash",
            reference: "Collect Cash"
        },
        {
            sl: 3,
            name: "Rahim",
            receievedAt: "12/12/2021",
            amount: 1000,
            method: "Cash",
            reference: "Collect Cash"
        }
    ]


    return (
        <>
            <div style={{
                display: "flex",
                gap: "10px",
                alignItems: "center",
                padding: "10px"
            }}>
                <Image
                    src="/images/report.png"
                    alt="withdraw"
                    width={25}
                    height={25}
                />
                <Typography variant="body2" fontSize={"20px"} fontWeight={"600"}>
                    Provide DeliveryMan Earning
                </Typography>
            </div>
            <CustomBox>
                <div
                    style={{
                        display: "flex",
                        width: "100%",
                        gap: "10px"
                    }}>
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "20px",
                            width: "50%"
                        }}>

                        <Typography variant="body2" fontSize={"14px"} fontWeight={"600"}>Deliveryman</Typography>
                        <Autocomplete
                            id="combo-box-demo"
                            options={[]}
                            sx={{ width: 450 }}
                            renderInput={(params) => <TextField {...params} label="Select Deliveryman" />}
                        />
                    </div>
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "20px",
                            width: "50%"
                        }}>

                        <Typography variant="body2" fontSize={"14px"} fontWeight={"600"}>Amount</Typography>
                        <TextField id="outlined-basic" label="Amount" variant="outlined" sx={{
                            width: "450px"
                        }} />
                    </div>
                </div>
                <div
                    style={{
                        display: "flex",
                        width: "100%",
                        gap: "10px"
                    }}>
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "20px",
                            width: "50%"
                        }}>

                        <Typography variant="body2" fontSize={"14px"} fontWeight={"600"}>Method</Typography>
                        <TextField id="outlined-basic" label="Ex 100" variant="outlined" sx={{
                            width: "450px"
                        }} />
                    </div>
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "20px",
                            width: "50%"
                        }}>

                        <Typography variant="body2" fontSize={"14px"} fontWeight={"600"}>Refrence</Typography>
                        <TextField id="outlined-basic" label="Ex collect cash" variant="outlined" sx={{
                            width: "450px"
                        }} />
                    </div>
                </div>
                <div style={{
                    display: "flex",
                    gap: "20px",
                    justifyContent: "flex-end"
                }}>
                    <CustomButton
                        backgroundColor={"#f1f3f5"}
                        Color={"#636d7a"}
                        hoverColor={"#636d7a"}
                        hoverBackgroundColor={"#dbdcdc"}
                    >
                        Reset
                    </CustomButton>
                    <CustomButton
                        backgroundColor={"#24bac3"}
                        Color={"#fff"}
                        hoverColor={"#fff"}
                        hoverBackgroundColor={"#20a7af"}
                    >
                        Save
                    </CustomButton>
                </div>
            </CustomBox>
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
                    <CustomHeader
                        icon={<FaUserAlt size={14} />}
                        title="Deliverymen Earning Provide Table"
                        count={6}
                    />
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
                                placeholder='Ex : search delivery man'
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
                        <CustomButton
                            backgroundColor={"#24bac3"}
                            Color={"#fff"}
                            hoverColor={"#fff"}
                            hoverBackgroundColor={"#20a7af"}
                        >
                            <BiDownload size={20} />
                            Export
                        </CustomButton>
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
                            deliveryManData.map((data, index) => {
                                return (
                                    <TableRow
                                        key={index}
                                        sl={data.sl}
                                        name={data.name}
                                        receievedAt={data.receievedAt}
                                        amount={data.amount}
                                        method={data.method}
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

export default WithDrawList