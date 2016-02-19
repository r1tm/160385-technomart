
var buy = document.querySelectorAll(".buy");
var popup = document.querySelector(".add-to-card");
var close = document.querySelector(".pop-up-close");
var messageOpen = document.querySelector(".write-us");
var messagePopup = document.querySelector(".modal-write-us");
var form =  messagePopup.querySelector("form");
var myName = messagePopup.querySelector("#name");
var email = messagePopup.querySelector("#email");
var text = messagePopup.querySelector("#message-field");
var messageClose = document.querySelector(".messageClose");
var mapOpen = document.querySelector(".big-map");
var mapPopup = document.querySelector(".pop-big-map");
var mapClose = document.querySelector(".mapClose");
[].forEach.call(buy, function(buy){
    buy.addEventListener("click", function (event) {
        event.preventDefault();
        popup.classList.add("modal-content-show");
        popup.classList.add("modal-animation");
    });
});
close.addEventListener("click", function (event) {
    event.preventDefault();
    popup.classList.remove("modal-content-show");
    popup.classList.remove("modal-animation");
});
messageOpen.addEventListener("click", function (event) {
    event.preventDefault();
    messagePopup.classList.add("modal-content-show");
    messagePopup.classList.add("modal-animation");
});
form.addEventListener("submit", function (event) {
    if (!myName.value||!email.value||!text.value) {
        event.preventDefault();
        console.log(myName.value);
        console.log(email.value);
        console.log(text.value);
        alert("Нужно заполнить все поля формы!");
    }
})
messageClose.addEventListener("click", function (event) {
    event.preventDefault();
    messagePopup.classList.remove("modal-content-show");
    messagePopup.classList.remove("modal-animation");
});
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