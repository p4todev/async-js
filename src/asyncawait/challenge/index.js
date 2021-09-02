const fetchData = require('../../promises/challenge/index.js');

let API = 'https://rickandmortyapi.com/api/character/'; 

const getData = async (url) => { 
    try{
        const data = await fetchData(url);
        const character = await fetchData(`${url}${data.results[0].id}`);
        const origin = await fetchData(character.origin.url);

        console.log(data.info.count);
        console.log(character.name);
        console.log(origin.dimension);

    }catch{
        console.log(err);
    }
}

getData(API);

