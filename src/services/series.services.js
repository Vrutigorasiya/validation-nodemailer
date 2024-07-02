const { Series } = require("../model")

const create_series_s = (data) => {
    console.log("servicessss");
    return Series.create(data)
}

const find_by_name = (name) => {
    console.log("servicessss");
    return Series.findOne({series_name:name})
}




module.exports = {
    create_series_s,
    find_by_name
}