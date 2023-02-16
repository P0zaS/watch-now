function setToken(token) {
    if (token != "") {
        localStorage.setItem('token', token)
    }else{
        localStorage.clear();
    } 
}
function checkLogin() {
    if(!localStorage.getItem('token')){
        window.location.href = '../../login.html'
    }
}

function logOut() {
    setToken("");
    checkLogin();
}