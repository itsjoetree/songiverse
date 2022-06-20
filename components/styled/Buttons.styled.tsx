import styled from "styled-components"

type ButtonProps = {
    textColor?: string,
    bgColor?: string
}
  
export const Button = styled.a<ButtonProps>`
    padding: 5px;
    width: 10rem;
    background: tansparent;
    color: white;
    display: inline-block;
    text-align: center;
    border-radius: 3px;
    color: ${(props) => props.textColor};
    background-color: ${(props) => props.bgColor};
`