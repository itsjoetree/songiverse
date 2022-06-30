import Text from "./Text"
import { FlexContainer } from "./styled/Containers.styled"
import { Input } from "./styled/Inputs.styled"
import React from "react"

type FormInputProps = {
    labelText: string,
    width?: string,
    labelSize?: string,
    placeholder?: string,
}

const FormInput = React.forwardRef((props: FormInputProps, ref: any) => (
    <FlexContainer
        direction="column"
        style={{
            width: props.width ? props.width : "450px", 
            maxWidth: "100%"
        }}>

        <Text bp={{
            w: "fit-content",
            pos: "relative",
            pr: 1,
            pl: 1,
            top: 8,
            left: 10,
            bgColor: "white",
            fs: props.labelSize ? props.labelSize : "12px"}}>
            {props.labelText}
        </Text>

        <Input ref={ref} placeholder={props.placeholder} />
    </FlexContainer>
));

FormInput.displayName = "FormInput"

export default FormInput