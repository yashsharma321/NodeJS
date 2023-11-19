import { HashRouter, Routes, Route, Link } from "react-router-dom";
import Mybook from "./book";
import Myhome from "./home";
import Mymessage from "./message";
import Myemp from "./emp";
import Myproduct from "./product";
import NewProduct from "./newproduct";
import Details from "./details";
import Mycart from "./cart";
import Myorder from "./order";
import Orderlist from "./orderlist";
import ImageUpload from "./mypic";

function App() {
  return (
    <HashRouter>
      <section className="bg-light p-3">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <h2> MERN Stack </h2>
            </div>
            <div className="col-lg-9 text-end">
              <Link to="/" className="me-4">
                Home
              </Link>
              <Link to="/image" className="me-4">
                Image
              </Link>
              <Link to="/book" className="me-4">
                Books
              </Link>
              <Link to="/message" className="me-4">
                File Read
              </Link>
              <Link to="/emp" className="me-4">
                Employee
              </Link>
              <Link to="/product" className="me-4">
                Product
              </Link>
              <Link to="/cart" className="me-4">
                Cart Items
              </Link>
              <Link to="/orderlist" className="me-4">
                Order List
              </Link>
              <Link onClick={logout} className="me-4">
                {localStorage.getItem("adminname")} - Logout
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Routes>
        <Route exact path="/" element={<Myhome />} />
        <Route exact path="/book" element={<Mybook />} />
        <Route exact path="/message" element={<Mymessage />} />
        <Route exact path="/emp" element={<Myemp />} />
        <Route exact path="/product" element={<Myproduct />} />
        <Route exact path="/newproduct" element={<NewProduct />} />
        <Route exact path="/details/:pid" element={<Details />} />
        <Route exact path="/cart" element={<Mycart />} />
        <Route exact path="/order" element={<Myorder />} />
        <Route exact path="/orderlist" element={<Orderlist />} />
        <Route exact path="/image" element={<ImageUpload />} />
      </Routes>
    </HashRouter>
  );
}

export default App;

const logout = () => {
  localStorage.clear();
  window.location.reload();
};
