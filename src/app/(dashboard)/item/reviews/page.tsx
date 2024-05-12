"use client"
import CustomBox from '@/components/Shared/CustomComponents/CustomBox'
import CustomHeader from '@/components/Shared/CustomComponents/CustomHeader'
import CustomTable from '@/components/Shared/CustomComponents/CustomTable'
import CustomSearchButton from '@/components/styled/CustomSearchButton'
import { TextField } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import { BiSearch } from 'react-icons/bi'

const Page = () => {

    const titles = [
        "SL",
        "Item",
        "Customer",
        "Review",
        "Rating",
        "Status"
    ]
    return (
        <>
            <div className="p-2">
                <CustomHeader
                    title="Item Reviews"
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
