import React, {useState} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CartWidget } from './components/CartWidget/CartWidget';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/Container/ItemListContainer';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faUserAstronaut, faCoffee } from '@fortawesome/free-solid-svg-icons';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { Carrito } from './components/Carrito/Carrito'
import { CartContext } from './context/CartContext'

library.add(fab, faUserAstronaut, faCoffee)

function App() {

  const [carrito, setCarrito] = useState([])
  console.log(carrito)

  const agregarAlCarrito = (item) => {
    setCarrito( [...carrito, item] )
  }

  const removerDelCarrito = (id) =>{
    setCarrito( carrito.filter(prod => prod.id !== id))
  }

  const vaciarCarrito = () =>{
    setCarrito([])
  }

  const isInCart = (id) =>{
    return carrito.some( prod => prod.id === id)
  }

  const totalCantidad = () =>{
    return carrito.reduce((acc, prod) => acc + prod.cantidad, 0)
  }

  return (
    <CartContext.Provider value={{
      carrito,
      agregarAlCarrito,
      removerDelCarrito,
      vaciarCarrito,
      isInCart,
      totalCantidad
    }}>

    <BrowserRouter>   
      <NavBar>
        <CartWidget/>
      </NavBar>
  
      <Routes>
        <Route path="/" element={ <ItemListContainer/> }/>
        <Route path="/productos/:catId" element={ <ItemListContainer/> }/>
        <Route path="/detail/:itemId" element={ <ItemDetailContainer/> }/>
        <Route path="/cart" element={ <Carrito/>}/>
        <Route path="*" element={ <Navigate to="/"/>}/>
      </Routes>
    </BrowserRouter>

    </CartContext.Provider>
  );
}

export default App;