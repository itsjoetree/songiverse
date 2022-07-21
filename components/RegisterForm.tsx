import React from "react"
import Typography from "./Typography"
import FormInput from "./FormInput"
import containsSpecial from "../helpers/containsSpecial"
import validateEmail from "../helpers/validateEmail"
import { FlexContainer } from "./styled/Containers.styled"
import { FormProps } from "../types"
import { Button } from "./styled/Buttons.styled"
import { useMediaQuery } from "react-responsive"
import { Google } from "react-bootstrap-icons"
import { APP_COLOR } from "../pages/_app"

type FormErrors = {
    username: string,
    email: string,
    password: string,
    confirmPassword: string
}

const RegisterForm = ({switchForm} : FormProps) => {
    const isSmallerDevice = useMediaQuery({ query: '(max-width: 600px)' })
    const usernameRef = React.useRef<HTMLInputElement>(null)
    const emailRef = React.useRef<HTMLInputElement>(null)
    const passwordRef = React.useRef<HTMLInputElement>(null)
    const confirmPassRef = React.useRef<HTMLInputElement>(null)
    const [errors, setErrors] = React.useState<FormErrors | null>(null)

    const handleSubmit = () => {
        setErrors(null)
        const errs: FormErrors = { username: "", email: "", password: "", confirmPassword: ""}

        const username = usernameRef.current?.value ?? ""
        const email = emailRef.current?.value ?? ""
        const password = passwordRef.current?.value ?? ""
        const confirmPassword = confirmPassRef.current?.value ?? ""

        if (username === "") errs.username = "Username is required."
        else if (containsSpecial(username)) errs.username = "Username cannot contain special characters."
        else if (username.length < 4) errs.username = "Username must be at least 4 characters long."
        else if (username.length > 30) errs.username = "Username must not exceed 30 characters."

        if (email === "") errs.email = "Email is required."
        else if (!validateEmail(email)) errs.email = "Email is invalid."
        
        if (password === "") errs.password = "Password is required."
        else if (password.length < 8) errs.password = "Password length must be at least 8 characters."

        if (confirmPassword === "") errs.confirmPassword = "Password is required."
        else if (confirmPassword.length < 8) errs.confirmPassword = "Password length must be at least 8 characters."

        if (password != confirmPassword) {
            const matchErr = "Passwords do not match."
            errs.confirmPassword = matchErr
            errs.password = matchErr
        }

        if (Object.keys(errs).length !== 0) return setErrors(errs)
        // call graph ql
    }

    return (<>
        <FlexContainer bp={{mt: "1rem"}} direction="column">
            <Typography bp={{alignSelf: "center", color: APP_COLOR, m: 0, mb: ".5rem"}} component="h2">
                Register
            </Typography>
        </FlexContainer>

        <FlexContainer bp={{mw: "100%", w: "100%"}} direction="column" gap={5}>
            <Button bp={{p: 10, alignSelf: "center", w: isSmallerDevice ? "100%" : "20rem", color: "white", bgColor: APP_COLOR}}>
                <Google /> Sign up with Google
            </Button>
        </FlexContainer>

        <FormInput labelText="Username" placeholder="Enter Username..." ref={usernameRef} error={errors?.username} />
        <FormInput labelText="Email" placeholder="Enter Email..." ref={emailRef} error={errors?.email} />
        <FormInput labelText="Password" placeholder="Enter Password..." ref={passwordRef} error={errors?.password} />
        <FormInput labelText="Confirm Password" placeholder="Confirm Password..." ref={confirmPassRef} error={errors?.confirmPassword} />

        <Button onClick={handleSubmit} bp={{bgColor: APP_COLOR, color: "white", mt: 10}}>Submit</Button>

        <FlexContainer style={{gap: 2}}>
            <Typography>Already have an account?</Typography>
            <Typography bp={{cursor: "pointer", color: APP_COLOR}} onClick={switchForm}> Sign In.</Typography>
        </FlexContainer>
    </>)
}

  export default RegisterForm