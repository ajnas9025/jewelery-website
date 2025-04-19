import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Shops = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/products");
        setProducts(response.data);
      } catch (error) {
        console.error("Error while fetching data", error);
      }
    };
    fetchData();
  }, []);

  const handleProductClick = (productId) => {
    console.log(`Product ${productId} clicked`);
    // Example: Navigate to product detail page
    // history.push(`/product/${productId}`);
  };

  return (
    <div>
          <header class="header_section">
      <nav class="navbar navbar-expand-lg custom_nav-container ">
        <a class="navbar-brand" href="index.html">
          <span>
          Glow Jewels
          </span>
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class=""></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav  ">
            <li class="nav-item active">
              <Link to="/Home" class="nav-link">Home</Link>
            </li>
            <li class="nav-item">
              {/* <a class="nav-link" href="shop.html">
                Shop
              </a> */}
                          <Link to="/Shop" class="nav-link">Shop</Link>

            </li>
            
            <li class="nav-item">
            <Link to="/Rating" class="nav-link">Rating</Link>
            </li>
            <li class="nav-item">
              {/* <a class="nav-link" href="contact.html">Contact Us</a> */}
              <Link to="/Contact" class="nav-link">Contact us</Link>
             
            </li>
            
          </ul>
          <div class="user_option">
          <Link to="/" class="nav-link">
            <a href="">
              <i class="fa fa-user" aria-hidden="true"></i>
              <span>
                Login
              </span>
            </a></Link>
            {/* <a href="">
              <i class="fa fa-shopping-bag" aria-hidden="true"></i>
            </a> */}
            <Link to="/Cart" class="nav-link">
            <a href="">
            <i class="fa fa-shopping-bag" aria-hidden="true"></i>
              <span>
                Cart
              </span>
            </a></Link>
            <form class="form-inline ">
              <button class="btn nav_search-btn" type="submit">
                <i class="fa fa-search" aria-hidden="true"></i>
              </button>
            </form>
          </div>
        </div>
      </nav>
    </header>
      <section className="shop_section layout_padding">
        <div className="container">
          <div className="heading_container heading_center">
            <h2>Latest Products</h2>
          </div>

          <div className="row">
            {products.map((product) => (
              <div className="col-sm-6 col-md-4 col-lg-3" key={product.id}>
                <div className="box" onClick={() => handleProductClick(product.id)}>
                  <div className="img-box">
                    {product.image ? (
                      <img
                        src={`http://localhost:8000${product.image}`}
                        alt="Product"
                        width="250"
                        height="250"
                      />
                    ) : (
                      "No Image Available"
                    )}
                  </div>
                  <div className="detail-box">
                    <h6>{product.name}</h6>
                    <h6>
                      Price: <span>{product.price}</span>
                    </h6>
                  </div>
                  <div className="new">
                    <span>New</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="btn-box">
            <Link to="/all_products">View All Products</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Shops;