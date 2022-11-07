import { takeLatest, put, all, call  } from 'redux-saga/effects'
import { auth, createUserProfileDocument, getCurrentUser, googleProvider } from '../../firebase/Utils'
import { SigninFailure, SigninSuccess, signOutFailure, signOutSuccess, signUpFailure, signUpSuccess } from './userAction'
import userActionTypes from './userTypees'

export function* getSnapShotUserAuth(userAuth, additionalData){
    try{
        const userRef = yield call(createUserProfileDocument, userAuth, additionalData)
        const userSnapShot = yield userRef.get()
        yield put(SigninSuccess({id: userSnapShot.id, ...userSnapShot.data()}))
    }catch(error){
        yield put(SigninFailure(error))
    }
}

export function* signinWithGoogle(){
    try{
        const {user} = yield auth.signInWithPopup(googleProvider)
        yield getSnapShotUserAuth(user)
    }
    catch(error){
        yield put(SigninFailure(error))
    }
        
}

export function* signinWithEmail({payload: {email, password}}){
    try{
        const {user} = yield auth.signInWithEmailAndPassword(email, password)
        yield getSnapShotUserAuth(user)
    }
    catch(error){
        yield put(SigninFailure(error))
    }
}

export function* isUserAuthenticated(){
    try{
        const userAuth = yield getCurrentUser();
        if(!userAuth) return;
        yield getSnapShotUserAuth(userAuth)
    }
    catch(error){
        yield put(SigninFailure(error))
    }
}

export function* signOut(){
    try{
        yield auth.signOut();
        yield put(signOutSuccess())
    }
    catch(error){
        yield put(signOutFailure(error))
    }
}

export function* signUp({payload: {email, password, displayName}}){
    try{
        const {user} = yield auth.createUserWithEmailAndPassword(email, password);
        yield put(signUpSuccess({ user, additionalData: {displayName}}))
    }
    catch(error){
        yield put(signUpFailure(error))
    }
}

export function* signInAfterSignUp({payload: {user, additionalData}}){
    yield getSnapShotUserAuth(user, additionalData)
}

export function* onGoogleSigninStart(){
    yield takeLatest(userActionTypes.GOOGLE_SIGNIN_START, signinWithGoogle)
}

export function* onEmailSigninStart(){
    yield takeLatest(userActionTypes.EMAIL_SIGNIN_START, signinWithEmail)
}

export function* onCheckuserSession(){
    yield takeLatest(userActionTypes.CHECK_USER_SESSION, isUserAuthenticated)
}

export function* onSignoutStart(){
    yield takeLatest(userActionTypes.SIGNOUT_START, signOut )
}

export function* onSignUpStart(){
    yield takeLatest(userActionTypes.SIGNUP_START, signUp )
}

export function* onSignUpSuccess(){
    yield takeLatest(userActionTypes.SIGNUP_SUCCESS, signInAfterSignUp )
}

export function* userSaga(){
    yield all([
        call(onGoogleSigninStart),
        call(onEmailSigninStart),
        call(onCheckuserSession),
        call(onSignoutStart),
        call(onSignUpStart),
        call(onSignUpSuccess)
    ])
}