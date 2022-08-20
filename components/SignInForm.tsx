import React from "react";
import Typography from "./Typography";
import FormInput from "./FormInput";
import { FormProps } from "../types";
import { FlexContainer } from "./styled/Containers.styled";
import { Button } from "./styled/Buttons.styled";
import { APP_COLOR } from "../pages/_app";

const SignInForm = ({switchForm} : FormProps) => {
    const usernameRef = React.useRef<HTMLInputElement>(null);
    const passwordRef = React.useRef<HTMLInputElement>(null);
  
    return (<>
      <FlexContainer bp={{mt: "1rem"}} direction="column">
          <Typography bp={{alignSelf: "center", color: APP_COLOR, m: 0, mb: ".5rem"}} component="h2">
              Sign In
          </Typography>
      </FlexContainer>

      <FlexContainer bp={{mw: "100%", w: "100%"}} direction="column" gap={5}>

      </FlexContainer>

      <FormInput labelText="Username" placeholder="Enter Username..." ref={usernameRef} />
      <FormInput labelText="Password" placeholder="Enter Password..." ref={passwordRef} />

      <Button bp={{bgColor: APP_COLOR, color: "white", mt: 10}} color="white">Submit</Button>

      <FlexContainer bp={{mb: 5}} gap={5}>
        <Typography>Need an account?</Typography>
        <Typography bp={{cursor: "pointer", color: APP_COLOR}} onClick={switchForm}>Register.</Typography>
      </FlexContainer>
    </>)
}

export default SignInForm