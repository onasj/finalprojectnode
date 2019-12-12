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

var getOptions = {
	source: 'cache'
};

router.get("/:id", (req, res) => {
	let queryId = req.params.id;
	let docRef = db.collection("blog-posts").doc(queryId);
	docRef
	.get(getOptions) 
	.then(doc => res.send(doc.data()))
	.catch(error => res.send(error));
})

module.exports = router;