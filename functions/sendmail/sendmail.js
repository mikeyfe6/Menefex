/* eslint-disable indent */
const sgMail = require('@sendgrid/mail');

exports.handler = async (event) => {
  const data = JSON.parse(event.body);
  const { name, subject, text, email, company, tel, tijdstip } = data;

  const msg = {
    to: 'contact@menefex.nl', // Change to your recipient
    from: process.env.SENDGRID_AUTHORIZED_EMAIL, // Change to your verified sender
    subject: `Mail ontvangen betreft: '${subject || tijdstip}'`,
    text,
    html: `<p><strong>Lead ontvangen</strong> <small>van</small> <strong>${name}</strong> - ${
      email || '*geen email'
    } - ${company || '*geen bedrijf'}</p>

      <p><u><strong><small>Bericht</small></strong></u><br />${text}</p>
   
      <p><small>Wilt graag teruggebeld worden</small> <i><strong>${
        tijdstip || '*geen tijdstip'
      }
      </strong></i></p>
      
      <p><small>Telnr:</small> <strong>${tel}</strong></p>`,
  };

  try {
    await sgMail.send(msg);
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);

    return {
      statusCode: 202,
      body: 'Bericht verstuurd',
    };
  } catch (error) {
    const statusCode = typeof error.code === 'number' ? error.code : 500;

    return {
      statusCode,
      body: error.message,
    };
  }
};
