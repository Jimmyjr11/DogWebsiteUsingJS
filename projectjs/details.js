const img = document.getElementById("detailImg");
const title = document.getElementById("detailTitle");

const dogImage = localStorage.getItem("dogImage");

if (dogImage) {
  img.src = dogImage;
  const breed = dogImage.split("/breeds/")[1].split("/")[0];
  title.textContent = breed.toUpperCase();
} else {
  title.textContent = "No image found";
}
