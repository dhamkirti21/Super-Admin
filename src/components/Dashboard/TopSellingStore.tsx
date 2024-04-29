import React from 'react'
import { Box, Typography } from '@mui/material'

const TopSellingStore = () => {
    return (
        <Box sx={{
            display: "flex",
            padding: "10px",
            flexDirection: "column",
            alignItems: "center",
            width: "100%",
            gap: "10px",
        }}>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    padding: "16px",
                    alignItems: "center",
                    width: "100%",
                    gap: "10px",
                    borderRadius: "3px",
                    boxShadow: "1px 1.5px 1.5px 1px rgba(0, 0, 0, 0.1)",
                }}
            >
                <Typography variant="p" fontSize={"16px"} fontWeight={"500"} color={"#5b6777"}>Top Selling Store</Typography>

                <Typography variant="p" fontSize={"16px"} color={"blue"} fontWeight={"400"}><a href="#">View All</a></Typography>
            </Box>
            <Box
                sx={{
                    display: "flex",
                    padding: "30px",
                    flexDirection: "column",
                    alignItems: "center",
                    width: "100%",
                    gap: "10px",
                    borderRadius: "3px",
                    boxShadow: "1px 1.5px 1.5px 1px rgba(0, 0, 0, 0.1)",
                }}
            >


            </Box>
        </Box>

    )
}

export default TopSellingStore