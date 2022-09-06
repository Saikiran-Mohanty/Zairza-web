const ApiError = require("../helpers/ApiError");
const domainReg=require('../models/skills/domainRegistration.model');

module.exports.submitfunc=async function submitfunc(firebaseUid){

    const user = await domainRegistration.findOne({ firebaseUid });
    let submitObj = req.body.submission;
    if (user.submissions) {
		throw new ApiError(405, "User can submit only once");
	}

    const Submission = await user.submissions.create(submitObj);
    return Submission;
}