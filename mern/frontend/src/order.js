import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Myorder = () => {
  let [allproduct, updateProduct] = useState([]);
  const getproduct = () => {
    fetch("http://localhost:5555/cart")
      .then((response) => response.json())
      .then((productArray) => {
        updateProduct(productArray.reverse());
      });
  };

  useEffect(() => {
    getproduct();
  }, [1]);

  return (
    <div className="container mt-4">
      <div className="row mt-4">
        <div className="col-lg-8">
          <h3 className="text-center">Customer Details</h3>
          <div className="row mb-3 mt-4">
            <div className="col-lg-6">
              <label>Full Name</label>
              <input type="text" className="form-control" />
            </div>
            <div className="col-lg-6 mb-4">
              <label>Mobile No</label>
              <input type="number" className="form-control" />
            </div>
            <div className="col-lg-6 mb-4">
              <label>e-Mail Id</label>
              <input type="email" className="form-control" />
            </div>
            <div className="col-lg-6 mb-4">
              <label>City Name</label>
              <input type="text" className="form-control" />
            </div>
            <div className="col-lg-12 mb-4">
              <label>Delivery Address</label>
              <textarea className="form-control"></textarea>
            </div>
            <div className="text-center">
              <button className="btn btn-primary btn-lg">Place Order</button>
            </div>
          </div>
        </div>
        <div className="col-lg-4 mb-4">
          {allproduct.map((product, index) => {
            return (
              <div className="p-2 border rounded mb-2" key={index}>
                <h4 className="text-primary"> {product.pname} </h4>
                <p className="text-warning">
                  Rate Rs. {product.price}, Quantity - {product.qty}
                </p>
                <p className="text-danger">
                  Total Rs. {product.price * product.qty}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Myorder;
