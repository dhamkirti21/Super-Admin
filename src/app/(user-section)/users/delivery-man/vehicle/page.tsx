'use client'
import PageHeader from '@/components/Shared/PageHeader'
import { FaCar, FaEye } from 'react-icons/fa6'
import React from 'react'
import CustomHoverBox from '@/components/Shared/CustomComponents/CustomHoverBox'
import { Switch, Typography, styled } from '@mui/material'
import CustomBox from '@/components/Shared/CustomComponents/CustomBox'
import { BiPencil, BiSearch } from 'react-icons/bi'
import { MdDeleteForever } from 'react-icons/md'
import { totalmem } from 'os'
import { IoIosArrowRoundForward } from 'react-icons/io'
import { BsEyeFill } from 'react-icons/bs'

const VechileCategory = () => {

    const CustomSearchButton = styled('button')({
        display: 'flex',
        backgroundColor: '#99a7ba',
        padding: '12px',
        justifyContent: 'center',
        borderRadius: '0 5px 5px 0',
        border: 'none',
        alignItems: 'center',
        '&:hover': {
            backgroundColor: '#8a96a7',
            cursor: "pointer"
        },
    });

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

    const CustomButton = styled('button')<CustomButtonProps>(({ backgroundColor, Color, hoverColor, hoverBackgroundColor }) => ({
        backgroundColor: backgroundColor,
        color: `${Color}`,
        padding: "5px 30px 5px 30px",
        display: 'flex',
        height: "40px",
        fontSize: '14px',
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
                            hoverBackgroundColor={"#e56262"}
                        >
                            <BsEyeFill size={20} />
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

    const titles = [
        "Sl",
        "Types",
        "Total DeliveryMan",
        "Minumum Coverage Area(Km)",
        "Maximum",
        "Extra Charges($)",
        "Action"
    ]

    const TableData = [
        {
            sl: 1,
            type: "Bike",
            totalDeliveryMan: 10,
            minCoverageArea: 1001,
            maxCoverageArea: 5000,
            extraCharges: 10,
            status: "Active",
            actions: ["View", "Edit", "Delete"]
        },
        {
            sl: 1,
            type: "Bicycle",
            totalDeliveryMan: 0,
            minCoverageArea: 0,
            maxCoverageArea: 1000,
            extraCharges: 10,
            status: "Active",
            actions: ["View", "Edit", "Delete"]
        }
    ]

    return (
        <>
            <div
                style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignContent: "center",
                }}
            >
                <div
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        gap: "10px",
                        padding: "10px",
                        alignItems: "center"
                    }}
                >
                    <PageHeader
                        title="Vehicle Category List"
                        headerIcon={<FaCar size={20} />} />
                    <p
                        style={{
                            backgroundColor: "#e7e8ec",
                            borderRadius: "5px",
                            padding: "6px",
                            fontSize: "12px",
                            color: "#132144",
                        }}
                    >
                        6
                    </p>
                </div>
                <CustomButton
                    backgroundColor={"#24bac3"}
                    Color={"#fff"}
                    hoverColor={"#fff"}
                    hoverBackgroundColor={"#20a7af"}
                    style={{
                        position: "relative",
                        top: "20px"
                    }}
                >
                    + Add Vehicle Category
                </CustomButton>
            </div>
            <CustomBox
                style={{
                    marginTop: "20px"
                }}
            >
                <div style={{
                    marginLeft: "auto"
                }}>
                    <div style={{
                        display: "flex",
                        flexDirection: "row",
                        gap: "0px",
                        alignItems: "center",
                    }}>
                        <input
                            type="text"
                            width="40px"
                            height={10}
                            placeholder='Ex : search by Type'
                            style={{
                                borderRadius: "5px 0 0 5px",
                                padding: "8px",
                                fontSize: "14px",
                                border: "1px solid #559da2",
                            }}
                        />

                        <CustomSearchButton >
                            <BiSearch size={16} color={"white"} />
                        </CustomSearchButton>
                    </div>
                </div>
                <table style={{
                    width: "104.25%",
                    marginLeft: "-23px",
                }}> <tbody>
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
                        {
                            TableData.map((props, index) => {
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
                                            color: "#21888f"
                                        }}>
                                            <a href="/users/delivery-man/vehicle/view/2">
                                                {props.type}
                                            </a>
                                        </td>
                                        <td style={{
                                            paddingLeft: "20px",
                                            paddingTop: "20px",
                                            fontSize: "14px",
                                            color: "#677788"
                                        }}>
                                            {props.totalDeliveryMan}
                                        </td>
                                        <td style={{
                                            paddingLeft: "20px",
                                            paddingTop: "20px",
                                            fontSize: "14px",
                                            color: "#677788"
                                        }}>
                                            {props.minCoverageArea}
                                        </td>
                                        <td style={{
                                            paddingLeft: "20px",
                                            paddingTop: "20px",
                                            fontSize: "14px",
                                            color: "#677788"
                                        }}>
                                            {props.maxCoverageArea}
                                        </td>
                                        <td style={{
                                            paddingLeft: "20px",
                                            paddingTop: "20px",
                                            fontSize: "14px",
                                            color: "#677788"
                                        }}>
                                            <Switch
                                                defaultChecked={props.status === "Active" ? true : false}
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
                                )
                            })
                        }
                    </tbody>
                </table>

            </CustomBox>
        </>
    )
}

export default VechileCategory