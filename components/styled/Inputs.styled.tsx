import styled from "styled-components"
import { BaseComponentProps, getBaseComponentProps } from "../../helpers/baseProps"

interface InputProps {
  bp?: BaseComponentProps
}

export const Input = styled.input<InputProps>`
  border: 1px solid lightGray;
  border-radius: 5px;
  padding: 15px;
  &:focus {
    outline: none;
    box-shadow: 0px 0px 2px #6495ED;
  }

  ${(props) => props.bp != null ? getBaseComponentProps(props.bp) : ''}
`