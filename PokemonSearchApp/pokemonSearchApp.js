const pokemonList = "https://pokeapi-proxy.freecodecamp.rocks/api/pokemon";
const typingSprite = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-viii/sword-shield"
const searchInput = document.getElementById("search-input")
const searchBtn = document.getElementById("search-button")
const pokemonSprite = document.getElementById("pokemon-sprite")
const pokemonName = document.getElementById("pokemon-name")
const pokemonId = document.getElementById("pokemon-id")
const pokemonWeight = document.getElementById("weight")
const pokemonHeight = document.getElementById("height")
const pokemonTypes = document.getElementById("types")
const pokemonHp = document.getElementById("hp")
const pokemonAttack = document.getElementById("attack")
const pokemonDefense = document.getElementById("defense")
const pokemonSpAttack = document.getElementById("special-attack")
const pokemonSpDefense = document.getElementById("special-defense")
const pokemonSpeed = document.getElementById("speed")

const typeColors = {
    normal: "#A8A878",
    fire: "#F08030",
    water: "#6890F0",
    electric: "#F8D030",
    grass: "#78C850",
    ice: "#98D8D8",
    fighting: "#C03028",
    poison: "#A040A0",
    ground: "#E0C068",
    flying: "#A890F0",
    psychic: "#F85888",
    bug: "#A8B820",
    rock: "#B8A038",
    ghost: "#705898",
    dragon: "#7038F8",
    dark: "#705848",
    steel: "#B8B8D0",
    fairy: "#EE99AC"
};

async function fetchData() {

    try {
        const response = await fetch(`${pokemonList}/${searchInput.value.toLowerCase()}`);
        const json = await response.json();
        const { name, id, weight, height, sprites, stats, types } = json
        pokemonName.textContent = name.toUpperCase();
        pokemonId.textContent = `#${id}`
        pokemonWeight.textContent = `Weight: ${weight}`
        pokemonHeight.textContent = `Height: ${height}`
        pokemonSprite.innerHTML = `<img id="sprite" src="${sprites.front_default}"></img>`

        pokemonSprite.innerHTML = '';
        pokemonSprite.innerHTML = `<img id="sprite" src="${sprites.front_default}">`

        pokemonSprite.style.display = "block"
        pokemonHp.textContent = stats[0].base_stat;
        pokemonAttack.textContent = stats[1].base_stat;
        pokemonDefense.textContent = stats[2].base_stat;
        pokemonSpAttack.textContent = stats[3].base_stat;
        pokemonSpDefense.textContent = stats[4].base_stat;
        pokemonSpeed.textContent = stats[5].base_stat;

        types.forEach(type => {
            pokemonTypes.innerHTML += `<span style="background-color:${typeColors[type.type.name]};">${type.type.name}</span>`

        })
    } catch {
        alert("Pokemon not found")
    }
}

const clearInfo = () => {
    pokemonName.textContent = "";
    pokemonId.textContent = ""
    pokemonWeight.textContent = ""
    pokemonHeight.textContent = ""
    pokemonSprite.innerHTML = ""
    pokemonTypes.innerHTML = ""
    pokemonHp.textContent = ""
    pokemonAttack.textContent = ""
    pokemonDefense.textContent = ""
    pokemonSpAttack.textContent = ""
    pokemonSpDefense.textContent = ""
    pokemonSpeed.textContent = ""


}

searchBtn.addEventListener("click", () => {
    clearInfo()
    fetchData()
})
searchInput.addEventListener("keydown", function (event) {
    if (event.key === 'Enter') {
        clearInfo()
        fetchData()
    }
});
