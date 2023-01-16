
function validateForm(){
    const nameInput= document.getElementById('name');
    const email= document.getElementById('email');
    const password= document.getElementById('password');
    const gender= document.getElementById('gender');
    const CPass= document.getElementById('CPass');
    const city= document.getElementById('city');
    const addr= document.getElementById('addr');
    const form= document.getElementById('form');

    let errorMessage = []

if (nameInput.value.length > 10 ) {
    errorMessage.push("name must lest than 10 word")
    document.getElementById("name").value = "";
    document.getElementById("name").placeholder = "name must lest than 10 word";
    return false;
}
if (email.value.length < 3 ) {
    errorMessage.push("email is too short")
    document.getElementById("email").value = "";
    document.getElementById("email").placeholder = "email is too short";
    return false;
}
if (password.value.length < 8 ) {
    errorMessage.push("password must contain at least 8 word")
    document.getElementById("password").value = "";
    document.getElementById("password").placeholder = "password must contain at least 8 word";
    return false;
}
if (gender.value != "male" &&gender.value != "female"  ) {
    return false;
}
if (CPass.value != password.value) {
    errorMessage.push("password and re input password must be same")
    document.getElementById("CPass").value = "";
    document.getElementById("CPass").placeholder = "wrong password";
    return false;
}
if (city.value === "" || city.value == null) {
    errorMessage.push("city must be selected")


    return false;
}
if (addr.value.length > 1) {
    errorMessage.push("address must be filled")
    document.getElementById("addr").value = "";
    document.getElementById("addr").placeholder = "enter address";
    return false;
}

if(errorMessage.length === 0){
    alert('Registration Success!')
}else{
    alert(errorMessage.join('\n'))
}
}

