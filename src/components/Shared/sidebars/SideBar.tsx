import styles from "./css/sidebar.module.css";
import { LuBaggageClaim } from "react-icons/lu";
import { BiDiamond, BiSearch, BiSolidLandscape } from "react-icons/bi";
import { IoIosHome, IoMdAddCircle, IoMdDownload, IoMdNotifications } from "react-icons/io";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { RiBillLine } from "react-icons/ri";
import { BsFillGrid1X2Fill, BsFillGrid3X3GapFill, BsGrid3X3GapFill } from "react-icons/bs";
import { FaFire, FaRegWindowRestore } from "react-icons/fa6";
import { CiGift } from "react-icons/ci";
import { SlCalender, SlReload } from "react-icons/sl";
import { MdOutlineAccountTree, MdUpload } from "react-icons/md";
import { TfiRulerAlt } from "react-icons/tfi";
import { PiDiamondBold } from "react-icons/pi";



const SideBar = () => {
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
                    <div style={{
                        marginBottom: "20px"
                    }}>
                        <div className={styles.leftItem}>
                            <IoIosHome size={20} />
                            <a href="/dashboard">
                                <p>Dashboard</p>
                            </a>
                        </div>
                    </div>

                    <div className={styles.leftlabel}>
                        <p>POS SECTION</p>
                    </div>
                    <div style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "10px",
                        marginTop: "20px"
                    }}>
                        <div className={styles.leftItem}>
                            <HiOutlineShoppingBag size={20} />
                            <p>New Sale</p>
                        </div>
                    </div>
                </div>

                <div style={{
                    marginTop: "20px"
                }}>
                    <div className={styles.leftlabel}>
                        <p>ORDER MANAGEMENT</p>
                    </div>
                    <div style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "10px",
                        marginTop: "20px"
                    }}>
                        <div className={styles.leftItem}>
                            <LuBaggageClaim size={20} />
                            <p>Orders</p>
                        </div>
                        <div className={styles.leftItem}>
                            <RiBillLine size={20} />
                            <p>Order Refunds</p>
                        </div>
                        <div className={styles.leftItem}>
                            <BsFillGrid3X3GapFill size={20} />
                            <p>Flash Sales</p>
                        </div>
                    </div>
                </div>
                <div style={{
                    marginTop: "20px"
                }}>
                    <div className={styles.leftlabel}>
                        <p>PROMOTION MANAGEMENT</p>
                    </div>
                    <div style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "10px",
                        marginTop: "20px"
                    }}>
                        <div className={styles.leftItem}>
                            <FaRegWindowRestore size={20} />
                            <p>Campaigns</p>
                        </div>
                        <div className={styles.leftItem}>
                            <BiSolidLandscape size={20} />
                            <p>Banners</p>
                        </div>
                        <div className={styles.leftItem}>
                            <BiSolidLandscape size={20} />
                            <p>Other Banners</p>
                        </div>
                        <div className={styles.leftItem}>
                            <CiGift size={20} />
                            <p>Coupons</p>
                        </div>
                        <div className={styles.leftItem}>
                            <SlReload size={20} />
                            <p>Cashback</p>
                        </div>
                        <div className={styles.leftItem}>
                            <IoMdNotifications size={20} />
                            <p>Push Notification</p>
                        </div>
                    </div>
                    <div style={{
                        marginTop: "20px"
                    }}>
                        <div className={styles.leftlabel}>
                            <p>PRODUCT MANAGEMENT</p>
                        </div>
                        <div style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "10px",
                            marginTop: "20px"
                        }}>
                            <div className={styles.leftItem}>
                                <MdOutlineAccountTree size={20} />
                                <p>Categories</p>
                            </div>
                            <div className={styles.leftItem}>
                                <BsFillGrid3X3GapFill size={20} />
                                <p>Attributes</p>
                            </div>
                            <div className={styles.leftItem}>
                                <TfiRulerAlt size={20} />
                                <p>Units</p>
                            </div>
                            <div className={styles.leftItem}>
                                <BiDiamond size={20} />
                                <p>Product Setup</p>
                            </div>
                        </div>
                    </div>
                    <div style={{
                        marginTop: "20px"
                    }}>
                        <div className={styles.leftlabel}>
                            <p>STORE MANAGEMENT</p>
                        </div>
                        <div style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "10px",
                            marginTop: "20px"
                        }}>
                            <div className={styles.leftItem}>
                                <SlCalender size={20} />
                                <a href="/store/pending-requests">
                                    <p>New Stores</p>
                                </a>
                            </div>
                            <div className={styles.leftItem}>
                                <IoMdAddCircle size={20} />
                                <a href="/store/add">
                                    <p>Add Stores</p>
                                </a>
                            </div>
                            <div className={styles.leftItem}>
                                <BsFillGrid1X2Fill size={20} />
                                <p>Stores List</p>
                            </div>
                            <div className={styles.leftItem}>
                                <FaFire size={20} />
                                <p>Recommended Stores</p>
                            </div>
                            <div className={styles.leftItem}>
                                <MdUpload size={20} />
                                <p>Bulk Import</p>
                            </div>
                            <div className={styles.leftItem}>
                                <IoMdDownload size={20} />
                                <p>Bulk Export</p>
                            </div>
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
        </section>
    )
}

export default SideBar