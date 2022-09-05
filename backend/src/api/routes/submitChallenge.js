const express = require("express");
const submitRouter = express.Router();
const {submit}=require('../controllers/submissionController')

submitRouter.route('/:id')
.patch(submit)