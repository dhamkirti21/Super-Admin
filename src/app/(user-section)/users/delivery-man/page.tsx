"use client"
import CustomBox from '@/components/Shared/CustomComponents/CustomBox'
import CustomHeader from '@/components/Shared/CustomComponents/CustomHeader'
import PageHeader from '@/components/Shared/PageHeader'
import TableRowDeliveryMan from '@/components/Users/TableRowDeliveryMan'
import CustomButton from '@/components/styled/CustomButtonWithProps'
import { Autocomplete, Tab, Table, TextField, Typography, styled } from '@mui/material'
import React from 'react'
import { BiDownload, BiSearch } from 'react-icons/bi'

const Page = () => {

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

    const titles = [
        "SL",
        "Name",
        "Contact Info",
        "Zone",
        "Total Completed Ordres",
        "Availablity Status",
        "Status",
        "Action"
    ]

    const TableData = [
        {
            sl: 1,
            name: "John Doe",
            contactInfo: "8991898198",
            imagePath: "/images/profile.png",
            star: 4,
            link: "#",
            zone: "Delhi",
            totalCompletedOrders: 20,
            availabilityStatus: {
                assigned: 10,
                activeStatus: true,
            },
            status: true,
            action: ["View", "Edit", "Delete"],
        },
        {
            sl: 1,
            name: "John Doe",
            contactInfo: "8991898198",
            imagePath: "/images/profile.png",
            star: 4,
            link: "#",
            zone: "Delhi",
            totalCompletedOrders: 20,
            availabilityStatus: {
                assigned: 10,
                activeStatus: true,
            },
            status: true,
            action: ["View", "Edit", "Delete"],
        },
    ]
    return (
        <>
            <PageHeader
                title="Delivery Man"
                path="/images/delivery-man.png"
            />
            <CustomBox>
                <div style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                }}>
                    <CustomHeader
                        title="DeliveryMan List"
                        count={6}
                    />
                    <div style={{
                        display: "flex",
                        flexDirection: "row",
                        gap: "5px",
                        alignItems: "center",
                    }}>
                        <Autocomplete
                            disablePortal
                            options={["Delhi"]}
                            size='small'
                            renderInput={(params) =>
                                <TextField {...params} label="All Types" style={{
                                    width: "150px",
                                    fontSize: "12px"
                                }} />
                            } />
                        <Autocomplete
                            disablePortal
                            options={["Delhi"]}
                            size='small'
                            renderInput={(params) =>
                                <TextField {...params} label="All Jobs Types" style={{
                                    width: "150px",
                                }} />
                            } />
                        <Autocomplete
                            disablePortal
                            options={["Delhi"]}
                            size='small'
                            renderInput={(params) =>
                                <TextField {...params} label="All Zones" style={{
                                    width: "150px",
                                }} />
                            } />

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
                                    fontSize: "14px",
                                    border: "1px solid #559da2",
                                    margin: "0",
                                }}
                            />

                            <CustomSearchButton style={{ margin: "0" }}>
                                <BiSearch size={14} color={"white"} />
                            </CustomSearchButton>
                        </div>
                    </div>
                </div>

                <div style={{
                    marginLeft: "auto",
                    marginRight: "10px",
                }}>
                    <CustomButton
                        backgroundColor='#559da2'
                        Color='white'
                        hoverColor='white'
                        hoverBackgroundColor='#3f7e82'
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            gap: "2px",
                            justifyContent: "space-between",
                        }}
                    >
                        <BiDownload size={14} />
                        <Typography variant="p" fontSize={"12px"} fontWeight={"600"}>Export</Typography>
                    </CustomButton>
                </div>

                <table>
                    <tr>
                        {

                            titles.map((title, index) => {
                                return (
                                    <th key={index} style={{
                                        fontSize: "12px",
                                        padding: "16px",
                                        color: "#334257",
                                        textAlign: "left",
                                        backgroundColor: "#f5f5f5",
                                    }}>{title}</th>
                                )
                            })
                        }
                    </tr>
                    {
                        TableData.map((data, index) => {
                            return (
                                <TableRowDeliveryMan
                                    key={index}
                                    sl={data.sl}
                                    name={data.name}
                                    contactInfo={data.contactInfo}
                                    imagePath={data.imagePath}
                                    zone={data.zone}
                                    totalCompletedOrders={data.totalCompletedOrders}
                                    availabilityStatus={data.availabilityStatus}
                                    status={data.status}
                                    action={data.action}
                                    link={data.link}
                                    star={data.star}
                                />
                            )
                        })
                    }
                </table>

            </CustomBox>
        </>
    );
} // Add a comma here

export default Page