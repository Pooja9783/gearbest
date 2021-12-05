function subBtn(){
    let data = {
        input : document.getElementById('eamil').value,
        password : document.getElementById('password').value,
        repassword : document.getElementById('repassword').value,
    }

    if (password.value !== repassword.value) {
                alert("Password does not match ");
                window.location.href = "subscribe.html";
    }
                else{
                    window.location.href = "login.html"
            }
            localStorage.setItem("Data-User", JSON.stringify(data));
            console.log(data);

}