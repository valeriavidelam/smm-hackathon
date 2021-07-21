import app from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyCUh81xVcmuZpG2TbBtC-13JUCbnKusIho",
  authDomain: "space-management-model.firebaseapp.com",
  projectId: "space-management-model",
  storageBucket: "space-management-model.appspot.com",
  messagingSenderId: "84022133295",
  appId: "1:84022133295:web:4efb5f55dbfe8b4ee83cda",
  measurementId: "G-R3HDZTTG7X"
};


app.initializeApp(firebaseConfig);

const db = app.firestore()
const auth = app.auth()

export {db, auth}
