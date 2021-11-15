import './NavBar.scss'

const NavBar = ({ children }) => {

    return(
    
    <header className="header bg-dark">
        <nav className="menu">

            {children}
            
            <li><a href="#">Inicio</a></li>
            <li><a href="#">Productos</a></li>
            <li><a href="#">Sucursales</a></li>
            <li><a href="#">Contacto</a></li>
        </nav>
    </header>)

}

export default NavBar
