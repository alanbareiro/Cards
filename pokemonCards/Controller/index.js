const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));

module.exports = {
    index: function (req, res, next) {

        fetch('https://pokeapi.co/api/v2/pokemon')
        .then(response =>response.json()).then(api=>{
            let pokemons = api.results;
            console.log(pokemons);
            res.render('index',{pokemons})
        })
        
    }
}