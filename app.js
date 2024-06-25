const URL = "https://dogapi.dog/api/v2/breeds";
const fact = document.querySelector("#desc");
const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
  getFacts();
});

const getFacts = async () => {
  let response = await fetch(URL);
  console.log(response);
  let data = await response.json();
  console.log(data.data[2].attributes.description);
  fact.innerText = data.data[2].attributes.description;
  
};
