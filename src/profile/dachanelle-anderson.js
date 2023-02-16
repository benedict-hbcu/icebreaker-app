console.log("Functional");
function getStudents() {
    const studentsApiUrl = "http://localhost:4000/students?slug=dachanelle-anderson";
    return fetch(studentsApiUrl, {
      method: "GET"
    })
      .then((response) => response.json())
      .then((data) => data)
      .catch((error) => console.error(error));
  
  }

  //Adding student card to my profile
  document.addEventListener("DOMContentLoaded", async () =>{
    const students = await getStudents();
    const studentContainer = document.getElementById("student-cards-container");
    console.log(students);

    //Creating an API for the NASA image
    //Make year in nasAPiuUrl be my birthday from last year, do not hard code it
    function getNasaAPI() {
      //Get the date from the student slug
      const birthday = students[0].dob;
      console.log(birthday);

      const nasaApiUrl = `https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${birthday}`; //This is the endpoint of the link
      console.log(nasaApiUrl);
      return fetch(nasaApiUrl, {
        method: "GET"

      })
      .then((response) => response.json())
      .then((data) => data)
      .catch((error) => console.error(error));
    }



    const nasaFunc = await getNasaAPI();
    document.getElementById("dacha_card_container").style.backgroundImage = `url('${nasaFunc.url}')`;
    console.log(nasaFunc.url);

    
    content = `
          
            <div class="card-header">
            <img class="card-avatar" src="../${students[0].avatar}" />
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
