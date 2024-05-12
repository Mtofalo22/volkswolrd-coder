import NavBar from "./components/navbar/NavBar"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import ItemCount from "./components/ItemCount/ItemCount"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import {BrowserRouter, Routes, Route} from "react-router-dom"

import './App.css'

function App() {
  
  return (
    
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={ <ItemListContainer saludo= "Bienvenido a VolksWorld"/>  } />
        <Route path="/category/:idCategory" element={<ItemListContainer saludo= "Bienvenido a VolksWorld"/>} />
        <Route path="/detail/:idProduct" element={<ItemDetailContainer/>}/>
      </Routes>
    </BrowserRouter>
       
  )
}

export default App
