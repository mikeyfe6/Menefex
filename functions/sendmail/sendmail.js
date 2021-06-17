/* eslint-disable indent */
const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

exports.handler = async function (req, res) {
  const data = JSON.parse(req.body);
  const { name, subject, text, email, company, tel, tijdstip } = data;

  const msg = {
    to: 'contact@menefex.nl', // Change to your recipient
    from: process.env.SENDGRID_AUTHORIZED_EMAIL, // Change to your verified sender
    subject: `Mail ontvangen betreft: '${subject || tijdstip}'`,
    text,
    html: `<p><strong>Lead ontvangen</strong> van <strong>${name}</strong> - ${
      email || 'geen email'
    } - ${company || 'geen bedrijf'}</p>
   <p><u>Bericht</u><br />${text}</p><p>Wilt graag teruggebeld worden <i><strong>${
      tijdstip || 'geen tijdstip'
    }
      </strong></i> </p><p>telefoonnummer: <strong>${tel}</strong></p>`,
  };

  try {
    await sgMail.send(msg);
  } catch (error) {
    console.error(error);
    console.log(res);
  }
};
