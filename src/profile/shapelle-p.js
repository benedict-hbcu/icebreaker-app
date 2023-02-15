function getStudents() {
    const studentsApiUrl = "http://localhost:4000/students?slug=shapelle-pinder";
    return fetch(studentsApiUrl, {
      method: "GET"
    })
      .then((response) => response.json())
      .then((data) => data)
      .catch((error) => console.error(error));
  }

  function getFire(date) {
    const studentsApiUrl = `https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2022-${date}`;
    console.log(studentsApiUrl);
    return fetch(studentsApiUrl, {
      method: "GET"
    })
      .then((response) => response.json())
      .then((data) => data)
      .catch((error) => console.error(error));
  }
  
  document.addEventListener("DOMContentLoaded", async () => {
    const students = await getStudents();
    const date = students[0].dob.split('-');
    const dob = date[1]+ "-" + date[2];
    const fire = await getFire(dob);
    document.getElementById("Fire").style.backgroundImage =`url('${fire.url}')`
  
    const studentContainer = document.getElementById("student-cards-container");
  
    let content = "";
    students.forEach((student) => {
      content += `
      <div src = "${fire.url}">
        <div class="card linked">
          <div class="card-header">
            <img class="card-avatar" src="../${student.avatar}" />
            <div>
              <a href="/profile/${student.slug}" class="card-title link">${student.name}</a>
              <p class="card-subtitle line-1">
                ${student.description1}
              </p>
             <p class="card-subtitle line-2">${student.description2}</p>
            </div>
          </div>
        </div>
      </div>
      `;
    });
  
    studentContainer.innerHTML = content;
  });

