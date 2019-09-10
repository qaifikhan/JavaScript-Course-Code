var btn = document.getElementById("btn-click");
var mainDiv = document.querySelector("header div");

function onBtnClick() {
    mainDiv.style.backgroundColor = "rgb(" + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + ")"
}

// btn.onclick = onBtnClick;

btn.addEventListener('click', onBtnClick)