import { Switch, Typography, styled } from "@mui/material";
import Image from "next/image";
import { BiPencil } from "react-icons/bi";
import { BsEyeFill } from "react-icons/bs";
import { MdDeleteForever } from "react-icons/md";



interface TableRowProps {
    sl: number,
    store_info: {
        path: string,
        name: string,
        id: string,
    },
    ownerInfo: {
        name: string,
        phone: string
    },
    zone: string,
    featured: boolean,
    status: boolean,
    action: string[]


}
const TableRow = (props: TableRowProps) => {

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


    const ActionList = (actions: string[]) => {
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
                            <BsEyeFill size={14} />
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
                            <BiPencil size={14} />
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
                            <MdDeleteForever size={14} />
                        </CustomIconButton>
                    )
                }
            </div>
        );
    }

    return (
        <tr style={{
            textAlign: "left",
            marginTop: "10px",
        }}>
            <td style={{
                paddingLeft: "20px",
                paddingTop: "20px",
                fontSize: "14px",
                color: "#677788"
            }}>
                {props.sl}
            </td>
            <td style={{
                paddingLeft: "20px",
                paddingTop: "20px",
                fontSize: "14px",
                color: "#677788"
            }}>
                <div className="flex flex-row gap-4">
                    <div className="flex flex-row justify-center items-center" style={{
                        width: "40px",
                        height: "40px",
                        borderRadius: "50%",
                        overflow: "hidden"
                    }}>
                        <Image src={props.store_info.path} alt="store" width={50} height={50} />
                    </div>
                    <div className="flex flex-col gap-1">
                        <Typography variant="body1" className="font-bold" >
                            {props.store_info.name}
                        </Typography>
                        <Typography variant="body2" style={{ color: "#677788" }}>
                            Id:{props.store_info.id}
                        </Typography>
                    </div>
                </div>
            </td>
            <td style={{
                paddingLeft: "20px",
                paddingTop: "20px",
                fontSize: "14px",
                color: "#677788"
            }}>
                <div className="flex flex-col gap-1">
                    <Typography variant="body1" style={{ color: "#677788" }}>
                        {props.ownerInfo.name}
                    </Typography>
                    <Typography variant="body2" style={{ color: "#677788" }}>
                        {props.ownerInfo.phone.substring(0, 1) + "*********"}
                    </Typography>
                </div>
            </td>
            <td style={{
                paddingLeft: "20px",
                paddingTop: "20px",
                fontSize: "14px",
                color: "#677788"
            }}>
                {props.zone}
            </td>
            <td style={{
                paddingLeft: "20px",
                paddingTop: "20px",
                fontSize: "14px",
                color: "#677788"
            }}>
                <Switch defaultChecked={props.featured ? true : false} />
            </td>
            <td style={{
                paddingLeft: "20px",
                paddingTop: "20px",
                fontSize: "14px",
                color: "#677788"
            }}>
                <Switch defaultChecked={props.status ? true : false} />
            </td>
            <td style={{
                paddingTop: "20px",
                fontSize: "14px",
                color: "#677788"
            }}>
                {ActionList(props.action)}
            </td>
        </tr>
    );
}

export default TableRow;