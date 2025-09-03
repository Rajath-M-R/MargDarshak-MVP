document.getElementById("careerFormElement").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const interests = document.getElementById("interests").value.toLowerCase();
  const skills = document.getElementById("skills").value.toLowerCase();

  let suggestion = "";

  if (interests.includes("coding") || skills.includes("java") || skills.includes("python")) {
    suggestion = "Software Developer 👨‍💻 – Build apps, websites, and scalable systems.";
  } else if (interests.includes("data") || skills.includes("sql") || skills.includes("statistics")) {
    suggestion = "Data Scientist 📊 – Work with data, AI, and analytics.";
  } else if (interests.includes("design") || skills.includes("figma") || skills.includes("creativity")) {
    suggestion = "UI/UX Designer 🎨 – Design beautiful and user-friendly products.";
  } else if (skills.includes("communication") || interests.includes("business") || skills.includes("presentation")) {
    suggestion = "Business Analyst 💼 – Bridge the gap between business and tech.";
  } else if (interests.includes("teaching") || skills.includes("training") || skills.includes("public speaking")) {
    suggestion = "Educator 📚 – Share knowledge and inspire students.";
  } else if (interests.includes("marketing") || skills.includes("social media") || interests.includes("sales")) {
    suggestion = "Digital Marketer 📢 – Promote brands using online tools.";
  } else {
    suggestion = "Explore multiple fields 🌍 – Try coding, design, data, or business to discover your path.";
  }

  const tips = [
    "💡 Keep learning every day – small steps lead to big success!",
    "🚀 Build projects – they teach you more than theory.",
    "📚 Read about industry trends to stay ahead.",
    "🎯 Focus on consistency, not perfection."
  ];
  const randomTip = tips[Math.floor(Math.random() * tips.length)];

  document.getElementById("output").innerHTML =
    `Hi <b>${name}</b>! 👋<br><br>
    Based on your inputs, you could explore:<br><br>
    <span style="color:#2c3e50; font-size:18px;">${suggestion}</span><br><br>
    <i>${randomTip}</i>`;
});
