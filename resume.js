function improveResume() {
  const input = document.getElementById("resumeInput").value.trim();
  let improved = "";

  if (!input) {
    document.getElementById("resumeOutput").innerHTML = "⚠️ Please enter a resume point.";
    return;
  }

  if (input.toLowerCase().includes("project")) {
    improved = "Led and developed a project in Java, focusing on problem-solving and performance optimization.";
  } else if (input.toLowerCase().includes("team")) {
    improved = "Collaborated effectively within a team to deliver impactful results and meet deadlines.";
  } else if (input.toLowerCase().includes("communication")) {
    improved = "Enhanced communication skills by presenting ideas clearly and influencing decision-making.";
  } else {
    improved = "Improved: " + input.charAt(0).toUpperCase() + input.slice(1) + " with measurable impact and professional tone.";
  }

  document.getElementById("resumeOutput").innerHTML = `✨ Suggested: <br><br> ${improved}`;
}
