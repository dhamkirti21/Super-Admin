import { Typography } from '@mui/material'
import React from 'react'
import { FaUserAlt } from 'react-icons/fa'


interface CustomHeaderProps {
    icon?: React.ReactNode,
    title: string,
    count?: number,
}
const CustomHeader = ({
    icon,
    title,
    count
}: CustomHeaderProps) => {
    return (
        <div style={{
            display: "flex",
            flexDirection: "row",
            gap: "6px",
            alignItems: "center",
        }}
        >
            {icon}
            <Typography variant="p" fontSize={"16px"} fontWeight={"600"}>
                {title}
            </Typography>
            {
                count !== undefined && (
                    <Typography
                        variant="p"
                        fontSize={"12px"}
                        fontWeight={"600"}
                        padding={"5px"}
                        borderRadius={"10px"}
                        backgroundColor={"#F5F5F5"}
                    >
                        {count}
                    </Typography>
                )
            }
        </div>
    )
}

export default CustomHeader