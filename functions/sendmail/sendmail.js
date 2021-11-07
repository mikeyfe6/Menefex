/* eslint-disable indent */
const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

exports.handler = async (event) => {
  const data = JSON.parse(event.body);
  const { name, subject, text, email, company, tel, tijdstip } = data;

  const msg = {
    from: process.env.SENDGRID_AUTHORIZED_EMAIL, // Change to your verified sender
    // subject: `Mail ontvangen betreft: '${subject || tijdstip}'`,
    // text,
    // html: `<p><strong>Lead ontvangen</strong> <small>van</small> <strong>${name}</strong> - ${
    //   email || '*geen email'
    // } - ${company || '*geen bedrijf'}</p>

    //   <p><u><strong><small>Bericht</small></strong></u><br />${text}</p>

    //   <p><small>Wilt graag teruggebeld worden</small> <i><strong>${
    //     tijdstip || '*geen tijdstip'
    //   }
    //   </strong></i></p>

    //   <p><small>Telnr:</small> <strong>${tel}</strong></p>`,
    templateId: 'd-8eebc10097fd430787de9cd0f3db702b',
    personalizations: [
      {
        // to: [{ email: 'contact@menefex.nl' }],
        to: 'contact@menefex.nl', // Change to your recipient
        dynamicTemplateData: {
          mfxName: name,
          mfxSubject: subject,
          mfxText: text,
          mfxEmail: email,
          mfxCompany: company,
          mfxTel: tel,
          mfxTijdstip: tijdstip,
        },
      },
    ],
  };

  try {
    await sgMail.send(msg);

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
