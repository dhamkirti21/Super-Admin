"use client"
import CustomBox from '@/components/Shared/CustomComponents/CustomBox'
import CustomHeader from '@/components/Shared/CustomComponents/CustomHeader'
import CustomLabelInput from '@/components/Shared/CustomLabelInput'
import CustomButton from '@/components/styled/CustomButtonWithProps'
import { Autocomplete, TextField, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'

const Page = () => {

    const Instruction = ({ stepNumber, icon, subtitle, instructions }: any) => {
        return (
            <>
                <div className="flex flex-row gap-4 w-[250px]">
                    <div className="flex flex-col gap-4 w-[170px]">
                        <Typography variant="h6" className="font-bold">
                            Step {stepNumber}
                        </Typography>
                        <Typography variant="body2" className="text-slate-600">
                            {subtitle}
                        </Typography>
                    </div>
                    <div>{icon}</div>
                </div>
                <Typography variant="body2" className="font-bold text-lg mt-6">
                    Instruction
                </Typography>
                <ul style={{ listStyleType: "circle", paddingLeft: "20px" }}>
                    {instructions.map((instruction: string, index: number) => (
                        <li className="text-slate-600 text-sm mt-1" key={index}>
                            {instruction}
                        </li>
                    ))}
                </ul>
            </>
        );
    };

    const steps = [
        {
            stepNumber: 1,
            iconpath: "/images/resturant.png",
            subtitle: "Select Data Type",
            instructions: [
                "Select data type in which order you want your data sorted while downloading.",
            ]
        },
        {
            stepNumber: 2,
            iconpath: "/images/resturant.png",
            subtitle: "Select Data Range by Date or ID and Export",
            instructions: [
                "The file will be downloaded in .xls format",
                "Click reset if you want to clear you changes and want to download in default sort wise data",
            ]
        },
    ]


    return (
        <div className="p-2">
            <CustomHeader
                title="Bulk Import"
                icon={
                    <Image
                        src="/images/resturant.png"
                        width={20}
                        alt='Bulk Import'
                        height={20}
                    />
                }
            />
            <CustomBox>
                <div className="grid grid-cols-3 gap-6">
                    {
                        steps.map((step, index) => {
                            return (
                                <div className="p-6 border-2 border-slate-400 rounded-md" key={index}>
                                    <Instruction

                                        stepNumber={step.stepNumber}
                                        icon={
                                            <Image
                                                src={step.iconpath}
                                                width={50}
                                                alt='Bulk Import'
                                                height={50}
                                            />
                                        }
                                        subtitle={step.subtitle}
                                        instructions={step.instructions}

                                    />
                                </div>
                            )
                        })
                    }
                </div>
            </CustomBox>

            <CustomBox>
                <div className="flex flex-col gap-4">
                    <CustomLabelInput
                        label="Select Data Type"
                        input={
                            <Autocomplete
                                options={["Order", "Customer", "Product"]}
                                renderInput={(params) =>
                                    <TextField
                                        {...params}
                                        variant="outlined"
                                        size="small"
                                    />
                                }
                            />

                        }

                    />
                    <div className="flex flex-row gap-2 justify-end">
                        <CustomButton
                            style={{ width: "100px", fontSize: "14px", border: "1px solid #20a7af" }}
                            backgroundColor='#fff'
                            Color='#24bac3'
                            hoverColor='#fff'
                            hoverBackgroundColor='#20a7af'
                        >
                            Cancel
                        </CustomButton>
                        <CustomButton
                            style={{ width: "100px", fontSize: "14px" }}
                            backgroundColor='#24bac3'
                            Color='#fff'
                            hoverColor='#fff'
                            hoverBackgroundColor='#20a7af'
                        >
                            Export
                        </CustomButton>
                    </div>
                </div>
            </CustomBox >
        </div >
    )
}

export default Page
