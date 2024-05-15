document.addEventListener("DOMContentLoaded", () => {
    console.log(window.innerWidth)
    if (window.innerWidth < 420) {
        const points = document.querySelectorAll(".point");
        points[0].classList.add("visible");
    }
  });

function switchCard(id) {
    const cards = document.querySelector(".slider");

    if (window.innerWidth < 420) {
        const activeCard = cards.getElementsByClassName("visible")[0]
        activeCard.classList.remove('visible');
        const activeCardId = activeCard.id.split("-")[1];
        const intId = parseInt(activeCardId);

        const types = {
            "left": (intId - 1),
            "right": (intId + 1),
        }

        var newId = types[id];

        if (newId > 3) {
            newId = 1;
        } else if (newId < 1) {
            newId = 3;
        }

        const newCard = document.getElementById("point-" + (newId));
        newCard.classList.add("visible");
    } else {
        console.log("123")
    }
}