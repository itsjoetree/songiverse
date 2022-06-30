import React from "react"
import Text from "./Text"
import FormInput from "./FormInput";
import { FormProps } from "../types"
import { FlexContainer } from "./styled/Containers.styled"
import { Button } from "./styled/Buttons.styled";

const APP_COLOR = "#6495ED";

const SignInForm = ({switchForm} : FormProps) => {
    const usernameRef = React.useRef<HTMLInputElement>(null)
    const passwordRef = React.useRef<HTMLInputElement>(null)
  
    return (<>
      <FlexContainer direction="column">
        <Text bp={{alignSelf: "center", color: APP_COLOR}} component="h2">Sign In</Text>

        <FlexContainer style={{gap: 2}}>
          <Text>Need an account?</Text>
          <Text bp={{cursor: "pointer", color: APP_COLOR}} onClick={switchForm}>Register.</Text>
        </FlexContainer>
      </FlexContainer>

      <FormInput labelText="Username" placeholder="Enter Username..." ref={usernameRef} />
      <FormInput labelText="Password" placeholder="Enter Password..." ref={passwordRef} />
    
      <Button bp={{bgColor: APP_COLOR, color: "white", mt: 10}} color="white">Submit</Button>
    </>)
}

export default SignInForm