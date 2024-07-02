const express = require("express")
const { admin_controller } = require("../../controller")

const router = express.Router()

router.post(
    "/create-admin",
    //controller
    admin_controller.create_admin
)

module.exports = router