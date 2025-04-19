import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";


function Add_prooducts() {

  const [user, setUser] = useState({
    name: "",
    price: "",
    image: null, // Store file object
  });

  const navigate = useNavigate();

  // **Handle text input changes**
  const inputHandler = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  // **Handle image file selection**
  const imageHandler = (e) => {
    const file = e.target.files[0]; // Get the selected file (first file if multiple are selected)
    setUser((prevUser) => ({ ...prevUser, image: file })); // Update user state with the file
  };

  const submitForm = async (e) => {
    e.preventDefault();
    
    const formData = new FormData(); // .append("key", value) adds each field to the FormData object.
    formData.append("name", user.name);
    formData.append("price", user.price);
    formData.append("image", user.image);  // Ensure file is sent correctly

    try {
        await axios.post("http://localhost:8000/api/product_details", formData, {
            headers: { "Content-Type": "multipart/form-data" } // The Content-Type: multipart/form-data header 
            // ensures the request properly transmits the file and text data.
        });
        navigate("/products");
        console.log("Product added successfully");
    } catch (error) {
        console.error("Axios Error:", error);
    }
};


  return (


          <div class="hero_area">
           
              <header class="header_section">
                <nav class="navbar navbar-expand-lg custom_nav-container ">
                  <a class="navbar-brand" href="index.html">
                    <span>
                     Admin Page
                    </span>
                  </a>
                  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class=""></span>
                  </button>
          
                  <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav  ">
                      <li class="nav-item active">
          
                     <Link to="/add_products" class="nav-link">Add products<span class="sr-only">(current)</span></Link>
                        
                      </li>
                      <li class="nav-item">
                        <Link to="/all_products" class="nav-link">View products<span class="sr-only"></span></Link>
                      </li>
                    
                    </ul>
                
                  </div>
                </nav>
              </header>
          
              
              
             
    <section class="contact_section layout_padding">
<div class="container px-0">
 <div class="heading_container ">
   <h2 class="">
   Products
   </h2>
 </div>
</div>
<div class="container container-bg">
 <div class="row">
   <div class="col-lg-7 col-md-6 px-0">
     <div class="map_container">
    <img alt="login-image" src="images/log.avif"></img>
     </div>
   </div>
   <div class="col-md-6 col-lg-5 px-0">
     <form onSubmit={submitForm}>
       <div>
         <input type="text" name="name" placeholder="Name"  onChange={inputHandler} />
       </div>
       <div>
         <input type="number" name="price" placeholder="Price" onChange={inputHandler} />
       </div>
       <div>
       <input type="file" name="image" autoComplete="off" onChange={imageHandler} />
       </div>
    
       <div class="d-flex ">
         <button>
         Add products
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

export default Add_prooducts