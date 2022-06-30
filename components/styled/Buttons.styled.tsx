import styled from "styled-components"
import { BaseComponentProps, getBaseComponentProps } from "../../helpers/baseProps"

interface ButtonProps {
    bp?: BaseComponentProps
}

export const Button = styled.a<ButtonProps>`
    padding: 5px;
    width: 10rem;
    background: tansparent;
    color: white;
    display: inline-block;
    text-align: center;
    border-radius: 3px;
    ${(props) => props.bp != null ? getBaseComponentProps(props.bp) : ''}
`