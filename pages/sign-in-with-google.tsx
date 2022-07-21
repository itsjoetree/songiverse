import React from "react"
import FormInput from "../components/FormInput"
import { Button } from "../components/styled/Buttons.styled"
import { FlexContainer } from "../components/styled/Containers.styled"
import Typography from "../components/Typography"
import containsSpecial from "../helpers/containsSpecial"

type FormErrors = {
    username: string,
    displayName: string,
}

const SignInWithGoogle = () => {
    // get id token from provider, if there is none then redirect to 
    const usernameRef = React.useRef<HTMLInputElement>(null)
    const displaynameRef = React.useRef<HTMLInputElement>(null)
    const [errors, setErrors] = React.useState<FormErrors | null>(null)

    const handleSubmit = () => {
        setErrors(null)
        const errs: FormErrors = { username: "", displayName: ""}

        const username = usernameRef.current?.value ?? ""
        const displayName = displaynameRef.current?.value ?? ""

        if (username === "") errs.username = "Username is required."
        else if (containsSpecial(username)) errs.username = "Username cannot contain special characters."
        else if (username.length < 4) errs.username = "Username must be at least 4 characters long."
        else if (username.length > 30) errs.username = "Username must not exceed 30 characters."

        if (displayName !== "" && displayName?.length > 30)
            errs.displayName = "Display Name must not exceed 30 characters."
        
        if (Object.keys(errs).length !== 0) return setErrors(errs)

        // call graph ql
    }

    return (<FlexContainer direction="column" centerContent>
        <Typography bp={{color: "#6495ED"}} component="h2">
            Sign in with Google
        </Typography>

        <Typography>To complete your registration, please provide a username.</Typography>

        <FormInput labelText="Username" placeholder="Enter Username..." ref={usernameRef} error={errors?.username} />
        <FormInput labelText="Display Name (optional)" placeholder="Enter Display Name..." ref={displaynameRef} error={errors?.displayName} />

        <Button onClick={handleSubmit} type="submit" bp={{bgColor: "#6495ED", color: "white", mt: 10}} color="white">Submit</Button>
    </FlexContainer>)
}

export default SignInWithGoogle