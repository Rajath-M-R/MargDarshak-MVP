document.getElementById("careerForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const interests = document.getElementById("interests").value;
  const skills = document.getElementById("skills").value;

  let suggestion = "";

  if (interests.toLowerCase().includes("coding") || skills.toLowerCase().includes("java")) {
    suggestion = "Software Developer 👨‍💻";
  } else if (interests.toLowerCase().includes("design")) {
    suggestion = "UI/UX Designer 🎨";
  } else if (skills.toLowerCase().includes("communication")) {
    suggestion = "Business Analyst 📊";
  } else {
    suggestion = "Explore multiple fields 🌍";
  }

  document.getElementById("output").innerHTML =
    `Hi <b>${name}</b>! Based on your inputs, you could explore: <br> <span style="color:#2c3e50">${suggestion}</span>`;
});
