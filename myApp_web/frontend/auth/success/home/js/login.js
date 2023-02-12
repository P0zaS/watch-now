
function login() {
    let user = {
        username: document.getElementById('username').value,
        password: document.getElementById('password').value
    }

    console.log(user);
    fetch('http://localhost:3000/users', {
        method: 'GET'
    }).then(response => {
        console.log(response);
        window.location.href = '../auth/success/home/home.html'
    }).catch(err => console.log(err))
}