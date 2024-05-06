import Image from "next/image";
import styles from "./dashboard.module.css";
import { Box } from "@mui/material";
import DataSwitcher from "@/components/Dashboard/DataSwitcher";
import CustomCard from "@/components/Dashboard/CustomCard";
import CustomNumberCard from "@/components/Dashboard/CustomNumberCard";
import TopSellingStore from "@/components/Dashboard/TopSellingStore";



const cardData = [
    { title: "Items", value: 54, icon: "/svg/items.svg", newAdded: 0, alt: "items" },
    { title: "Orders", value: 31, icon: "/svg/orders.svg", newAdded: 0, alt: "orders" },
    { title: "Grocery Stores", value: 15, icon: "/svg/stores.svg", newAdded: 0, alt: "stores" },
    { title: "Customers", value: 28, icon: "/svg/customers.svg", newAdded: 0, alt: "customers" },
]


const NumberData = [
    { title: "Unassigned Orders", value: 17, icon: "/svg/unassigned.svg", numberType: "Grey" },
    { title: "Accepted By Delivery Man", value: 0, icon: "/svg/accepted.svg", numberType: "Green" },
    { title: "Accepted By Delivery Man", value: 0, icon: "/svg/accepted.svg", numberType: "Green" },
    { title: "Accepted By Delivery Man", value: 0, icon: "/svg/accepted.svg", numberType: "Green" },
    { title: "Accepted By Delivery Man", value: 0, icon: "/svg/accepted.svg", numberType: "Green" },
    { title: "Accepted By Delivery Man", value: 0, icon: "/svg/accepted.svg", numberType: "Green" },
    { title: "Accepted By Delivery Man", value: 0, icon: "/svg/accepted.svg", numberType: "Green" },
    { title: "Accepted By Delivery Man", value: 0, icon: "/svg/accepted.svg", numberType: "Green" },
]


const Dashboard = () => {
    return (
        <>
            <div className={styles.RightItemOne}>
                <div className={styles.RightItemOneItem}>
                    <Image loading="lazy" src={"/images/d1.png"} alt="dashboard" width={50} height={50} style={{ objectFit: "cover" }} />
                    <div style={{ display: "flex", gap: "5px", flexDirection: "column" }}>
                        <h3>Grocery Dashboard.</h3>
                        <p>Hello Here You Can Manage Your Grocery Orders by Zone.</p>
                    </div>
                </div>
                <div className={styles.RightItemOneItem} style={{ justifyContent: "right" }}>
                    <select name="" id="">
                        <option value="">All Zones</option>
                    </select>
                </div>
            </div>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "20px",
                    padding: "20px",
                    width: "98%",
                    marginLeft: "20px",
                    backgroundColor: "white",
                    borderRadius: "3px",
                    boxShadow: "0.5px 1px 1px 0.5px rgba(0, 0, 0, 0.1)",
                }}
            >

                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "row",
                        marginLeft: "auto",
                        gap: "20px",
                    }}
                >
                    <DataSwitcher />
                </Box>

                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "row",
                        gap: "20px",
                    }}
                >
                    {cardData.map((data, index) => {
                        return (
                            <CustomCard
                                key={index}
                                title={data.title}
                                value={data.value}
                                icon={data.icon}
                                newAdded={data.newAdded}
                                alt={data.alt}
                            />
                        );
                    })}
                </Box>

                <Box
                    sx={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fill, minmax(200px, 4fr))",
                        gap: "20px",
                    }}
                >
                    {NumberData.map((data, index) => {
                        return (
                            <CustomNumberCard
                                key={index}
                                title={data.title}
                                value={data.value}
                                icon={data.icon}
                                numberType={data.numberType}
                            />
                        );
                    })}
                </Box>
            </Box>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "row",
                    gap: "10px",
                }}
            >
                <TopSellingStore />
                <TopSellingStore />
                <TopSellingStore />
            </Box>
        </>
    );
};

export default Dashboard;
