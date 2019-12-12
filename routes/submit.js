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

if (!firebase.apps.length) {
	firebase.initializeApp(firebaseConfig);
}

const db = firebase.firestore();

router.get("/", (req,res) => {
	// localhost:4000/submit?title=title&text=text&author=authornamewhatever
	let titleVal = req.query.title ? req.query.title : '';
	let textVal = req.query.text ? req.query.text : '';
	let authorVal = req.query.author ? req.query.author : '';
	db.collection("blog-posts")
	.add({
		title: titleVal,
		text: textVal,
		author: authorVal
	})
	.then(ref => res.send(ref))
	.catch(e => res.send(e));
})


module.exports = router;