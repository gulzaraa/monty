" use strict";

const BASE_URL = `https://rickandmortyapi.com/api/character/`;
let characterImage = document.querySelector("#character-image");
let randomButton = document.querySelector("#random-button");
let characterName = document.querySelector("#character-name");

const getCharacter = (randomNumber) => {
  return fetch(`${BASE_URL}${randomNumber}`, {
    method: "GET",
  })
    .then((res) => res.json())
    .then((parsedData) => {
      characterImage.src = parsedData.image;
      characterName.textContent = parsedData.name;
    });
};
getCharacter(1);

randomButton.onclick = () => {
  let randomNumber = Math.floor(Math.random() * (826 - 1 + 1) + 1);
  getCharacter(randomNumber);
};
