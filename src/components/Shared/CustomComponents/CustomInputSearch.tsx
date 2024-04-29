import CustomSearchButton from '@/components/styled/CustomSearchButton';
import { styled } from '@mui/material';
import React from 'react'
import { BiSearch } from 'react-icons/bi';

const CustomInputSearch = () => {



    return (
        <div style={{
            display: "flex",
            flexDirection: "row",
            gap: "0px",
            alignItems: "center",
        }}>
            <input
                type="text"
                width="40px"
                height={"10px"}
                placeholder='Ex : search delivery man'
                style={{
                    borderRadius: "5px 0 0 5px",
                    padding: "12px",
                    border: "1px solid #559da2",
                }}
            />

            <CustomSearchButton >
                <BiSearch size={16} color={"white"} />
            </CustomSearchButton>
        </div>
    )
}

export default CustomInputSearch