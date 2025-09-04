document.getElementById("careerForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const interests = document.getElementById("interests").value;
  const skills = document.getElementById("skills").value;

  let suggestion = "";

  if (interests.includes("Coding") || skills.includes("Java")) {
    suggestion = "You may thrive in Software Development or Data Science.";
  } else if (interests.includes("Design")) {
    suggestion = "Consider careers in Graphic Design or UI/UX.";
  } else if (skills.includes("Communication")) {
    suggestion = "You might excel in Marketing, HR, or Sales.";
  } else {
    suggestion = "Explore diverse fields to match your skills and interests!";
  }

  document.getElementById("output").innerText = `${name}, ${suggestion}`;

  // Send email via EmailJS
  emailjs.send("service_6a8s1fn", "template_hfp7ey1", {
    user_name: name,
    user_email: "rajathmr6363@gmail.com", 
    message: `Career Form Submission:
      Name: ${name}
      Interests: ${interests}
      Skills: ${skills}

      Suggestion: ${suggestion}`
  }).then(
    function() { alert("Your career suggestions have been emailed!"); },
    function(error) { alert("Error sending email. Try again."); console.error(error); }
  );
});
