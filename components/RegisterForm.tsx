import React from "react"
import Text from "./Text"
import FormInput from "./FormInput";
import { FlexContainer } from "./styled/Containers.styled"
import { FormProps } from "../types";
import { Button } from "./styled/Buttons.styled";

const APP_COLOR = "#6495ED"; // TODO: Make Provider

const RegisterForm = ({switchForm} : FormProps) => {
    const usernameRef = React.useRef<HTMLInputElement>(null)
    const emailRef = React.useRef<HTMLInputElement>(null)
    const passwordRef = React.useRef<HTMLInputElement>(null)
    const confirmPassRef = React.useRef<HTMLInputElement>(null)

    return (<>
        <FlexContainer direction='column'>
            <Text bp={{alignSelf: "center", color: APP_COLOR}} component="h2">Register</Text>

            <FlexContainer style={{gap: 2}}>
                <Text>Already have an account?</Text>
                <Text bp={{cursor: "pointer", color: APP_COLOR}} onClick={switchForm}> Sign In.</Text>
            </FlexContainer>
        </FlexContainer>

        <FormInput labelText="Username" placeholder="Enter Username..." ref={usernameRef} />

        <FormInput labelText="Email" placeholder="Enter Email..." ref={emailRef} />

        <FormInput labelText="Password" placeholder="Enter Password..." ref={passwordRef} />

        <FormInput labelText="Confirm Password" placeholder="Confirm Password..." ref={confirmPassRef} />

        <Button bp={{bgColor: APP_COLOR, color: "white", mt: 10}}>Submit</Button>
    </>)
}

  export default RegisterForm