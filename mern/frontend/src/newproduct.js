import { useState } from "react";
import swal from "sweetalert";

const NewProduct = () => {
  let [pname, pickName] = useState("");
  let [price, pickPrice] = useState("");
  let [qty, pickQty] = useState("");
  let [photo, pickPhoto] = useState("");

  const save = () => {
    let newproduct = {
      pname: pname,
      price: price,
      qty: qty,
      photo: photo,
    };
    let postdata = {
      headers: { "Content-Type": "application/json" },
      method: "POST",
      body: JSON.stringify(newproduct),
    };

    let url = "http://localhost:5555/productlist";

    fetch(url, postdata)
      .then((response) => response.json())
      .then((productinfo) => {
        swal(pname, "Saved Successfully", "success");
        pickName("");
        pickPrice("");
        pickQty("");
        pickPhoto("");
      });
  };

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-lg-12 text-center mb-4">
          <h2> Enter Product Details </h2>
        </div>
        <div className="col-lg-3">
          <label> Enter Product Name </label>
          <input
            type="text"
            className="form-control"
            onChange={(obj) => pickName(obj.target.value)}
            value={pname}
          />
        </div>

        <div className="col-lg-3">
          <label> Enter Product Price </label>
          <input
            type="text"
            className="form-control"
            onChange={(obj) => pickPrice(obj.target.value)}
            value={price}
          />
        </div>

        <div className="col-lg-3">
          <label> Enter Product Quantity </label>
          <input
            type="text"
            className="form-control"
            onChange={(obj) => pickQty(obj.target.value)}
            value={qty}
          />
        </div>

        <div className="col-lg-3">
          <label> Enter Product Photo </label>
          <input
            type="text"
            className="form-control"
            onChange={(obj) => pickPhoto(obj.target.value)}
            value={photo}
          />
        </div>

        <div className="col-lg-12 text-center mt-5">
          <button className="btn btn-danger" onClick={save}>
            Save Product
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewProduct;
