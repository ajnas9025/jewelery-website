import React from 'react'
import { Link } from "react-router-dom";

function Contact() {
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
      <h1>Contact</h1>
      <section class="contact_section ">
    <div class="container px-0">
      <div class="heading_container ">
        
      </div>
    </div>
    <div class="container container-bg">
      <div class="row">
        <div class="col-lg-7 col-md-6 px-0">
          <div class="map_container">
            <div class="map-responsive">
              <iframe src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA0s1a7phLN0iaD6-UE7m4qP-z21pH0eSc&q=Eiffel+Tower+Paris+France" width="600" height="300" frameborder="0"  allowfullscreen></iframe>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-lg-5 px-0">
          <form action="#">
            <div>
              <input type="text" placeholder="Name" />
            </div>
            <div>
              <input type="email" placeholder="Email" />
            </div>
            <div>
              <input type="text" placeholder="Phone" />
            </div>
            <div>
              <input type="text" class="message-box" placeholder="Message" />
            </div>
            <div class="d-flex ">
              <button>
                SEND
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>

    </div>
  )
}

export default Contact
