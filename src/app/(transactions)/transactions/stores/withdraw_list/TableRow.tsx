import { Typography, styled } from '@mui/material'
import React from 'react'
import { BsEyeFill } from 'react-icons/bs';

interface TableRowProps {
    sl: number,
    amount: string,
    request_time: string,
    store: string,
    status: string,
}


const CustomButton = styled('button')({
    backgroundColor: '#F6ECE4',
    color: '#FF7500',
    padding: '10px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    border: '1px solid #f08aa7',
    borderRadius: '5px',
    transition: 'background-color 0.3s',
    '&:hover': {
        backgroundColor: '#e56900',
        color: "white",
        border: "none",
        cursor: "pointer"
    },
});




const Status = (status: string) => {
    return (
        <Typography
            variant="p"
            fontSize={"12px"}
            fontWeight={"600"}
            padding={"5px 20px 5px 20px"}
            borderRadius={"5px"}
            border={status === "Denied" ? "1px solid #f08aa7" : "1px solid #58f4fd"}
            color={status === "Denied" ? "#ed4c78" : "#2cbdc5"}
            backgroundColor={status === "Denied" ? "#f4e6ed" : "#dcf7fb"}
        >
            {status}
        </Typography >
    )
}

const TableRow = (props: TableRowProps) => {
    return (
        <tr
            style={{
                textAlign: "left",
                marginTop: "10px",
            }}
        >
            <td style={{
                paddingLeft: "20px",
                paddingTop: "20px",
                fontSize: "14px",
                color: "#677788"
            }}>
                {props.sl}
            </td>
            <td style={{
                paddingLeft: "20px",
                paddingTop: "20px",
                fontSize: "14px",
                color: "#677788"
            }}>
                {props.amount}
            </td>
            <td style={{
                paddingLeft: "20px",
                paddingTop: "20px",
                fontSize: "14px",
                color: "#677788"
            }}>
                {props.store}
            </td>
            <td style={{
                paddingLeft: "20px",
                paddingTop: "20px",
                fontSize: "14px",
                color: "#677788"
            }}>
                {props.request_time}
            </td>
            <td style={{
                paddingLeft: "20px",
                paddingTop: "20px",
            }}>
                {Status(`${props.status}`)}
            </td>
            <td style={{
                paddingLeft: "20px",
                paddingTop: "20px",
            }}>
                <CustomButton>
                    <BsEyeFill size={15} />
                </CustomButton>
            </td>

        </tr>
    )
}

export default TableRow