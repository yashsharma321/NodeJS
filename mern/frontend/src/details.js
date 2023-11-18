import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const Details = () => {
  let { pid } = useParams();

  let [productlist, updateProduct] = useState({});
  const getproduct = () => {
    let postdata = { method: "PUT" };
    fetch("http://localhost:5555/productlist/" + pid, postdata)
      .then((response) => response.json())
      .then((productArray) => {
        updateProduct(productArray);
      });
  };

  useEffect(() => {
    getproduct();
  }, [1]);

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-lg-12 text-center">
          <Link to="/product" className="text-decoration-none">
            <b>Back To List</b>
          </Link>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-lg-6 mb-4 offset-3">
          <div className="p-4 border rounded">
            <h4 className="text-primary"> {productlist.pname} </h4>
            <img
              src={productlist.photo}
              className="rounded"
              height="300"
              width="100%"
            />
            <p className="text-info"> inStock : {productlist.qty}</p>
            <p className="text-warning"> Rate Rs. {productlist.price}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
