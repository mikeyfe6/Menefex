/* eslint-disable indent */
const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// exports.handler = async function (req, res) {
const data = JSON.parse(req.body);
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

(async () => {
  try {
    await sgMail.send(msg);
  } catch (error) {
    console.error(error);

    if (error.res) {
      console.error(error.res.body);
    }
  }
})();
// };
