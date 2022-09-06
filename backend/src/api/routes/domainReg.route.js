const express = require("express");
const router = express.Router();

const {DomainRegController}=require('../controllers/index')

const {
	getFirebaseUid,
	getAuthToken,
    checkIfAuthenticated
} = require("../middlewares/skills/validateUser.middleware");

// const { DomainRegController } = require("../controllers/skillsDomainReg.controller");
// const router = require("./skillsAuth.route");

router.post('/',
[getAuthToken,getFirebaseUid,checkIfAuthenticated],
DomainRegController.DomainRegController)

//submission

const {SubmitController}=require('../controllers/skillsSubmitController')
router.post('/submit',
[getAuthToken,getFirebaseUid,checkIfAuthenticated],
SubmitController.SubmitController)

module.exports = router;