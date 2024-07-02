const { series_service } = require("../services")

const create_series = async(req,res) => {
    try {
        const data = req.body
        if(req.body.series_name.length < 4){
            throw new Error("series name is to small")
        }

        searched_result = await series_service.find_by_name(data.series_name)
        if(searched_result){
            throw new Error(`series by this name ${data.series_name} already exist`)
        }

        const new_series = await series_service.create_series_s(data)
        if(!new_series){
            throw new Error("data not found")
        }
        res.status(200).json({
            success:true,
            message:"it's done",
            data:new_series
        })
    } catch (error) {
        res.status(400).json({
            success:false,
            message:error.message
        })
    }
}

 module.exports = {
    create_series
 }