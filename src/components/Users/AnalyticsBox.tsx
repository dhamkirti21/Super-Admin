import { Typography } from '@mui/material'
import Image from 'next/image'
import CustomHoverBox from '../Shared/CustomComponents/CustomHoverBox'
import React from 'react'

interface AnanyticsBoxProps {
    path: string[],
    total: number,
    title: string,
    left: number
    cardMainColor: string
}

const AnalyticsBox = (props: AnanyticsBoxProps) => {
    return (
        <>
            <CustomHoverBox>
                <div style={{
                    display: "flex",
                    flexDirection: "row",
                    gap: "-100px"
                }}>
                    <div
                        style={{
                            zIndex: "10",
                            borderRadius: "50%",
                            width: "40px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            height: "40px",
                            backgroundColor: props.cardMainColor,
                            color: "white"
                        }}
                    >
                        <Typography
                            variant="body2"
                            fontWeight={"500"}
                            fontSize={"12px"}
                        >
                            +{props.left}
                        </Typography>
                    </div>
                    <Image
                        src={props.path[0]}
                        alt="withdraw"
                        width="40"
                        height="40"
                        style={{
                            position: "relative",
                            zIndex: "8",
                            left: "-10px"
                        }}
                    />
                    <Image
                        src={props.path[1]}
                        alt="withdraw"
                        width="60"
                        height="60"
                        style={{
                            position: "relative",
                            zIndex: "1",
                            left: "-20px"
                        }}
                    />
                </div>
                <Typography
                    variant="h4"
                    fontWeight={"bold"}
                    color={props.cardMainColor}
                >
                    {props.total}
                </Typography>
                <Typography
                    variant="body2"
                    fontSize="14px"
                    fontWeight={"bold"}
                >
                    {props.title}
                </Typography>
            </CustomHoverBox>
        </>
    )
}

export default AnalyticsBox