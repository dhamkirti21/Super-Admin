"use client"
import CustomBox from '@/components/Shared/CustomComponents/CustomBox'
import CustomHeader from '@/components/Shared/CustomComponents/CustomHeader'
import CustomButton from '@/components/styled/CustomButtonWithProps'
import CustomSearchButton from '@/components/styled/CustomSearchButton'
import { Radio, TextField, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import { BiSearch } from 'react-icons/bi'

const Page = () => {

    const titles = [
        "SL",
        "Store Name",
        "Rating",
        "Total Products",
        "Total Orders",
        "Status",
        "Action"
    ]

    return (
        <>
            <div className="p-2">
                <CustomHeader
                    title="Recommended Store"
                    icon={
                        <Image
                            src="/images/condition.png"
                            alt="Recommended Store"
                            width={30}
                            height={30}
                        />
                    }

                />
            </div>
            <CustomBox className='ml-0 mt-6 '>
                <div className="flex flex-col ">
                    <CustomHeader
                        title="Stores"
                    />
                    <TextField
                        placeholder="Search Store"
                        size="small"
                        className="w-full mt-4"
                    />
                    <div style={{
                        display: "flex",
                        flexDirection: "row",
                        gap: "20px",
                        marginTop: "30px",
                        position: "relative",
                        justifyContent: "flex-end",
                    }}>
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
                <div className="flex flex-row justify-between ">
                    <CustomHeader
                        title="Recommended Store"
                        count={0}
                    />

                    <div className='flex flex-row gap-4'>
                        <div className='text-small flex items-center'>
                            <Radio sx={{ fontSize: "12px" }} />
                            <Typography variant="body2">Shuffle store when Page reload</Typography>
                        </div>
                        <div className='flex flex-row gap-0'>
                            <TextField
                                style={{ width: "220px" }}
                                placeholder="Search Store"
                                variant="outlined"
                                size="small"
                            />
                            <CustomSearchButton>
                                <BiSearch size={15} />
                            </CustomSearchButton>
                        </div>
                    </div>
                </div>
                <table className='w-[105%]' style={{ marginLeft: "-20px" }}>
                    <tbody>
                        <tr className='bg-[#f8fafd] w-full'>
                            {
                                titles.map((title, index) => {
                                    return (
                                        <td key={index} style={{
                                            fontSize: "12px",
                                            padding: "16px",
                                            fontWeight: "bold",
                                            color: "#334257",
                                            textAlign: "left",
                                        }}>
                                            {title}
                                        </td>
                                    )
                                })
                            }
                        </tr>
                    </tbody>
                </table>

            </CustomBox>
        </>
    )
}

export default Page
