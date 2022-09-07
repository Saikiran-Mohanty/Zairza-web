const ApiError = require("../helpers/ApiError");
const domainRegistration=require('../models/skills/domainRegistration.model')

module.exports.domainReg=async function domainReg(firebaseUid)
{
    const user = await domainRegistration.findOne({ firebaseUid }); //Check
    let obj = req.body.domain;

    if (user.domain) {
		throw new ApiError(405, "Domain already registered");
	}

    const Domain = await user.domain.create(obj); //Check
    return Domain;
}
