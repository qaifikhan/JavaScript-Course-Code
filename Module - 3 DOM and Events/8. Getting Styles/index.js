var mainHeading = document.getElementById('main-heading');
var btnDecreaseFont = document.getElementById('btn-decrease');
var btnIncreaseFont = document.getElementById('btn-increase');

var initialFontSize = window.getComputedStyle(mainHeading).fontSize;
initialFontSize = parseInt(initialFontSize.substr(0, (initialFontSize.length - 2)));

btnIncreaseFont.onclick = function() {
    initialFontSize += 10
    mainHeading.style.fontSize = initialFontSize + "px";
}

btnDecreaseFont.addEventListener('click', function() {
    initialFontSize -= 10
    mainHeading.style.fontSize = initialFontSize + "px";
})