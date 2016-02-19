
var mapOpen = document.querySelector(".big-map");
var mapPopup = document.querySelector(".pop-big-map");
var mapClose = document.querySelector(".mapClose");

mapOpen.addEventListener("click", function (event) {
    event.preventDefault();
    mapPopup.classList.add("modal-content-show");
    mapPopup.classList.add("modal-animation");
});
mapClose.addEventListener("click", function (event) {
    event.preventDefault();
    mapPopup.classList.remove("modal-content-show");
    mapPopup.classList.remove("modal-animation");
});