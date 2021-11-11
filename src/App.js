import './App.css';
import { CartWidget } from './components/NavBar/CartWidget';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/Container/ItemListContainer';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faUserAstronaut, faCoffee } from '@fortawesome/free-solid-svg-icons'
import { ItemCount } from './components/ItemCount/ItemCount';

library.add(fab, faUserAstronaut, faCoffee)

function App() {
  return (
    <>

      <NavBar>
        <CartWidget/>
      </NavBar>

      <ItemListContainer greeting="BIENVENIDO/A A NUESTRA TIENDA ONLINE" usuario="Elegí tu producto y agregalo al carrito!">
        <ItemCount/>
      </ItemListContainer>
    </>
  );
}

export default App;
