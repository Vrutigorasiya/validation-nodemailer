const joi = require("joi");

// => ideal object
// => object to be checked

const create_admin_v = async (req, res, next) => {
    try {
        const ideal_object = joi.object({
            admin_name: joi.string().required().trim().min(4),
            admin_contact: joi.number().required(),
        });

        const result = await ideal_object.validate(req.body);
        console.log(result);

        if (result.error) {
            throw new Error("JOI Validation error");
        }

        next()

        res.status(200).json({
            success:true,
            message: "Validation file",
        });
    } catch (error) {
        res.status(400).json({
            success:false,
            message: error.message,
        });
    }
};

module.exports = {
    create_admin_v
}
