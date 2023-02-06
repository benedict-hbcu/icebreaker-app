console.log("Hello")

//get student data from server
function getStudents() {
    const studentsApiUrl = "http://localhost:4000/students?slug=shantel-thomas";
    return fetch(studentsApiUrl, {
      method: "GET"
    })
      .then((response) => response.json())
      .then((data) => data)
      .catch((error) => console.error(error));
  }
  //parse student data from server
  document.addEventListener("DOMContentLoaded", async () => {
    const students = await getStudents();
    const studentContainer = document.getElementById("student-cards-container");
  

  //NASA api using date
  function getBanner(date){
    const nasaAPIUrl = `https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${date}`
    console.log(nasaAPIUrl)
    return fetch(nasaAPIUrl, {
      method: "GET"
    })
    .then((response) => response.json())
    .then((data) => data)
      .catch((error) => console.error(error));
  }

  //creating date for nasa api
  const date = students[0].dob;
  function generatingDate(date){
    date = date.split('-')
    return (parseInt(date[0])+25)+"-"+date[1]+"-"+date[2];
  }

  //paring img from Nasa Api 
  const Shantelbanner = await getBanner(generatingDate(date));
  //document.getElementsByClassName("Mycard").style.backgroundImage=`url('${Shantelbanner.url}')`;
  
  //generating the html  
  console.log(students[0])
  content = `
        <div class="card-header">
          <img class="card-avatar" src="http://localhost:3000/${students[0].avatar}" />
          <div>
            <a href="/profile/${students[0].slug}" class="card-title link">${students[0].name}</a>
            <p class="card-subtitle line-1">
              ${students[0].description1}
            </p>
            <p class="card-subtitle line-2">${students[0].description2}</p>
          </div>
        </div>
      
      `;
   
  
    studentContainer.innerHTML = content;
  });