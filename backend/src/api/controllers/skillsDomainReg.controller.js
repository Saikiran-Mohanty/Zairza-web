const catchAsync = require("../helpers/catchAsync");
const domainReg=require('../services/skills.domainReg');


const DomainRegController=catchAsync(async(req,res,next)=>{
    const { firebaseUid } = req;
    const domainRegister= await domainReg.domainReg(firebaseUid);

    return res.status(200).json({
		message: "Domain registry succesful",
		data: domainRegister,
	});

})

module.exports = {
	DomainRegController
};