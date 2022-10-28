// libraries
import { initializeApp } from 'firebase/app';
import { getFirestore } from '@firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBo2SgYqI8oyxGsAp3K3uyCLS56Ig_eByg',
  authDomain: 'react-admin-panel-591a9.firebaseapp.com',
  projectId: 'react-admin-panel-591a9',
  storageBucket: 'react-admin-panel-591a9.appspot.com',
  messagingSenderId: '111883339353',
  appId: '1:111883339353:web:433ec13b6f33e879b6d348',
};

const app = initializeApp(firebaseConfig);

export const database = getFirestore(app);
