import movies from './movies.js'
import render from './render.js'

const $button = window.recommended
// const $button = document.querySelector('#recommended')
// const $button = document.getElementById('recommended')

$button.addEventListener('click', ()=>{
    render(serRecomendedMovies(movies))
})

function serRecomendedMovies(movies) {
    // console.table(newMovies, ['title', 'vote_average', 'recommended' ])
    return movies.map((movie, index) => {
        /*
        if (movie.vote_average > 7) {
            return { ...movie, recommended: true }
        }
        return movie
        */
        return { ...movie, recommended: movie.vote_average > 7 }
    })
}