import { useContext } from "react";
import ProductContext from "../context/ProductContext";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AdminProduct = () => {
  const { products, deleteProduct } = useContext(ProductContext);

  return (
    <>
      <div className="container">
        {products.map((product) => (
          <div
            key={product._id}
            style={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              textAlign: "center",
              backgroundColor: "maroon",
              margin: "20px",
              padding: "10px",
            }}
          >
            <div className="left">
              <h4>{product.title}</h4>
              <h5>{product._id}</h5>
              <img
                src={product.img}
                alt=""
                style={{ height: "50px", width: "50px" }}
              />
            </div>
            <div className="right">
              <button className="btn btn-warning mx-3">Edit</button>
              <button
                onClick={async () => {
                  if (confirm("Are you sure want to delete")) {
                    const result = await deleteProduct(product._id);
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
                  }
                }}
                className="btn btn-danger mx-3"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default AdminProduct;
