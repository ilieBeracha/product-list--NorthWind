import Home from "./Home/Home";
import "./Main.css";
import Menu from "./Menu/Menu";

function Main(): JSX.Element {
    return (
        <div className="Main">
            <Menu />
            <Home />
        </div>
    );
}

export default Main;
