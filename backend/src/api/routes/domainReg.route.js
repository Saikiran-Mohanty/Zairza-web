const express = require("express");
const router = express.Router();

const {DomainRegController}=require('../controllers/index')

const {
	getFirebaseUid,
	getAuthToken,
    checkIfAuthenticated
} = require("../middlewares/skills/validateUser.middleware");



router.post('/',
[getAuthToken,getFirebaseUid,checkIfAuthenticated],
DomainRegController.DomainRegController)

//submission Route

const {SubmitController}=require('../controllers/skillsSubmitController')
router.post('/submit',
[getAuthToken,getFirebaseUid,checkIfAuthenticated],
SubmitController.SubmitController)

module.exports = router;