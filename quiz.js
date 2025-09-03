document.getElementById("quizForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const q1 = document.querySelector('input[name="q1"]:checked');
  const q2 = document.querySelector('input[name="q2"]:checked');
  const q3 = document.querySelector('input[name="q3"]:checked');

  if (!q1 || !q2 || !q3) {
    alert("Please answer all questions!");
    return;
  }

  let suggestion = "";

  if (q1.value === "tech" || q2.value === "logic") {
    suggestion = "👨‍💻 Software Developer – Build innovative apps & systems!";
  } 
  else if (q1.value === "data" || q2.value === "analysis") {
    suggestion = "📊 Data Scientist – Unlock insights from data!";
  } 
  else if (q1.value === "design" || q2.value === "creativity") {
    suggestion = "🎨 UI/UX Designer – Create beautiful user experiences!";
  } 
  else if (q1.value === "business" || q2.value === "leadership") {
    suggestion = "💼 Business Analyst – Bridge business & tech!";
  } 
  else {
    suggestion = "🌍 Explore multiple fields – Tech, Design, Data, or Business!";
  }

  document.getElementById("quizResult").innerHTML =
    `<b>Your Career Path Suggestion:</b><br><br>${suggestion}`;
});
