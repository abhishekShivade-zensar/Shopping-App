import React from 'react'
import { getRedirectResult } from 'firebase/auth'
import { signInWithGooglePopup, createUserDocumentFromAuth, signInWithGoogleRedirect, auth } from '../../utils/firebase/firebase.utils'
import { useEffect,useContext } from 'react'
import SignUpForm from '../../component/sign-up-form/sign-up-form.component'

const SignIn = () => {
    useEffect(() => {
        const asyncFetch = async () => {
            const response = await getRedirectResult(auth)
            if (response) {
                const userDocRef = await createUserDocumentFromAuth(response.user)
            }
            console.log(response)
        }
        asyncFetch()

    }, [])
    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup()
        // console.log(response)
        const userDocRef = await createUserDocumentFromAuth(user)
    }

    // const logGoogleRedirectUser = async () => {
    //     const { user } = await signInWithGoogleRedirect()
    //     console.log({user})
    // }

    return (
        <div>
            <h1>sign-in.component</h1>
            <button onClick={logGoogleUser} className='btn btn-outline-primary' >SignIn with Google Popup</button>
            <button onClick={signInWithGoogleRedirect} className='btn btn-outline-default' >SignIn with Google Redirect</button>
            <SignUpForm/>
        </div>
    )
}

export default SignIn
