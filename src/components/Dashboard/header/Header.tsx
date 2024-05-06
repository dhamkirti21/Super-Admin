import styles from "./header.module.css"
import { LuUser } from "react-icons/lu";
import { SlNote } from "react-icons/sl";
import { IoSettingsOutline } from "react-icons/io5";
import { HiOutlineArrowPathRoundedSquare } from "react-icons/hi2";
import { RiMessage3Line } from "react-icons/ri";
import { IoLanguageSharp } from "react-icons/io5";
import { MdOutlineLocalGroceryStore } from "react-icons/md";
import Image from "next/image";

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.headerLogo}>
                <Image loading="lazy" loading="lazy" loading="lazy" loading="lazy" loading="lazy" loading="lazy" loading="lazy" src="/images/logo.png" width={130} height={40} style={{ objectFit: "cover" }} alt="logo" />
            </div>
            <div className={styles.headerCenter}>
                <div className={styles.headerItem}>
                    <LuUser />
                    <a href="/users">
                        <p>Users</p>
                    </a>
                </div>
                <div className={styles.headerItem}>
                    <SlNote />
                    <a href="/transactions/stores/withdraw_list">
                        <p>Transactions & Reports</p>
                    </a>
                </div>
                <div className={styles.headerItem}>
                    <IoSettingsOutline />
                    <a href="/business-settings/business-setup">
                        <p>Setting</p>
                    </a>
                </div>
                <div className={styles.headerItem}>
                    <HiOutlineArrowPathRoundedSquare />
                    <a href="/dispatch">
                        <p>Dispatch Management</p>
                    </a>
                </div>
            </div>
            <div className={styles.headerRight}>
                <div className={styles.headerItem}>
                    <a href="/message/list">
                        <RiMessage3Line size={25}></RiMessage3Line>
                    </a>
                </div>
                <div className={styles.headerItem}>
                    <IoLanguageSharp></IoLanguageSharp>
                    <p>EN</p>
                </div>
                <div className={styles.headerItem} >
                    <MdOutlineLocalGroceryStore></MdOutlineLocalGroceryStore>
                    <p>Grocery</p>
                </div>
            </div>
        </header >
    );
};

export default Header;