const nodemailer = require('nodemailer');
const { google } = require('googleapis');

// These id's and secrets should come from .env file.
const CLIENT_ID = '536254706227-kfuib5nf3ec6cm1u87hd6pm9lj4fjnqi.apps.googleusercontent.com';
const CLEINT_SECRET = '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';
const REDIRECT_URI = 'https://developers.google.com/oauthplayground';
const REFRESH_TOKEN = '1//04vffb1ZJCDNMCgYIARAAGAQSNwF-L9IrXwO3tKO1epuSJ79A_fWrGmT8s_G8JrfUg93Dpt3q3526o0lE3WNhxJM-Z9nd_Q5wsw8';

const oAuth2Client = new google.auth.OAuth2(
  CLIENT_ID,
  CLEINT_SECRET,
  REDIRECT_URI
);

oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

async function sendMail() {
  try {
    const accessToken = await oAuth2Client.getAccessToken();

    const transport = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        type: 'OAuth2',
        user: 'sd70329@gmail.com',
        clientId: CLIENT_ID,
        clientSecret: CLEINT_SECRET,
        refreshToken: REFRESH_TOKEN,
        accessToken: accessToken,
      },
    });

    const mailOptions = {
      from: 'sd703299@gmail.com',
      to: 'sd70329@gmail.com',
      subject: 'Hello from gmail using API',
      text: 'Hello from gmail email using API',
      html: '<h1>Hello from gmail email using API</h1>',
    };

    const result = await transport.sendMail(mailOptions);
    return result;
  } catch (error) {
    return error;
  }
}




  module.exports=sendMail