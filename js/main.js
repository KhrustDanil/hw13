
const linkPopups = document.querySelectorAll(".linkPopup");
const popup = document.querySelector("#popup");
const cross = document.querySelector("#cross");
const linkPopupArray = Array.from(linkPopups);

linkPopupArray.forEach(function(linkPopups) {
    linkPopups.addEventListener('click', function() {
        popup.style.display = "block";
    });
});

cross.addEventListener('click', function() {
    popup.style.display = "none";
});

document.querySelector('.menu__btn').addEventListener('click', function() {
  document.getElementById('back').classList.toggle("crosses");
})






