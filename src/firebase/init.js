import firebase from 'firebase'
import firestore from 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyDAy4xSFuAO9LOqW5BXMSmwScDcw8emVcE",
    authDomain: "vue-workshop-applications.firebaseapp.com",
    databaseURL: "https://vue-workshop-applications.firebaseio.com",
    projectId: "vue-workshop-applications",
    storageBucket: "vue-workshop-applications.appspot.com",
    messagingSenderId: "1042184740644",
    appId: "1:1042184740644:web:4918d23c56883fc7461db1",
    measurementId: "G-MVBBWMRSTY"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

// export firestore database
export default firebaseApp.firestore()