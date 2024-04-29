import styles from "../Shared/sidebars/css/sidebar.module.css"
import { LuBaggageClaim } from "react-icons/lu";
import { BiSearch } from "react-icons/bi";
import { MdOutlineAccountBalanceWallet, MdStorefront } from "react-icons/md";
import { GiWallet } from "react-icons/gi";
import { RiCashLine } from "react-icons/ri";
import { FaLocationArrow } from "react-icons/fa6";
import { FaHandHoldingUsd } from "react-icons/fa";
import { AiFillPieChart } from "react-icons/ai";
import { BsBarChartLineFill, BsCash } from "react-icons/bs";
import { IoIosHome } from "react-icons/io";



const TransactionSideBar = () => {
    return (
        <section className={styles.left}>
            <div
                style={{
                    backgroundColor: "#116060",
                    width: "max-content",
                    color: "white",
                    display: "flex",
                    alignItems: "center",
                    position: "relative",
                    left: "-10px",
                    borderRadius: "5px",
                    padding: "12px",
                    marginTop: "10px",
                    zIndex: "10",
                    outline: "25px  solid #005555",
                    border: "1px solid #fff"
                }}
            >
                <BiSearch color={"#90a7ba"} size={18} style={{
                    marginRight: "10px"
                }} />
                <input type="text"
                    name=""
                    placeholder="Search Menu"
                    id=""
                    style={{
                        borderRadius: "5px",
                        border: "none",
                        color: "white",
                        fontSize: "14px",
                        outline: "none",
                        backgroundColor: "#116060",
                    }}
                />
            </div>
            <div className={styles.leftbox}>
                <div style={{
                    marginTop: "20px"
                }}>
                    <div className={styles.leftlabel}>
                        <p>BUISSNESS MANAGEMENT</p>
                    </div>
                    <div style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "10px",
                        marginTop: "20px"
                    }}>
                        <div className={styles.leftItem}>
                            <MdStorefront size={20} />
                            <a href="/transactions/stores/withdraw_list">
                                <p>WithDraw Request</p>
                            </a>
                        </div>
                        <div className={styles.leftItem}>
                            <MdOutlineAccountBalanceWallet size={20} />
                            <a href="/transactions/store-disbursement/list?status=All">
                                <p>Store Disbursement</p>
                            </a>
                        </div>
                        <div className={styles.leftItem}>
                            <GiWallet size={20} />
                            <a href="/transactions/dm-disbursement/list?status=All">
                                <p style={{
                                    position: "relative",
                                    width: "fit-content",
                                    cursor: "pointer",
                                    whiteSpace: "nowrap",
                                    overflow: "hidden",
                                    textOverflow: "ellipsis"

                                }}>DeliveryMan Disburs...</p>
                            </a>
                        </div>
                        <div className={styles.leftItem}>
                            <RiCashLine size={20} />
                            <a href="/transactions/account-transaction/list">
                                <p>Collect Cash</p>
                            </a>
                        </div>
                        <div className={styles.leftItem}>
                            <FaLocationArrow size={20} />
                            <a href="/transactions/provide-deliveryman-earnings">
                                <p>Delivery Man Payments</p>
                            </a>
                        </div>
                        <div className={styles.leftItem}>
                            <FaHandHoldingUsd size={20} />
                            <a href="/transactions/withdraw-method/list">
                                <p>Withdraw Methods</p>
                            </a>
                        </div>
                    </div>
                </div>

                <div style={{
                    marginTop: "20px"
                }}>
                    <div className={styles.leftlabel}>
                        <p>REPORT AND ANALYTICS</p>
                    </div>
                    <div style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "10px",
                        marginTop: "20px"
                    }}>
                        <div className={styles.leftItem}>
                            <AiFillPieChart size={20} />
                            <a href="/transactions/report/day-wise-report">
                                <p>Transaction Report</p>
                            </a>
                        </div>
                        <div className={styles.leftItem}>
                            <BsBarChartLineFill size={20} />
                            <a href="/transactions/report/item-wise-report">
                                <p>Item Report</p>
                            </a>
                        </div>
                        <div className={styles.leftItem}>
                            <IoIosHome size={20} />
                            <a href="/transactions/report/store-wise-report">
                                <p>Store Wise Report</p>
                            </a>
                        </div>
                        <div className={styles.leftItem}>
                            <BsCash size={20} />
                            <a href="/transactions/report/expense-report">
                                <p>Expense Report</p>
                            </a>
                        </div>
                        <div className={styles.leftItem}>
                            <BsBarChartLineFill size={20} />
                            <a href="/transactions/report/low-stock-report">
                                <p>Limited Stock Item</p>
                            </a>
                        </div>
                        <div className={styles.leftItem}>
                            <BsBarChartLineFill size={20} />
                            <a href="/transactions/report/order-report">
                                <p>Order Report</p>
                            </a>
                        </div>
                    </div>
                </div>
                <div style={{
                    width: "100%",
                    height: "100px",
                    backgroundColor: "#005555",
                }}>


                </div>
            </div>
        </section >
    )
}

export default TransactionSideBar