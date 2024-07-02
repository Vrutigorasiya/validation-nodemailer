const express = require("express")
const { admin_controller } = require("../../controller")
const { admin_validation } = require("../../validation")

const router = express.Router()

router.post(
    "/create-admin",
    //cb <= controller
    //validation callback <= next()
    admin_validation.create_admin_v,
    //controller
    admin_controller.create_admin
)

module.exports = router