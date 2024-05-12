import { styled } from '@mui/material';
import React from 'react'
import { BiPencil } from 'react-icons/bi';
import { BsEyeFill } from 'react-icons/bs';
import { FaDownload } from 'react-icons/fa6';
import { MdDeleteForever } from 'react-icons/md';


interface CustomTableProps {
    titles: string[]
    body?: React.ReactNode
}

interface CustomButtonProps {
    backgroundColor: string;
    Color: string;
    hoverColor: string;
    hoverBackgroundColor: string;
}
const CustomIconButton = styled('button')<CustomButtonProps>(({ backgroundColor, Color, hoverColor, hoverBackgroundColor }) => ({
    backgroundColor: backgroundColor,
    color: `${Color}`,
    padding: '5px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    border: `1px solid ${Color}`,
    borderRadius: '5px',
    transition: 'background-color ease-in-out 0.5s',
    '&:hover': {
        backgroundColor: hoverBackgroundColor,
        color: hoverColor,
        border: "none",
        cursor: "pointer"
    },
}));




const CustomTable = ({ titles, body }: CustomTableProps) => {
    return (
        <table>
            <tbody>
                <tr className='bg-[#f8fafd] w-full'>
                    {
                        titles.map((title, index) => {
                            return (
                                <td key={index} style={{
                                    fontSize: "12px",
                                    padding: "16px",
                                    fontWeight: "bold",
                                    color: "#334257",
                                    textAlign: "left",
                                }}>
                                    {title}
                                </td>
                            )
                        })
                    }
                </tr>
                {
                    body ? body : null
                }
            </tbody>
        </table>
    )
}


export const CustomTableRow = ({ children }: { children: React.ReactNode }) => {
    return (
        <td style={{
            paddingLeft: "20px",
            paddingTop: "20px",
            fontSize: "14px",
            color: "#677788"
        }}>
            {children}
        </td>
    )
}

export const ActionList = (actions: string[]) => {
    return (
        <div style={{
            display: "flex",
            flexDirection: "row",
            gap: "5px",
        }}>
            {
                actions.find(action => action === "View") && (
                    <CustomIconButton
                        backgroundColor={"white"}
                        Color={"#FF7500"}
                        hoverColor={"white"}
                        hoverBackgroundColor={"#FF7500"}
                    >
                        <BsEyeFill size={16} />
                    </CustomIconButton>
                )
            }
            {
                actions.find(action => action === "Edit") && (
                    <CustomIconButton
                        backgroundColor={"#f5fafb"}
                        Color={"#14b09d"}
                        hoverColor={"white"}
                        hoverBackgroundColor={"#14b09d"}
                    >
                        <BiPencil size={16} />
                    </CustomIconButton>
                )
            }
            {
                actions.find(action => action === "Generate Invoice") && (
                    <CustomIconButton
                        backgroundColor={"#white"}
                        Color={"#20a7af"}
                        hoverColor={"white"}
                        hoverBackgroundColor={"#20a7af"}
                    >
                        <FaDownload size={16} />
                    </CustomIconButton>
                )
            }
            {
                actions.find(action => action === "Delete") && (
                    <CustomIconButton
                        backgroundColor={"white"}
                        Color={"#FF7500"}
                        hoverColor={"white"}
                        hoverBackgroundColor={"#e56262"}
                    >
                        <MdDeleteForever size={16} />
                    </CustomIconButton>
                )
            }
        </div>
    );
}

export default CustomTable
