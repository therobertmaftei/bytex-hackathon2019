const fs = require('fs');
const path = require('path');

const sendEmail = ({ transporter, from, to, subject, template, vars = {} }) => {
  let html = fs
    .readFileSync(path.join(__dirname, `../emails/${template}.html`))
    .toLocaleString();

  for (const prop in vars) {
    if (vars.hasOwnProperty(prop)) {
      const value = vars[prop];
      const occurence = new RegExp(`{{${prop}}}`, 'g');

      html = html.replace(occurence, value);
    }
  }

  return transporter.sendMail({
    from,
    to,
    subject,
    html,
  });
};

module.exports = {
  sendEmail,
};
