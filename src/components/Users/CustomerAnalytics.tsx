import React from 'react'
import CustomHoverBox from '../Shared/CustomComponents/CustomHoverBox'
import Image from 'next/image'
import { Typography } from '@mui/material'


interface CustomerAnalyticsProps {
    icon: string,
    title: string,
    alt?: string,
    mainColor: string,
    total: number
}
const CustomerAnalytics = (props: CustomerAnalyticsProps) => {
    return (
        <>
            <CustomHoverBox>
                <div style={{
                    display: "flex",
                    flexDirection: "row",
                    gap: "10px",
                    alignItems: "center"
                }}>
                    <Image
                        src={props.icon}
                        alt={props.alt ? props.alt : "icon"}
                        width="20"
                        height="20"
                    />
                    <Typography
                        variant="h4"
                        fontWeight={"600"}
                        color={props.mainColor}
                    >
                        {props.total}
                    </Typography>
                </div>
                <Typography
                    variant="body2"
                    fontWeight={"600"}
                    fontSize={"12px"}
                    color={"#717788"}
                >
                    {props.title}
                </Typography>

            </CustomHoverBox>
        </>
    )
}

export default CustomerAnalytics