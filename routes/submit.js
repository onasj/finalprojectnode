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