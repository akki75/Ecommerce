import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ProductComponent = () => {
  const Products = useSelector((state) =>state.allProducts.products);

  return (
    <>
      {Products?.length > 0 &&
        Products.map(({ id, title, image, price, category,rating}) => {
          return (
            <div className="four wide column" key={id}>
            <Link to={`/product/${id}`}>  
              <div className="ui link cards">
                <div className="card">
                  <div className="image">
                    <img src={image} alt={title} />
                  </div>
                    <div className="content">
                    <div className="header">{title}</div>
                    <div className="meta price">${price}</div>
                    <div className="meta">{category}</div>
                    <div className="meta">{rating?.rate}</div>
                    <div className="meta">{rating?.count}</div>
                   </div>
                </div>
              </div>
              </Link>
            
            </div>
          );
        })}
    </>
  );
};

export default ProductComponent;
