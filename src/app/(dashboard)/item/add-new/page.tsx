"use client"
import CustomBox from '@/components/Shared/CustomComponents/CustomBox'
import CustomHeader from '@/components/Shared/CustomComponents/CustomHeader'
import CustomLabelInput from '@/components/Shared/CustomLabelInput'
import CustomButton from '@/components/styled/CustomButtonWithProps'
import { Autocomplete, Checkbox, TextField, TextareaAutosize, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import { CiShoppingTag } from 'react-icons/ci'
import { GrClipboard } from 'react-icons/gr'
import { LuSettings2 } from 'react-icons/lu'

const Page = () => {
    return (
        <>
            <div className="p-2 flex flex-row justify-between">
                <CustomHeader
                    title="Add New Item"
                    icon={
                        <Image
                            src="/images/items.png"
                            alt="Add New Item"
                            width={20}
                            height={20}
                        />
                    }
                />

                <CustomButton
                    backgroundColor='#f5feff'
                    Color="#107990"
                    hoverColor='#cee4e5'
                    hoverBackgroundColor='#107990'
                    style={{ border: "1px solid #107990" }}
                >
                    <div className='mr-2'>
                        <Image
                            src="/images/product-gallery.png"
                            alt="Add New Item"
                            width={20}
                            height={20}
                        />
                    </div>
                    Add Info From Gallary
                </CustomButton>
            </div >
            <div className="flex flex-col">
                <div className="flex flex-row">
                    <CustomBox>
                        <div className="flex flex-col gap-4">
                            <CustomLabelInput
                                label="Name (Default)"
                                input={
                                    <TextField
                                        variant="outlined"
                                        size="small"
                                        fullWidth
                                        placeholder='Enter name'
                                    />
                                }
                            />
                            <CustomLabelInput
                                label="Short description"
                                input={
                                    <TextareaAutosize
                                        variant="outlined"
                                        size="small"
                                        className='w-full'
                                        minRows={6}
                                    />
                                }
                            />
                        </div>
                    </CustomBox>
                    <CustomBox>
                        <CustomLabelInput
                            label="Short description"
                            input={
                                <TextareaAutosize
                                    variant="outlined"
                                    size="small"
                                    minRows={6}
                                />
                            }
                        />
                        <CustomLabelInput
                            label="Short description"
                            input={
                                <TextareaAutosize
                                    variant="outlined"
                                    size="small"
                                />
                            }
                        />
                    </CustomBox>
                </div>
                <CustomBox>
                    <CustomHeader
                        title="Store & Category Info"
                        icon={
                            <LuSettings2 size={20} />
                        }
                    />
                    <div className="flex flex-row gap-4">
                        <CustomLabelInput
                            label="Store"
                            input={
                                <Autocomplete
                                    options={["Autocomple"]}
                                    renderInput={(params) =>
                                        <TextField {...params}
                                            variant="outlined"
                                            size="small"
                                            placeholder='Select store'
                                            style={{ width: 250 }}
                                            required
                                        />}
                                />
                            }
                        />
                        <CustomLabelInput
                            label="Category"
                            input={
                                <Autocomplete
                                    options={["Autocomple"]}
                                    renderInput={(params) =>
                                        <TextField {...params}
                                            variant="outlined"
                                            size="small"
                                            placeholder='Select Category'
                                            style={{ width: 250 }}
                                            required
                                        />}
                                />
                            }
                        />
                        <CustomLabelInput
                            label="Sub Category"
                            input={
                                <Autocomplete
                                    options={["Autocomple"]}
                                    renderInput={(params) =>
                                        <TextField {...params}
                                            variant="outlined"
                                            size="small"
                                            placeholder='Select Sub Category'
                                            style={{ width: 250 }}
                                            required
                                        />}
                                />
                            }
                        />
                        <CustomLabelInput
                            label="Unit"
                            input={
                                <Autocomplete
                                    options={["Autocomple"]}
                                    renderInput={(params) =>
                                        <TextField {...params}
                                            variant="outlined"
                                            size="small"
                                            placeholder='Select Unit'
                                            style={{ width: 250 }}
                                            required
                                        />}
                                />
                            }
                        />
                    </div>
                    <div className="flex flex-row gap-4 items-center">
                        <CustomLabelInput
                            label="Maximum Purchase Quantity Limit"
                            input={
                                <TextField
                                    variant="outlined"
                                    size="small"
                                    placeholder='Ex 10'
                                    required
                                />
                            }
                        />
                        <div className='flex flex-row gap-1'>
                            <Checkbox
                                checked={true}
                                color="primary"
                                size="small"
                            />
                            <Typography variant="body2" style={{ fontSize: "14px", marginTop: "10px" }}>Is organic</Typography>
                        </div>
                        <div className='flex flex-row gap-1'>
                            <Checkbox
                                checked={true}
                                color="primary"
                                size="small"
                            />
                            <Typography variant="body2" style={{ fontSize: "14px", marginTop: "10px" }}>Is It Halal</Typography>
                        </div>
                    </div>
                </CustomBox>
                <CustomBox>
                    <CustomHeader
                        title="Price Information"
                        icon={
                            <CiShoppingTag size={20} />
                        }
                    />
                    <div className="flex flex-row gap-2">
                        <CustomLabelInput
                            label="Price"
                            input={
                                <TextField
                                    variant="outlined"
                                    size="small"
                                    defaultValue={"1"}
                                    style={{ width: 250 }}
                                    placeholder='Enter price'
                                    required
                                />
                            }
                        />
                        <CustomLabelInput
                            label="Total Price"
                            input={
                                <TextField
                                    variant="outlined"
                                    size="small"
                                    style={{ width: 250 }}
                                    placeholder='Ex 10'
                                    required
                                />
                            }
                        />
                        <CustomLabelInput
                            label="Discount type"
                            input={
                                <Autocomplete
                                    options={["Amount($)", "Percentage(%)"]}
                                    renderInput={(params) =>
                                        <TextField {...params}
                                            variant="outlined"
                                            size="small"
                                            placeholder='Ex 10'
                                            style={{ width: 250 }}
                                            required
                                        />
                                    }
                                />
                            }
                        />
                        <CustomLabelInput
                            label="Discount (%)"
                            input={
                                <TextField
                                    variant="outlined"
                                    size="small"
                                    defaultValue={"0"}
                                    style={{ width: 250 }}
                                    placeholder='Ex 10'
                                    required
                                />
                            }
                        />
                    </div>
                </CustomBox>
                <CustomBox>
                    <CustomHeader
                        title="Attribute"
                        icon={
                            <GrClipboard size={20} />
                        }
                    />
                    <CustomLabelInput
                        label="Attribute"
                        input={
                            <Autocomplete
                                options={["Autocomple"]}
                                renderInput={(params) =>
                                    <TextField {...params}
                                        variant="outlined"
                                        size="small"
                                        placeholder='Select Attribute'
                                        required
                                    />}
                            />
                        }
                    />
                </CustomBox>
                <CustomBox>
                    <CustomHeader
                        title="Tags"
                        icon={
                            <CiShoppingTag size={20} />
                        }
                    />
                    <CustomLabelInput
                        label="Tag"
                        input={
                            <TextField
                                variant="outlined"
                                size="small"
                                fullWidth
                                placeholder='Select Attribute'
                                required
                            />
                        }
                    />
                </CustomBox>
                <div className='flex flex-row p-2 justify-end gap-4'>
                    <CustomButton
                        backgroundColor='#f5feff'
                        Color="#107990"
                        hoverColor='#cee4e5'
                        hoverBackgroundColor='#107990'
                        style={{ border: "1px solid #107990" }}
                    >
                        Reset
                    </CustomButton>
                    <CustomButton
                        backgroundColor='#107990'
                        Color="#f5feff"
                        hoverColor='#107990'
                        hoverBackgroundColor='#f5feff'
                    >
                        Save
                    </CustomButton>
                </div>
            </div>
        </>
    )
}

export default Page
