const catchAsync = require("../helpers/catchAsync");
const submission=require('../services/skills.submit');

const SubmitController=catchAsync(async(req,res,next)=>{
    const { firebaseUid } = req;
    const submit= await submission.submitfunc(firebaseUid);

    return res.status(200).json({
		message: "Domain registry succesful",
		data: domainRegister,
	});
}
)

module.exports = {
	SubmitController
};