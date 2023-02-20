import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios'
import Mapper from './Mapper';

function App() {
  const [chars, setChars] = useState([])

  const fetchChars = () => {
    axios.get('https://swapi.dev/api/people')
      .then((res) => { 
        console.log(res)
        setChars(res.data.results)
      })
      .catch(err => console.log(err))
  }

 useEffect(() => {
  fetchChars()
 }, [])

// useEffect(fetchChars, [])

 console.log(chars)
  return (
    <div className="App">
        <Mapper chars={chars}/>
    </div>
  );
}

export default App;
