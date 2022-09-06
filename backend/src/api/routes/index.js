const SkillsAuthRoute = require("./skillsAuth.route");
const domainReg=require('./domainReg.route');

module.exports = (app) => {
	app.use("/api/zairza/skill-plus-plus", SkillsAuthRoute),
	app.use("/api/zairza/skill-plus-plus/domainReg", domainReg)
};
