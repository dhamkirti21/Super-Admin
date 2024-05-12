"use client"
import CustomBox from '@/components/Shared/CustomComponents/CustomBox'
import CustomHeader from '@/components/Shared/CustomComponents/CustomHeader'
import CustomButton from '@/components/styled/CustomButtonWithProps'
import { Radio, RadioGroup, ToggleButton, ToggleButtonGroup, Typography } from '@mui/material'
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
            subtitle: "Download Excel File",
            instructions: [
                "Download the format file and fill it with proper data.",
                "You can download the example file to understand how the data must be filled.",
                "Have to upload excel file."
            ]
        },
        {
            stepNumber: 2,
            iconpath: "/images/resturant.png",
            subtitle: "Match Spread sheet data according to instruction",
            instructions: [
                "Fill up the data according to the format.",
                "Make sure the phone numbers and email addresses are unique.",
                "You can get module id and zone id from their list please input the right ids.",
                "For delivery time the format is from-to type for example: 30-40 min . Also you can use days or hours as type. Please be carefull about this format or leave this field empty.",
                "Latitude must be a number between -90 to 90 and Longitude must a number between -180 to 180.",
                "Otherwise it will create server error"
            ]
        }, {
            stepNumber: 3,
            iconpath: "/images/resturant.png",
            subtitle: "Validate data and complete import",
            instructions: [
                "In the Excel file upload section first select the upload option.",
                "Upload your file in .xls .xlsx format.",
                "Finally click the upload button.",
                "After uploading stores you need to edit them and set stores`s logo and cover.`s path",
                "You can upload your store images in store folder from gallery and copy image`s path",
                "Default password for store is 12345678."
            ]
        }
    ]

    const [alignment, setAlignment] = React.useState<string | null>('left');

    const handleAlignment = (
        event: React.MouseEvent<HTMLElement>,
        newAlignment: string | null,
    ) => {
        setAlignment(newAlignment);
    };

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
                                <div className="p-6 border-2 border-slate-400 rounded-md" key={index} >
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
                <div className="flex flex-row justify-center">
                    <div className="flex flex-col gap-2 justify-center text-center gap-2">
                        <Typography variant="h3" className="font-thin text-lg mt-6 tracking-wide">
                            Download spreadsheet template
                        </Typography>
                        <div className='flex flex-row gap-4'>
                            <CustomButton
                                style={{ border: "1px solid #20a7af" }}
                                backgroundColor='#fff'
                                Color='#24bac3'
                                hoverColor='#fff'
                                hoverBackgroundColor='#20a7af'
                            >
                                Template With Existing Data
                            </CustomButton>
                            <CustomButton
                                backgroundColor='#24bac3'
                                Color='#fff'
                                hoverColor='#fff'
                                hoverBackgroundColor='#20a7af'
                            >
                                Template Without Data
                            </CustomButton>
                        </div>
                    </div>
                </div>
            </CustomBox>

            <CustomBox>
                <div className="flex flex-row gap-4">
                    <div className="flex flex-col gap-2">
                        <div className="pt-2">
                            <CustomHeader
                                title='Select Data Upload Type'
                            />
                        </div>
                        <div className='flex flex-col pt-2'>
                            <div className='flex flex-row gap-32 justify-between w-[400px] items-center rounded-md hover:bg-slate-400 bg-white border-1 border-slate-200'>
                                <Typography variant="h6" className="font-thin text-lg mt-6 tracking-wide">
                                    Upload New Data
                                </Typography>
                                <div>
                                    <Radio />
                                </div>
                            </div>
                            <div className='flex flex-row gap-32 w-[400px] justify-between items-center rounded-md hover:bg-slate-400 bg-white border-1 border-slate-200'>
                                <Typography variant="h6" className="font-thin text-lg mt-6 tracking-wide">
                                    Upload Existing Data
                                </Typography>
                                <div>
                                    <Radio />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4">
                        <div className="pt-2">
                            <CustomHeader
                                title='Import Stores File'
                            />
                        </div>
                        <div className=" flex flex-row justify-center items-center w-[500px] h-[150px] border-2 border-slate-600 rounded-md p-2">
                            Select your File
                        </div>
                        <div className="flex flex-row gap-2 justify-end">
                            <CustomButton
                                style={{ width: "100px", fontSize: "14px", border: "1px solid #20a7af" }}
                                backgroundColor='#fff'
                                Color='#24bac3'
                                hoverColor='#fff'
                                hoverBackgroundColor='#20a7af'
                            >
                                Reset
                            </CustomButton>
                            <CustomButton
                                style={{ width: "100px", fontSize: "14px" }}
                                backgroundColor='#24bac3'
                                Color='#fff'
                                hoverColor='#fff'
                                hoverBackgroundColor='#20a7af'
                            >
                                Confirm
                            </CustomButton>
                        </div>
                    </div>
                </div>

            </CustomBox >
        </div >
    )
}

export default Page
