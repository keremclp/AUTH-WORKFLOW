const nodemailer = require('nodemailer')

const sendEmail = async () =>{
    let testAccount = await nodemailer.createTestAccount();

    const transporter = nodemailer.createTransport({
      host: "smtp.ethereal.email",
      port: 587,
      auth: {
        user: "rosie.gutkowski59@ethereal.email",
        pass: "aN4QSNXqKWTT5PFF3y",
      },
    });

    let info = await transporter.sendMail({
      from: '"EmporiA 👻" <emphoria@gmail.com>', // sender address
      to: "user@user.com", // list of receivers
      subject: "Testing Email", // Subject line
      text: "Hello world?", // plain text body
      html: "<b>Testing</b>", // html body
    });
}

module.exports = sendEmail