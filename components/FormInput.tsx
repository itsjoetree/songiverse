import Typography from "./Typography"
import { FlexContainer } from "./styled/Containers.styled"
import { Input } from "./styled/Inputs.styled"
import React from "react"

type FormInputProps = {
    labelText: string,
    width?: string,
    labelSize?: string,
    placeholder?: string,
    error?: string
}

const FormInput = React.forwardRef((props: FormInputProps, ref: any) => (
    <FlexContainer
        direction="column"
        style={{
            width: props.width ? props.width : "450px", 
            maxWidth: "100%"
        }}>

        <Typography bp={{
            w: "fit-content",
            pos: "relative",
            pr: 1,
            pl: 1,
            top: 8,
            left: 10,
            bgColor: "white",
            fs: props.labelSize ? props.labelSize : "12px"}}>
            {props.labelText}
        </Typography>

        <Input ref={ref} placeholder={props.placeholder} />

        {props.error != null && <Typography bp={{fs: 12, color: "red", alignSelf: "flex-start"}}>
            {props.error}
        </Typography>}
    </FlexContainer>
));

FormInput.displayName = "FormInput"

export default FormInput