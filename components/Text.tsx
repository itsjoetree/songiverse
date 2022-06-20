import React from "react"

type TextProps = {
    sx?: any,
    component?: string,
    color?: string,
    fontWeight?: string,
    children?: React.ReactNode,
}

const Text = (props: TextProps) => {
    const getComponent = () => {    
        const textStyles = {
            ...props.sx,
            color: props.color,
            fontWeight: props.fontWeight,
        }

        switch (props.component) {
        case "h1":
            return <h1 style={textStyles}>{props.children}</h1>
        case "h2":
            return <h2 style={textStyles}>{props.children}</h2>
        case "h3":
            return <h3 style={textStyles}>{props.children}</h3>
        case "h1":
            return <h4 style={textStyles}>{props.children}</h4>
        case "span":
            return <span style={textStyles}>{props.children}</span>
        default:
            return <div style={textStyles}>{props.children}</div>
        }
    }

    return (
        getComponent()
    )
}

export default Text