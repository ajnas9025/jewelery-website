import { User, Product} from "../model/userModel.js";
import multer from "multer";
import path from "path";

// Configure Multer for Image Uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // Store images in 'uploads/' directory
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`); // Unique file names
  },
});

export const upload = multer({ storage }).single("image");

// // Create a new product with image upload
export const create = async (req, res) => {
  try {
    const { name, price } = req.body;
    let image = req.file ? `/uploads/${req.file.filename}` : ""; // Save file path

    // Check if product already exists
    const productExist = await Product.findOne({ name });
    if (productExist) {
      return res.status(400).json({ message: "product already exists" });
    }

    // Create new product
    const newProduct = new Product({ name, price, image });
    const saveData = await newProduct.save();
    
    res.status(200).json(saveData);
  } catch (error) {
    res.status(500).json({ errorMessage: error.message });
  }
};


export const reguser = async (req, res) => {
  try {
    const { name, email, phone } = req.body;
   

    // Check if user already exists
    const userExist = await User.findOne({ email });
    if (userExist) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Create new user
    const newUser = new User({ name, email, phone });
    const saveData = await newUser.save();
    
    res.status(200).json(saveData);
  } catch (error) {
    res.status(500).json({ errorMessage: error.message });
  }
};



export const loginUser = async (req, res) => {
  console.log("Request Body Received:", req.body);

  const { name, email } = req.body;

  try {
    console.log("Checking User Collection...");
    const user = await User.findOne({ 
      name: name.trim().toLowerCase(), 
      email: email.trim().toLowerCase()
    });
    console.log("User Found in Database:", user);

    if (!user) {
      console.log("Invalid credentials");
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // Check if the user is an admin
    if (user.name === "admin" && user.email === "admin@gmail.com") {
      console.log("Admin Login Successful");
      return res.status(200).json({
        message: "Admin login successful",
        name: user.name,
        email: user.email,
        role: "admin"
      });
    }

    console.log("User Login Successful");
    res.status(200).json({
      message: "Login successful",
      name: user.name,
      email: user.email,
      role: "user"
    });
  } catch (error) {
    console.error("Server Error:", error);
    res.status(500).json({ message: error.message });
  }
};


// Get all users
export const getAllUsers = async (req, res) => {
  try {
    const userData = await User.find();
    if (!userData || userData.length === 0) {
      return res.status(404).json({ message: "User data not found" });
    }
    res.status(200).json(userData);
  } catch (error) {
    res.status(500).json({ errorMessage: error.message });
  }
};


export const getAllProducts = async (req, res) => {
  try {
    const productData = await Product.find();
    if (!productData || productData.length === 0) {
      return res.status(404).json({ message: "Product data not found" });
    }
    res.status(200).json(productData);
  } catch (error) {
    res.status(500).json({ errorMessage: error.message });
  }
};

// // Update product with image upload
export const update = async (req, res) => {
  try {
    const id = req.params.id;
    let updatedData = { ...req.body };

    if (req.file) {
      updatedData.image = `/uploads/${req.file.filename}`;
    }

    const productExist = await Product.findById(id);
    if (!productExist) {
      return res.status(404).json({ message: "product not found." });
    }

    const updatedproduct = await Product.findByIdAndUpdate(id, updatedData, { new: true });
    res.status(200).json({ message: "Product Updated successfully.", updatedproduct });
  } catch (error) {
    res.status(500).json({ errorMessage: error.message });
  }
};


export const getProductById = async (req, res) => {
  try {
    const id = req.params.id;
    const productExist = await Product.findById(id);
    if (!productExist) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json(productExist);
  } catch (error) {
    res.status(500).json({ errorMessage: error.message });
  }
};

// // Delete user
export const deleteUser = async (req, res) => {
  try {
    const id = req.params.id;
    const userExist = await User.findById(id);
    if (!userExist) {
      return res.status(404).json({ message: "User not found." });
    }

    await User.findByIdAndDelete(id);
    res.status(200).json({ message: "User deleted successfully." });
  } catch (error) {
    res.status(500).json({ errorMessage: error.message });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const id = req.params.id;
    const productExist = await Product.findById(id);
    if (!productExist) {
      return res.status(404).json({ message: "Product not found." });
    }

    await Product.findByIdAndDelete(id);
    res.status(200).json({ message: "Product deleted successfully." });
  } catch (error) {
    res.status(500).json({ errorMessage: error.message });
  }
};
