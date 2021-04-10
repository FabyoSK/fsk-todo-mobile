import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyASh5V0nq9Yysz4MvljKr_EG5k0l5iMza4',
  authDomain: 'fsk-todo.firebaseapp.com',
  projectId: 'fsk-todo',
  storageBucket: 'fsk-todo.appspot.com',
  messagingSenderId: '16057317446',
  appId: '1:16057317446:web:4d960cbb807564ccf3f247',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export {firebase};
