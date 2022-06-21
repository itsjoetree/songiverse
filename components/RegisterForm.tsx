import React from "react"
import Text from "./Text"
import { FlexContainer } from "./styled/Containers.styled"
import { FormProps } from "../types";
import { Input } from "./styled/Inputs.styled";
import { Button } from "./styled/Buttons.styled";

const INPUT_STYLES = {width: "450px", maxWidth: "100%"}
const APP_COLOR = "#6495ED"; // TODO: Make Provider

const RegisterForm = ({switchForm} : FormProps) => {
    const usernameRef = React.useRef<HTMLInputElement>(null)
    const emailRef = React.useRef<HTMLInputElement>(null)
    const passwordRef = React.useRef<HTMLInputElement>(null)
    const confirmPassRef = React.useRef<HTMLInputElement>(null)

    return (<>
        <FlexContainer direction='column'>
            <Text sx={{alignSelf: "center"}} color={APP_COLOR} component="h2">Register</Text>
            <Text sx={{cursor: "pointer"}} color={APP_COLOR} onClick={switchForm}>Already have an account?</Text>
        </FlexContainer>

        <FlexContainer direction="column" style={INPUT_STYLES}>
            <Text>Username</Text>
            <Input ref={usernameRef} placeholder="Enter Username..." />
        </FlexContainer>

        <FlexContainer direction="column" style={INPUT_STYLES}>
            <Text>Email</Text>
            <Input ref={emailRef} placeholder="Enter Username..." />
        </FlexContainer>

        <FlexContainer direction="column" style={INPUT_STYLES}>
            <Text>Password</Text>
            <Input ref={passwordRef} placeholder="Enter Password..." />
        </FlexContainer>

        <FlexContainer direction="column" style={INPUT_STYLES}>
            <Text>Confirm Password</Text>
            <Input ref={confirmPassRef} placeholder="Confirm Password..." />
        </FlexContainer>

        <Button bgColor={APP_COLOR} textColor="white">Submit</Button>
    </>)
}

  export default RegisterForm