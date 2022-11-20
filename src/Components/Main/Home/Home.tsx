import { Route, Routes } from "react-router-dom";
import "./Home.css";
import Products from "./Products/Products";

function Home(): JSX.Element {
    return (
        <div className="Home">
			<Routes>
                <Route path="/" element={'Welcome to Northwind Store'}></Route>
                <Route path="/Products" element={<Products />}></Route>
            </Routes>
        </div>
    );
}

export default Home;
