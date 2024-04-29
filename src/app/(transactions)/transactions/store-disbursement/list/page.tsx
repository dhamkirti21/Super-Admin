"use client"
import CustomBox from '@/components/Shared/CustomComponents/CustomBox';
import PageHeader from '@/components/Shared/PageHeader'
import { useSearchParams } from 'next/navigation';
import React from 'react'
import styles from "./list.module.css"
import { Typography, styled } from '@mui/material';

const StoreDisbursement = () => {


    const searchParams = useSearchParams();
    const status = searchParams.get("status") || "All";
    const queryStatus = status;
    const statusCodes = [
        "All",
        "Pending",
        "Completed",
        "Partially Completed",
        "Cancelled",
    ]
    interface CustomButtonProps {
        backgroundColor: string;
        Color: string;
        hoverColor: string;
        hoverBackgroundColor: string;
    }

    const CustomButton = styled('button')<CustomButtonProps>(({ backgroundColor, Color, hoverColor, hoverBackgroundColor }) => ({
        backgroundColor: backgroundColor,
        color: `${Color}`,
        padding: "10px",
        paddingLeft: "16px",
        paddingRight: "16px",
        display: 'flex',
        fontSize: '12px',
        fontWeight: '600',
        justifyContent: 'center',
        alignItems: 'center',
        outline: "none",
        border: "none",
        borderRadius: '5px',
        '&:hover': {
            backgroundColor: hoverBackgroundColor,
            color: hoverColor,
            cursor: "pointer"
        },
    }));

    const Status = (status: string) => {
        return (
            <Typography
                variant="p"
                fontSize={"10px"}
                fontWeight={"600"}
                padding={"5px"}
                borderRadius={"5px"}
                border={status === "Denied" ? "1px solid #f08aa7" : "1px solid #58f4fd"}
                color={status === "Denied" ? "#ed4c78" : "#2cbdc5"}
                backgroundColor={status === "Denied" ? "#f4e6ed" : "#dcf7fb"}
            >
                {status}
            </Typography >
        )
    }

    return (
        <div style={{
            overflow: "hidden",
        }}>
            <PageHeader
                path="/images/disburstment.png"
                title="Store Disbursement"
            />
            <div
                style={{
                    padding: "20px",
                }}
            >
                {
                    statusCodes.map((status, index) => (
                        <a key={index} href={`/transactions/store-disbursement/list?status=${status}`} style={{
                            backgroundColor: 'transparent',
                            border: "none",
                            fontSize: "12px",
                            margin: "12px",
                            fontWeight: status === queryStatus ? "bold" : "normal",
                            color: status === queryStatus ? "#24bacf" : "#677788"
                        }}>
                            {status}
                        </a>
                    ))
                }
            </div>
            <div className={styles.scrollablebox}>
                <CustomBox>
                    <div style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                    }}>
                        <div style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "5px"
                        }}>
                            <div style={{
                                display: "flex",
                                flexDirection: "row",
                                gap: "5px"
                            }}>
                                <Typography
                                    variant="h4"
                                    fontSize={"16px"}
                                    fontWeight={"600"}
                                >
                                    Disbursement # 1001
                                </Typography >
                                {Status("Pending")}
                            </div>
                            <Typography
                                variant="body2"
                                fontSize={"12px"}
                                color={"#6777a3"}
                                fontWeight={"300"}
                            >
                                Created at 27 Nov 2023 12:43:pm
                            </Typography >
                        </div>
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "row",
                                gap: "10px",
                                alignItems: "center"
                            }}
                        >
                            <Typography
                                variant="body2"
                                fontSize={"12px"}
                                color={"#6777a3"}
                                fontWeight={"40"}
                            >Total Amount: </Typography>
                            <Typography
                                variant="body2"
                                fontSize={"16px"}
                                fontWeight={"600"}
                            >$ 940.21 </Typography>
                            <CustomButton
                                backgroundColor={"#24bac3"}
                                Color={"#fff"}
                                hoverColor={"#fff"}
                                hoverBackgroundColor={"#20a7af"}
                            >
                                View Details
                            </CustomButton>
                        </div>

                    </div>
                </CustomBox>
            </div>
        </div>
    )
}

export default StoreDisbursement;