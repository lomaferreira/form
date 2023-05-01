const form= document.getElementById('container') 
const first_name= document.getElementById('first_name').value
const last_name= document.getElementById('last_name').value
const email= document.getElementById('email').value
const password= document.getElementById('password').value
console.log(email)
form.addEventListener('submit',(e)=>{
    e.preventDefault()
    checkInputs()
})

function checkInputs(){
 const first_name1=first_name.value.trim()//trim() remove os espaçamentos
 const last_name1=last_name.value.trim()
 const email1=email.value.trim()
 const password1=password.value.trim()

}