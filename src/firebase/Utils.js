import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const config = {
    apiKey: "AIzaSyDYSV2HNNyttjB0b7HzGqhzPjyqul13slI",
    authDomain: "dr-bosey.firebaseapp.com",
    projectId: "dr-bosey",
    storageBucket: "dr-bosey.appspot.com",
    messagingSenderId: "612828676069",
    appId: "1:612828676069:web:47088e0da608221f20390c",
    measurementId: "G-DVF09VY1SP"
}

firebase.initializeApp(config);

export const createUserProfileDocument =  async (userAuth, additionalData) => {

    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`)

    const snapShot = await userRef.get()
    
    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try{
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) { 
            console.log('error creating user', error.message)
        }
    }
    return userRef
}

export const addCollectionAndDocument = async(collectionKey, objectsToAdd) => {
    const collectionRef = firestore.collection(collectionKey);

    const batch = firestore.batch();

    objectsToAdd.forEach(obj => {
        const newDocRef = collectionRef.doc();
        batch.set(newDocRef, obj)
    });

   return await batch.commit()
}

export const convertCollectionsSnapshotToMap = (collections) => {
    const transformedCollection = collections.docs.map(doc => {
        const {title, items} = doc.data()

        return {
            routeNanme: encodeURI(title.toLowerCase()),
            id: doc.id,
            title,
            items
        }
    })

    return transformedCollection.reduce((accumulator, collection) => {accumulator[collection.title.toLowerCase()] = collection;
    return accumulator
    }, {})
}

export const getCurrentUser = () => {
    return new Promise((resolve, reject) => {
        const unSubscribe = auth.onAuthStateChanged(userAuth => {
            unSubscribe();
            resolve(userAuth)
        }, reject)
    })
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' }); 
export const signInWithGoogle  = () => auth.signInWithPopup(googleProvider);

export default firebase;