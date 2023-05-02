const form= document.getElementById("container") 
const first_name= document.getElementById("first_name")
const last_name= document.getElementById("last_name")
const email= document.getElementById("email")
const password= document.getElementById("password")


form.addEventListener('submit',(e)=>{
    e.preventDefault()
    checkInputs()
})

function checkInputs(){
 const userfirst_name=first_name.value.trim()//trim() remove os espaçamentos
 const last_name1=last_name.value.trim()
 const email1=email.value.trim()
 const password1=password.value.trim()
 if(userfirst_name === ""){
    //mostrar o error
    //mostrar a class error
    errorValidation(first_name,"Campo vazio, preencha.")

 }else{
   //sucesso 
 }
}

function errorValidation(input,messager){
    var styleInputs= input.parentElement; //pega o elemento pai do input(first_name)
    styleInputs.className ="style_inputs error";
}