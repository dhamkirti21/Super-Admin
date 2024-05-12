"use client"
import CustomBox from '@/components/Shared/CustomComponents/CustomBox'
import CustomHoverBox from '@/components/Shared/CustomComponents/CustomHoverBox'
import PageHeader from '@/components/Shared/PageHeader'
import { Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'

const Dispatch = () => {

    const activeDeliveryMan = 5;


    return (
        <>
            <PageHeader
                title='Dispatch Overview'
                subtitle='Monitor your Dispatch Management Statistics by zone'
                path="/svg/users.svg"
                iconSize={40}
            />
            <div className="flex flex-row gap-2 w-full">
                <div className="flex flex-col gap-4 w-full">
                    <div className="flex flex-row gap-2 w-full">
                        <CustomHoverBox className='p-8 '>
                            <div className="flex flex-row gap-6 items-center">
                                <div>
                                    <Image
                                        src="/svg/dispatch/active.svg"
                                        width={30}
                                        height={30}
                                        alt='active'
                                    />
                                </div>
                                <Typography
                                    variant='h4'
                                    className='font-bold text-green-700'

                                >
                                    {activeDeliveryMan}
                                </Typography>
                            </div>
                            <Typography
                                variant='body2'
                                className='font-normal text-gray-700 mt-2'
                            >
                                Active Delivery Man
                            </Typography>

                        </CustomHoverBox>
                        <CustomHoverBox className='p-8 '>
                            <div className="flex flex-row gap-6 items-center">
                                <div>
                                    <Image
                                        src="/svg/dispatch/newly.svg"
                                        width={30}
                                        height={30}
                                        alt='active'
                                    />
                                </div>
                                <div className='flex flex-col gap-2'>
                                    <Typography
                                        variant='h4'
                                        className='font-bold text-red-700'

                                    >
                                        {activeDeliveryMan}
                                    </Typography>
                                    <Typography
                                        variant='body2'
                                        className='font-normal text-gray-700 mt-2'
                                    >
                                        In Active
                                    </Typography>
                                </div>
                                <div className='flex flex-col gap-2'>
                                    <Typography
                                        variant='h4'
                                        className='font-bold text-red-700'

                                    >
                                        {activeDeliveryMan}
                                    </Typography>
                                    <Typography
                                        variant='body2'
                                        className='font-normal text-gray-700 mt-2'
                                    >
                                        Suspended
                                    </Typography>
                                </div>


                            </div>

                        </CustomHoverBox>
                    </div>
                    <div className="flex flex-row gap-2 w-full">
                        <CustomHoverBox className='p-8 '>
                            <div className="flex flex-row gap-6 items-center">
                                <div>
                                    <Image
                                        src="/svg/dispatch/active.svg"
                                        width={30}
                                        height={30}
                                        alt='active'
                                    />
                                </div>
                                <Typography
                                    variant='h4'
                                    className='font-bold text-green-700'

                                >
                                    0
                                </Typography>
                            </div>
                            <Typography
                                variant='body2'
                                className='font-normal text-gray-700 mt-2'
                            >
                                Fully Booked Delivery Man
                            </Typography>

                        </CustomHoverBox>
                        <CustomHoverBox className='p-8 '>
                            <div className="flex flex-row gap-6 items-center">
                                <div>
                                    <Image
                                        src="/svg/dispatch/active.svg"
                                        width={30}
                                        height={30}
                                        alt='active'
                                    />
                                </div>
                                <Typography
                                    variant='h4'
                                    className='font-bold text-red-700'

                                >
                                    {activeDeliveryMan}
                                </Typography>
                            </div>
                            <Typography
                                variant='body2'
                                className='font-normal text-gray-700 mt-2'
                            >
                                Available to Assign Orders
                            </Typography>

                        </CustomHoverBox>
                    </div>
                </div>
                <CustomBox style={{ maxWidth: "400px", backgroundColor: "white", marginTop: "-12px" }}>
                    <div className="flex flex-col gap-2">
                        <div className="flex flex-row gap-4 justify-between bg-slate-200 p-6 rounded-md">
                            <div className='flex flex-row gap-2'>
                                <Image
                                    src="/svg/dispatch/unassigned.svg"
                                    width={30}
                                    height={30}
                                    alt='unasssigned'
                                />
                                <Typography
                                    variant='h6'
                                    fontSize={"16px"}
                                    className='font-medium text-gray-700'
                                >
                                    Unassigned Orders
                                </Typography>
                            </div>
                            <Typography
                                variant='h5'
                                className='font-bold text-blue-700'
                            >
                                5
                            </Typography>

                        </div>
                        <div className="flex flex-row gap-4 justify-between bg-slate-200 p-6 rounded-md">
                            <div className='flex flex-row gap-2'>
                                <Image
                                    src="/svg/dispatch/unassigned.svg"
                                    width={30}
                                    height={30}
                                    alt='unasssigned'
                                />
                                <Typography
                                    variant='h6'
                                    fontSize={"16px"}
                                    className='font-medium text-gray-700'
                                >
                                    Unassigned Orders
                                </Typography>
                            </div>
                            <Typography
                                variant='h5'
                                className='font-bold text-blue-700'
                            >
                                5
                            </Typography>

                        </div>
                        <div className="flex flex-row gap-4 justify-between bg-slate-200 p-6 rounded-md">
                            <div className='flex flex-row gap-2'>
                                <Image
                                    src="/svg/dispatch/unassigned.svg"
                                    width={30}
                                    height={30}
                                    alt='unasssigned'
                                />
                                <Typography
                                    variant='h6'
                                    fontSize={"16px"}
                                    className='font-medium text-gray-700'
                                >
                                    Unassigned Orders
                                </Typography>
                            </div>
                            <Typography
                                variant='h5'
                                className='font-bold text-blue-700'
                            >
                                5
                            </Typography>

                        </div>
                    </div>
                </CustomBox>
            </div>
            <div className="p-12">
                Maps
            </div>
        </>
    )
}

export default Dispatch
