function Card({ pokemon }) {
    const imgUrl = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + pokemon.id + ".png"
    return (
        <>
            <div className="poke-card">
                #{pokemon.id}: {pokemon.name}
                <img src={imgUrl} alt={pokemon.name} />
            </div>
        </>)
}
function Container({ pokemons }) {

    // Nos quedamos con los 10 primeros:
    const pokeArr = pokemons.slice(0, 10);

    return (
        <div className="container">
            {/* Renderizado condicional con operador && */}
            {pokeArr && pokeArr.map((pokemon) => {
                // Añadimos un key diferente en cada elemento
                // usando el id de cada pokemon:
                return (
                    <div key={pokemon.id}>
                        <Card pokemon={pokemon} />
                    </div>
                    )
            })}
        </div>
    )
}

export default Container;