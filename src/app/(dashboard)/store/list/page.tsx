"use client"
import CustomBox from '@/components/Shared/CustomComponents/CustomBox'
import CustomHeader from '@/components/Shared/CustomComponents/CustomHeader'
import CustomLabelInput from '@/components/Shared/CustomLabelInput'
import CustomSearchButton from '@/components/styled/CustomSearchButton'
import { Autocomplete, Button, IconButton, TextField, Typography } from '@mui/material'
import TableRow from './TableRow'
import Image from 'next/image'
import React from 'react'
import { BiSearch } from 'react-icons/bi'
import { CgSortAz } from 'react-icons/cg'
import { CiCircleCheck } from 'react-icons/ci'
import { GiTeePipe } from 'react-icons/gi'
import { IoMdDownload } from 'react-icons/io'
import { RiBillLine } from 'react-icons/ri'


interface DataboxProps {
    title: string
    value: number
    icon: React.ReactNode
    valueColor: string
    backgroundColor: string
}

const page = () => {
    const DataBox = ({
        title,
        value,
        icon,
        valueColor,
        backgroundColor
    }: DataboxProps) => {
        return (
            <div className="flex flex-col gap-2 rounded-xl p-6" style={{ backgroundColor: backgroundColor }}>
                <div className="flex flex-row gap-32 ">
                    <Typography
                        variant='h5'
                        className='font-bold'
                        style={{ color: valueColor }}
                    >
                        {value}
                    </Typography>
                    {icon}
                </div>
                <Typography
                    variant='body2'
                    className='font-bold text-[14px]'
                >
                    {title}
                </Typography>
            </div>
        )

    }

    const DataBoxdata = [
        {
            iconpath: "/images/total-store.png",
            title: "Total Stores",
            value: 15,
            valueColor: "#16abcb",
            backgroundColor: "#eafbff"

        },
        {
            iconpath: "/images/total-store.png",
            title: "Total Stores",
            value: 15,
            valueColor: "#16abcb",
            backgroundColor: "#eafbff"

        },
        {
            iconpath: "/images/total-store.png",
            title: "Total Stores",
            value: 15,
            valueColor: "#16abcb",
            backgroundColor: "#eafbff"

        },
        {
            iconpath: "/images/total-store.png",
            title: "Total Stores",
            value: 15,
            valueColor: "#16abcb",
            backgroundColor: "#eafbff"

        },
    ]

    const titles = [
        "SL",
        "Store Information",
        "Owner Information",
        "Zone",
        "Featured",
        "Status",
        "Action"
    ]

    const RowData = [
        {
            sl: 1,
            store_info: {
                path: "/images/wallet.png",
                name: "Store Name",
                id: "1234"

            },
            ownerInfo: {
                name: "Owner Name",
                phone: "012564584",
            },
            zone: "Zone",
            featured: true,
            status: true,
            action: ["View", "Edit", "Delete"]
        }
    ]

    return (
        <>
            <div className="p-2">
                <CustomHeader
                    title="Stores"
                    icon={
                        <CgSortAz size={40} />
                    }
                    count={5}
                />
                <div className="flex flex-row gap-4">
                    {
                        DataBoxdata.map((data, index) => {
                            return (
                                <div className="flex flex-row-gap-2">
                                    <DataBox
                                        key={index}
                                        title={data.title}
                                        value={data.value}
                                        icon={
                                            <Image
                                                loading="lazy"
                                                src={data.iconpath}
                                                alt={data.title}
                                                width={40}
                                                height={40}
                                            />
                                        }
                                        valueColor={data.valueColor}
                                        backgroundColor={data.backgroundColor}
                                    />
                                </div>
                            )
                        })
                    }
                </div>
                <CustomBox className='ml-0 mt-6 p-2'>
                    <div className="flex flex-row gap-14">
                        <div className="flex flex-row gap-2 items-center text-[#2b85b4]">
                            <RiBillLine size={20} />
                            <Typography
                                variant='body2'
                                className='text-[12px] font-medium'
                            >TOTAL TRANSACTIONS</Typography>
                            <Typography
                                variant='body2'
                                className=' text-[14px]'
                            >15</Typography>
                        </div>
                        <div className='w-[1px] h-[35px] bg-slate-800'></div>
                        <div className="flex flex-row gap-2 items-center text-[#25b49a]">
                            <div className="bg-[#cceee2] rounded-full p-1">
                                <CiCircleCheck size={20} />
                            </div>
                            <Typography
                                variant='body2'
                                className='text-[12px] font-medium'
                            >COMMISSION EARNED</Typography>
                            <Typography
                                variant='body2'
                                className=' text-[14px]'
                            >$ 60,491.19</Typography>
                        </div>
                        <div className='w-[1px] h-[35px] bg-slate-800'></div>
                        <div className="flex flex-row gap-2 items-center text-[#f96262]">
                            <GiTeePipe size={20} />
                            <Typography
                                variant='body2'
                                className='text-[12px] font-medium'
                            >TOTAL STORE WITHDRAWS</Typography>
                            <Typography
                                variant='body2'
                                className=' text-[14px]'
                            >$ 4,236.36</Typography>
                        </div>
                    </div>
                </CustomBox>
                <CustomBox className='ml-0 mt-6 '>
                    <div className="flex flex-row justify-between">
                        <CustomHeader
                            title="Stores List"
                        />
                        <div className="flex flex-row gap-2">
                            <Autocomplete
                                options={["Jaipur"]}
                                renderInput={(params) => (
                                    <TextField
                                        {...params}
                                        style={{ width: "220px" }}
                                        placeholder="All Zone"
                                        variant="outlined"
                                        size="small"
                                    />
                                )}
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
                            <Button
                                className='flex gap-2 text-[#25b49a] border-1 rounded-medium border-[#25b49a]'
                                variant='outlined'
                            >
                                <IoMdDownload size={20} />
                                <Typography
                                    variant='body2'
                                    className='text-[14px] font-medium'
                                >
                                    Export
                                </Typography>
                            </Button>
                        </div>
                    </div>
                    <table className='w-[105%]' style={{ marginLeft: "-20px" }}>
                        <tbody>
                            <tr className='bg-[#f8fafd] w-full'>
                                {
                                    titles.map((title, index) => {
                                        return (
                                            <td key={index} style={{
                                                fontSize: "12px",
                                                padding: "16px",
                                                fontWeight: "bold",
                                                color: "#334257",
                                                textAlign: "left",
                                            }}>
                                                {title}
                                            </td>
                                        )
                                    })
                                }
                            </tr>
                            {
                                RowData.map((data, index) => {
                                    return (
                                        <TableRow
                                            key={index}
                                            sl={data.sl}
                                            store_info={data.store_info}
                                            ownerInfo={data.ownerInfo}
                                            zone={data.zone}
                                            featured={data.featured}
                                            status={data.status}
                                            action={data.action}
                                        />
                                    )
                                })
                            }
                        </tbody>
                    </table>

                </CustomBox>
            </div>
        </>
    )
}

export default page
