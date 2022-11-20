import { useEffect, useState } from "react";
import { ProductInterface } from "../../../../../Model/ProductInterface";
import "./Product.css";

function Product({ product }: { product: ProductInterface }): JSX.Element {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [moreInfo, setMoreInfo] = useState<ProductInterface>();

    useEffect(() => {
        isOpen ? setMoreInfo(product) : setMoreInfo(undefined)
    }, [isOpen]);

    return (
        <div className="Product card">
            <h3>{product.name}</h3>
            <p>${product.price}</p>
            <button className="btn btn-light" onClick={() => setIsOpen(!isOpen)}>More Info</button>
            {moreInfo?
                <div className="moreInfo">
                    <img src={'http://localhost:3030/api/products/images/' + product.imageName} alt={product.name} />
                </div>
            : <></>}
        </div>
    );
}

export default Product;
