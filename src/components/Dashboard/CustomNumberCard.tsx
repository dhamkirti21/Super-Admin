import { Box, Typography } from '@mui/material'
import Image from 'next/image';
import React from 'react'


type numberType = "Red" | "Green" | "Grey";

interface CustomNumberCardProps {
    icon: string;
    title: string;
    value: number;
    numberType: numberType;
}

const CustomNumberCard = (props: CustomNumberCardProps) => {

    const color = props.numberType === "Red" ? "#ff4d4f" : props.numberType === "Green" ? "#52c41a" : "#9d9d9d";
    return (
        <Box
            sx={{
                display: "flex",
                padding: "18px",
                flexDirection: "row",
                justifyContent: "space-between",
                flex: 4,
                alignItems: "center",
                width: "100%",
                gap: "10px",
                borderRadius: "3px",
                backgroundColor: "#f8f9fb",
                boxShadow: "1px 1.5px 1.5px 1px rgba(0, 0, 0, 0.1)",
            }}
        >
            <div
                style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    gap: "20px",
                }}
            >
                <Image loading="lazy" src={props.icon} width={25} height={25} alt={props.title} />
                <Typography variant="body2" fontWeight={"395"} fontSize={"16px"}>{props.title}</Typography>
            </div>
            <Typography variant="p" color={color} fontWeight={"bold"} ontSize={"20px"}>{props.value}</Typography>
        </Box>
    )
}

export default CustomNumberCard