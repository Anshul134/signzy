const express = require('express');
const router = express.Router();


//File contains strings used in code.
const appData = require('../appData');
const appRoute = appData.APP_ROUTE;

router.get(appRoute.HOME, (req,res) => {
	console.log("in /");
	res.render('index');
});

module.exports = router;