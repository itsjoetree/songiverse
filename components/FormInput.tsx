import Text from "./Text"
import { FlexContainer } from "./styled/Containers.styled"
import { Input } from "./styled/Inputs.styled"

type FormInputProps = {
    labelText: string,
    width?: string,
    labelSize?: string,
    ref?: any, 
    placeholder?: string,
}

const FormInput = (props: FormInputProps) => {

    return (<FlexContainer
        direction="column"
        style={{
            width: props.width ? props.width : "450px", 
            maxWidth: "100%"
        }}>

        <Text sx={{
            width: "fit-content",
            position: "relative",
            paddingRight: 1,
            paddingLeft: 1,
            top: 8,
            left: 10,
            backgroundColor: "white",
            fontSize: props.labelSize ? props.labelSize : "12px"}}>
            {props.labelText}
        </Text>

        <Input ref={props.ref} placeholder={props.placeholder} />
    </FlexContainer>)
}

export default FormInput