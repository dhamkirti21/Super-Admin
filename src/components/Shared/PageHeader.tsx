import { Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'

interface headerProps {
    title: string,
    path?: string,
    headerIcon?: React.ReactNode,
    subtitle?: string,
    titleSize?: number,
    subtitleSize?: number,
    iconSize?: number
}
const PageHeader = (props: headerProps) => {

    const IconSize = props.iconSize ? props.iconSize : 20
    const TitleSize = props.titleSize ? props.titleSize : 20
    const SubtitleSize = props.subtitleSize ? props.subtitleSize : 14


    return (
        <>
            <div style={{
                display: "flex",
                gap: "10px",
                alignItems: "center",
                padding: "10px"
            }}>
                {
                    props.path ? (
                        <Image
                            src={props.path}
                            alt="withdraw"
                            width={`${IconSize}`}
                            height={`${IconSize}`}
                        />
                    ) : (
                        props.headerIcon
                    )
                }
                <div>
                    <Typography
                        variant="body2"
                        fontWeight={"550"}
                        sx={{
                            fontSize: `${TitleSize}px`
                        }}
                    >
                        {props.title}
                    </Typography>
                    <Typography
                        variant="body2"
                        color={"#717788"}
                        fontWeight={"400"}
                        sx={{
                            fontSize: `${SubtitleSize}px`
                        }}
                    >
                        {props.subtitle ? props.subtitle : ""}
                    </Typography>
                </div>

            </div>

        </>
    )
}

export default PageHeader