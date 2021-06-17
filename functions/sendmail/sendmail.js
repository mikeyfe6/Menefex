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
    html: `<p><strong>Lead ontvangen van ${name} - ${email} - ${company}</strong></p>
    <br /><p><u>Bericht</u><br />${text}</p><br /> <p>Wilt graag teruggebeld worden om ${tijdstip} <small>(string is geen tijdstip)</small></p> <br /><p>tel:${tel}</p>`,
  };

  try {
    await sgMail.send(msg);
  } catch (error) {
    console.error(error);
    console.log(res);
  }
};
