import React, { useContext, useState } from "react";
import ProductContext from "../context/ProductContext";

const AddProduct = () => {
  const { addProduct } = useContext(ProductContext);

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
        <form>
          <div className="mb-3">
            <label className="form-label">Product Title</label>
            <input
              value={formData.title}
              name="title"
              type="text"
              className="form-control bg-black text-light"
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Description</label>
            <input
              value={formData.description}
              name="description"
              type="text"
              className="form-control bg-black text-light"
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Category</label>
            <select
              value={formData.category}
              name="category"
              className="form-select bg-black text-light"
              aria-label="Default select example"
            >
              <option selected>Select Category</option>
              <option value="1">Mobiles</option>
              <option value="2">Laptops</option>
              <option value="3">Tablets</option>
              <option value="4">Cameras</option>
              <option value="5">HeadPhones</option>
            </select>
          </div>

          <div className="mb-3">
            <label className="form-label">Qty</label>
            <input
              value={formData.qty}
              name="qty"
              type="number"
              className="form-control bg-black text-light"
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Img Url</label>
            <input
              value={formData.img}
              name="img"
              type="text"
              className="form-control bg-black text-light"
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
