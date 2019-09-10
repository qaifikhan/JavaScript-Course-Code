var mainHeading = document.getElementById("main-heading");

var btn = document.getElementById('btn-click');

var sidebar = document.getElementById('sidebar');

var toggleButton = document.getElementById('toggle-icon');

mainHeading.classList.add('big');

toggleButton.addEventListener('click', function() {
    if(sidebar.classList.contains('show')) {
        sidebar.classList.remove('show');
        sidebar.classList.add('hide');
    } else {
        sidebar.classList.add('show');
        sidebar.classList.remove('hide');
    }
});