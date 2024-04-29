"use client"
import CustomBox from '@/components/Shared/CustomComponents/CustomBox'
import PageHeader from '@/components/Shared/PageHeader'
import AnalyticsBox from '@/components/Users/AnalyticsBox'
import CustomerAnalytics from '@/components/Users/CustomerAnalytics'
import CustomerReviews from '@/components/Users/CustomerReviews'
import DeliveryMan from '@/components/Users/DeliveryMan'
import { Box, Grid, Typography, styled } from '@mui/material'
import React from 'react'

const UserSection = () => {

    const CustomHoverBox = styled('div')({
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        padding: "30px",
        width: "100%",
        marginBottom: "20px",
        backgroundColor: "white",
        borderRadius: "3px",
        boxShadow: "2px 6px 28px -18px rgba(0,0,0,0.75)",
        "&:hover": {
            boxShadow: "0px 2px 19px -9px rgba(0,0,0,0.75)",
            transition: "ease-in-out 0.15s"
        }
    })


    return (
        <>
            <PageHeader
                title="User Overview"
                path="/svg/users.svg"
                subtitle='Hello here you can manage your users by zone.'
                subtitleSize={14}
                iconSize={40}
            />
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "row",
                    gap: "10px"
                }}
            >
                <AnalyticsBox
                    title={"Total Users"}
                    left={23}
                    path={["/svg/users.svg", "/svg/users.svg"]}
                    total={23}
                    cardMainColor='#107980'
                />
                <AnalyticsBox
                    title={"Total DeliveryMan"}
                    left={4}
                    path={["/svg/users.svg", "/svg/users.svg"]}
                    total={6}
                    cardMainColor='#006ab4'
                />
                <AnalyticsBox
                    title={"Total Employee"}
                    left={3}
                    path={["/svg/users.svg", "/svg/users.svg"]}
                    total={5}
                    cardMainColor='#ffa800'
                />
            </Box >
            <Box
                sx={{
                    padding: "10px",
                }}
            >
                <Typography
                    variant="body2"
                    fontWeight={"600"}
                    fontSize={"16px"}
                >  Customer Statistics
                </Typography>
                <Grid
                    container
                    sx={{
                        display: "flex",
                        flexDirection: "row",
                        gap: "10px"
                    }}
                >
                    <Grid
                        item
                        lg={2}
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "10px"
                        }}
                    >
                        <CustomerAnalytics
                            icon="/svg/active.svg"
                            title="Active Customers"
                            mainColor="#008958"
                            total={5}
                        />
                        <CustomerAnalytics
                            icon="/svg/newly.svg"
                            title="Newly Joined"
                            mainColor="#006ab4"
                            total={1}
                        />
                        <CustomerAnalytics
                            icon="/svg/blocked.svg"
                            title="Active Customers"
                            mainColor="#ff5a54"
                            total={0}
                        />
                    </Grid>
                    <Grid
                        item
                        lg={5}
                    >
                        <CustomBox
                            style={{
                                width: "500px",
                            }}
                        >
                            Graph
                        </CustomBox>
                    </Grid>
                    <Grid
                        item
                        lg={4}
                        width={"100%"}
                    >
                        <CustomBox
                            style={{
                                width: "400px",
                            }}
                        >
                            <CustomerReviews
                                total_customer_reviews={4}
                                total_5_star_reviews={1}
                                total_4_star_reviews={0}
                                total_3_star_reviews={3}
                                total_2_star_reviews={0}
                                total_1_star_reviews={0}
                            />
                        </CustomBox>
                    </Grid>

                </Grid>
            </Box>
            <Grid
                container
                sx={{
                    display: "flex",
                    flexDirection: "row",
                    marginRight: "20px",
                    marginBottom: "30px"
                }}
            >
                <Grid
                    item
                    lg={8}
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                    }}
                >
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "row",
                            gap: "10px"
                        }}
                    >
                        <CustomerAnalytics
                            icon="/svg/users.svg"
                            title="Active Customers"
                            mainColor="#008958"
                            total={5}
                        />
                        <CustomerAnalytics
                            icon="/svg/users.svg"
                            title="Active Customers"
                            mainColor="#008958"
                            total={5}
                        />
                        <CustomerAnalytics
                            icon="/svg/users.svg"
                            title="Active Customers"
                            mainColor="#008958"
                            total={5}
                        />
                        <CustomerAnalytics
                            icon="/svg/users.svg"
                            title="Active Customers"
                            mainColor="#008958"
                            total={5}
                        />
                    </Box>
                    <Box>
                        Map
                    </Box>
                </Grid>
                <Grid
                    item
                    lg={4}
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                    }}
                >
                    <div
                        style={{
                            width: "330px",
                            display: "flex",
                            flexDirection: "column",
                        }}
                    >
                        <CustomBox
                            style={{
                                borderRadius: "30px 30px 0px 0px",
                                height: "70px",
                                boxShadow: "0px 0px 15px 0px rgba(0,0,0,0.075)",
                                display: "flex",
                                flexDirection: "row",
                                marginBottom: "10px",
                                justifyContent: "space-between",
                                alignItems: "center",
                            }}
                        >
                            <Typography
                                variant="body2"
                                fontWeight={"600"}
                                fontSize={"16px"}
                            >
                                Top Delivery Man
                            </Typography>

                            <a href="/users/delivery-man">
                                <Typography
                                    variant="body2"
                                    fontWeight={"550"}
                                    fontSize={"12px"}
                                    color={"blue"}
                                >
                                    View All
                                </Typography>
                            </a>
                        </CustomBox>
                        <CustomBox
                            style={{
                                borderRadius: " 0px 0px 10px 10px",
                                boxShadow: "0px 0px 15px 0px rgba(0,0,0,0.075)",
                                display: "flex",
                                paddingBottom: "20px",
                                flexDirection: "column",
                                justifyContent: "space-between",
                                alignItems: "center",
                            }}
                        >
                            <DeliveryMan
                                name="John Doe"
                                image="/svg/users.svg"
                                phone_number="01700000000"
                                total_orders={15}
                            />
                            <DeliveryMan
                                name="John Doe"
                                image="/svg/users.svg"
                                phone_number="01700000000"
                                total_orders={15}
                            />
                            <DeliveryMan
                                name="John Doe"
                                image="/svg/users.svg"
                                phone_number="01700000000"
                                total_orders={15}
                            />
                        </CustomBox>
                    </div>
                </Grid>

            </Grid >
        </>

    )
}

export default UserSection