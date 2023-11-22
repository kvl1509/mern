const nodemailer = require("nodemailer")

module.exports = async(email, sub, text1)=>{
    try {
        const transporter = nodemailer.createTransport({
            host:"smtp.gmail.com",
            service:"gmail",
            port:587,
            secure:false,
            auth:{
                user:process.env.REACT_APP_USER,
                pass:process.env.REACT_APP_PASS
            }
        })

        const mailOptions = {
            from:process.env.REACT_APP_USER,
            to:email,
            subject:sub,
            text:text1
        };

        try {
            const info = await transporter.sendMail(mailOptions);
            console.log("email sent successfully");
            resizeBy.json({success: true, message: 'Verification mail sent'});
        } catch (error) {
            
        }
        
    } catch (error) {
        console.log("email not sent");
        console.log(error);
    }
}