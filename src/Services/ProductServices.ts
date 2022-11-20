import axios from "axios";
import { ProductInterface } from "../Model/ProductInterface";

class ProductServices{
    async GetAllProducts(){
        let products: ProductInterface[] = await (await axios.get('http://localhost:3030/api/products')).data;
        return products;
    }
    async GetProductById(productId:number){
        let products: ProductInterface[] = await (await axios.get(`http://localhost:3030/api/products/${productId}`)).data;
        return products;
    }
}

export const ProductService = new ProductServices;