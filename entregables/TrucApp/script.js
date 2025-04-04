const bAmbulancia = document.getElementById("ambulancia")
const bBombers = document.getElementById("bombers")
const bPolicia = document.getElementById("policia")
const bSS = document.getElementById("ss")
const bFontaneria = document.getElementById("fontaneria")
const bMesInfo = document.getElementById("mesInfo")
const b112 = document.getElementById("112")

const ventanaSecundaria = document.getElementById("ventanaSecundaria")
const titulo = document.getElementById("titol")
const telefono = document.getElementById("telefons")
const bCerrar = document.getElementById("cerrar")
const imagenModal = document.getElementById("imagen")

function handleClickAmbulancia (){
    titulo.innerHTML = "Trucant Ambulancia"
    telefono.innerHTML = "123456789"
    imagenModal.setAttribute('src', 'https://img.icons8.com/?size=100&id=9541&format=png&color=000000')
    ventanaSecundaria.setAttribute('class', 'ventanaSecundaria')
}

function handleClickBombers (){
    titulo.innerHTML = "Trucant Bombers"
    telefono.innerHTML = "321654987"
    imagenModal.setAttribute('src', 'https://img.icons8.com/?size=100&id=12411&format=png&color=000000')
    ventanaSecundaria.setAttribute('class', 'ventanaSecundaria')
}

function handleClickPolicia (){
    titulo.innerHTML = "Trucant Policia"
    telefono.innerHTML = "789456123"
    imagenModal.setAttribute('src', 'https://img.icons8.com/?size=100&id=ws0nvjEAlQSt&format=png&color=000000')
    ventanaSecundaria.setAttribute('class', 'ventanaSecundaria')
}

function handleClickSS (){
    titulo.innerHTML = "Trucant Serveis Social"
    telefono.innerHTML = "987654321"
    imagenModal.setAttribute('src', 'https://img.icons8.com/?size=100&id=9542&format=png&color=000000')
    ventanaSecundaria.setAttribute('class', 'ventanaSecundaria')
}

function handleClickFontaneria (){
    titulo.innerHTML = "Trucant Fontaneria"
    telefono.innerHTML = "741852963"
    imagenModal.setAttribute('src', 'https://img.icons8.com/?size=100&id=108735&format=png&color=000000')
    ventanaSecundaria.setAttribute('class', 'ventanaSecundaria')
}

function handleClickMesInfo (){
    titulo.innerHTML = "Trucant Informació general"
    telefono.innerHTML = "147258369"
    imagenModal.setAttribute('src', 'https://img.icons8.com/?size=100&id=37303&format=png&color=000000')
    ventanaSecundaria.setAttribute('class', 'ventanaSecundaria')
}

function handleClick112 (){
    titulo.innerHTML = "Trucant 112"
    telefono.innerHTML = "112"
    imagenModal.setAttribute('src', 'https://img.icons8.com/?size=100&id=q3Aca6nioU6w&format=png&color=000000')
    ventanaSecundaria.setAttribute('class', 'ventanaSecundaria')
}

const handleClickCerrar = () => {
    ventanaSecundaria.setAttribute('class', 'none')
}

bAmbulancia.addEventListener('click', handleClickAmbulancia)
bBombers.addEventListener('click', handleClickBombers)
bPolicia.addEventListener('click', handleClickPolicia)
bSS.addEventListener('click', handleClickSS)
bFontaneria.addEventListener('click', handleClickFontaneria)
bMesInfo.addEventListener('click', handleClickMesInfo)
b112.addEventListener('click', handleClick112)
bCerrar.addEventListener('click', handleClickCerrar)