import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../redux/actions/ProductActions";
import axios from "axios";
import ProductComponent from "./ProductComponent";
const ProductListing = ()=>{
   const Products = useSelector((state)=>state)
   const dispatch = useDispatch()
   const fetchProducts= async ()=>{
   const response = await axios
    .get("https://fakestoreapi.com/products")
    .catch((err)=>{
        console.log("err", err);
 })
 console.log(response)
 
 dispatch(setProducts(response.data))
}
   useEffect(()=>{
   fetchProducts()
},[])
    console.log("products", Products)
    return (
        <>
        <div className="ui grid container">
            <ProductComponent />
            </div>
        </>
    )
}

export default ProductListing;
