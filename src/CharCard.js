import "./CharCard.css"
import FilmCard from "./FilmCard"
import { useState } from "react"

const CharCard = ({ char, addNewFavorite }) => {
    // const {char} = props
    const [films, setFilms] = useState([])

    const addNewFilm = filmObj => {
        setFilms([...films, filmObj])
    }

    console.log(char.name, films)
    return (
        <div className="char-card-container">
            <p>{char.name}</p>
            <div>
                <h3>Movies in which this character appears: </h3>
                {/* {char.films.map(filmUrl => {
                    return <FilmCard filmUrl={filmUrl} addNewFilm={addNewFilm}/>
                })} */}
                <button onClick={() => addNewFavorite(char)}>Add to favorites</button>
            </div>
        </div>
    )
}

export default CharCard
