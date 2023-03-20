const sender = document.getElementById("email");
const message = document.getElementById("message"):
function sendEmail() {
  Email.send({
    SecureToken : "ffb91c3d-9a52-4b35-b78d-753707581636",
    To : 'mail.lucidity@gmail.com',
    From : "mail.lucidity@gmail.com",
    Subject : `PORTFOLIO UPDATE!!! FROM ${sender.value}`,
    Body : `${message.value}`
}).then(
  message => alert(message)
);
    }
