document.getElementById("careerForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const interests = document.getElementById("interests").value.toLowerCase();
  const skills = document.getElementById("skills").value.toLowerCase();

  let suggestion = "";

  if (interests.includes("coding") || skills.includes("java") || skills.includes("python")) {
    suggestion = "Software Developer 👨‍💻 – Build apps, websites, and scalable systems.";
  } 
  else if (interests.includes("data") || skills.includes("sql") || skills.includes("statistics")) {
    suggestion = "Data Scientist 📊 – Work with data, AI, and analytics.";
  } 
  else if (interests.includes("design") || skills.includes("figma") || skills.includes("creativity")) {
    suggestion = "UI/UX Designer 🎨 – Design user-friendly products.";
  } 
  else if (skills.includes("communication") || interests.includes("business") || skills.includes("presentation")) {
    suggestion = "Business Analyst 💼 – Bridge the gap between business and tech.";
  } 
  else if (interests.includes("teaching") || skills.includes("training") || skills.includes("public speaking")) {
    suggestion = "Educator 📚 – Share knowledge and inspire students.";
  }
  else if (interests.includes("marketing") || skills.includes("social media") || interests.includes("sales")) {
    suggestion = "Digital Marketer 📢 – Promote brands using online tools.";
  }
  else {
    suggestion = "Explore multiple fields 🌍 – Try coding, design, data, or business.";
  }

  document.getElementById("output").innerHTML = 
    `Hi <b>${name}</b>! 👋<br><br> Based on your inputs, you could explore: <br><br>
    <span style="color:#2c3e50; font-size:18px;">${suggestion}</span>`;

  // Send via EmailJS
  emailjs.send("service_6a8s1fn", "template_hfp7ey1", {
    user_name: name,
    user_email: "rajathmr6363@gmail.com", 
    message: `Career Form Submission:
      Name: ${name}
      Interests: ${interests}
      Skills: ${skills}
      Suggestion: ${suggestion}`
  }).then(
    function() { alert("Your career suggestion has been emailed!"); },
    function(error) { alert("Error sending email. Try again."); console.error(error); }
  );
});
