import { Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import CustomBox from './CustomComponents/CustomBox'

interface headerProps {
    title: string
    path: string
}
const ReportPageHeader = (props: headerProps) => {
    return (
        <>
            <div style={{
                display: "flex",
                gap: "10px",
                alignItems: "center",
                padding: "10px"
            }}>
                <Image
                    src={props.path}
                    alt="withdraw"
                    width={20}
                    height={20}
                />
                <Typography variant="p" fontSize={"15px"} fontWeight={"600"}>{props.title}</Typography>
            </div>
            <CustomBox>
                <div>
                    <Typography variant="body2" fontWeight={"bold"}> Search Data</Typography>
                </div>
            </CustomBox>
        </>
    )
}

export default ReportPageHeader