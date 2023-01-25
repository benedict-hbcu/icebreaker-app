const students = [
  {
    name: "Diego Bernal",
    avatar: "public/student-avatars/diego-avatar.png",
    description1: "Computer Engineering &ndash; CSU San Bernardino",
    description2: "Frontend Engineer @ Nifty Island 🏝️"
  }
];

function getStudents() {
  /**
   * TODO
   * make a request to the server to get the list of students
   *
   * For now, just return hardcoded data
   */
  return students;
}

document.addEventListener("DOMContentLoaded", () => {
  const students = getStudents();

  const studentContainer = document.getElementById("student-cards-container");

  let content = "";
  students.forEach((student) => {
    content += `
    <div class="card linked">
      <div class="card-header">
        <img class="card-avatar" src="${student.avatar}" />
        <div>
          <a href="/profile/${student.name
            .replace(" ", "-")
            .toLowerCase()}" class="card-title link">${student.name}</a>
          <p class="card-subtitle line-1">
            ${student.description1}
          </p>
          <p class="card-subtitle line-2">${student.description2}</p>
        </div>
      </div>
    </div>
    `;
  });

  studentContainer.innerHTML = content;
});
