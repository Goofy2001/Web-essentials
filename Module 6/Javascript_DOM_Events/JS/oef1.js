let t2GetElementById = document.getElementById('titel2')
console.log(t2GetElementById)

let t2QuerySelector = document.querySelector('h2#titel2')
console.log(t2QuerySelector)

let paragravenGetElementsByTagName = document.getElementsByTagName('p')
for (let i = 0; i < paragravenGetElementsByTagName.length; i++) {
    console.log(paragravenGetElementsByTagName[i])
}


let paragravenQuerySelectorAll = document.querySelectorAll('p')
for (let i = 0; i < paragravenQuerySelectorAll.length; i++) {
    console.log(paragravenQuerySelectorAll[i])
}


let pSpeciaalGetElementsByClassName = document.getElementsByClassName("speciaal")
console.log(pSpeciaalGetElementsByClassName)


