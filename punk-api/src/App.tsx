//import { useState } from 'react'
import './App.scss'
import CardList from './components/CardList/CardList'
import beers from './data/beer'

function App() {
  //const [] = useState(0)

  return (

      <div>
        <CardList info={beers} />
      </div>
    
  )
}

export default App
