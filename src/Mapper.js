import {useEffect} from 'react'
import CharCard from './CharCard'

const Mapper = (props) => {

    useEffect(() => {
        console.log('hit')
    }, [props.chars])

    // const charsDisplay = props.chars.map(char => {
    //   return <CharCard />
    // })

  return (
    <div>
        {props.chars.map(char => {
          // console.log(char)
          return <CharCard char={char} key={char.name}/>
        })}
        {/* {charsDisplay} */}
    </div>
  )
}

export default Mapper