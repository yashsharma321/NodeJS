import { useState, useEffect } from "react";

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

  let [fullname, pickName] = useState("");
  let [mobile, pickMobile] = useState("");
  let [email, pickEmail] = useState("");
  let [city, pickCity] = useState("");
  let [address, pickAddress] = useState("");

  const save = () => {
    let url = "http://localhost:5555/order";
    let orderdata = {
      name: fullname,
      mobile: mobile,
      email: email,
      city: city,
      address: address,
      userid: localStorage.getItem("adminid"),
      itemlist: allproduct,
    };

    let postdata = {
      headers: { "Content-Type": "application/json" },
      method: "POST",
      body: JSON.stringify(orderdata),
    };

    fetch(url, postdata)
      .then((response) => response.json())
      .then((serverReply) => {
        alert(serverReply.msg);
        getproduct(); // to refresh the cart list
        pickName("");
        pickMobile("");
        pickEmail("");
        pickCity("");
        pickAddress("");
      });
  };

  return (
    <div className="container mt-4">
      <div className="row mt-4">
        <div className="col-lg-8">
          <h3 className="text-center">Customer Details</h3>
          <div className="row mb-3 mt-4">
            <div className="col-lg-6">
              <label>Full Name</label>
              <input
                type="text"
                className="form-control"
                onChange={(obj) => pickName(obj.target.value)}
                value={fullname}
              />
            </div>
            <div className="col-lg-6 mb-4">
              <label>Mobile No</label>
              <input
                type="number"
                className="form-control"
                onChange={(obj) => pickMobile(obj.target.value)}
                value={mobile}
              />
            </div>
            <div className="col-lg-6 mb-4">
              <label>e-Mail Id</label>
              <input
                type="email"
                className="form-control"
                onChange={(obj) => pickEmail(obj.target.value)}
                value={email}
              />
            </div>
            <div className="col-lg-6 mb-4">
              <label>City Name</label>
              <input
                type="text"
                className="form-control"
                onChange={(obj) => pickCity(obj.target.value)}
                value={city}
              />
            </div>
            <div className="col-lg-12 mb-4">
              <label>Delivery Address</label>
              <textarea
                className="form-control"
                onChange={(obj) => pickAddress(obj.target.value)}
                value={address}></textarea>
            </div>
            <div className="text-center">
              <button className="btn btn-primary" onClick={save}>
                Place My Order
              </button>
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
