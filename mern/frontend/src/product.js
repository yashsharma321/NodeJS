import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ReactPaginate from "react-paginate";

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
    fetch("http://localhost:5555/productlist/" + keyword)
      .then((response) => response.json())
      .then((productArray) => {
        updateProduct(productArray.reverse());
      });
  };

  //pagination start
  const PER_PAGE = 4;
  const [currentPage, setCurrentPage] = useState(0);
  function handlePageClick({ selected: selectedPage }) {
    setCurrentPage(selectedPage);
  }
  const offset = currentPage * PER_PAGE;
  const pageCount = Math.ceil(allproduct.length / PER_PAGE);

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
            <button className="btn btn-warning" onClick={getproduct}>
              Reset
            </button>
          </div>
        </div>
      </div>
      <div className="row mt-4">
        {allproduct.slice(offset, offset + PER_PAGE).map((product, index) => {
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
      <div className="my-4">
        <ReactPaginate
          previousLabel={"Previous"}
          nextLabel={"Next"}
          breakLabel={"..."}
          pageCount={pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={3}
          onPageChange={handlePageClick}
          containerClassName={"pagination justify-content-center"}
          pageClassName={"page-item"}
          pageLinkClassName={"page-link"}
          previousClassName={"page-item"}
          previousLinkClassName={"page-link"}
          nextClassName={"page-item"}
          nextLinkClassName={"page-link"}
          breakClassName={"page-item"}
          breakLinkClassName={"page-link"}
          activeClassName={"active primary"}
        />
      </div>
    </div>
  );
};

export default Myproduct;
