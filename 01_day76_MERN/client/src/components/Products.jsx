import { useContext } from "react";
import ProductContext from "../context/ProductContext";
import { Link } from "react-router-dom";

const Products = () => {
  const { products } = useContext(ProductContext);

  return (
    <>
      <div className="container">
        <div className="row d-flex justify-content-center align-content-center">
          {products.map((product) => (
            <div
              key={product._id}
              className="col-md-4 my-3 d-flex justify-content-center align-content-center"
            >
              <div
                className="card bg-dark text-light"
                style={{ width: "18rem" }}
              >
                <Link
                  to={`/product/${product._id}`}
                  className="d-flex justify-content-center align-items-center p-3"
                >
                  <img
                    src={product.img}
                    className="card-img-top"
                    alt="..."
                    style={{
                      width: "220px",
                      height: "220px",
                      borderRadius: "10px",
                      border: "2px solid yellow",
                    }}
                  />
                </Link>
                <div className="card-body text-center">
                  <h5 className="card-title">{product.title}</h5>
                  <p className="card-text">{product.description}</p>
                  <button className="btn btn-primary mx-3">
                    {product.price} ₹
                  </button>
                  <button className="btn btn-warning">Add To Cart</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Products;
