document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  emailjs.send("service_6a8s1fn", "template_hfp7ey1", {
    user_name: name,
    user_email: email,
    message: message
  }).then(
    function() { alert("Your message has been sent successfully!"); },
    function(error) { alert("Failed to send message. Try again."); console.error(error); }
  );
});
