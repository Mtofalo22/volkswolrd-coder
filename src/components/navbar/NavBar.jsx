import CartWidget from "./CartWidget"
import "./navbar.css"

const NavBar = () => {

    return (

        <div className="nav-bar">
            <div>
                <img style={{width: "80px"}} src="./src/assets/logovw.png" alt="" />
                <h1>VolksWorld</h1>
            </div>
            <ul>
                <li>Repuestos Originales</li>
                <li>Mantenimiento</li>
                <li>Performance</li>
            </ul>
            <CartWidget />
        </div>


    )
}

export default NavBar