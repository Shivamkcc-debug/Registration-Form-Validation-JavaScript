const form = document.getElementById("form")

const nameInput = document.getElementById("name")
const emailInput = document.getElementById("email")
const phoneInput = document.getElementById("phone")
const passwordInput = document.getElementById("password")

const strengthFill = document.getElementById("strengthFill")
const passwordText = document.getElementById("passwordText")

const toggle = document.getElementById("toggle")

const tableBody = document.querySelector("#userTable tbody")

let submissions = JSON.parse(localStorage.getItem("submissions")) || []


// Name Validation
nameInput.addEventListener("input",()=>{

if(nameInput.value.length < 3){
document.getElementById("nameError").innerText="Minimum 3 characters required"
}else{
document.getElementById("nameError").innerText=""
}

})


// Email Validation
emailInput.addEventListener("input",()=>{

let pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

if(!pattern.test(emailInput.value)){
document.getElementById("emailError").innerText="Invalid Email"
}else{
document.getElementById("emailError").innerText=""
}

})


// Phone Validation
phoneInput.addEventListener("input",()=>{

let pattern = /^[0-9]{10}$/

if(!pattern.test(phoneInput.value)){
document.getElementById("phoneError").innerText="Phone must be 10 digits"
}else{
document.getElementById("phoneError").innerText=""
}

})


// Password Strength Meter
passwordInput.addEventListener("input",()=>{

let pass = passwordInput.value

if(pass.length < 6){
strengthFill.style.width="33%"
strengthFill.style.background="red"
passwordText.innerText="Weak Password"
}
else if(pass.length < 10){
strengthFill.style.width="66%"
strengthFill.style.background="orange"
passwordText.innerText="Medium Password"
}
else{
strengthFill.style.width="100%"
strengthFill.style.background="green"
passwordText.innerText="Strong Password"
}

})


// Show Hide Password
toggle.addEventListener("click",()=>{

if(passwordInput.type === "password"){
passwordInput.type = "text"
}else{
passwordInput.type = "password"
}

})


// Display Table
function displayUsers(){

tableBody.innerHTML=""

submissions.forEach(user =>{

let row = `
<tr>
<td>${user.name}</td>
<td>${user.email}</td>
<td>${user.phone}</td>
</tr>
`

tableBody.innerHTML += row

})

}

displayUsers()


// Form Submit
form.addEventListener("submit",(e)=>{

e.preventDefault()

let user = {

name:nameInput.value,
email:emailInput.value,
phone:phoneInput.value,
password:passwordInput.value

}

submissions.push(user)

localStorage.setItem("submissions",JSON.stringify(submissions))

displayUsers()

form.reset()

strengthFill.style.width="0%"

})