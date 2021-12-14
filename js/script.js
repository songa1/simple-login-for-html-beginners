const names = document.getElementById('name');
const email = document.getElementById('email');
const password = document.getElementById('password');
const cPassword = document.getElementById('password1');

const emailLogin = document.getElementById('emailL')
const passwordLogin = document.getElementById('passwordL')

const signBtn = document.getElementById('signup');
const logBtn = document.getElementById('login');

signBtn.addEventListener('click', (e)=>{
    e.preventDefault();
    if(names.value === '' || email.value === '' || password === ''){
        alert("Some information is missing!");
    }else if(password.value !== cPassword.value){
        alert("Password do not match!")
    }else {
        const info = {
            names: names.value,
            email: email.value,
            password: password.value
        }
        localStorage.setItem('info', info).then(res=>{
            alert("Your information have been saved!")
        }).catch(err=> alert(`${err.message}`))
        
    }
})

logBtn.addEventListener('click', (e)=>{
    e.preventDefault()
    if (emailLogin.value === '' || passwordLogin.value === ''){
        alert("Some information is missing!");
    } else {
        const info = localStorage.getItem('info');
        if (emailLogin.value === info.email && passwordLogin.value === info.password) {
            alert("Correct credentials");
        }else{
            alert("Wrong credentials!");
        }
    }
})