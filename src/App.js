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
import { CartView } from './components/CartView/CartView'
import { CartProvider } from './context/CartContext'

library.add(fab, faUserAstronaut, faCoffee)

function App() {

  return (
    <CartProvider>
      <BrowserRouter>   
        <NavBar>
          <CartWidget/>
        </NavBar>
    
        <Routes>
          <Route path="/" element={ <ItemListContainer/> }/>
          <Route path="/productos/:catId" element={ <ItemListContainer/> }/>
          <Route path="/detail/:itemId" element={ <ItemDetailContainer/> }/>
          <Route path="/cart" element={ <CartView/>}/>
          <Route path="*" element={ <Navigate to="/"/>}/>
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;