fetch('https://pokeapi.co/api/v2/pokemon/152/')
.then(respuesta => respuesta.json())
.then(pokemon => {
  let element = document.getElementById('Chikorita')
  element.innerHTML = `<p> Nombre: ${pokemon.name}<p>
  <img src='${pokemon.sprites.front_default}'><p>Al luchar, Chikorita agita la hoja que tiene para mantener a raya al rival. Pero, al mismo tiempo, libera una suave fragancia que apacigua el encuentro y crea un ambiente agradable y de amistad.</p><p> Altura: ${pokemon.height}<p><p> Peso: ${pokemon.weight}<p> <p>Experiencia Base:${pokemon.base_experience}</p>`
  ;
  console.log(pokemon)

})
.catch(err=>console.log(err));

fetch('https://pokeapi.co/api/v2/pokemon/212/')
.then(respuesta => respuesta.json())
.then(pokemon => {
  let element = document.getElementById('Scizor')
  element.innerHTML = `<p> Nombre: ${pokemon.name}<p>
  <img src='${pokemon.sprites.front_default}'><p>Sus grandes pinzas representan un tercio de su peso corporal. Basta el impacto de una de ellas para reducir a escombros una enorme roca.</p><p> Altura: ${pokemon.height}<p><p> Peso: ${pokemon.weight}<p> <p>Experiencia Base:${pokemon.base_experience}</p>`
  ;
  console.log(pokemon)

})
.catch(err=>console.log(err));

fetch('https://pokeapi.co/api/v2/pokemon/25/')
.then(respuesta => respuesta.json())
.then(pokemon => {
  let element = document.getElementById('Pikachu')
  element.innerHTML = `<p> Nombre: ${pokemon.name}<p>
  <img src='${pokemon.sprites.front_default}'><p>Cuanto más potente es la energía eléctrica que genera este Pokémon, más suaves y elásticas se vuelven las bolsas de sus mejillas.</p><p> Altura: ${pokemon.height}<p><p> Peso: ${pokemon.weight}<p> <p>Experiencia Base:${pokemon.base_experience}</p>`
  ;
  console.log(pokemon)

})
.catch(err=>console.log(err));