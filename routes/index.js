const express = require('express');
const router = express.Router();
const firebase = require('firebase');

const firebaseConfig = {
	apiKey: "AIzaSyARibOmTUEEuhi4GFiPrEFk0Idn2yxi0iM",
	authDomain: "exercise-four-a90d9.firebaseapp.com",
	databaseURL: "https://exercise-four-a90d9.firebaseio.com",
	projectId: "exercise-four-a90d9",
	storageBucket: "exercise-four-a90d9.appspot.com",
	messagingSenderId: "513398951557",
	appId: "1:513398951557:web:828929a9b573636a2263ec",
	measurementId: "G-D2G9FVS8HW"
};

const firestoreDatabase = firebase.initializeApp(firebaseConfig);
const db = firestoreDatabase.firestore();


let posts = [];

db.collection('blog-posts').get()
	.then(
		blogPosts => {
			blogPosts.forEach(post => {
				posts.push(post.data());
			});
			console.log('blogPosts', blogPosts);
		}
	)
	.catch(err => {
		console.log('error', err);
	})

router.get('/', (req, res) => {
	res.send(posts);
})


module.exports = router;