const DomainRegistrations = require('../models/skills/domainRegistration.model')


module.exports.submit=async function submit(req, res) {
    try {
        let id = req.params.id;
        let user = await DomainRegistrations.findById(id);
        let datatobeupdated = req.body;

        if (user) {
            const keys = [];
            for (let key in datatobeupdated) {
                keys.push(key);
            }

            for (i = 0; i < keys.length; i++) {
                user[keys[i]] = datatobeupdated[keys[i]];
            }

            user.save();
            res.json({
                message: 'Submission details Updated',
                data: 'user' //testing line
            })

        } else {
            res.json({
                message: 'User not Found'
            })
        }

    }
    catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }
}