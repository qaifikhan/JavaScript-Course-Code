var username = document.getElementById('username');
var loginForm = document.getElementById('login-form');
var usernameErrPara = document.getElementById('username-err');

username.addEventListener('input', function(e) {
    var pattern = /^[\w]{6,8}$/;
    var currentValue = e.target.value;
    var valid = pattern.test(currentValue);

    if(valid) {
        usernameErrPara.style.display = 'none'
    } else {
        usernameErrPara.style.display = 'block'
    }
})