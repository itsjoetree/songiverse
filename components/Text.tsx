import React from "react"

type TextProps = {
    sx?: any,
    component?: string,
    color?: string,
    fontWeight?: string,
    children?: React.ReactNode,
    onClick?: any,
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
            return <h1 onClick={props.onClick} style={textStyles}>{props.children}</h1>
        case "h2":
            return <h2 onClick={props.onClick} style={textStyles}>{props.children}</h2>
        case "h3":
            return <h3 onClick={props.onClick} style={textStyles}>{props.children}</h3>
        case "h1":
            return <h4 onClick={props.onClick} style={textStyles}>{props.children}</h4>
        case "span":
            return <span onClick={props.onClick} style={textStyles}>{props.children}</span>
        default:
            return <div onClick={props.onClick} style={textStyles}>{props.children}</div>
        }
    }

    return (
        getComponent()
    )
}

export default Text