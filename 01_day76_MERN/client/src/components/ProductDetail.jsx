import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ProductDetail = () => {
  const [product, setProduct] = useState("");
  const { id } = useParams();
  const url = "http://localhost:1000/api";

  useEffect(() => {
    const fetchProductDetail = async () => {
      const api = await axios.get(`${url}/product/${id}`);
      //   console.log("connect with backend ", api);
      setProduct(api.data.product);
      console.log("product Detail ", api);
    };

    fetchProductDetail();
  }, []);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        // gap: "2rem",
        marginTop:'2rem',
        textAlign:'center'
      }}
    >
      <div className="left">
        <img
          src={product.img}
          alt=""
          style={{ height: "200px", width: "200px" }}
        />
      </div>
      <div className="right">
        <h1>{product.title}</h1>
        <p>{product.description}</p>
        <button className="btn btn-primary">{product.price} ₹</button>
      </div>
    </div>
  );
};

export default ProductDetail;
