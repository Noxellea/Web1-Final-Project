const carousel = document.querySelector(".gallery");

const flexItems = carousel.querySelectorAll(".individualCharacters");

const buttonUp = document.getElementById("up");
const buttonDown = document.getElementById("down");

console.log(flexItems);

let counter = 0;

buttonUp.addEventListener("click", changeDisplayedImageUp);
buttonDown.addEventListener("click", changeDisplayedImageDown);

function changeDisplayedImageUp(e) {
  for (i = 0; i < flexItems.length; i++) {
    flexItems[i].classList.remove("active");
    flexItems[i].classList.add("hidden");
  }

  if (counter == 4) {
    counter = 0;
  } else {
    counter += 1;
  }

  flexItems[counter].classList.replace("hidden", "active");
}

function changeDisplayedImageDown(e) {
  for (i = 0; i < flexItems.length; i++) {
    flexItems[i].classList.remove("active");
    flexItems[i].classList.add("hidden");
  }

  if (counter == 0) {
    counter = 4;
  } else {
    counter -= 1;
  }

  flexItems[counter].classList.replace("hidden", "active");
}
