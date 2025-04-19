import React from 'react'
import "./Rating.css"
import { Link } from "react-router-dom";



function Rating() {
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
      <section class="client_section layout_padding">
    <div class="testi container" >
      <div class="heading_container heading_center">
        <h2>
        Rating
        </h2>
      </div>
    </div>
    <div class="container px-0">
      <div id="customCarousel2" class="carousel  carousel-fade" data-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div class="testi1 box">
              <div class="client_info">
                <div class="client_name">
                  <h5>
                  James H., Dubai
                  </h5>
                </div>
                <i class="fa fa-quote-left" aria-hidden="true"></i>
              </div>
              <p>"I absolutely love my new necklace from Glow Jewellery! The craftsmanship is exquisite, and the design is timeless. It adds the perfect touch of elegance to any outfit."</p>
            </div>
          </div>
          <div class="carousel-item">
            <div class=" testi1 box">
              <div class="client_info">
                <div class="client_name">
                  <h5>
                  Ethan W., San Francisco
                  </h5>
                </div>
                <i class="fa fa-quote-left" aria-hidden="true"></i>
              </div>
              <p> "Glow Jewellery offers beautiful pieces at great prices. I bought a ring as a gift, and it was a huge hit! The quality is top-notch, and the fast delivery was a bonus."</p>
            </div>
          </div>
          <div class="carousel-item">
            <div class="testi1 box">
              <div class="client_info">
                <div class="client_name">
                  <h5>
                  John D., New York
                  </h5>
                </div>
                <i class="fa fa-quote-left" aria-hidden="true"></i>
              </div>
              <p>"I’ve never been more impressed with a jewellery brand! The collection is stunning, and the customer service is exceptional. I’ll definitely be shopping here again!"</p>
            </div>
          </div>
        </div>
        <div class="carousel_btn-box">
          <a class="carousel-control-prev" href="#customCarousel2" role="button" data-slide="prev">
            <i class="fa fa-angle-left" aria-hidden="true"></i>
            <span class="sr-only">Previous</span>
          </a>
          <a class="carousel-control-next" href="#customCarousel2" role="button" data-slide="next">
            <i class="fa fa-angle-right" aria-hidden="true"></i>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div>
    </div>

    </section>

  <section style={{display:"flex",gap:"30px"}}>
  <div class="card" style={{ width: '18rem',marginLeft:"25px"  }}>
  <img src="images\01.jpg" class="card-img-top rounded" alt=""></img>
  </div>

  <div class="card" style={{ width: '18rem' }}>
  <img src="images\02.jpg" class="card-img-top rounded" alt=""></img>
  </div>

  <div class="card" style={{ width: '18rem' }}>
  <img src="images\03.jpg" class="card-img-top rounded" alt=""></img>
  </div>

  <div class="card" style={{ width: '18rem' }}>
  <img src="images\06.jpg" class="card-img-top rounded" alt=""></img>
  </div>
  <div class="card" style={{ width: '18rem' }}>
  <img src="images\08.jpg" class="card-img-top rounded" alt=""></img>
  </div>

  </section>

  
  

  <section class="info_section container-fluid">
    <div class="social_container">
      <div class="social_box">
        <a href="">
          <i class="fa fa-facebook" aria-hidden="true"></i>
        </a>
        <a href="">
          <i class="fa fa-twitter" aria-hidden="true"></i>
        </a>
        <a href="">
          <i class="fa fa-instagram" aria-hidden="true"></i>
        </a>
        <a href="">
          <i class="fa fa-youtube" aria-hidden="true"></i>
        </a>
      </div>
    </div>
    <div class="info_container ">
      <div class="container">
        <div class="row">
          <div class="col-md-6 col-lg-3">
            <h6>
              ABOUT US
            </h6>
            <p>
            "Glow Jewellery offers timeless, elegant pieces crafted with precision, blending classic and modern designs to help you shine bright."
            </p>
          </div>
          <div class="col-md-6 col-lg-3">
            <div class="info_form ">
              <h5>
                Newsletter
              </h5>
              <form action="#">
                <input type="email" placeholder="Enter your email" />
                <button>
                  Subscribe
                </button>
              </form>
            </div>
          </div>
          <div class="col-md-6 col-lg-3">
            <h6>
              NEED HELP
            </h6>
            <p>
            "Need help? We're here to assist you with any questions or support you may need!"             </p>
          </div>
          <div class="col-md-6 col-lg-3">
            <h6>
              CONTACT US
            </h6>
            <div class="info_link-box">
              <a href="">
                <i class="fa fa-map-marker" aria-hidden="true"></i>
                <span> Gb road 123 london Uk </span>
              </a>
              <a href="">
                <i class="fa fa-phone" aria-hidden="true"></i>
                <span>+01 12345678901</span>
              </a>
              <a href="">
                <i class="fa fa-envelope" aria-hidden="true"></i>
                <span> demo@gmail.com</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
   
    <footer class=" footer_section">
      <div class="container">
        <p>
          &copy; <span id="displayYear"></span> All Rights Reserved By
          <a href="https://html.design/">shaanu</a>
        </p>
      </div>
    </footer>
   

  </section>

    </div>

  )
}

export default Rating