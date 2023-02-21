

const CharCard = ({char}) => {
    // const {char} = props
    console.log('charChard', char)
    return( 
        <div>
            <p>{char.name}</p>
        </div>
    )
}

export default CharCard