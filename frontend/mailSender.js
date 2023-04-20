const nodemailer = require('nodemailer')

// create a transporter object using SMTP
const sendMail = (data) => {
  // const { name, state, active_phone_number, delivery_address, order } = data
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'kohistani5525@gmail.com',
      pass: 'my_key',
    },
  })

  // define the email options
  let mailOptions = {
    from: 'kohistani5525@gmail.com',
    to: 'kohistani5525@gmail.com',
    subject: 'testing our node mailer',
    text: 'hello',

    // text: `name: ${name},
    //       state: ${state},
    //       active_phone_number: ${active_phone_number},
    //       delivery_address: ${delivery_address},
    //       order: ${order},

    // `,
  }

  // send the email
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error)
    } else {
      console.log('Email sent: ' + info.response)
    }
  })
}

sendMail()
