import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Cart.css'; // External CSS

const Cart = () => {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/products');
        console.log('Fetched products:', response.data); // Debugging: Check API response
        const formattedProducts = response.data.map((item) => ({
          ...item,
          price: parseFloat(item.price),
          quantity: 1,
        }));
        setProducts(formattedProducts);
      } catch (error) {
        console.error('Error while fetching data', error);
      }
    };
    fetchData();
  }, []);

  const handleAddToCart = (product) => {
    console.log('Adding to cart:', product); // Debugging: Log the product being added
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const handleRemove = (index) => {
    setCart((prevCart) => prevCart.filter((_, i) => i !== index));
  };

  const handleIncreaseQuantity = (index) => {
    setCart((prevCart) =>
      prevCart.map((item, i) =>
        i === index ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const handleDecreaseQuantity = (index) => {
    setCart((prevCart) =>
      prevCart.map((item, i) =>
        i === index && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
      )
    );
  };

  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div>
      <header className="header_section">
        <nav className="navbar navbar-expand-lg custom_nav-container">
          <a className="navbar-brand" href="index.html">
            <span>CART</span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className=""></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <Link to="/Home" className="nav-link">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/Shop" className="nav-link">Shop</Link>
              </li>
              <li className="nav-item">
                <Link to="/Rating" className="nav-link">Rating</Link>
              </li>
              <li className="nav-item">
                <Link to="/Contact" className="nav-link">Contact us</Link>
              </li>
            </ul>
            <div className="user_option">
              <Link to="/" className="nav-link">
                <i className="fa fa-user" aria-hidden="true"></i>
                <span>Login</span>
              </Link>
              <Link to="/Cart" className="nav-link">
                <i className="fa fa-shopping-bag" aria-hidden="true"></i>
                <span>Cart</span>
              </Link>
              <form className="form-inline">
                <button className="btn nav_search-btn" type="submit">
                  <i className="fa fa-search" aria-hidden="true"></i>
                </button>
              </form>
            </div>
          </div>
        </nav>
      </header>

      <div className="container">
        <section className="product-section">
          <h2>Products</h2>
          <table className="product-table">
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id}>
                  <td>{product.name}</td>
                  <td>${product.price.toFixed(2)}</td>
                  <td>
                    <button
                      className="add-to-cart-btn"
                      onClick={() => handleAddToCart(product)}
                    >
                      Add to Cart
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        <section className="cart-section">
          <h2>Your Cart</h2>
          {cart.length > 0 ? (
            <table className="cart-table">
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item, index) => (
                  <tr key={item.id}>
                    <td>{item.name}</td>
                    <td>${item.price.toFixed(2)}</td>
                    <td>
                      <button
                        className="quantity-btn"
                        onClick={() => handleDecreaseQuantity(index)}
                      >
                        -
                      </button>
                      {item.quantity}
                      <button
                        className="quantity-btn"
                        onClick={() => handleIncreaseQuantity(index)}
                      >
                        +
                      </button>
                    </td>
                    <td>${(item.price * item.quantity).toFixed(2)}</td>
                    <td>
                      <button
                        className="remove-btn"
                        onClick={() => handleRemove(index)}
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>Your cart is empty!</p>
          )}

          <div className="total-section">
            <h2>Total: ${totalPrice.toFixed(2)}</h2>
            {cart.length > 0 && (
              <Link to="/Checkout" className="checkout-btn">
                Proceed to Checkout
              </Link>
            )}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Cart;
