import styled from "styled-components"
import { BaseComponentProps, getBaseComponentProps } from "../../helpers/baseProps"

interface ButtonProps {
    bp?: BaseComponentProps
}

export const Button = styled.a<ButtonProps>`
    cursor: pointer;
    padding: 5px;
    width: 10rem;
    color: white;
    display: inline-block;
    text-align: center;
    border-radius: 3px;
    ${(props) => props.bp != null ? getBaseComponentProps(props.bp) : ''}
    &:hover {
        opacity: .7
    }
`