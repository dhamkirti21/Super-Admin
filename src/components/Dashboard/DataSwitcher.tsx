"use client";
import React, { useState } from 'react'

type OptionProps = {
    title: string;
    active: boolean;
    state: string;
    onClick: (state: string) => void;
}

const Option = (props: OptionProps) => {
    const handleClick = (state: string) => {
        props.onClick(state);
    }

    return (
        <div style={{
            padding: "10px",
            borderRadius: "3px",
            margin: "4px",
            cursor: "pointer",
            fontWeight: `${props.active ? "bold" : "normal"}`,
            color: `${props.active ? "#fff" : "#00868f"}`,
            backgroundColor: `${props.active ? "#00868f" : "#fff"}`,
        }}
            onClick={() => handleClick(props.state)}
        >
            {props.title}
        </div>
    )
}
const DataSwitcher = () => {
    const [option, setOption] = useState("Yearly");

    const handleClick = (state: string) => {
        setOption(state);
    };

    return (
        <div style={{
            display: "flex",
            borderRadius: "5px",
            margin: "4px",
            gap: "3px",
            fontSize: "12px",
            border: "1px solid #00868f",
        }}>
            <Option
                title="This Year"
                active={option === "Yearly"}
                state="Yearly"
                onClick={handleClick}
            />
            <Option
                title="This Month"
                active={option === "Monthly"}
                state={"Monthly"}
                onClick={handleClick}
            />
            <Option
                title="This Week"
                active={option === "Weekly"}
                state={"Weekly"}
                onClick={handleClick}
            />
        </div>
    );
};

export default DataSwitcher