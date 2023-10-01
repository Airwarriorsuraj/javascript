let card = document.querySelector(".card");
let button = document.querySelector("button")
let content = document.querySelector(".content")
let back_content = document.querySelector(".back-content")

let flip = ()=>{
    if(card.style.transform=="rotateY(0deg)"){
        card.style.transform="rotateY(360deg)"
        card.style.background="none"
        back_content.style.display="block"
        content.style.display="none"

    }
    else{
        card.style.transform="rotateY(0deg)"
        card.style.background=""
        back_content.style.display="none"
        content.style.display="flex"
    }
}