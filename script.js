const searchButton = document.getElementById("search-button");
const searchInput = document.getElementById("search-input");
const pokemonDiv = document.getElementById("the-pokemon");
const imagesDiv = document.getElementById("images");
const pokemonName = document.getElementById("pokemon-name");
const pokemonId = document.getElementById("pokemon-id");
const pWeight = document.getElementById("weight");
const pHeight = document.getElementById("height");
const pTypes = document.getElementById("types");
const pHp = document.getElementById("hp");
const pAttack = document.getElementById("attack");
const pDefense = document.getElementById("defense");
const pSpAttack = document.getElementById("special-attack");
const pSpDefense = document.getElementById("special-defense");
const pSpeed = document.getElementById("speed");
let pokemonDataArr = [];

const displayPokemons = (pokemons) => {
    imagesDiv.innerHTML = "";
    pTypes.innerHTML = "";
    for (let i = 0; i < pokemonDataArr.types.length; i++) {
        let addTypes = pokemonDataArr.types[i].type.name.toUpperCase();
        pTypes.innerHTML += `<span> ${addTypes}</span>`
    };

    pokemonName.innerText = `${pokemonDataArr.name}`.toUpperCase();
    pokemonId.innerText = `#${pokemonDataArr.id}`;
    pWeight.innerText = `Weight: ${pokemonDataArr.weight}`;
    pHeight.innerText = `Height: ${pokemonDataArr.height}`;
    pHp.innerText = `${pokemonDataArr.stats[0].base_stat}`;
    pAttack.innerText = `${pokemonDataArr.stats[1].base_stat}`;
    pDefense.innerText = `${pokemonDataArr.stats[2].base_stat}`;
    pSpAttack.innerText = `${pokemonDataArr.stats[3].base_stat}`;
    pSpDefense.innerText = `${pokemonDataArr.stats[4].base_stat}`;
    pSpeed.innerText = `${pokemonDataArr.stats[5].base_stat}`;
    imagesDiv.innerHTML += `<img id="sprite" src=${pokemonDataArr.sprites.front_default}></img >`
};

searchButton.addEventListener("click", () => {
    let fixUrl = searchInput.value.toLowerCase();
    let pokemonUrl = `https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${fixUrl}`;

    fetch(pokemonUrl)
        .then(response => response.json())
        .then(data => {
            pokemonDataArr = data;
            displayPokemons(pokemonDataArr);
        })
        .catch(err => {
            alert("Pokémon not found");
        })
})