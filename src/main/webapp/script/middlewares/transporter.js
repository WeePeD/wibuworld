const nodemailer = require('nodemailer');

module.exports = (newUser,verifiedCode) =>{

    const transporter = nodemailer.createTransport({
        service:'Gmail',
        auth: {
            user: 'wibulordweeped@gmail.com',
            pass: 'erylqwdwddfsiimp'
        }
    })

    const mailOption = {
        from: 'Wibu Lord',
        to: newUser,
        subject: 'Verified email',
        text: 'This is your verified code: '+ verifiedCode +' .Enjoy your time in the WibuWorld'
    }

    transporter.sendMail(mailOption,function(err,info){
        if(err) console.log(err)
        console.log('Message sent !')
    })
}