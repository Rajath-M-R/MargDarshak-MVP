document.getElementById("resumeForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const fullname = document.getElementById("fullname").value;
  const email = document.getElementById("email").value;
  const skills = document.getElementById("skills").value;
  const experience = document.getElementById("experience").value;

  const resumeContent = `
    <h2>${fullname}</h2>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Skills:</strong> ${skills}</p>
    <p><strong>Experience:</strong> ${experience}</p>
  `;

  document.getElementById("resumeOutput").innerHTML = resumeContent;

  emailjs.send("service_6a8s1fn", "template_hfp7ey1", {
    user_name: fullname,
    user_email: email,
    message: `Resume Builder Submission:
      Name: ${fullname}
      Email: ${email}
      Skills: ${skills}
      Experience: ${experience}`
  }).then(
    function() { alert("Your resume details have been emailed!"); },
    function(error) { alert("Error sending email. Try again."); console.error(error); }
  );
});
