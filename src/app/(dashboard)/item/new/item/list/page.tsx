"use client"
import CustomBox from '@/components/Shared/CustomComponents/CustomBox'
import CustomHeader from '@/components/Shared/CustomComponents/CustomHeader'
import CustomTable from '@/components/Shared/CustomComponents/CustomTable'
import CustomLabelInput from '@/components/Shared/CustomLabelInput'
import CustomSearchButton from '@/components/styled/CustomSearchButton'
import { Autocomplete, TextField } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import { BiSearch } from 'react-icons/bi'

const Page = () => {

    const titles = [
        "SL",
        "Name",
        "Category",
        "Price",
        "Status",
        "Action"
    ]
    return (
        <>
            <div className="p-2">
                <CustomHeader
                    title="New Item Requests"
                    icon={
                        <Image
                            src="/images/items.png"
                            width={30}
                            height={30}
                            alt="Item"
                        />
                    }
                    count={0}
                />
            </div>
            <CustomBox>
                <div className="flex flex-col gap-1">
                    <div className="flex flex-row gap-6">
                        <CustomLabelInput
                            label=""
                            input={
                                <Autocomplete
                                    options={["Store"]}
                                    style={{ width: 200 }}
                                    renderInput={(params) =>
                                        <TextField {...params}
                                            placeholder="All Stores"
                                            size="small"
                                            variant="outlined"
                                        />}

                                />
                            }
                        />
                        <CustomLabelInput
                            label=""
                            input={
                                <Autocomplete
                                    options={["Store"]}
                                    style={{ width: 200 }}
                                    renderInput={(params) =>
                                        <TextField {...params}
                                            placeholder="All Zones"
                                            size="small"
                                            variant="outlined"
                                        />}

                                />
                            }
                        />
                        <CustomLabelInput
                            label=""
                            input={
                                <Autocomplete
                                    options={["Store"]}
                                    style={{ width: 200 }}
                                    renderInput={(params) =>
                                        <TextField {...params}
                                            placeholder="All Category"
                                            size="small"
                                            variant="outlined"
                                        />}

                                />
                            }
                        />
                        <CustomLabelInput
                            label=""
                            input={
                                <Autocomplete
                                    options={["Store"]}
                                    style={{ width: 200 }}
                                    renderInput={(params) =>
                                        <TextField {...params}
                                            placeholder="All Sub Category"
                                            size="small"
                                            variant="outlined"
                                        />}

                                />
                            }
                        />
                    </div>
                    <div className="flex flex-row gap-6">
                        <CustomLabelInput
                            label=""
                            input={
                                <Autocomplete
                                    options={["Store"]}
                                    style={{ width: 200 }}
                                    renderInput={(params) =>
                                        <TextField {...params}
                                            placeholder="All Types"
                                            size="small"
                                            variant="outlined"
                                        />}

                                />
                            }
                        />
                    </div>
                </div>

            </CustomBox>
            <CustomBox>
                <div className='flex flex-row justify-end'>
                    <div className='flex flex-row'>
                        <TextField
                            style={{ width: "220px" }}
                            size="small"
                            placeholder="Search Item Name "
                            variant="outlined"
                        />
                        <CustomSearchButton>
                            <BiSearch size={15} />
                        </CustomSearchButton>
                    </div>
                </div>
                <CustomTable
                    titles={titles}
                />
            </CustomBox>

        </>
    )
}

export default Page
