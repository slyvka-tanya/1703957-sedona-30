const modalButton = document.querySelector(".modal-button");
const popup = document.querySelector(".modal-form");

popup.classList.add("modal-close");


modalButton.addEventListener("click", function() {
  popup.classList.toggle("modal-show");
});
