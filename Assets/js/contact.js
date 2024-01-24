function sendEmail() {
    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "evanfd05@gmail.com",
        Password: "21496AFD8DF78B5618131AF39192826007BD",
        To: 'evanfd05@gmail.com',
        From: "Your Websites Contact form",
        Subject: "This is the subject",
        Body: "And this is the body"
    }).then(
        message => alert(message)
    );
}