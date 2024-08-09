import React, { useEffect, useState } from "react";
import ProductContext from "./ProductContext";
import axios from "axios";

const ProductState = (props) => {
  const [products, setProducts] = useState([]);
  const [reload, setReload] = useState(false);

  const url = "http://localhost:1000/api";

  useEffect(() => {
    const fetchProduct = async () => {
      const api = await axios.get(`${url}/product/get`);
      //   console.log("connect with backend ", api);
      setProducts(api.data.products);
      console.log("products from backend", products);
    };

    fetchProduct();
  }, [reload]);

  // add Product
  const addProduct = async (title, description, price, category, qty, img) => {
    const api = await axios.post(
      `${url}/product/add`,
      {
        title,
        description,
        price,
        category,
        qty,
        img,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    setReload(!reload);
    // console.log("add Product", api);
    return api.data;
  };

  // delete Product
  const deleteProduct = async (id) => {
    const api = await axios.delete(`${url}/product/${id}`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    setReload(!reload);

    console.log("products deleted", api);
    return api.data
  };

  return (
    <ProductContext.Provider value={{ products, addProduct, deleteProduct }}>
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProductState;
