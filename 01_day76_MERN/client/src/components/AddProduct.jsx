import React, { useContext, useState } from "react";
import ProductContext from "../context/ProductContext";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const { addProduct } = useContext(ProductContext);

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
    qty: "",
    category: "",
    img: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  const { title, description, price, category, qty, img } = formData;

  const submitHandler = async (e) => {
    e.preventDefault();
    // console.log("this is form data = ", formData);

    let result = await addProduct(
      title,
      description,
      price,
      category,
      qty,
      img
    );

    console.log("Product added ", result);

    toast.success(result.message, {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });

    if(result.success){
      navigate('/')
    }

  };

  return (
    <div>
      <div
        className="container my-3"
        style={{
          border: "2px solid blue",
          padding: "20px",
          width: "650px",
          borderRadius: "10px",
        }}
      >
        <form onSubmit={submitHandler}>
          <div className="mb-3">
            <label className="form-label">Product Title</label>
            <input
              value={formData.title}
              name="title"
              type="text"
              className="form-control bg-black text-light"
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Description</label>
            <input
              value={formData.description}
              name="description"
              type="text"
              className="form-control bg-black text-light"
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Category</label>
            <select
              value={formData.category}
              name="category"
              className="form-select bg-black text-light"
              aria-label="Default select example"
              onChange={handleChange}
              required
            >
              <option selected>Select Category</option>
              <option value="mobiles">Mobiles</option>
              <option value="laptops">Laptops</option>
              <option value="tablets">Tablets</option>
              <option value="cameras">Cameras</option>
              <option value="headphones">HeadPhones</option>
            </select>
          </div>

          <div className="mb-3">
            <label className="form-label">Qty</label>
            <input
              value={formData.qty}
              name="qty"
              type="number"
              className="form-control bg-black text-light"
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Price</label>
            <input
              value={formData.price}
              name="price"
              type="number"
              className="form-control bg-black text-light"
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Img Url</label>
            <input
              value={formData.img}
              name="img"
              type="text"
              className="form-control bg-black text-light"
              onChange={handleChange}
              required
            />
          </div>

          <div className="d-grid col-6 mx-auto mt-5">
            <button type="submit" className="btn btn-warning">
              Add Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
