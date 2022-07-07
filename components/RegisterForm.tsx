import React from "react"
import Text from "./Text"
import FormInput from "./FormInput";
import { FlexContainer } from "./styled/Containers.styled"
import { FormProps } from "../types";
import { Button } from "./styled/Buttons.styled";
import { useMediaQuery } from "react-responsive";
import { Google } from "react-bootstrap-icons";

const APP_COLOR = "#6495ED";

const RegisterForm = ({switchForm} : FormProps) => {
    const isSmallerDevice = useMediaQuery({ query: '(max-width: 600px)' })
    const usernameRef = React.useRef<HTMLInputElement>(null)
    const emailRef = React.useRef<HTMLInputElement>(null)
    const passwordRef = React.useRef<HTMLInputElement>(null)
    const confirmPassRef = React.useRef<HTMLInputElement>(null)

    return (<>
        <FlexContainer bp={{mt: "1rem"}} direction="column">
            <Text bp={{alignSelf: "center", color: APP_COLOR, m: 0, mb: ".5rem"}} component="h2">
                Register
            </Text>
        </FlexContainer>

        <FlexContainer bp={{mw: "100%", w: "100%"}} direction="column" gap={5}>
            <Button bp={{p: 10, alignSelf: "center", w: isSmallerDevice ? "100%" : "20rem", color: "white", bgColor: APP_COLOR}}>
                <Google /> Sign up with Google
            </Button>
        </FlexContainer>

        <FormInput labelText="Username" placeholder="Enter Username..." ref={usernameRef} />
        <FormInput labelText="Email" placeholder="Enter Email..." ref={emailRef} />
        <FormInput labelText="Password" placeholder="Enter Password..." ref={passwordRef} />
        <FormInput labelText="Confirm Password" placeholder="Confirm Password..." ref={confirmPassRef} />

        <Button bp={{bgColor: APP_COLOR, color: "white", mt: 10}}>Submit</Button>

        <FlexContainer style={{gap: 2}}>
            <Text>Already have an account?</Text>
            <Text bp={{cursor: "pointer", color: APP_COLOR}} onClick={switchForm}> Sign In.</Text>
        </FlexContainer>
    </>)
}

  export default RegisterForm