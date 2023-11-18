import { useState, useEffect } from "react";

const Orderlist = () => {
  let [allproduct, updateProduct] = useState([]);
  const getproduct = () => {
    fetch("http://localhost:5555/order")
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
        <div className="col-lg-12 text-center">
          <h2>Order List</h2>
        </div>
        <div className="col-lg-4 mb-4"></div>
      </div>
      {allproduct.map((order, index) => {
        return (
          <div className="row mb-5" key={index}>
            <div className="col-lg-4">
              <h4>{order.fullname}</h4>
              <p>{order.mobile}</p>
              <p>{order.email}</p>
              <p>{order.city}</p>
              <p>{order.address}</p>
            </div>
            <div className="col-lg-8">
              <h4>Order Items {order.orderdata.length} </h4>
              <table className="table table-bordered">
                <tbody>
                  {order.orderdata.map((orderitem, index) => {
                    return (
                      <tr key={index}>
                        <td>{orderitem.pname}</td>
                        <td>{orderitem.price}</td>
                        <td>{orderitem.qty}</td>
                        <td>
                          <img src={orderitem.photo} height="30" width="40" />
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Orderlist;
