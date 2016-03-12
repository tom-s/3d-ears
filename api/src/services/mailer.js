import nodemailer from 'nodemailer'

// This is your API key that you retrieve from www.mailgun.com/cp (free up to 10K monthly emails)
const CONF_MAIL = {
  service: 'Mailgun',
  auth: {
    api_key: 'key-826bb010d334f23aa20ff733287e7f46',
    domain: 'sandbox2e9cb37771bd40dda6440a0287c8488d.mailgun.org',
    user: 'postmaster@sandbox2e9cb37771bd40dda6440a0287c8488d.mailgun.org',
    pass: '039c26b0e662a9161a50a28e1a935fbe'
  }
}

const sendEmail = ({ email, subject, text, html }) => {
  const mailer = nodemailer.createTransport(CONF_MAIL)
  let mailOpts = {
    from: 'info@mixingears.com',
    to: email,
    subject: subject,
    text: text
  }
  if (html) {
    mailOpts.html = html
  }
  console.log('send mail to ', email)
  return mailer.sendMail(mailOpts)
}

export const sendEmailValidation = ({ email, emailConfirmationToken }) => {
  const subject = 'MixingEars: email validation'
  const text = `Please confirm your email : http://localhost:3000/validation?email=${email}&token=${emailConfirmationToken}`
  return sendEmail({
    email,
    subject,
    text
  })
}
