import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react'
import { FaUser } from 'react-icons/fa6';

interface CustomerReviewsProps {
    total_customer_reviews: number,
    total_5_star_reviews: number,
    total_4_star_reviews: number,
    total_3_star_reviews: number,
    total_2_star_reviews: number,
    total_1_star_reviews: number
}

function caculatePercentage(total: number, total_reviews: number): number {
    return (total / total_reviews) * 100;
}

const reviewRatingComponent = (percentage: number, title: string) => {
    const totalGreen = Math.floor(percentage / 10);
    const totalGrey = 10 - totalGreen;

    return (
        <>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "row",
                    gap: "1px",
                    alignItems: "center",
                    width: "100%",
                    justifyContent: "space-between",
                    padding: "10px",
                    borderRadius: "5px",
                    backgroundColor: "#f8f9fb"
                }}
            >
                <Typography
                    variant="body2"
                    fontSize={"12px"}
                    width={"50px"}
                    fontWeight={"550"}
                    color={"#5970ab"}
                >
                    {title}
                </Typography>
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "row",
                        gap: "4px",
                        padding: "10px"
                    }}
                >
                    {[...Array(totalGreen)].map((e, i) => {
                        return (
                            <FaUser size={10} color={"#00aa6d"} key={i} />
                        )
                    })}
                    {[...Array(totalGrey)].map((e, i) => {
                        return (
                            <FaUser size={10} color={"#e8ebf3"} key={i} />
                        )
                    })}
                </Box>
                <Typography variant="body2" fontSize={"12px"} fontWeight={"500"} color={"#334257"} >
                    {percentage}%
                </Typography>
            </Box >
        </>
    )
}

const CustomerReviews = (props: CustomerReviewsProps) => {

    const { total_customer_reviews, total_5_star_reviews, total_4_star_reviews, total_3_star_reviews, total_2_star_reviews, total_1_star_reviews } = props;

    const Postive = caculatePercentage((total_5_star_reviews + total_4_star_reviews), total_customer_reviews);
    const Good = caculatePercentage(total_3_star_reviews, total_customer_reviews);
    const Neutral = caculatePercentage(total_2_star_reviews, total_customer_reviews);
    const Negative = caculatePercentage(total_1_star_reviews, total_customer_reviews);

    return (
        <Box sx={{
            display: "flex",
            flexDirection: "column",
            gap: "10px"
        }}>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "row",
                    gap: "10px",
                    alignItems: "center",
                    justifyContent: "space-between"
                }}
            >
                <Typography variant="body2" fontSize={"16px"} fontWeight={"600"} color={"#334257"} >
                    Customer Statisfaction
                </Typography>
                <Image
                    src="/images/satisfactions.png"
                    alt="star"
                    width="30"
                    height="30"
                />
            </Box>
            <Box sx={{
                paddingLeft: "10px",
            }}>
                <Typography variant="body2" fontSize={"16px"} fontWeight={"600"} >
                    {total_customer_reviews}
                </Typography>
                <Typography variant="body2" fontSize={"12px"} fontWeight={"400"} color={"#5e6779"}
                    sx={{
                        marginTop: "10px"
                    }}
                >
                    Review Received
                </Typography>
            </Box>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "5px",
                }}
            >
                {reviewRatingComponent(Postive, "Positive")}
                {reviewRatingComponent(Good, "Good")}
                {reviewRatingComponent(Neutral, "Neutral")}
                {reviewRatingComponent(Negative, "Negative")}
            </Box>

        </Box>
    )
}

export default CustomerReviews