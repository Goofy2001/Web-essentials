function wijzig1(container) {
    container.innerText = "Lasagne"
    container.style.border = "1px solid red"
}
let Li2 = document.getElementById("two")
wijzig1(Li2)

function wijzig2 () {
    let lijstHot = document.getElementsByClassName("hot")
    lijstHot[0].classList.add("cold")
    lijstHot[0].classList.remove("hot")
    
    
}

wijzig2()