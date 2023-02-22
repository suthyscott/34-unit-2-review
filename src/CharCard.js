import "./CharCard.css"
import FilmCard from "./FilmCard"

const CharCard = ({ char }) => {
    // const {char} = props
   
    return (
        <div className="char-card-container">
            <p>{char.name}</p>
            {char.films.map(filmUrl => {
                return <FilmCard filmUrl={filmUrl}/>
            })}
        </div>
    )
}

export default CharCard
