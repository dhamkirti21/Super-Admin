import { Box, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'


interface CustomCardProps {
    title: string,
    value: number,
    icon: string,
    newAdded: number,
    alt: string,
}
const CustomCard = (props: CustomCardProps) => {
    return (
        <Box
            sx={{
                display: "flex",
                padding: "30px",
                flexDirection: "column",
                alignItems: "center",
                width: "100%",
                gap: "10px",
                borderRadius: "3px",
                boxShadow: "1px 1.5px 1.5px 1px rgba(0, 0, 0, 0.1)",
            }}
        >
            <Image src={props.icon} width={50} height={50} alt="items" />
            <Typography variant="p" fontWeight={"bold"} fontSize={"14px"}>{props.title}</Typography>
            <Typography variant="h4" fontWeight={"bold"}>{props.value}</Typography>
            <Typography variant="p" fontSize={"12px"} fontWeight={"bold"} color={"#9d9d9d"}>{props.newAdded} Newly  Added</Typography>
        </Box >
    )
}

export default CustomCard