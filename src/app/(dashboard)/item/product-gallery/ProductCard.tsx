import CustomBox from '@/components/Shared/CustomComponents/CustomBox'
import CustomButton from '@/components/styled/CustomButtonWithProps'
import { Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'


interface ProductCardProps {
    image: string,
    name: string,
    description?: string,
    generalInfo?: {
        category: string,
        subCategory: string,
        isOrganic: boolean,
        unit: string,
    }
    available_variations?: any[],
    tags?: string[],

}
const ProductCard = (props: ProductCardProps) => {
    return (
        <CustomBox>
            <div className="flex flex-col gap-2">
                <div className="flex flex-row gap-1 ">
                    <div className="p-4 ">
                        <Image
                            src={props.image}
                            width={80}
                            height={80}
                            className='object-cover mt-4'
                            alt="Product Card"
                        />
                    </div>
                    <div className="flex flex-col gap-4 ">
                        <div className="flex flex-row justify-between w-[900px] items-center">
                            <div>
                                <Typography
                                    variant="body2"
                                    className="font-bold text-lg"
                                >
                                    {props.name}
                                </Typography>
                            </div>
                            <CustomButton
                                backgroundColor='#f5feff'
                                Color="#107990"
                                hoverColor='#f5feff'
                                hoverBackgroundColor='#107990'
                                style={{ width: 250, height: 40, marginTop: "15px", border: "1px solid #107990", fontSize: "14px" }}
                            >
                                Use this Product Info
                            </CustomButton>
                        </div>
                        <div className="flex flex-row gap-24">
                            <div className="flex flex-col">
                                <Typography
                                    variant="body2"
                                    className="text-small font-bold mb-4"
                                >
                                    General Information
                                </Typography>
                                <div className="flex flex-row gap-2" style={{ fontSize: "12px" }}>
                                    <Typography
                                        variant="body2"
                                        className="text-small"
                                    >
                                        Category:
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        className="text-small"
                                    >
                                        {props.generalInfo?.category}
                                    </Typography>
                                </div>
                                <div className="flex flex-row gap-2 font-small">
                                    <Typography
                                        variant="body2"
                                        className="text-small"
                                    >
                                        Sub Category:
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        className="text-small"
                                    >
                                        {props.generalInfo?.subCategory}
                                    </Typography>
                                </div>
                                <div className="flex flex-row gap-2 font-small">
                                    <Typography
                                        variant="body2"
                                        className="text-small"
                                    >
                                        Is Organic:
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        className="text-small"
                                    >
                                        {props.generalInfo?.isOrganic ? "Yes" : "No"}
                                    </Typography>
                                </div>
                                <div className="flex flex-row gap-2 font-small">
                                    <Typography
                                        variant="body2"
                                        className="text-small"
                                    >
                                        Unit:
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        className="text-small"
                                    >
                                        {props.generalInfo?.unit}
                                    </Typography>
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <Typography
                                    variant="body2"
                                    className="text-small font-bold"
                                >
                                    Available Variations
                                </Typography>
                            </div>
                            <div className="flex flex-col">
                                <Typography
                                    variant="body2"
                                    className="text-small font-bold"
                                >
                                    Tags
                                </Typography>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='p-2  text-slate-600' style={{ fontSize: "12px" }} >
                    {props.description}
                </div>
            </div>

        </CustomBox>
    )
}

export default ProductCard
