"use client"
import CustomBox from '@/components/Shared/CustomComponents/CustomBox'
import CustomHeader from '@/components/Shared/CustomComponents/CustomHeader'
import CustomLabelInput from '@/components/Shared/CustomLabelInput'
import CustomButton from '@/components/styled/CustomButtonWithProps'
import { Autocomplete, TextField } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import ProductCard from './ProductCard'

const page = () => {

    const products = [
        {
            image: "/images/coffee.png",
            name: "Coffee",
            description: "Lizol Floor Cleaner 500ml Lavender Disinfectant Surface Cleaner removes 100 types of stains and 100 germ strains.",
            generalInfo: {
                category: "Beverages",
                subCategory: "Hot Beverages",
                isOrganic: true,
                unit: "Cup"
            },
            available_variations: [],
            tags: ["Coffee", "Beverages"]
        }
    ]
    return (
        <>
            <div className="p-2">
                <CustomHeader
                    title="Product Gallary"
                    icon={
                        <Image
                            src="/images/product-gallery.png"
                            width={20}
                            height={20}
                            alt="Product Gallary"
                        />
                    }
                />
            </div>
            <CustomBox>
                <div className="flex flex-row gap-2 items-center">
                    <CustomLabelInput
                        label=" "
                        input={
                            <Autocomplete
                                options={["Store"]}
                                renderInput={(params) => (
                                    <TextField
                                        {...params}
                                        label="All Store"
                                        variant="outlined"
                                        size="small"
                                        style={{ width: 250 }}
                                    />
                                )}
                            />
                        }
                    />
                    <CustomLabelInput
                        label=" "
                        input={
                            <Autocomplete
                                options={["Store"]}
                                renderInput={(params) => (
                                    <TextField
                                        {...params}
                                        label="All Category"
                                        variant="outlined"
                                        size="small"
                                        style={{ width: 250 }}
                                    />
                                )}
                            />
                        }
                    />
                    <CustomLabelInput
                        label=" "
                        input={
                            <TextField
                                placeholder="Search Product"
                                variant="outlined"
                                size="small"
                                style={{ width: 250 }}
                            />
                        }
                    />
                    <div>
                        <CustomButton
                            backgroundColor='#107990'
                            Color="#f5feff"
                            hoverColor='#107990'
                            hoverBackgroundColor='#f5feff'
                            style={{ width: 150, height: 40, marginTop: "15px", border: "1px solid #107990" }}
                        >
                            Serarch
                        </CustomButton>
                    </div>
                </div>
            </CustomBox>
            <div className="flex flex-col gap-2 overflow-y-scroll">
                {
                    products.map((product, index) => {
                        return (
                            <ProductCard
                                key={index}
                                image={product.image}
                                name={product.name}
                                description={product.description}
                                generalInfo={product.generalInfo}
                                available_variations={product.available_variations}
                                tags={product.tags}


                            />
                        )
                    })
                }
            </div>

        </>
    )
}

export default page
