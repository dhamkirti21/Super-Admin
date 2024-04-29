import { Typography, styled } from '@mui/material';
import Image from 'next/image';
import React from 'react'
import { BiPencil } from 'react-icons/bi';
import { BsEyeFill, BsStarFill } from 'react-icons/bs';
import { MdDeleteForever } from 'react-icons/md';

interface TableRowDeliveryManProps {
    sl: number,
    name: string,
    link: string,
    contactInfo: string,
    zone: string,
    star: number,
    imagePath: string,
    totalCompletedOrders: number,
    availabilityStatus: {
        assigned: number,
        activeStatus: boolean,
    },
    status: boolean,
    action: string[],
}

const CustomIconButton = styled('button')<CustomButtonProps>(({ backgroundColor, Color, hoverColor, hoverBackgroundColor }) => ({
    backgroundColor: backgroundColor,
    color: `${Color}`,
    padding: '5px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    border: `1px solid ${Color}`,
    borderRadius: '5px',
    transition: 'background-color ease-in-out 0.5s',
    '&:hover': {
        backgroundColor: hoverBackgroundColor,
        color: hoverColor,
        border: "none",
        cursor: "pointer"
    },
}));

interface CustomButtonProps {
    backgroundColor: string;
    Color: string;
    hoverColor: string;
    hoverBackgroundColor: string;
}

const ActionList = (actions: string[]) => {
    return (
        <div style={{
            display: "flex",
            flexDirection: "row",
            gap: "5px",
        }}>
            {
                actions.find(action => action === "View") && (
                    <CustomIconButton
                        backgroundColor={"white"}
                        Color={"#FF7500"}
                        hoverColor={"white"}
                        hoverBackgroundColor={"#FF7500"}
                    >
                        <BsEyeFill size={14} />
                    </CustomIconButton>
                )
            }
            {
                actions.find(action => action === "Edit") && (
                    <CustomIconButton
                        backgroundColor={"#f5fafb"}
                        Color={"#14b09d"}
                        hoverColor={"white"}
                        hoverBackgroundColor={"#14b09d"}
                    >
                        <BiPencil size={14} />
                    </CustomIconButton>
                )
            }
            {
                actions.find(action => action === "Delete") && (
                    <CustomIconButton
                        backgroundColor={"white"}
                        Color={"#FF7500"}
                        hoverColor={"white"}
                        hoverBackgroundColor={"#e56262"}
                    >
                        <MdDeleteForever size={14} />
                    </CustomIconButton>
                )
            }
        </div>
    );
}

const TableRowDeliveryMan = (props: TableRowDeliveryManProps) => {
    return (
        <tr style={{
            textAlign: "left",
            marginTop: "10px",
            padding: "20px"
        }}>
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
                color: "#21888f",
                display: "flex",
                flexDirection: "row",
            }}>
                <div>
                    <Image
                        src={props.imagePath}
                        alt="Picture of the author"
                        width={70}
                        height={70}
                        style={{
                            borderRadius: "50%",
                            maskImage: "radial-gradient(circle, black 50%, rgba(0, 0, 0, 0.5) 50%)"
                        }}
                    />
                </div>
                <div>
                    <div>
                        {props.name}
                    </div>
                    <div style={{
                        fontSize: "12px",
                        display: "flex",
                        flexDirection: "row",
                        gap: "5px",
                        color: "#00c9db"
                    }}>
                        <BsStarFill size={14} />
                        <Typography variant="p"
                            fontSize={"12px"}
                            fontWeight={"600"}

                        >{props.star}</Typography>
                    </div>
                </div>

            </td>
            <td style={{
                paddingLeft: "20px",
                paddingTop: "20px",
                fontSize: "14px",
                color: "#677788"
            }}>
                {"+" + props.contactInfo.substring(0, 1) + "*********"}
            </td>
            <td style={{
                paddingLeft: "20px",
                paddingTop: "20px",
                fontSize: "14px",
                color: "#677788"
            }}>
                {props.zone}
            </td>
            <td style={{
                paddingLeft: "20px",
                paddingTop: "20px",
                fontSize: "14px",
                color: "#677788"
            }}>
                {props.totalCompletedOrders}
            </td>
            <td style={{
                paddingLeft: "20px",
                paddingTop: "20px",
                fontSize: "14px",
                color: "#677788"
            }}>
                <div style={{
                    display: "flex",
                    flexDirection: "row",
                }}>
                    <Typography variant="p" fontSize={"12px"} fontWeight={"500"}>Total Order Assigned: </Typography>
                    <Typography variant="p" fontSize={"12px"} fontWeight={"500"}>{props.availabilityStatus.assigned}</Typography>
                </div>
                <div style={{
                    display: "flex",
                    flexDirection: "row",
                }}>
                    <Typography variant="p" fontSize={"12px"} fontWeight={"500"}>Active Status: </Typography>
                    <Typography variant="p" fontSize={"12px"} fontWeight={"600"}>{props.availabilityStatus.activeStatus ? "Online" : "Offline"}</Typography>
                </div>
            </td>
            <td style={{
                paddingLeft: "20px",
                paddingTop: "20px",
                fontSize: "14px",
                color: "#677788"
            }}>
                {props.status ? "Active" : "Inactive"}
            </td>
            <td style={{
                paddingTop: "20px",
                fontSize: "14px",
                color: "#677788"
            }}>
                {ActionList(props.action)}
            </td>
        </tr>
    )
}

export default TableRowDeliveryMan