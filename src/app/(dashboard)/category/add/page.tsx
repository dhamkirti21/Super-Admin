"use client"
import React, { useCallback } from 'react'
import Image from "next/image"
import { FormControl, InputLabel, MenuItem, Select, Switch, TextField } from '@mui/material'
import { MdOutlineAddToPhotos } from 'react-icons/md'
import CustomBox from '@/components/Shared/CustomComponents/CustomBox'
import CustomHeader from '@/components/Shared/CustomComponents/CustomHeader'
import CustomLabelInput from '@/components/Shared/CustomLabelInput'
import CustomButton from '@/components/styled/CustomButtonWithProps'
import CustomSearchButton from '@/components/styled/CustomSearchButton'
import { BiSearch } from 'react-icons/bi'
import { useDropzone } from 'react-dropzone'
import CustomTable, { ActionList, CustomTableRow } from '@/components/Shared/CustomComponents/CustomTable'
import { useSearchParams } from 'next/navigation'

const Page = () => {

    // const [image, setImage] = React.useState(null);

    const onDrop = useCallback(acceptedFiles => {
        console.log("Gel")
    }, [])

    const searchParams = useSearchParams();
    const position = searchParams.get("position");

    let pageTitle = ""
    let tableTitle = ""

    if (position == "0") {
        pageTitle = "Add Category"
        tableTitle = "Category List"
    } else {
        pageTitle = "Add SubCategory"
        tableTitle = "SubCategory List"
    }

    const titles = [
        "SL",
        "Id",
        "Name",
        "Status",
        "Featured",
        "Priority",
        "Action"
    ]

    const RowData = [
        {
            sl: 1,
            Id: 12,
            name: "Home and Kitchen Appliances",
            status: true,
            featured: true,
            priority: "Normal",
            action: ["Edit", "Delete"]
        }
    ]


    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })


    const TableRow = (RowData: any) => {
        return (
            <>
                {
                    RowData.map((item, index) => {
                        return (
                            <tr key={index}>
                                <CustomTableRow>
                                    {item.sl}
                                </CustomTableRow>
                                <CustomTableRow>
                                    {item.Id}
                                </CustomTableRow>
                                <CustomTableRow>
                                    <div className="w-40 overflow-hidden">
                                        <p className="truncate">
                                            {item.name}
                                        </p>
                                    </div>
                                </CustomTableRow>
                                <CustomTableRow>
                                    <Switch
                                        defaultChecked={
                                            item.status ? true : false
                                        }
                                    />
                                </CustomTableRow>
                                <CustomTableRow>
                                    <Switch
                                        defaultChecked={
                                            item.featured ? true : false
                                        }
                                    />
                                </CustomTableRow>
                                <CustomTableRow>
                                    <FormControl fullWidth className='w-20 font-small'>
                                        <Select size="small">
                                            <MenuItem value="Normal">
                                                Normal
                                            </MenuItem>
                                            <MenuItem value="Medium">
                                                Medium
                                            </MenuItem>
                                            <MenuItem value="High">
                                                High
                                            </MenuItem>
                                        </Select>
                                    </FormControl>
                                </CustomTableRow>
                                <CustomTableRow>
                                    {ActionList(item.action)}
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
                    title={pageTitle}
                    icon={
                        <MdOutlineAddToPhotos size={20} />
                    }
                />
            </div>
            <CustomBox>
                <div className="flex flex-row gap-12">
                    <CustomLabelInput
                        label="Name (Default)"
                        input={
                            <TextField
                                variant="outlined"
                                fullWidth
                                size="small"
                                sx={{ width: "400px" }}
                                placeholder="Enter Category Name"
                            />
                        }
                    />

                    <CustomLabelInput
                        label="Image (1:1)"
                        input={
                            <div {...getRootProps()} style={{ cursor: "pointer" }}
                                className='w-[200px] h-[200px] rounded-md p-2 bg-slate-400 border-2 border-dashed border-slate-600 '
                            >
                                <input {...getInputProps()} />
                                {
                                    isDragActive ?
                                        <Image
                                            src="/images/upload-img.png"
                                            width={200}
                                            height={200}
                                            alt="upload image"
                                            className="object-cover"
                                        /> :
                                        <Image
                                            src="/images/upload-img.png"
                                            width={200}
                                            height={200}
                                            alt="upload image"
                                            className="object-none"
                                        />
                                }
                            </div>
                        }
                    />
                </div>
                <div className="flex flex-row justify-end gap-6">
                    <CustomButton
                        backgroundColor="#cccccc"
                        Color="#404c5d"
                        hoverColor="#404c5d"
                        hoverBackgroundColor="#dbdcdc"
                    >Reset</CustomButton>
                    <CustomButton
                        backgroundColor="#26cbd5"
                        Color="white"
                        hoverColor="white"
                        hoverBackgroundColor="#20a7af"
                    >Submit</CustomButton>
                </div>
            </CustomBox>

            <CustomBox>
                <div className="flex flex-row justify-between">
                    <CustomHeader
                        title={tableTitle}
                        count={6}
                    />
                    <div className='flex flex-row'>
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
                    body={TableRow(RowData)}
                />
            </CustomBox >
        </>
    )
}

export default Page
