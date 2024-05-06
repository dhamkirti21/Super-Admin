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
                    paddingBottom: "8px",
                    marginTop: "8px"
                }}>
                    <div className='flex flex-row gap-4'>
                        <label style={{
                            fontSize: "12px"
                        }}>{props.label}</label>
                    </div>
                </div>
                {props.input}
            </div>
        </>
    )
}

export default CustomLabelInput