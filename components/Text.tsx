import React from "react"
import styled from "styled-components"
import { BaseComponentProps, getBaseComponentProps } from "../helpers/baseProps"
import { Block } from "./styled/Containers.styled"

interface TextProps {
    bp?: BaseComponentProps,
    component?: string,
    fontWeight?: string,
    children?: React.ReactNode,
    onClick?: any,
}

interface TextStyles {
    bp?: BaseComponentProps
}

const H1 = styled.h1<TextStyles>`
    ${(props) => props.bp != null ? getBaseComponentProps(props.bp) : ''}
`

const H2 = styled.h2<TextStyles>`
    ${(props) => props.bp != null ? getBaseComponentProps(props.bp) : ''}
`

const H3 = styled.h3<TextStyles>`
    ${(props) => props.bp != null ? getBaseComponentProps(props.bp) : ''}
`
const Span = styled.span<TextStyles>`
    ${(props) => props.bp != null ? getBaseComponentProps(props.bp) : ''}
`

const Text = (props: TextProps) => {

    const getComponent = () => {    
        switch (props.component) {
        case "h1":
            return <H1 bp={props.bp} onClick={props.onClick}>{props.children}</H1>
        case "h2":
            return <H2 bp={props.bp} onClick={props.onClick}>{props.children}</H2>
        case "h3":
            return <H3 bp={props.bp} onClick={props.onClick}>{props.children}</H3>
        case "span":
            return <Span bp={props.bp} onClick={props.onClick}>{props.children}</Span>
        default:
            return <Block bp={props.bp} onClick={props.onClick}>{props.children}</Block>
        }
    }

    return (
        getComponent()
    )
}

export default Text