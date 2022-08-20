import React from "react"
import RegisterForm from "./RegisterForm"
import SignInForm from "./SignInForm"
import { FlexContainer } from "./styled/Containers.styled"

const AuthenticationForm = () => {
    const [isRegister, setIsRegister] = React.useState<boolean>(false)

    const switchForm = () => {
      setIsRegister(!isRegister)
    }

    return (<FlexContainer direction="column" gap={10} centerContent>
      {isRegister ? <RegisterForm switchForm={switchForm} /> : <SignInForm switchForm={switchForm} />}
    </FlexContainer>)
}

export default AuthenticationForm