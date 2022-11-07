import userActionTypes from "./userTypees";

export const googleSigninStart = () => ({
    type: userActionTypes.GOOGLE_SIGNIN_START,
})

export const emailSigninStart = (emailandpassword) => ({
    type: userActionTypes.EMAIL_SIGNIN_START,
    payload: emailandpassword
})

export const SigninSuccess = user => ({
    type: userActionTypes.SIGNIN_SUCCESS,
    payload: user
})

export const SigninFailure = errorMessage => ({
    type: userActionTypes.SIGNIN_FAILURE,
    payload: errorMessage
})

export const checkUserSession = () => ({
    type: userActionTypes.CHECK_USER_SESSION,
})

export const signOutStart = () => ({
    type: userActionTypes.SIGNOUT_START,
})

export const signOutSuccess = () => ({
    type: userActionTypes.SIGNOUT_SUCCESS,
})

export const signOutFailure = (errorMessage) => ({
    type: userActionTypes.SIGNOUT_FAILURE,
    payload: errorMessage
})

export const signUpStart = (userCredentials) => ({
    type: userActionTypes.SIGNUP_START,
    payload: userCredentials
})

export const signUpSuccess = ({user, additionalData}) => ({
    type: userActionTypes.SIGNUP_SUCCESS,
    payload: {user, additionalData}
})

export const signUpFailure = (errorMessage) => ({
    type: userActionTypes.SIGNUP_FAILURE,
    payload: errorMessage
})