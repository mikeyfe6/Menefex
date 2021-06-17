// const sendgrid = require('@sendgrid/mail');

// sendgrid.setApiKey(process.env.SENDGRID_API_KEY);
// const message = {
//   from: process.env.SENDGRID_AUTHORIZED_EMAIL,
// };
// console.log(message);

// exports.handler = (req, res) => {
//   try {
//     if (req.method !== 'POST') {
//       res.json({ message: 'Try a POST!' });
//     }

//     if (req.body) {
//       message.to = req.body.email;
//       message.subject = req.body.subject;
//       message.text = req.body.text;
//       message.html = req.body.text;
//     }
//     console.log(req.body);

//     return sendgrid.send(message).then(
//       () => {
//         res.status(200).json({
//           message: 'I will send email',
//         });
//       },
//       // eslint-disable-next-line consistent-return
//       (error) => {
//         console.error(error);
//         if (error.response) {
//           return res.status(500).json({
//             error: error.response,
//           });
//         }
//       },
//     );
//   } catch (err) {
//     console.log(err);
//     return res.status(500).json({ message: 'There was an error', error: err });
//   }
// };

// const sgMail = require('@sendgrid/mail');

// sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// exports.handler = () => {
//   const msg = {
//     to: 'info@menefex.nl', // Change to your recipient
//     from: process.env.SENDGRID_AUTHORIZED_EMAIL, // Change to your verified sender
//     subject: 'Sending with SendGrid is Fun',
//     text: 'and easy to do anywhere, even with Node.js',
//     html: '<strong>and easy to do anywhere, even with Node.js</strong>',
//   };
//   sgMail
//     .send(msg)
//     .then(() => {
//       console.log('Email sent');
//     })
//     .catch((error) => {
//       console.error(error);
//     });
// };

const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

exports.handler = async function (req, res) {
  const data = JSON.parse(req.body);
  const { subject, text, mail } = data;

  const msg = {
    to: 'contact@menefex.nl', // Change to your recipient
    from: process.env.SENDGRID_AUTHORIZED_EMAIL, // Change to your verified sender
    subject: `Mail ontvangen betreft: '${subject}'`,
    text,
    html: `<p><strong>Bericht ontvangen van ${mail}</strong></p>
    <br /> <br /><p>Bericht: ${text}</p>`,
  };

  console.log('DATA OFZOOO:', data);

  try {
    await sgMail.send(msg);
  } catch (error) {
    console.error(error);
    console.log(res);
  }
};
