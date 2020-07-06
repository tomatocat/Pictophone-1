import app from 'firebase/app';
import 'firebase/analytics';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyABhi5kPuJNuIQ1EowYCxHtcU0P3RfImks",
  authDomain: "phoebeliang-step.firebaseapp.com",
  databaseURL: "https://phoebeliang-step.firebaseio.com",
  projectId: "phoebeliang-step",
  storageBucket: "phoebeliang-step.appspot.com",
  messagingSenderId: "148022077758",
  appId: "1:148022077758:web:7634da3c587d507783a46f",
  measurementId: "G-46TXPPSF3P"
};

class Firebase {
  constructor() {
    app.initializeApp(firebaseConfig);
    app.analytics();

    this.auth = app.auth();
  }

  // *** Auth API ***

  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  doSignOut = () =>
    this.auth.signOut();

  doPasswordReset = email =>
    this.auth.sendPasswordResetEmail(email);

  doPasswordUpdate = password =>
    this.auth.currentUser.updatePassword(password);
}

export default Firebase;