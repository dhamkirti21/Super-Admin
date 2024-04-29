import React from 'react'

interface CustomLabelInputProps {
    input: React.ReactNode
    label: string
}

const CustomLabelInput = (props: CustomLabelInputProps) => {
    return (
        <>
            <div>
                <div style={{
                    display: "flex",
                    flexDirection: "row",
                    marginTop: "8px"
                }}>
                    <div className='flex flex-row gap-2'>
                        <label style={{
                            fontSize: "12px"
                        }}>{props.label}</label>

                    </div>
                    <p style={{
                        color: "red",
                        fontSize: "14px",
                        marginLeft: "5px"
                    }}>*</p>
                </div>
                {props.input}
            </div>
        </>
    )
}

export default CustomLabelInput