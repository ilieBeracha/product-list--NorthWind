import { NavLink } from "react-router-dom";
import "./Menu.css";

function Menu(): JSX.Element {
    return (
        <div className="Menu">
            <div className="NavBars">
                <NavLink to={'/'}>Home</NavLink>
                <NavLink to={'/Products'}>Products</NavLink>
            </div>
        </div>
    );
}

export default Menu;
