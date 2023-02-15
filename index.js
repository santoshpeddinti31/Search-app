//AJAX Calls

//selectors for dom manipulation

const box = document.querySelector(".cont");
const button = document.querySelector(".btn");
const countryData = document.querySelector("#country_name");

const getCountryData = function (country) {
  const request = new XMLHttpRequest();

  request.open("GET", `https://restcountries.com/v3.1/name/${country}`);
  request.send();

  request.addEventListener("load", function () {
    const [data] = JSON.parse(this.responseText);

    //html code data

    const html = `
    
    <article class="country">
    <img class="flag" src="${data.flags.svg}" />
    <div class="country_data">
      <h3 class='name'>${data.name.common}</h3>
      <h4 class='region'>${data.continents}</h4>
      <p class='row'><span>🧑🏼‍🤝‍🧑🏽</span>${(data.population / 1000000).toFixed(
        0
      )} million</p>
      <p class='row'><span>🗣️</span>${Object.values(data.languages)[0]}</p>
      <p class='row'><span>💰</span>${
        Object.values(data.currencies)[0].name
      }</p>
    </div>
  </article>
    
    `;

    box.insertAdjacentHTML("beforeend", html);

    box.style.opacity = 1;
  });
};

//add the task

const addTask = function () {
  if (countryData.value >= " ") {
    getCountryData(countryData.value);

    countryData.value = "";
  } else {
    window.alert("please give the country name😍");
  }
};

//add the task to the button

button.addEventListener("click", addTask);

//for enter key press

document.addEventListener("keydown", function (e) {
  if (e.key === "Enter" && countryData.value >= "") {
    e.preventDefault();
    getCountryData(countryData.value);
    countryData.value = "";
  }
});
