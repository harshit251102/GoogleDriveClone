import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const app = firebase.initializeApp({
    apiKey: "AIzaSyAG--cUxMyMoOErnurqKFKUVkAhD_rJsMk",
    authDomain: "drive-clone-b291f.firebaseapp.com",
    projectId: "drive-clone-b291f",
    storageBucket: "drive-clone-b291f.appspot.com",
    messagingSenderId: "596047756089",
    appId: "1:596047756089:web:9aee6d00abb33326ce06e8"  
})

const auth = app.auth();
const firestore = app.firestore();
export const database = {
    folders: firestore.collection('folders'),
    files: firestore.collection('files'),
    formatDoc: doc=>{
        return {
            id:doc.id,
              ...doc.data()
        }
    },
    getCurrentTimestamp: firebase.firestore.FieldValue.serverTimestamp
}
export const storage = app.storage();
export { auth };
export default app;