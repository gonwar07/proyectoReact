import './NavBar.scss'
import { Link } from 'react-router-dom'

const NavBar = ({ children }) => {

    return(
    
    <header className="header bg-dark">
        <nav className="menu">

            <Link to="/">{children}</Link>
            
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="productos">Productos</Link></li>
            <li><Link to="cart">Carrito</Link></li>
            <li><Link to="contacto">Contacto</Link></li>
        </nav>
    </header>)

}

export default NavBar
