import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/messaging';

const firebaseConfig = {
	apiKey: 'AIzaSyDdwb84WU4XXxKxb_ks-FPnKodGfRz3N8o',
	authDomain: 'cropchien-vue.firebaseapp.com',
	databaseURL: 'https://cropchien-vue.firebaseio.com',
	projectId: 'cropchien-vue',
	storageBucket: 'cropchien-vue.appspot.com',
	messagingSenderId: '1058053008031',
	appId: '1:1058053008031:web:2223039dd44ed58f'
};

firebase.initializeApp(firebaseConfig);

let db = firebase.firestore();

export default {
	db
};
