function getStudents() {
    const studentsApiUrl = "http://localhost:4000/students?slug=alyssa-gerhart";
    return fetch(studentsApiUrl, {
      method: "GET"
    })
      .then((response) => response.json())
      .then((data) => data)
      .catch((error) => console.error(error));
  }
// add.addEventListener(function getImage(){
//   fetch("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2022-03-05")
//   .then(res => res.json())
//   .then(result =>{
//       console.log(result)
//       Image.src = result.message
//   })
//   .catch(err=>console.log(err))
// })

  
document.addEventListener("DOMContentLoaded", async () => {
 const students = await getStudents();
  
    const studentContainer = document.getElementById("student-cards-container");
  
    let content = "";
    students.forEach((student) => {
      content += `
      <div class="card linked">
        <div class="card-header">
          <img class="card-avatar" src="alyssa-avatar.JPG" />
          <div>
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