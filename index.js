let firstEmail = document.getElementById("firstEmail")
let firstSubmit = document.getElementById("firstSubmit")
let firstError = document.getElementById("firstError")
let secondEmail = document.getElementById("secondEmail")
let secondSubmit = document.getElementById("secondSubmit")
let secondError = document.getElementById("secondError")

firstEmail.addEventListener("input", () => {
    firstError.classList.add("displayNone")    
})

secondEmail.addEventListener("input", () => {
    secondError.classList.add("displayNone")    
})

firstSubmit.addEventListener("click", () => {
    if(firstEmail.value == 0 || firstEmail.value.includes("@") == false){
        if(firstError.classList.contains("displayNone")){
            firstError.classList.toggle("displayNone")
        }
    }else{
        console.log("Giusto")
    }
})

secondSubmit.addEventListener("click", () => {
    if(secondEmail.value == 0 || secondEmail.value.includes("@") == false){
        if(secondError.classList.contains("displayNone")){
            secondError.classList.toggle("displayNone")
        }
    }else{
        console.log("Giusto")
    }
})