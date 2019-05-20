import * as firebase from 'firebase'
var config = {
    apiKey: "AIzaSyA6oY5UPjaIwskV4TFQCVi6ERAgFu4k9A0",
    authDomain: "notereactjs-9eb05.firebaseapp.com",
    databaseURL: "https://notereactjs-9eb05.firebaseio.com",
    projectId: "notereactjs-9eb05",
    storageBucket: "notereactjs-9eb05.appspot.com",
    messagingSenderId: "796596240964"
};
firebase.initializeApp(config); 
export const noteData = firebase.database().ref('dataForNote');