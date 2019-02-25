import firebase from "firebase/app"
import 'firebase/firestore'
import 'firebase/auth'
// Initialize Firebase
var config = {
    apiKey: "AIzaSyCJgl_UbgqS9n1Dvzt4mXNabi9eHDXsuOE",
    authDomain: "reactprojects-brm.firebaseapp.com",
    databaseURL: "https://reactprojects-brm.firebaseio.com",
    projectId: "reactprojects-brm",
    storageBucket: "reactprojects-brm.appspot.com",
    messagingSenderId: "1055860207539"
};

firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true })

export default firebase;