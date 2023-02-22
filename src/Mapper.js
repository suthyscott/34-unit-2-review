import {useEffect} from 'react'
import CharCard from './CharCard'

const Mapper = (props) => {
    // const charsDisplay = props.chars.map(char => {
    //   return <CharCard />
    // })

  return (
    <div>
        {props.chars.map(char => {
          // console.log(char)
          return <CharCard char={char} key={char.name} addNewFavorite={props.addNewFavorite}/>
        })}
        {/* {charsDisplay} */}
    </div>
  )
}

export default Mapper