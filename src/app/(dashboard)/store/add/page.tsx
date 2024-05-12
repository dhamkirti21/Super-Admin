"use client"
import CustomBox from '@/components/Shared/CustomComponents/CustomBox'
import CustomHeader from '@/components/Shared/CustomComponents/CustomHeader'
import CustomLabelInput from '@/components/Shared/CustomLabelInput'
import { Autocomplete, FormControl, InputLabel, MenuItem, Select, TextField, TextareaAutosize, Typography, styled } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import { BsGrid1X2Fill } from 'react-icons/bs'
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

    const [open, setOpen] = React.useState(false);
    return (
        <>
            <div className='p-2'>
                <CustomHeader
                    title="Add Store"
                    icon={
                        <Image
                            src="/images/role.png"
                            alt="Store"
                            width={20}
                            height={20}
                        />
                    }
                />
            </div>
            <div className="flex flex-row p-2">
                <CustomBox className='flex flex-col gap-2'>
                    <CustomLabelInput
                        label="Name (Default)"
                        input={
                            <TextField
                                variant="outlined"
                                size="small"
                                fullWidth
                                fontSize="12px"
                                placeholder="Enter your Store Name"
                            />
                        }
                    />
                    <CustomLabelInput
                        label="Address (Default)"
                        input={
                            <TextareaAutosize
                                variant="outlined"
                                fullWidth
                                minRows={5}
                                fontSize="12px"
                                style={{
                                    width: "100%",
                                    border: "1px solid #ccc",
                                    borderRadius: "5px",
                                    padding: "10px"
                                }}
                                placeholder="Store"
                            />
                        }
                    />
                </CustomBox>
                <CustomBox>
                    <div className="text-slate-500">
                        <CustomHeader
                            title="Store Logo & Covers"
                            icon={
                                <BsGrid1X2Fill size={20} />
                            }
                        />
                    </div>
                    <div className="flex flex-row gap-4">
                        <div className="p-2">
                            <Typography
                                variant="caption"
                                className="text-slate-500"
                            >
                                Store Logo <span className='text-green-600'>(1:1)</span>
                            </Typography>
                            <div>
                                <input
                                    type="file"
                                    accept="image/*"
                                    style={{ display: "none" }}
                                />
                            </div>
                        </div>
                        <div className="p-2">
                            <Typography
                                variant="caption"
                                className="text-slate-500"
                            >
                                Store Cover <span className='text-green-600'>(2:1)</span>
                            </Typography>
                            <div>
                                <input
                                    type="file"
                                    style={{ display: "none" }}
                                />
                            </div>
                        </div>
                    </div>
                </CustomBox>
            </div>
            <CustomBox>
                <div className="text-slate-500">
                    <CustomHeader
                        title="Store Information"
                        icon={
                            <Image
                                src="/images/resturant.png"
                                alt="Store"
                                width={20}
                                height={20}
                            />
                        }
                    />
                </div>

                <div className="pt-4">
                    <div className="flex flex-row-4 gap-4">
                        <CustomLabelInput
                            label="Vat/tax (%)"
                            input={
                                <TextField
                                    variant="outlined"
                                    size="small"
                                    fullWidth
                                    fontSize="12px"
                                    style={{ width: "450px" }}
                                    placeholder="Vat/tax"
                                />
                            }
                        />
                        <CustomLabelInput
                            label="Estimated Delivery Time ( Min & Maximum Time)"
                            input={
                                <div onClick={() => setOpen(!open)} className='border-1 border-slate-800 bg-slate-200 rounded-md h-[40px]'
                                    style={{
                                        cursor: "pointer",
                                        width: "450px"
                                    }}
                                >
                                </div>
                            }
                        />
                        <dialog open={open} className='bg-white w-[400px] h-[200px] rounded-md ml-16 border-2 border-slate-500 p-4'>
                            <div className='flex flex-row gap-2 items-center'>
                                <CustomLabelInput
                                    label="Minimum Time"
                                    input={
                                        <TextField
                                            variant="outlined"
                                            size="small"
                                            style={{ width: "100px" }}
                                            fontSize="12px"
                                            placeholder="Minimum Time"
                                        />
                                    }
                                />
                                <CustomLabelInput
                                    label="Minimum Time"
                                    input={
                                        <TextField
                                            variant="outlined"
                                            size="small"
                                            style={{ width: "100px" }}
                                            fontSize="12px"
                                            placeholder="Minimum Time"
                                        />
                                    }
                                />
                                <CustomLabelInput
                                    label="Unit"
                                    input={
                                        <FormControl>
                                            <Select
                                                size="small"
                                                style={{ width: "100px" }}
                                            >
                                                <MenuItem selected>Minutues</MenuItem>
                                                <MenuItem>Hours</MenuItem>
                                                <MenuItem>Days</MenuItem>
                                            </Select>
                                        </FormControl>
                                    }
                                />
                            </div>
                            <div className="flex justify-end mt-4 mr-8 gap-2">
                                <button onClick={() => setOpen(!open)} className='bg-slate-500 text-white px-4 py-2 rounded-md'>
                                    Cancel
                                </button>
                                <button onClick={() => setOpen(!open)} className='bg-green-500 text-white px-4 py-2 rounded-md'>
                                    Save
                                </button>
                            </div>
                        </dialog>
                    </div>
                    <div className="flex flex-row gap-4 mt-2">
                        <div className="flex flex-col gap-2">
                            <CustomLabelInput
                                label='Zone'
                                input={
                                    <Autocomplete
                                        options={['Zone 1', 'Zone 2', 'Zone 3']}
                                        renderInput={(params) => <TextField
                                            {...params}
                                            size="small"
                                            placeholder="Zone"
                                            style={{ width: "300px" }}
                                            variant="outlined"
                                        />}
                                    />
                                }
                            />
                            <CustomLabelInput
                                label='Latitude'
                                input={
                                    <TextField
                                        variant="outlined"
                                        size="small"
                                        disabled
                                        fullWidth
                                        fontSize="12px"
                                        style={{ width: "300px" }}
                                        placeholder="Latitude"
                                    />
                                }
                            />
                            <CustomLabelInput
                                label='Longitude'
                                input={
                                    <TextField
                                        variant="outlined"
                                        size="small"
                                        fullWidth
                                        disabled
                                        fontSize="12px"
                                        style={{ width: "300px" }}
                                        placeholder="Longitude"
                                    />
                                }
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            Map
                        </div>
                    </div>
                </div>
            </CustomBox>
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
                }}>Owner Information</p>
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
                            <label>First Name</label>
                            <p style={{
                                color: "red",
                                fontSize: "14px",
                                marginLeft: "5px"
                            }}>*</p>
                        </div>
                        <TextField
                            name="first_name"
                            fullWidth
                            placeholder="First Name"
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
                            <label>Last Name</label>
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
                            placeholder="Last Name"
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
                                width: "300px"
                            }}
                        />
                    </div>
                </div>
            </CustomBox>
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
                            <label>Email</label>
                            <p style={{
                                color: "red",
                                fontSize: "14px",
                                marginLeft: "5px"
                            }}>*</p>
                        </div>
                        <TextField
                            name="first_name"
                            fullWidth
                            placeholder="Email"
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
        </>
    )
}

export default Page