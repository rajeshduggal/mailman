const sendEmail = (data) => {
  const { from, to, subject, body } = data;
  Browser.msgBox(`Sending email from ${from} to ${to} with subject ${subject} and body ${body}`);
  try {
    GmailApp.sendEmail(to, subject, body, {
      from,
    });
  } catch (f) {
    try {
      MailApp.sendEmail(to, subject, body, {
        from,
      });
    } catch (e) {
      return `Error: ${e.toString()}`;
    }
  }
  return `Email sent to ${to}`;
};

export default sendEmail;
