const nodemailer = require('nodemailer')
const { EMAIL, PASSWORD } = require('../../env')
const sendMail = async (req, res) => {
  // my_code
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: EMAIL,
      pass: PASSWORD,
    },
  })
  // my_code ends

  let message = {
    from: '"mailSender 👻" <foo@example.com>', // sender address
    to: 'kohistani5525@gmail.com,inedumoezy@gmail.com', // list of receivers
    subject: 'Hello ✔', // Subject line
    text: 'HELLO Dev !! testing node mailer with server', // plain text body
    // html: '<b>Successfully Register with us.</b>', // html body
  }

  transporter
    .sendMail(message)
    .then((info) => {
      return res.status(201).json({
        msg: 'you should receive an email',
        info: info.messageId,
        preview: nodemailer.getTestMessageUrl(info),
      })
    })
    .catch((error) => {
      return res.status(500).json({ error })
    })
}

module.exports = {
  sendMail,
}
