"use client"
import React from 'react'
import Image from 'next/image'
import { Box, Switch, Typography, styled } from '@mui/material'
import { BiArrowFromLeft, BiPencil, BiSearch } from 'react-icons/bi'
import { FiDelete } from 'react-icons/fi'
import { MdDeleteForever } from 'react-icons/md'
import { IoIosArrowRoundForward } from 'react-icons/io'

const WithDrawMethodList = () => {

    const CustomSearchButton = styled('button')({
        display: 'flex',
        backgroundColor: '#559da2',
        padding: '12px',
        justifyContent: 'center',
        borderRadius: '0 5px 5px 0',
        border: 'none',
        alignItems: 'center',
        '&:hover': {
            backgroundColor: '#20a7af',
            cursor: "pointer"
        },
    });

    const CustomButton = styled('button')({
        display: 'flex',
        backgroundColor: '#24bac3',
        padding: '12px',
        justifyContent: 'center',
        borderRadius: '5px',
        border: 'none',
        alignItems: 'center',
        '&:hover': {
            backgroundColor: '#559da2',
            cursor: "pointer"
        },
    });

    const titles = [
        "SL",
        "Method Name",
        "Method Fields",
        "Active Status",
        "Default Method",
        "Action"
    ]

    const methodData = [
        {
            sl: 1,
            method_name: "6Cash",
            method_fields: [
                { "Name": "Account name" },
                { "Account Number": "String" },
                { "PlaceHolder": "Enter your account name" },
                { "Required": 1 }
            ],
            activeStatus: true,
            defaultMethod: false,
            actions: ["Edit", "Delete"]
        },

    ]

    interface CustomButtonProps {
        backgroundColor: string;
        Color: string;
        hoverColor: string;
        hoverBackgroundColor: string;
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

    const ActionList = (actions: string[]) => {
        return (
            <div style={{
                display: "flex",
                flexDirection: "row",
                gap: "5px",
            }}>
                {
                    actions.find(action => action === "Edit") && (
                        <CustomIconButton
                            backgroundColor={"#f5fafb"}
                            Color={"#14b09d"}
                            hoverColor={"white"}
                            hoverBackgroundColor={"#14b09d"}
                        >
                            <BiPencil size={20} />
                        </CustomIconButton>
                    )
                }
                {
                    actions.find(action => action === "Edit") && (
                        <CustomIconButton
                            backgroundColor={"white"}
                            Color={"#FF7500"}
                            hoverColor={"white"}
                            hoverBackgroundColor={"#e56262"}
                        >
                            <MdDeleteForever size={20} />
                        </CustomIconButton>
                    )
                }
            </div>
        );
    }

    interface MethodData {
        sl: number,
        method_name: string,
        method_fields: any,
        activeStatus: boolean,
        defaultMethod: boolean,
        actions: string[]
    }
    const TableMethodRow = (props: any) => {
        return (
            <tr style={{
                textAlign: "left",
                marginTop: "10px",
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
                    color: "#677788"
                }}>
                    {props.method_name}
                </td>
                <td style={{
                    paddingLeft: "20px",
                    paddingTop: "20px",
                    fontSize: "14px",
                    color: "#677788"
                }}>
                    {
                        props.method_fields.map((field: any, index: number) => {
                            return (
                                <div key={index} style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "5px",
                                }}>
                                    <div style={{
                                        display: "flex",
                                        flexDirection: "row",
                                        gap: "5px",
                                    }}>
                                        {
                                            Object.keys(field)[0] === "Required" && Object.values(field)[0] === 1 ? <Typography variant="p" fontSize={"14px"} fontWeight={"400"}>Required</Typography> : (
                                                <>
                                                    <Typography variant="p" fontSize={"14px"} fontWeight={"600"}>{Object.keys(field)[0]}</Typography>
                                                    <Typography variant="p" fontSize={"14px"} fontWeight={"400"}>:</Typography>
                                                    <Typography variant="p" fontSize={"14px"} fontWeight={"400"}>{Object.values(field)[0]}</Typography>
                                                </>
                                            )
                                        }
                                    </div>
                                </div>
                            );
                        })
                    }
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            justifyItems: "center",
                            gap: "5px",
                        }}
                    >
                        <Typography variant="p" fontSize={"12px"} color={"blue"} fontWeight={"600"}>
                            <a href="#">
                                See All
                            </a>
                        </Typography>
                        <IoIosArrowRoundForward size={25} color={"blue"} />
                    </div>
                </td>

                <td style={{
                    paddingLeft: "20px",
                    paddingTop: "20px",
                    fontSize: "14px",
                    color: "#677788"
                }}>

                    <Switch
                        defaultChecked={props.activeStatus ? true : false}
                        sx={{
                            padding: "10px",

                        }}
                    />
                </td>
                <td style={{
                    paddingLeft: "20px",
                    paddingTop: "20px",
                    fontSize: "14px",
                    color: "#677788"
                }}>

                    <Switch
                        defaultChecked={props.defaultMethod ? true : false}
                        sx={{
                            padding: "10px",
                        }}
                    />
                </td>
                <td style={{
                    paddingTop: "20px",
                    fontSize: "14px",
                    color: "#677788"
                }}>
                    {ActionList(props.actions)}
                </td>
            </tr>
        );
    }

    return (
        <>
            <div style={{
                display: "flex",
                gap: "10px",
                alignItems: "center",
                padding: "10px"
            }}>
                <Image
                    src="/images/withdraw.png"
                    alt="withdraw"
                    width={25}
                    height={25}
                />
                <Typography variant="p" fontSize={"20px"} fontWeight={"600"}>Withdraw Method List</Typography>
            </div>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "20px",
                    padding: "20px",
                    width: "98%",
                    marginLeft: "20px",
                    backgroundColor: "white",
                    borderRadius: "3px",
                    boxShadow: "0.5px 1px 1px 0.5px rgba(0, 0, 0, 0.1)",
                }}
            >
                <div
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        gap: "10px",
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}
                >
                    <div style={{
                        display: "flex",
                        flexDirection: "row",
                        gap: "0px",
                        alignItems: "center",
                    }}>
                        <input
                            type="text"
                            width="40px"
                            height={"10px"}
                            placeholder='Ex : search store name'
                            style={{
                                borderRadius: "5px 0 0 5px",
                                padding: "12px",
                                border: "1px solid #559da2",
                            }}
                        />

                        <CustomSearchButton>
                            <BiSearch size={16} color={"white"} />
                        </CustomSearchButton>
                    </div>
                    <CustomButton>
                        <Typography
                            variant="p"
                            fontSize={"14px"}
                            fontWeight={"600"}
                            paddingLeft={"10px"}
                            paddingRight={"10px"}
                            color={"white"}>
                            +  Add New Method
                        </Typography>
                    </CustomButton>
                </div>
                <table style={{
                    width: "104.25%",
                    marginLeft: "-23px",
                }}>
                    <tr style={{
                        backgroundColor: "#f8fafd",
                    }}>
                        {titles.map((title, index) => {
                            return (
                                <th key={index} style={{
                                    fontSize: "12px",
                                    padding: "16px",
                                    color: "#334257",
                                    textAlign: "left",
                                }}>{title}</th>
                            )
                        })}
                    </tr>
                    {methodData.map((data: MethodData, index) => {
                        return (
                            <TableMethodRow
                                key={index}
                                sl={data.sl}
                                method_name={data.method_name}
                                method_fields={data.method_fields}
                                actions={data.actions}
                            />
                        );
                    })}
                </table>
            </Box>
        </>
    );
}

export default WithDrawMethodList