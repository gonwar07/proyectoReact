import './NavBar.scss'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { CartWidget } from '../CartWidget/CartWidget'


const NavBar = () => {

    return(
    
    <header className="header bg-dark">
        <nav className="menu">

            <Link to="/"><FontAwesomeIcon className="logo" icon={['fas', 'user-astronaut']}></FontAwesomeIcon></Link>            
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="productos">Productos</Link></li>
            <li><Link to="cart">Carrito</Link></li>
            <li><Link to="contacto">Contacto</Link></li>
            <Link to="/cart"><CartWidget/></Link>
        </nav>
    </header>)

}

export default NavBar
