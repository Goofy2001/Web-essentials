let btn = document.getElementById("btn1")

btn.addEventListener('click', function() {
    console.log("Yes! Het werkt")
})

function paragraafToevoegen(container) {
    let paragraaf = document.createElement("p")
    paragraaf.textContent = "Yes! Het werkt"
    container.appendChild(paragraaf)
}

let div = document.getElementById("container")

btn.addEventListener('click', function () {
    paragraafToevoegen(div)
})


let slider = document.querySelector("input.niveau")
let p_niveau = document.querySelector("p.niveau")

slider.addEventListener('input', function() {
    console.log(slider.value)
    let value = slider.value
    p_niveau.textContent = "Huidige waarde: " + value
})


function waardeSlider() {
    
    
}

waardeSlider()