import { Pokemon } from './decorators/pokemon-class';

const charmander = new Pokemon('charmander');

(Pokemon.prototype as any).custoName = 'Pikachu';

console.log(charmander);
