
async function getIsroSpacecraftsData() {
    try {
        const spacecraftsData = fetch('https://isro.vercel.app/api/spacecrafts');


        return spacecraftsData.then(response => response.json()).then(data => data).catch(error => {
            console.log(error)
            return error;
        })

    } catch (error) {
        console.log(error);
    }
}


async function displayIsroSpacecraftsData() {
    const spacecraftsData = await getIsroSpacecraftsData();


    let displaySpacecraftsDiv = document.querySelector(".display-data");
    displaySpacecraftsDiv.innerHTML = "";


    spacecraftsData.spacecrafts.forEach(spacecraft => {
        displaySpacecraftsDiv.innerHTML += `
     <div class="card">
      <div class="card-body">
        <div class="text-center">
         <img  src="https://media.istockphoto.com/id/1097551882/vector/business-startup.jpg?s=612x612&w=0&k=20&c=s5MXIk5SjUWjWUgmMHErQgAE0PPBq1LwibVkD7OBkRM=" width=50px alt="Card image cap">
         <h6> Name : ${spacecraft.name}</h4>
        </div>
      </div>
           
    </div>
    `
    })
}