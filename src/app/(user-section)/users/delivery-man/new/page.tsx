"use client"
import CustomBox from '@/components/Shared/CustomComponents/CustomBox'
import PageHeader from '@/components/Shared/PageHeader'
import { Autocomplete, TextField, Typography, styled } from '@mui/material'
import React from 'react'
import { BiSearch } from 'react-icons/bi'
import { CgSortAz } from 'react-icons/cg'

const Page = () => {

    const pagination = (title: string, link: string, active: boolean) => {
        return (
            <a href={link}>
                <Typography variant="body2" style={{
                    cursor: "pointer",
                    fontSize: "14px",
                    borderBottom: active ? "4px solid #24bac3" : "none",
                    paddingBottom: "5px",
                    color: active ? "#24bac3" : "#334257",
                    fontWeight: "bold"
                }}>
                    {title}
                </Typography>
            </a>
        )
    }

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

    const titles = ["SL", "Name", "Contact Info", "Zone", "Join Request Date", "Action"]

    return (
        <>
            <PageHeader
                title="New Joining Request"
                headerIcon={<CgSortAz size={30} />}
            />
            <div style={{
                display: 'flex',
                justifyContent: 'flex-end',
            }}>
                <Autocomplete
                    options={["Delhi"]}
                    style={{ width: 200, fontSize: "11px", marginRight: "30px" }}
                    renderInput={(params) => <TextField {...params} label="Zone" variant="outlined" />}
                />
            </div>
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                marginLeft: "20px",
                gap: "12px",
            }}>
                {pagination("Pending Delivery Man", "/users/delivery-man/new", true)}
                {pagination("Denied Delivery Man", "/users/delivery-man/deny", false)}
            </div>
            <CustomBox>
                <div style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                }}>
                    <div style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        gap: "10px"
                    }}>
                        <Typography
                            variant="body2"
                            style={{
                                fontSize: "14px",
                                color: "#5b6777",
                                fontWeight: "bold",
                            }}
                        >
                            Deliveryman List
                        </Typography>
                        <p
                            style={{
                                backgroundColor: "#e7e8ec",
                                borderRadius: "5px",
                                padding: "6px",
                                fontSize: "12px",
                                color: "#132144",
                            }}
                        >
                            0
                        </p>
                    </div>
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
                            placeholder='Ex : Search by Name, Phone, Email, Zone, Status'
                            style={{
                                borderRadius: "5px 0 0 5px",
                                padding: "8px",
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
                        <tr>

                        </tr>
                    </tbody>
                </table>
            </CustomBox >
        </>
    )
}

export default Page