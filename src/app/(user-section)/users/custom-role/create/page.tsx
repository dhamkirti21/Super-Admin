"use client"
import CustomBox from '@/components/Shared/CustomComponents/CustomBox'
import CustomHeader from '@/components/Shared/CustomComponents/CustomHeader'
import CustomLabelInput from '@/components/Shared/CustomLabelInput'
import CustomButton from '@/components/styled/CustomButtonWithProps'
import { Checkbox, TextField, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'

const page = () => {

    const items = [
        "Collect cash",
        "Addon",
        "Attribute",
        "Banner",
        "Campaign",
        "Category",
        "Coupon",
        "Customer management",
        "Deliveryman",
        "Provide dm earning",
        "Employee",
        "Item",
        "Notification",
        "Order",
        "Store",
        "Report",
        "Settings",
        "Withdraw list",
        "Zone",
        "Module",
        "Parcel",
        "Pos",
        "Unit"
    ]

    return (
        <>
            <div className="p-2">
                <CustomHeader
                    title="Employee Role"
                    icon={
                        <Image
                            src="/images/role.png"
                            alt="Employee Role"
                            width={20}
                            height={20}
                        />
                    }
                />
            </div>
            <CustomBox>

                <CustomLabelInput
                    label="Role Name(Default)"
                    input={
                        <TextField
                            fullWidth
                            variant="outlined"
                            size="small"
                            placeholder="Enter Role Name"
                            required
                        />
                    }
                />

                <div className='flex flex-col gap-4'>
                    <div className="flex flex-row gap-2 items-center">
                        <Typography
                            variant="body2"
                            fontWeight={600}
                        >Set Permission</Typography>
                        <div className="flex flex-row gap-2 items-center">
                            <Checkbox />
                            <Typography
                                variant="body2"
                                className="text-bold font-medium"
                            >Select All</Typography>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row gap-2 flex-wrap items-center justify-start">
                    {
                        items.map((item, index) => (
                            <div key={index} className="flex flex-col gap-2 w-[200px]">
                                <div className="flex flex-row gap-2 items-center">
                                    <Checkbox />
                                    <Typography
                                        variant="body2"
                                        fontSize={"12px"}
                                        color={"#1e2022"}
                                    >{item}</Typography>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className="flex flex-row justify-end">
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
            </CustomBox>
        </>
    )
}

export default page