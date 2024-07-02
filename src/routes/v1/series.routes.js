const express = require("express")
const { series_controller } = require("../../controller")

const router = express.Router()

router.post(
    "/create-series",
    //controller
    series_controller.create_series
)

module.exports = router