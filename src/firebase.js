import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyAT7Cx_ingUfmOwcvhNHW5DmDy5G4Yv3VI",
    authDomain: "my-website-6a297.firebaseapp.com",
    databaseURL: "https://my-website-6a297.firebaseio.com",
    projectId: "my-website-6a297",
    storageBucket: "my-website-6a297.appspot.com",
    messagingSenderId: "156913653189"
}

firebase.initializeApp(config);
const databaseRef = firebase.database().ref();
const storageRef = firebase.storage().ref();
// export const contentRef= databaseRef.child("content")
export const jsonFileRef = storageRef.child("my-website.json")