const baseURL = 'https://pokeapi.co/api/v2/'

const searchBtn = document.querySelector('#searchBtn')
const searchForm = document.querySelector('form')
const infoC = document.querySelector('.infoC')
const photo = document.querySelector(".pokeball")
const searchTerm = document.querySelector('.search')
const height = document.querySelector("height")
const weight = document.querySelector(".weight")

searchForm.addEventListener('submit', fetchResults);  

function fetchResults(e) {
    e.preventDefault();
    fetch(`${baseURL}pokemon/${searchTerm.value}`)
        .then(response => response.json())
        .then(function(json){
        console.log(json)
        displayResults(json)
    }) 
}

function displayResults(json){
    console.log(json.name)

while (infoC.firstChild){
    infoC.removeChild(infoC.firstChild)
}

    document.querySelector('.infoC')
    let pokeName = document.createElement('h2')
    let pokeIMG = document.createElement('img')
    let pokeHeight = document.createElement('h4')
    let pokeWeight = document.createElement('h4')
    let pokeTypes = document.createElement('h4')

    let pokePic = json.sprites.front_default
    let pokemonName = json.name
    let pokeH = json.height
    let pokeW = json.weight
    let pokeT = `${json.types[0].type.name}`
    pokeTypes.textContent = `Type: ${pokeT}`
    pokeName.textContent = pokemonName
    pokeWeight.textContent = `Weight: ${pokeW}`
    pokeHeight.textContent = `Height: ${pokeH}`
    pokeIMG.src = pokePic

    infoC.appendChild(pokeName)
    infoC.appendChild(pokeHeight)
    infoC.appendChild(pokeWeight)
    infoC.appendChild(pokeTypes)
    infoC.appendChild(pokeIMG)
    console.log(pokeTypes)  
} 


