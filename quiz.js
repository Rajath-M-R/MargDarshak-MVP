document.getElementById("quizForm").addEventListener("submit", function(event) {
  event.preventDefault();

  // Collect answers
  let q1 = document.querySelector('input[name="q1"]:checked').value;
  let q2 = document.querySelector('input[name="q2"]:checked').value;
  let q3 = document.querySelector('input[name="q3"]:checked').value;

  let resultText = "";

  if (q1 === "Yes" && q2 === "Technology" && q3 === "Analytical") {
    resultText = "You may enjoy a career in Software Engineering or Data Science.";
  } else if (q1 === "No" && q2 === "People") {
    resultText = "You may enjoy a career in Human Resources or Teaching.";
  } else if (q3 === "Creative") {
    resultText = "You may enjoy a career in Design, Marketing, or Content Creation.";
  } else {
    resultText = "You have diverse interests! Explore careers that combine both creativity and logic.";
  }

  document.getElementById("result").innerText = resultText;

  // Send results via EmailJS
  emailjs.send("service_6a8s1fn", "template_hfp7ey1", {
      user_name: "Quiz User",
      user_email: "rajathmr6363@gmail.com",  // 📩 Replace with your email
      message: `Quiz Results:
        Q1: ${q1}
        Q2: ${q2}
        Q3: ${q3}
        
        Result: ${resultText}`
  }).then(
    function(response) {
      console.log("SUCCESS!", response.status, response.text);
      alert("Your quiz results have been sent to your email!");
    },
    function(error) {
      console.log("FAILED...", error);
      alert("Failed to send email. Please try again.");
    }
  );
});
