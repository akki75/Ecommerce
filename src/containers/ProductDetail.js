import React, { Profiler, useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectedProduct , RemoveselectedProduct, addToCart} from "../redux/actions/ProductActions";


   


const ProductDetail = () => {
  const product = useSelector((state) => state.product);
  console.log(product)
  const { image, title, price, category, description } = product;
  const { productid } = useParams();
  const dispatch = useDispatch();

  const FetchProductDetail = async () => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${productid}`)
      .catch((err) => console.log("err", err));
    if (response.data) {
      dispatch(selectedProduct(response.data));
    }
  };
 useEffect(() => {
    if (productid) {
      FetchProductDetail();
      return () => {
         dispatch(RemoveselectedProduct())
      }
    }
  }, [productid]);
   console.log(product);


   const handleAddToCart = () => {
    dispatch(addToCart(product));
  };


  return (
    <>
      <div className="ui grid container">
      {Object.keys(product).length === 0 ? (
        <div>...Loading</div>
      ) : (
        <div className="ui placeholder segment">
          <div className="ui two column stackable center aligned grid">
          <div className="ui vertical divider">AND</div>
          <div className="middle aligned row">
           <div className="column lp">
           <img className="ui fluid image" src={image}/>
              
            </div>
            <div className="column rp">
              <h1>{title}</h1>
              <h2>
                <a className="ui teal tag label">${price}</a>
              </h2>
              <h3 className="ui brown block header">{category}</h3>
              <p>{description}</p>
              <button className="ui vertical animated button" tabIndex="0" onClick={handleAddToCart}>
                  <div className="hidden content">
                    <i className="shop icon"></i>
                  </div>
                  <div className="visible content">Add to Cart</div>
                </button>
              </div>
            </div>
          </div>
        </div>
    
    
      )}
      </div>
      
    </>
  );
};

export default React.memo(ProductDetail);
