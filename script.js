let share = document.querySelector(".share"),
    popup = document.querySelector(".share-popup");

share.onclick = function() {
    share.classList.toggle("active");
    if (share.classList.contains("active")) {
        popup.style.display = "flex";
    } else {
        popup.style.display = "none";
    }
};