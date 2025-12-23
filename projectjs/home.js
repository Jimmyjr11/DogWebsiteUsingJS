const sliderDiv = document.getElementById("slider");
const cardsDiv = document.getElementById("cards");

let images = [];
let index = 0;

const xhr = new XMLHttpRequest();
xhr.open("GET", "https://dog.ceo/api/breeds/image/random/10");
xhr.send();

xhr.onreadystatechange = function () {
  if (xhr.readyState === 4 && xhr.status === 200) {
    const data = JSON.parse(xhr.responseText);
    images = data.message;
     console.log(images)
    createSlider();
    createCards();
  }
};


function createSlider() {
  const img = document.createElement("img");
  let par=document.createElement("p");
  img.src = images[0];
  par.textContent=images[0].split("/breeds/")[1].split("/")[0];
  sliderDiv.appendChild(img);
  sliderDiv.appendChild(par);
  setInterval(() => {
    index = (index + 1);
    if (index >= images.length) index = 0;
    img.src = images[index];
    par.textContent=images[index].split("/breeds/")[1].split("/")[0];
  }, 3000);
}

function createCards() {
  images.forEach(url => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `<img src="${url}">`;
card.onclick = () => {
localStorage.setItem("dogImage", url);
  window.location.href = "details.html";
};
    cardsDiv.appendChild(card);
  });
}
