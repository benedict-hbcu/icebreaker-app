
console.log("Hello")
function getStudents() { 
    const studentsApiUrl = "http://localhost:4000/students?slug=metrid-okumu";
    return fetch(studentsApiUrl, {
      method: "GET"
    })
      .then((response) => response.json())
      .then((data) => data)
      .catch((error) => console.error(error));
}
function getNasaBanner(dob) { 
    const NasaApiUrl = 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=1999-01-02' //remove hard code
    return fetch(NasaApiUrl, {
      method: "GET"
    })
      .then((response) => response.json())
      .then((data) => data)
      .catch((error) => console.error(error));
}

  document.addEventListener("DOMContentLoaded", async () => {
    const student = await getStudents();
    console.log(student)

    const dob = student[0].dob;
    console.log(dob)

    const nasaBanner= await getNasaBanner(dob);
     nasaBanner.url
    console.log(nasaBanner.url)
    

    const studentContainer = document.getElementById("student-cards-container");
  
   
      content = `
      <div class="card linked">
        <div class="card-header">
          <img class="card-avatar" src="${student[0].avatar}" />
          <div>
            <a href="/profile/${student[0].slug}" class="card-title link">${student[0].name}</a>
            <p class="card-subtitle line-1">
              ${student[0].description1}
            </p>
            <p class="card-subtitle line-2">${student[0].description2}</p>
          </div>
        </div>
      </div>
      `;
    
  
    studentContainer.innerHTML = content;
  
});