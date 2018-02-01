import firebase from 'firebase'
const config = {
  apiKey: "AIzaSyDRQV-o24qDHrMDwXYFRDuBEPDeGxG1ylE",
  authDomain: "turnout-bb1a6.firebaseapp.com",
  databaseURL: "https://turnout-bb1a6.firebaseio.com",
  projectId: "turnout-bb1a6",
  storageBucket: "turnout-bb1a6.appspot.com",
  messagingSenderId: "45911026584"
};

export const firebaseApp = firebase.initializeApp(config)
export const eventsRef = firebase.database().ref().child('evnets')
