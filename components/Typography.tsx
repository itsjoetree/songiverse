import React from "react"
import styled from "styled-components"
import { BaseComponentProps, getBaseComponentProps } from "../helpers/baseProps"

interface TypographyProps {
    bp?: BaseComponentProps,
    component?: "h1" | "h2" | "h3" | "span",
    variant?: "lg-heading" | "md-heading"  | "sm-heading" | "body",
    children?: React.ReactNode,
    onClick?: React.MouseEventHandler
}

interface TypographyStyles {
    bp?: BaseComponentProps,
    variant?: "lg-heading" | "md-heading"  | "sm-heading" | "body"
}

const getVariant = (variant: string) => {
    switch (variant) {
        case "lg-heading":
            return "font-size: 3em;"
        case "md-heading":
            return "font-size: 1.5em;"
        case "sm-heading":
            return "font-size: 1em;"
        case "body":
            return "font-size: 12px;"
        default:
            return
    }
}

const H1 = styled.h1<TypographyStyles>`
    ${(props) => props.variant != null ? getVariant(props.variant) : ''}
    ${(props) => props.bp != null ? getBaseComponentProps(props.bp) : ''}
`

const H2 = styled.h2<TypographyStyles>`
    ${(props) => props.variant != null ? getVariant(props.variant) : ''}
    ${(props) => props.bp != null ? getBaseComponentProps(props.bp) : ''}
`

const H3 = styled.h3<TypographyStyles>`
    ${(props) => props.variant != null ? getVariant(props.variant) : ''}
    ${(props) => props.bp != null ? getBaseComponentProps(props.bp) : ''}
`
const Span = styled.span<TypographyStyles>`
    ${(props) => props.variant != null ? getVariant(props.variant) : ''}
    ${(props) => props.bp != null ? getBaseComponentProps(props.bp) : ''}
`

export const Block = styled.div<TypographyStyles>`
    ${(props) => props.bp != null ? getBaseComponentProps(props.bp) : ''}
`


const Typography = (props: TypographyProps) => {

    const getComponent = () => {    
        switch (props.component) {
        case "h1":
            return <H1 onClick={props.onClick} bp={props.bp} variant={props.variant}>{props.children}</H1>
        case "h2":
            return <H2 onClick={props.onClick} bp={props.bp} variant={props.variant}>{props.children}</H2>
        case "h3":
            return <H3 onClick={props.onClick} bp={props.bp} variant={props.variant}>{props.children}</H3>
        case "span":
            return <Span onClick={props.onClick} bp={props.bp} variant={props.variant}>{props.children}</Span>
        default:
            return <Block onClick={props.onClick} bp={props.bp} variant={props.variant}>{props.children}</Block>
        }
    }

    return (
        getComponent()
    )
}

export default Typography