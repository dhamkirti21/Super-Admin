import { styled } from "@mui/material";

const CustomHoverBox = styled('div')({
    display: "flex",
    flexDirection: "column",
    padding: "30px",
    cursor: "pointer",
    width: "100%",
    marginBottom: "10px",
    backgroundColor: "white",
    borderRadius: "5px",
    boxShadow: "2px 6px 28px -18px rgba(0,0,0,0.75)",
    "&:hover": {
        boxShadow: "0px 2px 19px -9px rgba(0,0,0,0.75)",
        transition: "ease-in-out 0.15s"
    }
})

export default CustomHoverBox;