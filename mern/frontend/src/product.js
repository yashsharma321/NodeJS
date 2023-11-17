import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Myproduct = () => {
  let [allproduct, updateProduct] = useState([]);
  const getproduct = () => {
    fetch("http://localhost:5555/productlist")
      .then((response) => response.json())
      .then((productArray) => {
        updateProduct(productArray.reverse());
      });
  };

  useEffect(() => {
    getproduct();
  }, [1]);

  let [keyword, updateKeyword] = useState("");
  const searchnow = () => {
    alert(keyword);
  };

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-lg-2">
          <Link to="/newproduct" className="text-decoration-none">
            <b>+ Add Product</b>
          </Link>
        </div>
        <div className="col-lg-6 text-center">
          <h3> Available Products : {allproduct.length}</h3>
        </div>
        <div className="col-lg-4 text-center">
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Search..."
              onChange={(obj) => updateKeyword(obj.target.value)}
              value={keyword}
            />
            <button className="btn btn-info" onClick={searchnow}>
              Go
            </button>
          </div>
        </div>
      </div>
      <div className="row mt-4">
        {allproduct.map((product, index) => {
          return (
            <div className="col-lg-3 mb-4" key={index}>
              <div className="p-4 border rounded">
                <h4 className="text-primary"> {product.pname} </h4>
                <img
                  src={product.photo}
                  className="rounded"
                  height="160"
                  width="100%"
                />
                <p className="text-info"> inStock : {product.qty}</p>
                <p className="text-warning"> Rate Rs. {product.price}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Myproduct;
