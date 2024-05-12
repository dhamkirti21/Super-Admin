"use client"
import CustomBox from '@/components/Shared/CustomComponents/CustomBox'
import CustomHeader from '@/components/Shared/CustomComponents/CustomHeader'
import CustomButton from '@/components/styled/CustomButtonWithProps'
import { Autocomplete, TextField } from '@mui/material'
import React from 'react'
import { TbMoneybag } from 'react-icons/tb'

const Page = () => {
    return (
        <>
            <div
                style={{
                    padding: "20px"
                }}
            >
                <CustomHeader
                    title="Add Fund"
                    icon={<TbMoneybag size={20} />}
                />
                <CustomBox
                    style={{
                        width: "100%",
                        marginTop: "20px",
                        position: "relative",
                        left: "-20px"
                    }}
                >
                    <div className='flex flex-col'>
                        <div className='flex flex-row gap-5'>
                            <div className='w-50'>
                                <div style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    marginTop: "8px"
                                }}>
                                    <label>Customer</label>
                                    <p style={{
                                        color: "red",
                                        fontSize: "14px",
                                        marginLeft: "5px"
                                    }}>*</p>
                                </div>
                                <Autocomplete
                                    sx={{
                                        marginTop: "8px",
                                        width: "450px"
                                    }}
                                    options={["Zone"]}
                                    renderInput={(params) => <TextField {...params} label="Select Customer By Name and Phone" />}
                                />
                            </div>
                            <div className='w-50'>
                                <div style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    marginTop: "8px"
                                }}>
                                    <label>Amount $</label>
                                    <p style={{
                                        color: "red",
                                        fontSize: "14px",
                                        marginLeft: "5px"
                                    }}>*</p>
                                </div>
                                <TextField
                                    type="text"
                                    name="first_name"
                                    fullWidth
                                    placeholder="Ex 100"
                                    sx={{
                                        marginTop: "8px",
                                        fontSize: "11px",
                                        width: "470px"
                                    }}
                                />
                            </div>
                        </div>
                        <div>
                            <div style={{
                                display: "flex",
                                flexDirection: "row",
                                marginTop: "8px"
                            }}>
                                <label>Reference (Optional)</label>
                                <p style={{
                                    color: "red",
                                    fontSize: "14px",
                                    marginLeft: "5px"
                                }}>*</p>
                            </div>
                            <TextField
                                type="text"
                                name="first_name"
                                fullWidth
                                placeholder="Ex 123"
                                sx={{
                                    marginTop: "8px",
                                    fontSize: "11px",
                                    width: "100%"
                                }}
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
                </CustomBox>
            </div>
        </>
    )
}

export default Page