function getStudents() {
  const studentsApiUrl = "http://localhost:4000/students";
  return fetch(studentsApiUrl, {
    method: "GET"
  })
    .then((response) => response.json())
    .then((data) => data)
    .catch((error) => console.error(error));
}

document.addEventListener("DOMContentLoaded", async () => {
  const students = await getStudents();

  const studentContainer = document.getElementById("student-cards-container");

  let content = "";
  students.forEach((student) => {
    content += `
    <div class="card linked">
      <div class="card-header">
        <img class="card-avatar" src="${student.avatar}" />
        <div>
          <a href="/profile/${student.slug}" class="card-title link">${student.name}</a>
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
