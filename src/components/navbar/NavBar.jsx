import CartWidget from "./CartWidget"
import "./navbar.css"
import { Link } from "react-router-dom"

const NavBar = () => {

    return (

        <div className="nav-bar">
            <div className="icon">
                <a href="/"><img className="imgLogo" src="./src/assets/logovw.png" alt="" /></a>
                <a href="/" className="volksWolrd"><h1>VolksWorld</h1></a>
            </div>
            <div className="list-nav">
                <Link to="/category/repuestos-originales" className="lista">Repuestos originales</Link>
                <Link to="/category/mantenimiento" className="lista">Mantenimiento</Link>
                <Link to="/category/performance" className="lista">Performance</Link>
            </div>
            <CartWidget />
        </div>


    )
}

export default NavBar