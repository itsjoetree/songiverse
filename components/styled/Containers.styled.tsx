import styled from "styled-components"
import { BaseComponentProps, getBaseComponentProps } from "../../helpers/baseProps"

interface FlexContainerProps {
    bp?: BaseComponentProps,
    direction?: string,
    centerContent?: boolean,
    gap?: number | string,
}

export const FlexContainer = styled.div<FlexContainerProps>`
    margin-left: 10px;
    margin-right: 10px;
    display: flex;
    ${(props) => props.direction != null ? `flex-direction: ${props.direction}` : ''};
    ${(props) => props.gap != null ? `gap: ${typeof props.gap === 'number' ? `${props.gap}px` : props.gap};` : ''}
    ${(props) =>  props.centerContent && "justify-content: center; align-items: center;"}
    ${(props) => props.bp != null ? getBaseComponentProps(props.bp) : ''}
`

interface BlockProps {
    bp?: BaseComponentProps,
    children?: any,
}

export const Block = styled.div<BlockProps>`
    ${(props) => props.bp != null ? getBaseComponentProps(props.bp) : ''}
`
