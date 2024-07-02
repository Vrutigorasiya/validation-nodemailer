const { admin_service } = require("../services")
const nodemailer = require("nodemailer")

const create_admin = async(req,res) => {
    try {
        //service
        const data = req.body
        console.log(req.body);
        const new_admin = await admin_service.create_admin_s(data)
        if(!new_admin){
            throw new Error("something went wrong")
        }


        //send mail to admin  mail

        //nodemailer

        const transport = nodemailer.createTransport({
            host:"smtp.gmail.com",
            port:587,
            auth:{
                user:"vrutigorasiya1006@gmail.com",
                pass:"prddfanbauwgclon"
            }
        })

        const mail_sent = await transport.sendMail(
            {
                from:"vrutigorasiya1006@gmail.com",
                to:"GTS8521191Tushal@gmail.com",
                subject:"on this subject:DEMO MAIL",
                text:"heyyy it,s me vruti!!!!! how are you ? how was your node js......"
            }
        )

        if(!mail_sent){
            throw new Error("Try again")
        }

        res.status(200).json({
            success:true,
            message:"Route got hitted",
            data:new_admin
        })

    } catch (error) {
        //error
        res.status(400).json({
            success:false,
            message:error.message
        })
    }
}




module.exports = {
    create_admin
}