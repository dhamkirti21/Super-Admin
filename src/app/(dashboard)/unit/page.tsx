"use client"
import CustomBox from '@/components/Shared/CustomComponents/CustomBox'
import CustomHeader from '@/components/Shared/CustomComponents/CustomHeader'
import CustomTable, { ActionList, CustomTableRow } from '@/components/Shared/CustomComponents/CustomTable'
import CustomLabelInput from '@/components/Shared/CustomLabelInput'
import CustomButton from '@/components/styled/CustomButtonWithProps'
import CustomSearchButton from '@/components/styled/CustomSearchButton'
import { TextField } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import { BiSearch } from 'react-icons/bi'

const Page = () => {


    const titles = [
        'SL',
        'Unit',
        'Action'
    ]

    const RowData = [
        {
            sl: 1,
            name: "Kg",
            action: ["Edit", "Delete"]
        }
    ]

    const TableRow = (RowData: any) => {
        return (
            <>
                {
                    RowData.map((data, index) => {
                        return (
                            <tr key={index}>
                                <CustomTableRow>
                                    {data.sl}
                                </CustomTableRow>
                                <CustomTableRow>
                                    {data.name}
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
                    title="Add New Unit"
                    icon={
                        <Image
                            src="/images/attribute.png"
                            alt="attribute"
                            width={30}
                            height={30}
                        />
                    }
                />
            </div>
            <CustomBox>
                <CustomLabelInput
                    label="Name (Default)"
                    input={
                        <TextField
                            size="small"
                            placeholder='Enter Attribute Name'
                            variant="outlined"
                            fullWidth
                            required
                        />
                    }
                />
                <div className="flex flex-row jutify-end gap-6">
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
                        title="Unit List"
                        count={5}
                    />

                    <div className="flex flex-row gap-2">
                        <div className='flex flex-row'>
                            <TextField
                                style={{ width: "220px" }}
                                placeholder="Ex attribute"
                                variant="outlined"
                                size="small"
                            />
                            <CustomSearchButton>
                                <BiSearch size={15} />
                            </CustomSearchButton>
                        </div>
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
