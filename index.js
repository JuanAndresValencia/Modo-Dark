
document.addEventListener("DOMContentLoaded", () => {
   

   let button = document.getElementById("button")
   button.addEventListener("click", () => {
       let documento = document.querySelector(".contenedor-total")
       documento.classList.toggle("dark")
       
       if (documento.classList.contains("dark")){
           localStorage.setItem("darkmode", "true")
           let button = document.getElementById("button")
           button.style.paddingLeft = "37px"
       } else {
           localStorage.setItem("darkmode", "false")
           let button = document.getElementById("button")
           button.style.paddingLeft = "0px"
       }
       })
   
   
   

   if (localStorage.getItem("darkmode") === "true"){
       let documento = document.querySelector(".contenedor-total")
       documento.classList.add("dark")
       let button = document.getElementById("button")
       button.style.paddingLeft = "37px"
       
    } else{
       let documento = document.querySelector(".contenedor-total")
       documento.body.classList.remove("dark")
       let button = document.getElementById("button")
       button.style.paddingLeft = "0px"
       
            

       
       
   }

   

})