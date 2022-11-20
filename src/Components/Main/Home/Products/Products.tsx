import { useEffect, useState } from "react";
import { ProductInterface } from "../../../../Model/ProductInterface";
import { ProductService } from "../../../../Services/ProductServices";
import Product from "./Product/Product";
import "./Products.css";

function Products(): JSX.Element {
    const [products, setProducts] = useState<ProductInterface[]>([]);

    useEffect(()=>{
        ProductService.GetAllProducts().then(res=>setProducts(res));

    },[])
    return (
        <div className="Products">
			{products.map((product)=> <Product product={product}/>)}
        </div>
    );
}

export default Products;
