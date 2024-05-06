"use client"
import CustomBox from '@/components/Shared/CustomComponents/CustomBox'
import PageHeader from '@/components/Shared/PageHeader'
import { Autocomplete, Menu, MenuItem, Select, TextField, Typography, styled } from '@mui/material'
import React from 'react'
import { BiDownload, BiSearch } from 'react-icons/bi'
import { FaSortAmountDown, FaUserAlt } from 'react-icons/fa'
import TableRow from './TableRow'

const AccountTransaction = () => {
    const [collectFrom, setCollectFrom] = React.useState<string>("Store")


    const handleSelectChange = (event: React.ChangeEvent<{ value: string }>) => {
        setCollectFrom(event.target.value as string);
    };

    interface CustomButtonProps {
        backgroundColor: string;
        Color: string;
        hoverColor: string;
        hoverBackgroundColor: string;
    }
    const CustomSearchButton = styled('button')({
        display: 'flex',
        backgroundColor: '#5faeb4',
        padding: '12px',
        justifyContent: 'center',
        borderRadius: '0 5px 5px 0',
        border: 'none',
        alignItems: 'center',
        '&:hover': {
            backgroundColor: '#559da2',
            cursor: "pointer"
        },
    });

    const CustomButton = styled('button')<CustomButtonProps>(({ backgroundColor, Color, hoverColor, hoverBackgroundColor }) => ({
        backgroundColor: backgroundColor,
        color: `${Color}`,
        padding: "10px",
        paddingLeft: "40px",
        paddingRight: "40px",
        display: 'flex',
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

    const titles = [
        "SL",
        "Collect From",
        "Type",
        "Recieved At",
        "Amount",
        "Reference",
        "Action"
    ]

    const RowData = [
        {
            sl: 1,
            collect_from: "Click & Collect",
            type: "Store",
            received_at: "2021-10-10",
            amount: 100,
            reference: "Store",

        },
        {
            sl: 2,
            collect_from: "Store",
            received_at: "2021-10-10",
            type: "Store",
            amount: 100,
            reference: "Store",

        }
    ]

    return (
        <>
            <PageHeader
                title="Collect Cash Transaction"
                path="/images/collect-cash.png"
            />
            <CustomBox>
                <div
                    style={{
                        display: "flex",
                        width: "100%",
                        gap: "10px"
                    }}>
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "20px",
                            width: "33.33%"
                        }}>

                        <Typography variant="body2" fontSize={"14px"} fontWeight={"600"}>
                            Collect From
                        </Typography>
                        <select onChange={handleSelectChange}
                            style={{
                                width: "250px",
                                padding: "20px",
                                fontSize: "18px",
                                color: "#666666",
                                borderRadius: "5px",
                            }}
                        >
                            <option value="Store">Store</option>
                            <option value="Deliveryman">Deliveryman</option>
                        </select>
                    </div>
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "20px",
                            width: "33.33%"
                        }}>

                        <Typography variant="body2" fontSize={"14px"} fontWeight={"600"}>Store</Typography>
                        <Autocomplete
                            id="combo-box-demo"
                            options={["Dhaba", "dfd"]}
                            sx={{ width: 250 }}
                            disabled={collectFrom === "Store" ? false : true}
                            renderInput={(params) => <TextField {...params} label="Select Store" />}
                        />
                    </div>
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "20px",
                            width: "33.33%"
                        }}>

                        <Typography variant="body2" fontSize={"14px"} fontWeight={"600"}>Store</Typography>
                        <Autocomplete
                            id="combo-box-demo"
                            options={["Dhaba", "dfd"]}
                            sx={{ width: 250 }}
                            disabled={collectFrom === "Store" ? true : false}
                            renderInput={(params) => <TextField {...params} label="Select DeliveryMan" />}
                        />
                    </div>
                </div>
                <div
                    style={{
                        display: "flex",
                        width: "100%",
                        gap: "10px"
                    }}>
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "20px",
                            width: "33.33%"
                        }}>

                        <Typography variant="body2" fontSize={"14px"} fontWeight={"600"}> Payment Method</Typography>
                        <TextField id="outlined-basic" label="Enter Payment Method" variant="outlined" sx={{
                            width: "250px"
                        }} />
                    </div>
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "20px",
                            width: "33.33%"
                        }}>

                        <Typography variant="body2" fontSize={"14px"} fontWeight={"600"}>Refrence</Typography>
                        <TextField id="outlined-basic" label="" variant="outlined" sx={{
                            width: "250px"
                        }} />
                    </div>
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "20px",
                            width: "33.33%"
                        }}>

                        <Typography variant="body2" fontSize={"14px"} fontWeight={"600"}>Amount $</Typography>
                        <TextField type="number" id="outlined-basic" label="Enter Amount" variant="outlined" sx={{
                            width: "250px"
                        }} />
                    </div>
                </div>
                <div style={{
                    display: "flex",
                    gap: "20px",
                    justifyContent: "flex-end"
                }}>
                    <CustomButton
                        backgroundColor={"#f1f3f5"}
                        Color={"#636d7a"}
                        hoverColor={"#636d7a"}
                        hoverBackgroundColor={"#dbdcdc"}
                    >
                        Reset
                    </CustomButton>
                    <CustomButton
                        backgroundColor={"#24bac3"}
                        Color={"#fff"}
                        hoverColor={"#fff"}
                        hoverBackgroundColor={"#20a7af"}
                    >
                        Collect Cash
                    </CustomButton>
                </div>
            </CustomBox>
            <CustomBox>
                <div
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        gap: "5px",
                        alignItems: "center",
                        justifyContent: "space-between",
                    }}
                >
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            gap: "6px",
                            alignItems: "center",
                        }}
                    >
                        <Typography variant="body2" fontSize={"16px"} fontWeight={"600"}>
                            Transaction History
                        </Typography>
                        <Typography
                            variant="body2"
                            fontSize={"12px"}
                            fontWeight={"600"}
                            padding={"5px"}
                            borderRadius={"10px"}
                            backgroundColor={"#F5F5F5"}
                        >
                            6
                        </Typography>
                    </div>
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            gap: "10px",
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
                                placeholder='Ex : search delivery man'
                                style={{
                                    borderRadius: "5px 0 0 5px",
                                    padding: "12px",
                                    border: "1px solid #559da2",
                                }}
                            />

                            <CustomSearchButton >
                                <BiSearch size={16} color={"white"} />
                            </CustomSearchButton>
                        </div>
                        <CustomButton
                            backgroundColor={"#24bac3"}
                            Color={"#fff"}
                            hoverColor={"#fff"}
                            hoverBackgroundColor={"#20a7af"}
                        >
                            <BiDownload size={20} />
                            Export
                        </CustomButton>
                    </div>
                </div>
                <table style={{
                    width: "105.25%",
                    marginLeft: "-23px",
                }}>
                    <tbody>
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
                            RowData.map((data, index) => {
                                return (<TableRow
                                    key={index}
                                    sl={data.sl}
                                    collect_from={data.collect_from}
                                    type={data.type}
                                    received_at={data.received_at}
                                    amount={data.amount}
                                    reference={data.reference}
                                />)
                            })
                        }
                    </tbody>
                </table>
            </CustomBox>
        </>
    )
}

export default AccountTransaction