import { biomeToTypes } from "./biomeMap";

const base="https://pokeapi.co/api/v2";

export async function getPokemonType(type){
    const res= await fetch(`${base}/type/${type}`);
    if(!res.ok){
        throw new Error("faild in api");
    }
    const data = await res.json();
    return data.pokemon.map(p => p.pokemon.name);
}


export async function getPokemonsDetails(name){
    const res= await fetch(`${base}/pokemon/${name}`);
    if(!res.ok){
        throw new Error("faild in api");
    }
    const data = await res.json();
    return {
    id: data.id,
    name: data.name,
    image: data.sprites.other["official-artwork"].front_default,
    types: data.types.map(t => t.type.name),
    hp: data.stats.find(s => s.stat.name === "hp").base_stat,
    attack: data.stats.find(s => s.stat.name === "attack").base_stat,
  };

}

export async function bioMe(biome){
    const types= biomeToTypes[biome];
    if (!types) throw new Error("Unknown biome");

    const lists= await Promise.all(types.map(t => getPokemonType(t)));

    const allNames = [...new Set(lists.flat())];
    const shuffled = [...allNames].sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, 6);
        const pokemonsDetails = await Promise.all(selected.map(name => getPokemonsDetails(name)));
    return pokemonsDetails;


}