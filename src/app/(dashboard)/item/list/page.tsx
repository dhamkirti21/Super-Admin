"use client"
import CustomBox from '@/components/Shared/CustomComponents/CustomBox'
import CustomHeader from '@/components/Shared/CustomComponents/CustomHeader'
import CustomTable, { ActionList, CustomTableRow } from '@/components/Shared/CustomComponents/CustomTable'
import CustomLabelInput from '@/components/Shared/CustomLabelInput'
import CustomButton from '@/components/styled/CustomButtonWithProps'
import CustomSearchButton from '@/components/styled/CustomSearchButton'
import { Autocomplete, Switch, TextField, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import { BiSearch } from 'react-icons/bi'

const Page = () => {

    const titles = [
        'SL',
        'Name',
        'Category',
        'Store',
        'Price',
        'Status',
        'Action'
    ]

    const RowData = [
        {
            sl: 1,
            name: "Lay's Classic Chips",
            category: "Category",
            store: "Store",
            imageUrl: "/images/lays.png",
            price: "91.5",
            status: true,
            action: ["Edit", "Delete"]
        },
    ]

    const TableRow = (RowData: any) => {
        return (
            <>
                {
                    RowData.map((data: any, index) => {
                        return (
                            <tr key={index}>
                                <CustomTableRow>
                                    {data.sl}
                                </CustomTableRow>
                                <CustomTableRow>
                                    <div className='flex flex-row gap-2'>
                                        <div className='flex flex-row gap-2 items-center'>
                                            <Image
                                                src={data.imageUrl}
                                                alt="Item Image"
                                                width={50}
                                                height={50}
                                            />
                                            <Typography
                                                variant='body2'
                                                className='font-bold text-medium w-40 text-black overflow-hidden truncate'
                                            >
                                                {data.name}
                                            </Typography>
                                        </div>
                                    </div>
                                </CustomTableRow>
                                <CustomTableRow>
                                    {data.category}
                                </CustomTableRow>
                                <CustomTableRow>
                                    {data.store}
                                </CustomTableRow>
                                <CustomTableRow>
                                    $ {data.price}
                                </CustomTableRow>
                                <CustomTableRow>
                                    <Switch
                                        defaultChecked={
                                            data.status ? true : false
                                        }
                                    />
                                </CustomTableRow>
                                <CustomTableRow>
                                    {ActionList(data.action)}
                                </CustomTableRow>
                            </tr>
                        )
                    })
                }
            </>
        )

    }
    return (
        <>
            <div className="p-2">
                <CustomHeader
                    title="Item List"
                    icon={
                        <Image
                            src="/images/items.png"
                            alt="Item List"
                            width={20}
                            height={20}
                        />
                    }
                    count={24}
                />
            </div>
            <CustomBox>
                <Typography variant="h5" className='font-bold'>
                    Search data
                </Typography>
                <div className="flex flex-row gap-4">
                    <CustomLabelInput
                        label=''
                        input={
                            <Autocomplete
                                options={["Stores"]}
                                renderInput={(params) =>
                                    <TextField
                                        {...params}
                                        placeholder="All Store"
                                        variant="outlined"
                                        size="small"
                                        style={{
                                            width: "250px"
                                        }}
                                        fullWidth
                                    />}
                            />
                        }
                    />
                    <CustomLabelInput
                        label=''
                        input={
                            <Autocomplete
                                options={["Stores"]}
                                renderInput={(params) =>
                                    <TextField
                                        {...params}
                                        placeholder="All Zone"
                                        variant="outlined"
                                        size="small"
                                        style={{
                                            width: "250px"
                                        }}
                                        fullWidth
                                    />}
                            />
                        }
                    />
                    <CustomLabelInput
                        label=''
                        input={
                            <Autocomplete
                                options={["Stores"]}
                                renderInput={(params) =>
                                    <TextField
                                        {...params}
                                        placeholder="All Category"
                                        variant="outlined"
                                        size="small"
                                        style={{
                                            width: "250px"
                                        }}
                                        fullWidth
                                    />}
                            />
                        }
                    />
                    <CustomLabelInput
                        label=''
                        input={
                            <Autocomplete
                                options={["Stores"]}
                                renderInput={(params) =>
                                    <TextField
                                        {...params}
                                        placeholder="All Sub Category"
                                        variant="outlined"
                                        size="small"
                                        style={{
                                            width: "250px"
                                        }}
                                        fullWidth
                                    />}
                            />
                        }
                    />

                </div>
            </CustomBox>
            <CustomBox>
                <div className="flex flex-row justify-end gap-2">
                    <div className='flex flex-row'>
                        <TextField
                            style={{ width: "220px" }}
                            placeholder="Search Item Name "
                            variant="outlined"
                        />
                        <CustomSearchButton>
                            <BiSearch size={15} />
                        </CustomSearchButton>
                    </div>
                    <div className='flex flex-row gap-2'>
                        <CustomButton
                            backgroundColor="#26cbd5"
                            Color="white"
                            hoverColor="white"
                            hoverBackgroundColor="#20a7af"
                        >Limted Stock</CustomButton>
                        <CustomButton
                            backgroundColor="#26cbd5"
                            Color="white"
                            hoverColor="white"
                            hoverBackgroundColor="#20a7af"
                        >New Product Request</CustomButton>
                    </div>
                </div>
                <CustomTable
                    titles={titles}
                    body={TableRow(RowData)}
                />
            </CustomBox>
        </>
    )
}

export default Page
