const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));

module.exports = {
    index: async function (req, res, next) {
        /*let pokemona = [];
        async function find() {
            await fetch(`https://pokeapi.co/api/v2/pokemon/1/`)
            .then(response => response.json()).then(pokemon =>{
                pokemona.push(pokemon)
            console.log(pokemon); }) 
        }*/
          
        let pokemons = await fetch('https://pokeapi.co/api/v2/pokemon')
        .then(response =>response.json()).then(api=>{
            let pokemons = api.results;
            //console.log(pokemons);
            //console.log(api);
            //console.log(pokemona);
            res.render('index',{pokemons/*,pokemona*/})
        })
    },
    pokemon: async function(req , res, next){
        let pokeId = req.params.id;
        let pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeId}/`)
        .then(response => response.json()).then(api=>{
            // 3 abilities del pokemon por id
            let abilities = api.abilities;
            console.log(api);
            //console.log(abilities);
            res.render('pokemon',{abilities})
        })
        

    }
}