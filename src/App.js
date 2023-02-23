import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios'
import Mapper from './Mapper';
import Favorites from './Favorites';

function App() {
  const [chars, setChars] = useState([])
  const [favorites, setFavorites] = useState([])

  const fetchChars = () => {
    axios.get('https://swapi.dev/api/people')
      .then((res) => { 
        setChars(res.data.results)
      })
      .catch(err => console.log(err))
  }

 useEffect(() => {
  fetchChars()
 }, [])

 const addNewFavorite = charObj => {
  setFavorites([...favorites, charObj])
 }

 const removeFromFavorites = name => {
  const index = favorites.findIndex(fav => fav.name === name)

  favorites.splice(index, 1)

  setFavorites([...favorites])
 }

// useEffect(fetchChars, [])

//  console.log(favorites)
  return (
    <div className="App">
        <Mapper chars={chars} addNewFavorite={addNewFavorite}/>
        <Favorites favorites={favorites} removeFromFavorites={removeFromFavorites}/>
    </div>
  );
}

export default App;
