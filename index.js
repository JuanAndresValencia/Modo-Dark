
document.addEventListener("DOMContentLoaded", () => {
   

   let button = document.getElementById("button")
   button.addEventListener("click", () => {
       let documento = document.querySelector(".contenedor-total")
       documento.classList.toggle("dark")
       
       
       if (documento.classList.contains("dark")){
           localStorage.setItem("darkmode", "true")
           let button = document.getElementById("button")
           button.style.paddingLeft = "37px"
           let moonimg = document.getElementById("blackmode")
           moonimg.style.display = "block"
           let sunimg = document.getElementById("sunmode")
           sunimg.style.display = "none"
       } else {
           localStorage.setItem("darkmode", "false")
           let button = document.getElementById("button")
           button.style.paddingLeft = "0px"
           let sunimg = document.getElementById("sunmode")
           sunimg.style.display = "block"
           let moonimg = document.getElementById("blackmode")
           moonimg.style.display = "none"

       }
       })
   
       let moonimg = document.getElementById("blackmode")
       moonimg.style.display = "none"
   
   

   if (localStorage.getItem("darkmode") === "true"){
       let documento = document.querySelector(".contenedor-total")
       documento.classList.add("dark")
       let button = document.getElementById("button")
       button.style.paddingLeft = "37px"
       let moonimg = document.getElementById("blackmode")
       moonimg.style.display = "block"
       let sunimg = document.getElementById("sunmode")
       sunimg.style.display = "none"
       
    } else{
       let documento = document.querySelector(".contenedor-total")
       documento.body.classList.remove("dark")
       let button = document.getElementById("button")
       button.style.paddingLeft = "0px"
       let sunimg = document.getElementById("sunmode")
       sunimg.style.display = "block"
       let moonimg = document.getElementById("blackmode")
       moonimg.style.display = "none"
       
    }

   

})