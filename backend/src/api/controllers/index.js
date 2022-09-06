const {
	loginSkillsUser,
	signUpSkillsUser,
} = require("./skillsAuth.controller");

const{ DomainRegController }=require('./skillsDomainReg.controller')
const{ submitController }=require('./skillsSubmitController')

module.exports = {
	SkillsAuthController: {
		loginSkillsUser,
		signUpSkillsUser,
	},
	DomainRegController:{
		DomainRegController
	},
	submitController:{
		submitController
	}
};
