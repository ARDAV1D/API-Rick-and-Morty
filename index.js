function getCharacters(done) {

    const results = fetch("https://rickandmortyapi.com/api/character");

    results
        .then(response => response.json())
        .then(data => {
            done(data)
        });
}

getCharacters(data => {
    data.results.forEach(personaje => {
        const article = document.createRange().createContextualFragment(/*html*/`
            <article>

                <div class="image-container">
                    <img src="${personaje.image}" alt="Personaje">
                </div>
                <h2>${personaje.name}</h2>
                <span>Status: ${personaje.status}</span> <br>
                <span>Location: ${personaje.species}</span> <br>
                <span>Gender: ${personaje.gender}</span>

            </article>
        `);

        const main = document.querySelector("main");

        main.append(article);
    });
});