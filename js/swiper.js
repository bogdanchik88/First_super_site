document.addEventListener("DOMContentLoaded", () => {
    console.log(window.innerWidth)
    if (window.innerWidth < 420) {
        const points = document.querySelectorAll(".point");
        const predlozheniya = document.querySelectorAll(".banner")
        predlozheniya[0].classList.add("visible-banner") 
    }
  });

function move(id) {
    const block = document.querySelector(".selectors");
    const oldButton = block.getElementsByClassName("selected_swiper")[0];
    oldButton.classList.remove("selected_swiper");
    const selectedButton = document.getElementById(id);
    selectedButton.classList.add("selected_swiper");

    const cardBlock = document.querySelector(".banners")
    const oldCard = cardBlock.getElementsByClassName("visible-banner")[0];
    oldCard.classList.remove("visible-banner");
    newId = id.split("_")[1];
    const newCard = document.getElementById("ban-"+ newId)
    newCard.classList.add("visible-banner") 
}

