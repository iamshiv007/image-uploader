import React, { useEffect, useState } from "react";
import LaptopImage1 from "../../assets/images/LaptopImage1.jpg";
import LaptopImage2 from "../../assets/images/LaptopImage2.jpg";
import LaptopImage3 from "../../assets/images/LaptopImage3.jpg";
import { Carousel } from "react-bootstrap";
import "./Products.css";
import { Link } from "react-router-dom";
import axios from "axios";

const Products = () => {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:12000/api/products")
      .then((res) => setProducts(res.data.products))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="row gap-3 mb-4">
      <div className="d-flex justify-content-between">
        <h2>Products</h2>
        <Link to="/product/new" className="btn btn-primary">
          New Product
        </Link>
      </div>
      {products.map((product, key) => (
        <div key={key} className="card col-md-3">
          <Carousel>
            <Carousel.Item>
              <img className="d-block w-100" src={LaptopImage1} alt="Image 1" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={LaptopImage2} alt="Image 2" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={LaptopImage3} alt="Image 2" />
            </Carousel.Item>
            {/* Add more Carousel.Item components for additional slides */}
          </Carousel>
          <div className="card-body">
            <h5 className="card-title">{product.name}</h5>
            <p className="card-text">${product.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
