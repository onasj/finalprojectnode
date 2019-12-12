const express = require('express');
const router = express.Router();
const firebase = require('firebase');

const firebaseConfig = {
	apiKey: "AIzaSyDwgee5MWtC208j18BZtMrI9m3lINIwypE",
	authDomain: "dynamic-web-final-a8d2a.firebaseapp.com",
	databaseURL: "https://dynamic-web-final-a8d2a.firebaseio.com",
	projectId: "dynamic-web-final-a8d2a",
	storageBucket: "dynamic-web-final-a8d2a.appspot.com",
	messagingSenderId: "715674027548",
	appId: "1:715674027548:web:ef34c9a9703e539b1541d9",
	measurementId: "G-T6M3XC2PV4"
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