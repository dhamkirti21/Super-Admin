import { Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'


interface DeliveryManProps {
    name: string,
    phone_number: string,
    total_orders: number,
    image: string
}
const DeliveryMan = ({
    name, phone_number, total_orders, image
}: DeliveryManProps) => {

    const nameSplit = name.split(" ");
    const firstName = nameSplit[0];
    const starString = "*********";
    const phone = "+" + phone_number.substring(0, 1) + starString;
    console.log(phone);
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "10px",
                width: "100%",
                height: "fit-content",
            }}
        >
            <div
                style={{
                    border: "1px solid black",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "5px",
                }}
            >
                <Image
                    src={image}
                    alt="withdraw"
                    width="40"
                    height="40"
                />
            </div>
            <div style={{
                display: "flex",
                flexDirection: "column"
            }}>
                <Typography variant="body2" fontWeight={"550"}>
                    {firstName}
                </Typography>
                <Typography variant="body2" fontSize={"14px"} color={"#5f6c7e"} fontWeight={"550"}>
                    {phone}
                </Typography>
            </div>
            <Typography
                variant="p"
                fontSize={"12px"}
                fontWeight={"600"}
                padding={"5px 10px 5px 10px"}
                borderRadius={"5px"}
                color={"#048891"}
                backgroundColor={"#f3f8f9"}
            >
                Orders:{total_orders}
            </Typography >
        </div>
    )
}

export default DeliveryMan