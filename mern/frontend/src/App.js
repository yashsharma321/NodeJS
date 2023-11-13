import { HashRouter, Routes, Route, Link } from "react-router-dom";
import Mybook from "./book";
import Myhome from "./home";
import Mymessage from "./message";

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
              <Link to="/book" className="me-4">
                Books
              </Link>
              <Link to="/message" className="me-4">
                File Read
              </Link>
              <Link to="/filewrite" className="me-4">
                File Write
              </Link>
              <Link to="/nestedarray" className="me-4">
                Nested Array
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Routes>
        <Route exact path="/" element={<Myhome />} />
        <Route exact path="/book" element={<Mybook />} />
        <Route exact path="/message" element={<Mymessage />} />
        <Route exact path="/filewrite" element={<Myhome />} />
        <Route exact path="/nestedarray" element={<Myhome />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
