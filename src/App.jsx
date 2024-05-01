import NavBar from "./components/navbar/NavBar"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import ItemCount from "./components/ItemCount/ItemCount"

import './App.css'

function App() {
  
  return (
    
      <div>
        <NavBar />
        <ItemListContainer saludo = "Bienvenido a VolksWorld"/>
        <ItemCount stock= {6}/>
      </div>
       
  )
}

export default App
