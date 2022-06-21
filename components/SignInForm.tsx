import React from "react"
import Text from "./Text"
import { FormProps } from "../types"
import { FlexContainer } from "./styled/Containers.styled"
import { Input } from "./styled/Inputs.styled";
import { Button } from "./styled/Buttons.styled";

const APP_COLOR = "#6495ED";

const SignInForm = ({switchForm} : FormProps) => {
    const usernameRef = React.useRef<HTMLInputElement>(null)
    const passwordRef = React.useRef<HTMLInputElement>(null)
  
    return (<>
      <FlexContainer direction="column">
        <Text sx={{alignSelf: "center"}} color={APP_COLOR} component="h2">Sign In</Text>
        <Text sx={{cursor: "pointer"}} color={APP_COLOR} onClick={switchForm}>Need an account?</Text>
      </FlexContainer>
  
      <FlexContainer direction="column" style={{width: "450px", maxWidth: "100%"}}>
        <Text>Username</Text>
        <Input ref={usernameRef} placeholder="Enter Username..." />
      </FlexContainer>
  
      <FlexContainer direction="column" style={{width: "450px", maxWidth: "100%"}}>
        <Text>Password</Text>
        <Input ref={passwordRef} placeholder="Enter Password..." />
      </FlexContainer>
  
      <Button bgColor={APP_COLOR} textColor="white">Submit</Button>
    </>)
}

export default SignInForm