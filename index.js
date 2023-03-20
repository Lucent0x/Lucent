const sender = document.getElementById("email");
const message = document.getElementById("message");
function sendEmail() {
  Email.send({
    SecureToken : "093f0024-15d7-433d-a57b-e1cc8e0a57e5",
    To : 'mail.lucidity@gmail.com',
    From : "mail.lucidity@gmail.com",
    Subject : `PORTFOLIO UPDATE!!! FROM ${sender.value}`,
    Body : `${message.value}`
}).then(
  message => alert(message)
);
    }
