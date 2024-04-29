import styles from "./css/sidebar.module.css";
import { LuBaggageClaim } from "react-icons/lu";
import { BiDiamond, BiSearch, BiSolidLandscape, BiSolidMessageSquare } from "react-icons/bi";
import { IoIosHome, IoMdAddCircle, IoMdDownload, IoMdNotifications } from "react-icons/io";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { RiBillLine, RiUserLocationFill } from "react-icons/ri";
import { BsFillGrid1X2Fill, BsFillGrid3X3GapFill, BsGrid3X3GapFill, BsIncognito, BsPersonStanding } from "react-icons/bs";
import { FaCar, FaFire, FaIcons, FaPerson, FaPersonRunning, FaRegStar, FaRegWindowRestore, FaWallet } from "react-icons/fa6";
import { CiGift, CiMail } from "react-icons/ci";
import { SlBadge, SlCalender, SlReload } from "react-icons/sl";
import { MdOutlineAccountTree, MdUpload } from "react-icons/md";
import { TfiRulerAlt } from "react-icons/tfi";
import { CgSortAz } from "react-icons/cg";
import NestedList from "@/components/Shared/NestedList";



const UserSideBar = () => {



    return (
        <section className={styles.left}>
            <div
                style={{
                    backgroundColor: "#116060",
                    width: "min-content",
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
                            <a href="/users">
                                <p>User Overview</p>
                            </a>
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
                            <FaCar size={20} />
                            <a href="/users/delivery-man/vehicle">
                                <p>Vehicle Category</p>
                            </a>
                        </div>
                        <div className={styles.leftItem}>
                            <FaPersonRunning size={20} />
                            <a href="/users/delivery-man/add">
                                <p>Add Delivery Man</p>
                            </a>
                        </div>
                        <div className={styles.leftItem}>
                            <BsPersonStanding size={20} />
                            <a href="/users/delivery-man/new">
                                <p>New Delivery Man</p>
                            </a>
                            <p
                                style={{
                                    color: "#18cedf",
                                    backgroundColor: "#186f72",
                                    borderRadius: "50%",
                                    border: "1px solid #18cedf",
                                    width: "20px",
                                    height: "20px",
                                    display: "flex",
                                    fontSize: "12px",
                                    justifyContent: "center",
                                    alignItems: "center"
                                }}>
                                0
                            </p>
                        </div>
                        <div className={styles.leftItem}>
                            <CgSortAz size={20} />
                            <a href="/users/delivery-man">
                                <p>DeliveryMan List</p>
                            </a>
                        </div>
                        <div className={styles.leftItem}>
                            <FaRegStar size={20} />
                            <a href="/users/delivery-man/reviews">
                                <p>Reviews</p>
                            </a>
                        </div>
                    </div>
                </div>
                <div style={{
                    marginTop: "20px"
                }}>
                    <div className={styles.leftlabel}>
                        <p>CUSTOMER MANAGEMENT</p>
                    </div>
                    <div style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "10px",
                        marginTop: "20px"
                    }}>
                        <div className={styles.leftItem}>
                            <RiUserLocationFill size={20} />
                            <a href="/users/customer/list">
                                <p>Customer</p>
                            </a>
                        </div>
                        <NestedList
                            title="Customer Wallet"
                            icon={<FaWallet size={20} color={"white"} />}
                            nestedTitles={["Add Fund", "Report", "Bonus"]}
                            links={["/users/customer/wallet/add-fund",
                                "/users/customer/wallet/report",
                                "/users/customer/wallet/bonus"]}
                        />
                        <NestedList
                            title="Customer Loyalty Point"
                            icon={<SlBadge size={20} color={"white"} />}
                            nestedTitles={["Report"]}
                            links={["/users/customer/loyalty-point/report"]}
                        />
                        <div className={styles.leftItem}>
                            <CiMail size={20} />
                            <a href="/users/customer/subscribed">
                                <p>Subscribed Mail List</p>
                            </a>
                        </div>
                        <div className={styles.leftItem}>
                            <BiSolidMessageSquare size={20} />
                            <a href="/users/contact/contact-list">
                                <p>Contact Messages</p>
                            </a>
                        </div>
                    </div>
                    <div style={{
                        marginTop: "20px"
                    }}>
                        <div className={styles.leftlabel}>
                            <p>EMPLOYEE MANAGEMENT</p>
                        </div>
                        <div style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "10px",
                            marginTop: "20px"
                        }}>
                            <div className={styles.leftItem}>
                                <BsIncognito size={20} />
                                <a href="/users/custom-role/create">
                                    <p>Employee Role</p>
                                </a>
                            </div>
                            <NestedList
                                title="Employees"
                                icon={<FaPerson size={20} color={"white"} />}
                                nestedTitles={["Add Employee", "Employee List"]}
                                links={["/users/employee/store",
                                    "/users/employee"]}
                            />
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

export default UserSideBar