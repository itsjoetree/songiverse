import styled from "styled-components"

type FlexContainerProps = {
    direction?: string,
    centerContent?: boolean,
}

export const FlexContainer = styled.div<FlexContainerProps>`
    margin-left: 10px;
    margin-right: 10px;
    display: flex;
    flex-direction: ${(props) => props.direction};

    ${(props) =>  props.centerContent && "justify-content: center; align-items: center"}
`

export const Block = (props: any) => <div>{props.children}</div>
