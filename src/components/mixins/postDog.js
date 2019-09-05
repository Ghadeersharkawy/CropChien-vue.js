import firebase from '../../firebaseConfig';
import router from '../../router';

export default (imgUrl, author, comment) => {
	let d = new Date();
	let days = [
		'Sunday',
		'Monday',
		'Tuesday',
		'Wednesday',
		'Thursday',
		'Friday',
		'Saturday'
	];
	firebase.db.collection('dogs').add({
			imgUrl,
			comment,
			info: `Posted by ${author != '' ? author : 'Unknow'} on ${
				days[d.getDay()]
			}`,
			created_at: new Date().getTime()
		})
		.then(router.go(-1));
};
