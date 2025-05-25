const nodemailer = require('nodemailer');
const dotenv = require('dotenv');
dotenv.config();

const contactCon = async (req, res) => {
  const { email, message } = req.body;

  if (!email || !message) {
    return res.render('contactus', { message: 'Email or message is missing.' });
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'gptz1811@gmail.com',
      pass: process.env.GMAIL_APP_PASSWORD
    }
  });

  const mailOptions = {
    from: email,
    to: 'gptz1811@gmail.com',
    subject: 'Grievance from URL Shortener User',
    text: `From: ${email}\n\nMessage:\n${message}`
  };

  try {
    await transporter.sendMail(mailOptions);
    res.render('contactus', { message: '✅ Your message has been sent successfully!' });
  } catch (error) {
    console.error(error);
    res.render('contactus', { message: '❌ Failed to send message. Try again later.' });
  }
};

module.exports = contactCon;
