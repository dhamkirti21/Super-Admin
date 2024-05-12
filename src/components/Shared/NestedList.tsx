"use client"
import { Collapse, List, ListItemButton, ListItemIcon, ListItemText, styled } from '@mui/material'
import React from 'react'
import { FaWallet } from 'react-icons/fa6'
import styles from "./sidebars/css/sidebar.module.css";
import { MdExpandLess, MdExpandMore } from 'react-icons/md'
import { TbPointFilled } from 'react-icons/tb'


interface NestedListProps {
    title: string,
    icon?: React.ReactNode,
    count?: number,
    nestedTitles: string[],
    links: string[]
}
const NestedList = (props: NestedListProps) => {
    const [open, setOpen] = React.useState(false)

    const handleClick = () => {
        setOpen(!open)
    }

    return (
        <div style={{
            color: "white",
            position: "relative",
            left: "-8px"
        }}>
            <ListItemButton onClick={handleClick}>
                <div style={{
                    display: "flex",
                    flexDirection: "row",
                    gap: "20px",
                    alignItems: "center",

                }}>
                    <div className="flex flex-row items-center gap-6 overflow-hidden">
                        {props.icon}
                        <p style={{
                            fontSize: "14px",
                            overflow: "hidden",
                            position: "relative",
                            left: "-5px",
                            whiteSpace: "nowrap",
                            textOverflow: "ellipsis",
                        }}>{props.title}</p>
                        {
                            props.count ? <div className={styles.count}>
                                <p>{props.count}</p>
                            </div> : null
                        }
                    </div>
                    <div className='ml-12'>
                        {open ? <MdExpandLess /> : <MdExpandMore />}
                    </div>
                </div>
            </ListItemButton >
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    {
                        props.nestedTitles.map((nestedTitle, index) => {
                            return (<ListItemButton sx={{ pl: 4 }} key={index}>
                                <div style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    gap: "20px",
                                    alignItems: "left"

                                }}>
                                    <TbPointFilled size={20} color={"white"} />
                                    <a href={props.links[index]}>
                                        <p className={styles.para} style={{
                                            fontSize: "14px",
                                        }}>{nestedTitle}</p>
                                    </a>
                                </div>
                            </ListItemButton>)
                        })
                    }

                </List>
            </Collapse>
        </div >
    )
}

export default NestedList