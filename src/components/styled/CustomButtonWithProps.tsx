import { styled } from '@mui/material';

interface CustomButtonProps {
    backgroundColor: string;
    Color: string;
    hoverColor: string;
    hoverBackgroundColor: string;
}

const CustomButton = styled('button')<CustomButtonProps>(({ backgroundColor, Color, hoverColor, hoverBackgroundColor }) => ({
    backgroundColor: backgroundColor,
    color: `${Color}`,
    padding: "10px",
    paddingLeft: "40px",
    paddingRight: "40px",
    display: 'flex',
    fontWeight: '600',
    justifyContent: 'center',
    alignItems: 'center',
    outline: "none",
    border: "none",
    borderRadius: '5px',
    '&:hover': {
        backgroundColor: hoverBackgroundColor,
        color: hoverColor,
        cursor: "pointer"
    },
}));

export default CustomButton