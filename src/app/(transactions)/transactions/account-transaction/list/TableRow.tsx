import { Typography, styled } from '@mui/material'
import React from 'react'
import { BsEyeFill } from 'react-icons/bs';
import CustomButton from '@/components/styled/CustomButtonWithProps';

interface TableRowProps {
    sl: number,
    collect_from: string,
    type: string,
    received_at: string,
    amount: number,
    reference: string,
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
                color: "#47a1c3"
            }}>
                <a href="#">
                    {props.collect_from}
                </a>
            </td>
            <td style={{
                paddingLeft: "20px",
                paddingTop: "20px",
                fontSize: "14px",
                color: "#677788",
                textTransform: "capitalize"
            }}>
                {props.type}
            </td>
            <td style={{
                paddingLeft: "20px",
                paddingTop: "20px",
                fontSize: "14px",
                color: "#677788"
            }}>
                {props.received_at}
            </td>
            <td style={{
                paddingLeft: "20px",
                paddingTop: "20px",
                fontSize: "14px",
                color: "#677788"
            }}>
                $ {props.amount}
            </td>
            <td style={{
                paddingLeft: "20px",
                paddingTop: "20px",
                fontSize: "14px",
                color: "#677788"
            }}>
                {props.reference}
            </td>
            <td style={{
                paddingLeft: "20px",
                paddingTop: "20px",
            }}>
                <CustomButton

                    backgroundColor={"#f8d1b1"}
                    Color={"#e7700b"}
                    hoverColor={"#fff"}
                    hoverBackgroundColor={"#e7700b"}
                    style={{
                        padding: "10px"
                    }}
                >
                    <BsEyeFill size={15} />
                </CustomButton>
            </td>

        </tr>
    )
}

export default TableRow