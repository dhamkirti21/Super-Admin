import styles from "../Shared/sidebars/css/sidebar.module.css";
import { BiSearch } from "react-icons/bi";
import { IoIosHome } from "react-icons/io";

import NestedList from "../Shared/NestedList";



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
                    <div style={{ marginBottom: "20px" }}>
                        <div className={styles.leftItem}>
                            <IoIosHome size={20} />
                            <a href="/dispatch">
                                <p>Dashboard</p>
                            </a>
                        </div>
                    </div>
                    <div className={styles.leftlabel}>
                        <p>DISPATCH MANAGEMENT</p>
                    </div>
                    <div style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "10px",
                        marginTop: "20px",
                        marginLeft: "12px"
                    }}>
                        <NestedList
                            title="Grocery"
                            count={5}
                            nestedTitles={["Unassigned Orders", "Ongoing Orders"]}
                            links={["/dispatch/list/1/searching_for_deliverymen", "/dispatch/list/1/on_going"]}
                        />
                        <NestedList
                            title="Pharmacy"
                            count={5}
                            nestedTitles={["Unassigned Orders", "Ongoing Orders"]}
                            links={["/dispatch/list/2/searching_for_deliverymen", "/dispatch/list/2/on_going"]}
                        />
                        <NestedList
                            title="Shop"
                            count={5}
                            nestedTitles={["Unassigned Orders", "Ongoing Orders"]}
                            links={["/dispatch/list/3/searching_for_deliverymen", "/dispatch/list/3/on_going"]}
                        />
                        <NestedList
                            title="Food"
                            count={5}
                            nestedTitles={["Unassigned Orders", "Ongoing Orders"]}
                            links={["/dispatch/list/4/searching_for_deliverymen", "/dispatch/list/4/on_going"]}
                        />
                        <NestedList
                            title="Parcel"
                            count={5}
                            nestedTitles={["Unassigned Orders", "Ongoing Orders"]}
                            links={["/dispatch/list/5/searching_for_deliverymen", "/dispatch/list/5/on_going"]}
                        />
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