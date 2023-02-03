async function getOstonya() {
    const ostonyaApiUrl = "http://localhost:4000/students?slug=ostonya-thomas";
    try {
        const response = await fetch(ostonyaApiUrl, {
            method: "GET"
        });
        const data = await response.json();
        return data;
    } catch (error) {
        return console.error(error);
    }
}
document.addEventListener("DOMContentLoaded", async () => {
  const students = await getOstonya();
  const ostonyaProfile = document.getElementById("ostonya-profile");
  const student = students[0]
  const date = student.dob.split('-');
  const dateSplit = date[1]+"-"+date[2];
const nasaApiUrl = `https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2013-${dateSplit}`;
console.log(nasaApiUrl)

  async function getNasaBackground() {
    try {
      const response = await fetch(nasaApiUrl, {
        method: "GET"
      });
      const data2 = await response.json();
      return data2;
    } catch (error) {
      return console.error(error);
    }
  }

    
      const nasaImg = await getNasaBackground();
      document.getElementById("card-outter").style.backgroundImage=`url('${nasaImg.url}')`;
  
  const content = `
    <div background-size: src= "${nasaImg.url}">
      <div class="card linked">
        <div class="card-header">
          <img class="card-avatar" src="../${student.avatar}" />
          <div>
          <p class="card-title link">${student.name}</p>
            <p class="card-subtitle line-1">
              ${student.description1}
            </p>
            <p class="card-subtitle line-2">${student.description2}</p>
          </div>
        </div>
      </div>
    </div>  
    `;

  ostonyaProfile.innerHTML = content;
});
