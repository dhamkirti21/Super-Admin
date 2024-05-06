"use client"
import CustomBox from '@/components/Shared/CustomComponents/CustomBox'
import CustomHeader from '@/components/Shared/CustomComponents/CustomHeader'
import CustomTable from '@/components/Shared/CustomComponents/CustomTable'
import CustomLabelInput from '@/components/Shared/CustomLabelInput'
import CustomSearchButton from '@/components/styled/CustomSearchButton'
import { Autocomplete, TextField } from '@mui/material'
import React from 'react'
import { BiSearch } from 'react-icons/bi'
import { TiGroup } from 'react-icons/ti'

const page = () => {

    const titles = [
        "SL",
        "Name",
        "Contact Information",
        "Total Orders",
        "Total Orders Amount",
        "Joining Date",
        "Active/Inactive",
        "Actions"
    ]

    return (
        <>
            <div className="p-2">
                <CustomHeader
                    title='Customer List'
                    icon={
                        <TiGroup
                            size={30}
                        />
                    }
                    count={24}
                />
            </div>
            <CustomBox>
                <div className='flex flex-row gap-4 items-center'>
                    <CustomLabelInput
                        label=" "
                        input={
                            <Autocomplete
                                options={["store"]}
                                style={{ width: 250 }}
                                renderInput={(params) =>
                                    <TextField {...params}
                                        placeholder='All Stores'
                                        size="small"
                                        variant="outlined"
                                    />}
                            />
                        }

                    />
                    <CustomLabelInput
                        label=" "
                        input={
                            <Autocomplete
                                options={["store"]}
                                style={{ width: 250 }}
                                renderInput={(params) =>
                                    <TextField {...params}
                                        placeholder='Total Orders (High to Low)'
                                        size="small"
                                        variant="outlined"
                                    />}
                            />
                        }

                    />
                    <CustomLabelInput
                        label=" "
                        input={
                            <Autocomplete
                                options={["store"]}
                                style={{ width: 250 }}
                                renderInput={(params) =>
                                    <TextField {...params}
                                        placeholder='All Customers'
                                        size="small"
                                        variant="outlined"
                                    />}
                            />
                        }

                    />
                    <div className='flex flex-row mt-4'>
                        <TextField
                            style={{ width: "220px" }}
                            placeholder="Search Store"
                            variant="outlined"
                            size="small"
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

export default page
