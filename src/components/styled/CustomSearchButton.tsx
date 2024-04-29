import { styled } from "@mui/material";

const CustomSearchButton = styled('button')({
    display: 'flex',
    backgroundColor: '#99a7ba',
    padding: '12px',
    justifyContent: 'center',
    borderRadius: '0 5px 5px 0',
    border: 'none',
    alignItems: 'center',
    '&:hover': {
        backgroundColor: '#8a96a7',
        cursor: "pointer"
    },
});

export default CustomSearchButton;
