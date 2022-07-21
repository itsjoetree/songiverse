import React from "react"
import Typography from "./Typography"
import {getAuth, getRedirectResult, GoogleAuthProvider, signInWithRedirect} from "firebase/auth"
import {useMediaQuery} from "react-responsive"
import {Button} from "./styled/Buttons.styled"
import {APP_COLOR} from "../pages/_app"
import {Google} from "react-bootstrap-icons"

const SignInWithGoogleButton = () => {
    const provider = new GoogleAuthProvider()
    const auth = getAuth();
    const isSmallerDevice = useMediaQuery({ query: '(max-width: 600px)' })
    const [error, setError] = React.useState<string>()

    getRedirectResult(auth)
        .then((result) => {
            if (result == null) return setError("Sign in with Google failed.")
            const user = result.user;

            result.user.getIdToken()

            // check if user exists if not, we will need username
        })
        .catch(_err => setError("Sign in with Google failed."));

    return (<>
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
        {error && <Typography bp={{fs: 12, color: "red"}}>{error}</Typography>}
    </>)
}