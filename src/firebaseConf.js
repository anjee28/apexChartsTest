// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyCerXoC50KFWKGRVU31tmtmcAKvp6V9zus',
	authDomain: 'peaci-57b6e.firebaseapp.com',
	projectId: 'peaci-57b6e',
	storageBucket: 'peaci-57b6e.appspot.com',
	messagingSenderId: '688236333960',
	appId: '1:688236333960:web:30574d67dcbd1f0441483d',
	measurementId: 'G-YYH1WE3DM8',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore();
