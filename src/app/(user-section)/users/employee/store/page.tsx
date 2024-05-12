"use client"
import CustomBox from '@/components/Shared/CustomComponents/CustomBox'
import PageHeader from '@/components/Shared/PageHeader'
import { Autocomplete, TextField, Typography, styled } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import { FaUser } from 'react-icons/fa6'

const Page = () => {

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

    return (
        <>
            <PageHeader
                title="Add New Employee"
                path="/images/role.png"
            />
            <div>
                <CustomBox
                    style={{
                        borderRadius: '10px 10px 0 0',
                        display: 'flex',
                        flexDirection: 'row',
                        color: "#5b6777"
                    }}
                >
                    <FaUser />
                    <p style={{
                        fontSize: "16px",
                        fontWeight: "600"
                    }}>General Information</p>
                </CustomBox>
                <CustomBox
                    style={{
                        marginTop: "0px",
                        position: "relative",
                        top: "-19px",
                        display: "flex",
                        flexDirection: "column",
                    }}
                >
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "row",
                        }}
                    >
                        <div style={{
                            display: "flex",
                            flexDirection: "row",
                            gap: "20px"
                        }}>
                            <div>
                                <div>
                                    <div style={{
                                        display: "flex",
                                        flexDirection: "row"
                                    }}>
                                        <label>First Name</label>
                                        <p style={{
                                            color: "red",
                                            fontSize: "14px",
                                            marginLeft: "5px"
                                        }}>*</p>
                                    </div>
                                    <TextField
                                        type="text"
                                        name="first_name"
                                        fullWidth
                                        placeholder="First Name"
                                        sx={{
                                            marginTop: "8px",
                                            fontSize: "11px",
                                            width: "350px"
                                        }}
                                    />
                                </div>
                                <div>
                                    <div style={{
                                        display: "flex",
                                        flexDirection: "row",
                                        marginTop: "8px"
                                    }}>
                                        <label>Phone</label>
                                        <p style={{
                                            color: "red",
                                            fontSize: "14px",
                                            marginLeft: "5px"
                                        }}>*</p>
                                    </div>
                                    <TextField
                                        type="number"
                                        name="first_name"
                                        fullWidth
                                        placeholder="Phone"
                                        sx={{
                                            marginTop: "8px",
                                            fontSize: "11px",
                                            width: "350px"
                                        }}
                                    />
                                </div>
                                <div>
                                    <div style={{
                                        display: "flex",
                                        flexDirection: "row",
                                        marginTop: "8px"
                                    }}>
                                        <label>Zone</label>
                                        <p style={{
                                            color: "red",
                                            fontSize: "14px",
                                            marginLeft: "5px"
                                        }}>*</p>
                                    </div>
                                    <Autocomplete
                                        sx={{
                                            marginTop: "8px",
                                            width: "350px"
                                        }}
                                        options={["Zone"]}
                                        renderInput={(params) => <TextField {...params} label="Enter your Zone" />}
                                    />
                                </div>
                            </div>
                            <div>
                                <div>
                                    <div style={{
                                        display: "flex",
                                        flexDirection: "row"
                                    }}>
                                        <label>Last Name</label>
                                        <p style={{
                                            color: "red",
                                            fontSize: "14px",
                                            marginLeft: "5px"
                                        }}>*</p>
                                    </div>
                                    <TextField
                                        type="text"
                                        name="first_name"
                                        fullWidth
                                        placeholder="Last Name"
                                        sx={{
                                            marginTop: "8px",
                                            fontSize: "11px",
                                            width: "350px"
                                        }}
                                    />
                                </div>
                                <div>
                                    <div style={{
                                        display: "flex",
                                        flexDirection: "row",
                                        marginTop: "8px"
                                    }}>
                                        <label>Role</label>
                                        <p style={{
                                            color: "red",
                                            fontSize: "14px",
                                            marginLeft: "5px"
                                        }}>*</p>
                                    </div>
                                    <Autocomplete
                                        sx={{
                                            marginTop: "8px",
                                            width: "350px"
                                        }}
                                        options={["Zone"]}
                                        renderInput={(params) => <TextField {...params} label="Enter your Role" />}
                                    />
                                </div>
                            </div>
                            <div style={{
                                display: "flex",
                                flexDirection: "column",
                                gap: "10px"
                            }}>
                                <Typography
                                    variant='body2'
                                    style={{
                                        fontSize: "16px",
                                    }}
                                >Delivery Man Image</Typography>
                                <Typography
                                    variant='body2'
                                    style={{
                                        fontSize: "12px",
                                        color: "red"
                                    }}
                                >(Ratio  1:1)</Typography>
                                <div>
                                    <Image
                                        src="/images/admin.png"
                                        alt="Upload Image"
                                        width={200}
                                        height={200}
                                    />
                                </div>
                                <input
                                    type="file"
                                    style={{
                                        border: "none",
                                        backgroundColor: "#f5f5f5",
                                        color: "#5b6777",
                                        width: "200px",
                                        padding: "10px 20px",
                                        borderRadius: "5px",
                                        fontSize: "12px",
                                        cursor: "pointer"
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </CustomBox >
            </div >
            <div>
                <CustomBox
                    style={{
                        borderRadius: '10px 10px 0 0',
                        display: 'flex',
                        flexDirection: 'row',
                        color: "#5b6777"
                    }}
                >
                    <FaUser />
                    <p style={{
                        fontSize: "16px",
                        fontWeight: "600"
                    }}>Login Information</p>
                </CustomBox>
                <CustomBox
                    style={{
                        marginTop: "0px",
                        position: "relative",
                        top: "-19px",
                        display: "flex",
                        flexDirection: "column",
                    }}
                >
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            gap: "20px"
                        }}
                    >
                        <div>
                            <div style={{
                                display: "flex",
                                flexDirection: "row"
                            }}>
                                <label>Phone</label>
                                <p style={{
                                    color: "red",
                                    fontSize: "14px",
                                    marginLeft: "5px"
                                }}>*</p>
                            </div>
                            <TextField
                                type="number"
                                name="first_name"
                                fullWidth
                                placeholder=""
                                sx={{
                                    marginTop: "8px",
                                    fontSize: "11px",
                                    width: "300px"
                                }}
                            />
                        </div>
                        <div>
                            <div style={{
                                display: "flex",
                                flexDirection: "row"
                            }}>
                                <label>Password</label>
                                <p style={{
                                    color: "red",
                                    fontSize: "14px",
                                    marginLeft: "5px"
                                }}>*</p>
                            </div>
                            <TextField
                                type="number"
                                name="first_name"
                                fullWidth
                                placeholder="Password"
                                sx={{
                                    marginTop: "8px",
                                    fontSize: "11px",
                                    width: "300px"
                                }}
                            />
                        </div>
                        <div>
                            <div style={{
                                display: "flex",
                                flexDirection: "row"
                            }}>
                                <label>Confirm Password</label>
                                <p style={{
                                    color: "red",
                                    fontSize: "14px",
                                    marginLeft: "5px"
                                }}>*</p>
                            </div>
                            <TextField
                                type="number"
                                name="first_name"
                                fullWidth
                                placeholder="Confirm Password"
                                sx={{
                                    marginTop: "8px",
                                    fontSize: "11px",
                                    width: "300px"
                                }}
                            />
                        </div>
                    </div>
                    <div style={{
                        display: "flex",
                        flexDirection: "row",
                        gap: "20px",
                        position: "relative",
                        left: "-40px",
                        justifyContent: "flex-end",
                    }}>
                        <CustomButton
                            backgroundColor="#cccccc"
                            Color="#404c5d"
                            hoverColor="#404c5d"
                            hoverBackgroundColor="#dbdcdc"
                        >Cancel</CustomButton>
                        <CustomButton
                            backgroundColor="#26cbd5"
                            Color="white"
                            hoverColor="white"
                            hoverBackgroundColor="#20a7af"
                        >Submit</CustomButton>
                    </div>
                </CustomBox>
            </div>
        </>
    )
}

export default Page
