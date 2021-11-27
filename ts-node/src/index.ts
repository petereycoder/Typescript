import { Pokemon } from './decorators/pokemon-class';

const charmander = new Pokemon('charmander');

//(Pokemon.prototype as any).custoName = 'Pikachu';

charmander.publicApi = 'https://fernando-herrera.com';
console.log(charmander);

//charmander.savePokemonToDB(3);