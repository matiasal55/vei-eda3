const notifications=document.getElementById("notifications")

notifications.parentElement.addEventListener("click",()=>{
    notifications.classList.add("d-none");
})

const borrar=document.getElementById("borrar");
const mensaje=document.getElementById("mensaje");

borrar.addEventListener("click",()=>{
    mensaje.classList.add("d-none");
})