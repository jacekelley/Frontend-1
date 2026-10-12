// api.js
const baseUrl = "https://developer.nps.gov/api/v1/";

async function getJson(endpoint) {
  // replace this with your actual key
  const apiKey = "Lau1mhpS6vxFrhOtWR63GvC2bQvIKIiOYI4GnWjX";
  // construct the url: baseUrl + endpoint + parameters
  const url = baseUrl + endpoint;
  // set the options. The important one here is the X-Api-Key
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "X-Api-Key": apiKey
      }
  }
  // make the request
  const response = await fetch(url, options)
  const data = await response.json()
  console.log(data)
  return data;
}

async function renderClimbingList() {
  const endpoint = "activities/parks?q=climbing"
  const listElement = document.getElementById("outputList")
  const data = await getJson(endpoint)
  
  // FIX: Go inside data.data[0] to grab the "parks" array!
  const parks = data.data[0].parks
  
  const listHtml = parks.map(listTemplate).join("")
  listElement.innerHTML = listHtml;
}

function listTemplate(item) {
  return `<li><a href="${item.url}">${item.fullName}</a> ${item.states}</li>`
}

getJson('alerts?parkCode=acad,dena');
renderClimbingList()