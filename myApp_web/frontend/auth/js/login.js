
function login() {
    let state = true;
    let user = {
        email: document.getElementById('email').value,
        password: document.getElementById('password').value
    }

    let errorEmail = document.getElementById('email_error');
    let errorPassword = document.getElementById('password_error');

    if (!user.email) {
        errorEmail.innerText = `Email can't be empty`;
        state = false;
    } else {
        errorEmail.innerText = '';
    }
    
    if (!user.password) {
        errorPassword.innerText = `Password can't be empty`;
        state = false;
    } else {
        errorPassword.innerText = '';
    }

    if (state) {
        fetch('http://localhost:3000/login', {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(user)
        }).then(response => {
            if (response.status == 200) {
                response.json().then(data => {
                    localStorage.setItem('token', data)
                    // window.location.href = '../auth/success/home/home.html'
                    deleteErrors();
                })
            } else {
                showError('Invalid credentials')
            }
        }).catch(err => console.log(err))
    }

}

function showError(errMsg) {
    let error_container = document.getElementById('errors');
    let create_error = document.createElement('p');
    create_error.setAttribute('name', 'error')
    error_container.classList.remove('errors');
    create_error.innerText = errMsg;
    error_container.appendChild(create_error)
}

function deleteErrors() {
    let error_container = document.getElementsByName('error');
    error_container.forEach(err => {
        err.remove()
    })
}

function listOfFilms() {
    fetch('https://imdb-api.com/en/API/SearchAll/k_kuyakof4/inception', {
        method: 'GET'
    }).then(response => {
        response.json().then(data => {
            console.log(data.results.filter(e => e.resultType == 'Title'));
        })
    })
}