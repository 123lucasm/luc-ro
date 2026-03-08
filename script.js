let inicio = new Date("2025-12-07")

function actualizarTiempo(){

let ahora = new Date()

let diff = ahora - inicio

let segundos = Math.floor(diff/1000)
let minutos = Math.floor(segundos/60)
let horas = Math.floor(minutos/60)
let dias = Math.floor(horas/24)
let meses = Math.floor(dias/30)
let años = Math.floor(meses/12)

document.getElementById("años").innerText = años
document.getElementById("meses").innerText = meses % 12
document.getElementById("dias").innerText = dias % 30
document.getElementById("horas").innerText = horas % 24
document.getElementById("minutos").innerText = minutos % 60
document.getElementById("segundos").innerText = segundos % 60

}

setInterval(actualizarTiempo,1000)



function mostrarCarta(){

document.getElementById("cartaCompleta").style.display="block"

}



function sorpresa(){

Swal.fire({

title:"Lucas ❤️ Romina",
text:"Cada segundo con vos es mi favorito",
icon:"success",
confirmButtonColor:"#ff3f7f"

})

}



function preguntaAmor(){

Swal.fire({

title:"Lucas ❤️ Romina",
width:"520px",
showConfirmButton:false,
showCancelButton:false,

html:`

<div style="text-align:center;padding:20px">

<p style="font-size:18px">
Desde que estás conmigo todo es más lindo ❤️
</p>

<p style="font-size:16px;margin-bottom:30px">
Cada momento con vos vale oro ✨
</p>

<h3 style="margin-bottom:30px">
¿Me amas? 🥺
</h3>

<div id="areaBotones" style="
height:140px;
position:relative;
overflow:hidden;
display:flex;
justify-content:center;
align-items:center;
gap:20px;
">

<button id="btnSi"
style="padding:12px 25px;background:#ff4b6e;border:none;border-radius:10px;color:white;font-size:16px;cursor:pointer;">
Sí ❤️
</button>

<button id="btnNo"
style="padding:12px 25px;background:#666;border:none;border-radius:10px;color:white;font-size:16px;cursor:pointer;">
No 😅
</button>

</div>

</div>

`

})

setTimeout(()=>{

let btnNo=document.getElementById("btnNo")
let btnSi=document.getElementById("btnSi")
let area=document.getElementById("areaBotones")

btnSi.onclick=function(){

Swal.fire({
title:"Yo también te amo 🥰",
text:"Sabía que dirías que sí ❤️",
icon:"success"
})

}

btnNo.onmouseover=function(){

let x=(Math.random()*200)-100
let y=(Math.random()*80)-40

btnNo.style.transform=`translate(${x}px,${y}px)`

}

},100)

}


function corazones(){

let container=document.querySelector(".hearts")

setInterval(()=>{

let heart=document.createElement("span")

heart.innerHTML="❤️"

heart.style.left=Math.random()*100+"%"

heart.style.fontSize=(Math.random()*25+10)+"px"

container.appendChild(heart)

setTimeout(()=>{

heart.remove()

},8000)

},300)

}

corazones()



const CLOUD_NAME="djvfz1nsw"
const UPLOAD_PRESET="romina_lucas_upload"



function subirImagen(){

let file = document.getElementById("fileInput").files[0]

if(!file){

Swal.fire({
icon:"warning",
title:"Elegí una foto primero 📷"
})

return
}

let formData = new FormData()

formData.append("file", file)
formData.append("upload_preset", UPLOAD_PRESET)

fetch(`https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,{

method:"POST",
body:formData

})
.then(res=>res.json())
.then(data=>{

if(data.secure_url){

mostrarImagen(data.secure_url)

let fotos = JSON.parse(localStorage.getItem("fotosRominaLucas")) || []

fotos.push(data.secure_url)

localStorage.setItem("fotosRominaLucas",JSON.stringify(fotos))

Swal.fire({
icon:"success",
title:"Foto subida ❤️",
text:"Nuestro recuerdo fue guardado"
})

}else{

Swal.fire({
icon:"error",
title:"Error subiendo la foto"
})

}

})
.catch(()=>{

Swal.fire({
icon:"error",
title:"Error al subir la imagen"
})

})

}



function mostrarImagen(url){

let galeria=document.getElementById("galeria")

let img=document.createElement("img")

img.src=url

galeria.appendChild(img)

}



function cargarFotos(){

let fotos = JSON.parse(localStorage.getItem("fotosRominaLucas")) || []

fotos.forEach(url=>{
mostrarImagen(url)
})

}



window.addEventListener("load",function(){

Swal.fire({
title:"Bienvenida Romina ❤️",
text:"Esta página guarda nuestros recuerdos",
icon:"success",
confirmButtonColor:"#ff3f7f"
})

cargarFotos()

})