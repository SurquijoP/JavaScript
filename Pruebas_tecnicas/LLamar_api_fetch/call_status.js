const fetchData = require('../utils/fetchdata.js');
const API = 'https://rickandmortyapi.com/api/character/';


fetchData(API)
.then(data => {
    const personajes = (data.results);
  const Alive = personajes.filter (function(personajes){
  return personajes.status === "Alive"
  } )
  const namesAlive = Alive.map(function(personajesAlive){
    return personajesAlive.name})
    
    //console.log(Alive);
    console.log(data.info.count + " son los personajes de Rick y morty.");
    console.log("solo " + Alive.length + " estan vivos." );
    console.log("los nombres de los vivos son: " + namesAlive.sort());
    
});
 // console.group(response.results);













