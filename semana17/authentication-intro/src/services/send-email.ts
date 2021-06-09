import nodemailer from 'nodemailer'

const setupEmail = async () => {
  const testAccount = await nodemailer.createTestAccount()

  const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    secure: false,
    auth: {
      user: testAccount.user,
      pass: testAccount.pass
    }
  })

  const info = await transporter.sendMail({
    from: '"test account" <foo@example.com>',
    to: 'marcelino.sandroni@gmail.com',
    subject: 'Test!',
    text: 'Hello World on email!',
    html: '<b>Hello world<b>'
  })

  console.log('Message send: ', info.messageId)

  console.log('preview', nodemailer.getTestMessageUrl(info))
}
