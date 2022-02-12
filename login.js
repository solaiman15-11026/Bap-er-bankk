document.getElementById('submit').addEventListener('click', function () {
    const email = document.getElementById('user-email');
    const useremail = email.value;
    const pass = document.getElementById('user-pass');
    const userpass = pass.value;
    if (useremail == 'maruf@gmail.com' && userpass == 12345678) {
        window.location.href = 'banking.html';
    }
});


