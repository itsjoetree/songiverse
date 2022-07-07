import React from "react"
import Text from "./Text"
import FormInput from "./FormInput"
import { getAuth, getRedirectResult, signInWithRedirect, GoogleAuthProvider } from "firebase/auth";
import { FormProps } from "../types"
import { FlexContainer } from "./styled/Containers.styled"
import { Button } from "./styled/Buttons.styled"
import { useMediaQuery } from "react-responsive"
import { Google } from "react-bootstrap-icons"

const APP_COLOR = "#6495ED";

const SignInForm = ({switchForm} : FormProps) => {
    
    const provider = new GoogleAuthProvider();
    const auth = getAuth();

    getRedirectResult(auth)
    .then((result) => {
      if (result == null) return

      // This gives you a Google Access Token. You can use it to access Google APIs.
      const credential = GoogleAuthProvider.credentialFromResult(result);

      if (credential == null) return

      const token = credential.accessToken;

      // The signed-in user info.
      const user = result.user;
    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });

    const isSmallerDevice = useMediaQuery({ query: '(max-width: 600px)' })
    const usernameRef = React.useRef<HTMLInputElement>(null)
    const passwordRef = React.useRef<HTMLInputElement>(null)
  
    return (<>
      <FlexContainer bp={{mt: "1rem"}} direction="column">
          <Text bp={{alignSelf: "center", color: APP_COLOR, m: 0, mb: ".5rem"}} component="h2">
              Register
          </Text>
      </FlexContainer>

      <FlexContainer bp={{mw: "100%", w: "100%"}} direction="column" gap={5}>
          <Button
            onClick={() => signInWithRedirect(auth, provider)}
            bp={{
              p: 10,
              alignSelf: "center",
              w: isSmallerDevice ? "100%" : "20rem",
              color: "white",
              bgColor: APP_COLOR
              }}>
              <Google /> Sign in with Google
          </Button>
      </FlexContainer>

      <FormInput labelText="Username" placeholder="Enter Username..." ref={usernameRef} />
      <FormInput labelText="Password" placeholder="Enter Password..." ref={passwordRef} />

      <Button bp={{bgColor: APP_COLOR, color: "white", mt: 10}} color="white">Submit</Button>

      <FlexContainer bp={{mb: 5}} gap={5}>
        <Text>Need an account?</Text>
        <Text bp={{cursor: "pointer", color: APP_COLOR}} onClick={switchForm}>Register.</Text>
      </FlexContainer>
    </>)
}

export default SignInForm