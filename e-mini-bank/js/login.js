
document.getElementById('btn-submit').addEventListener('click', function(){
    const emailfield = document.getElementById('user-email');
    const email = emailfield.value;

    const passfield = document.getElementById('user-pass');
    const password = passfield.value;

    console.log(email, password)
})