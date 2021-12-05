let data = JSON.parse(localStorage.getItem("Data-User"));
function loginBtn(){

let user = {
email : document.getElementById('eamil').value,
password : document.getElementById('password').value,
}
if(user.email === data.input && user.password === data.password){
    alert("Login Successfully");
    window.location.href = './index.html'
}



else{
    alert("Invalid Email or Password");
}

localStorage.setItem("user-data", JSON.stringify(user));
}
