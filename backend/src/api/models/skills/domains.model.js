const mongoose = require("mongoose");

const DomainSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
		},
		description: {
			type: String,
			required: true,
		},
		weekZero: {
			description: String,
			resources: [String],
		},
		tasks: [
			{
				weekNo: Number,
				weekInterval: String,
				resource: String,
				submissionDeadline: Date,
				finalSubmissionDeadline: Date,
			},
		],
		mentors: [{ type: mongoose.Schema.Types.ObjectId, ref: "skillusers" }],
		discussionLink: String,
	},
	{ strict: true, versionKey: false }
);

module.exports = Domains = mongoose.model("domains", DomainSchema);
