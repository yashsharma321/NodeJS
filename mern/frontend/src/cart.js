import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Mycart = () => {
  let [allproduct, updateProduct] = useState([]);
  const getproduct = () => {
    fetch("http://localhost:5555/cart")
      .then((response) => response.json())
      .then((productArray) => {
        updateProduct(productArray.reverse());
      });
  };

  const deleteItem = (pid, name) => {
    try {
      let postdata = { method: "DELETE" };
      fetch("http://localhost:5555/cart/" + pid, postdata)
        .then((response) => response.json())
        .then((serverRes) => {
          alert(name + " from Cart " + serverRes.msg);
          getproduct();
        });
    } catch (err) {
      alert("Failed to delete");
    }
  };

  const updateQty = (qty, id, sts) => {
    let newQty = 0;
    if (sts === "P") {
      newQty = parseInt(qty, 10) + 1;
    } else {
      newQty = parseInt(qty, 10) - 1;
    }
    if (newQty == 0) {
      deleteItem(id, "Item");
      return;
    }

    let updatedata = { id: id, qty: newQty };

    let postdata = {
      headers: { "Content-Type": "application/json" },
      method: "PUT",
      body: JSON.stringify(updatedata),
    };

    fetch("http://localhost:5555/cart/", postdata)
      .then((response) => response.json())
      .then((serverRes) => {
        alert(serverRes.msg);
        getproduct();
      });
  };

  useEffect(() => {
    getproduct();
  }, [1]);

  return (
    <div className="container mt-4">
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
                <p className="input-group my-3">
                  <button
                    className="btn btn-primary btn-sm"
                    onClick={updateQty.bind(
                      this,
                      product.qty,
                      product._id,
                      "P"
                    )}>
                    +
                  </button>
                  <input type="text" readOnly value={product.qty} />
                  <button
                    className="btn btn-warning btn-sm"
                    onClick={updateQty.bind(
                      this,
                      product.qty,
                      product._id,
                      "M"
                    )}>
                    -
                  </button>
                </p>
                <p className="text-warning"> Rate Rs. {product.price}</p>
                <p className="text-danger">
                  Total Rs. {product.price * product.qty}
                </p>
                <p className="text-end mt-3">
                  <button
                    className="text-danger"
                    onClick={deleteItem.bind(this, product._id, product.pname)}>
                    Delete
                  </button>
                </p>
              </div>
            </div>
          );
        })}
        <p className="col-lg-12 text-center mt-3">
          <Link to="/order" className="btn btn-warning btn-lg">
            Place Order
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Mycart;
