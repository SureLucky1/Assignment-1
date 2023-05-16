const nameValidation = document.getElementById("fname")
const passwordValidation = document.getElementById("lname")
const result = document.getElementById("result")
const form = document.getElementById("form")

const account = [
    {Account : "Tommy"},
    {Password : 123}
]
function myFunction(){
if(nameValidation.value == account[0].Account){
    if(passwordValidation.value == account[1].Password){
        result.innerHTML = "hello, " + account[0].Account;
        result.classList.toggle("hilight");

        form.style.backgroundColor = "skyblue"
    }else{
        result.innerHTML = "account or password is not valid."
        form.style.backgroundColor = "red"
        result.classList.remove("hilight");
    }
}else{
    result.innerHTML ="account name invalid"
    form.style.backgroundColor = "red"
    result.classList.remove("hilight");
}

}