import React, { useEffect, useState } from "react";

const Mybook = () => {
  let [booklist, updateBook] = useState([]);
  const getBook = () => {
    fetch("http://localhost:1234/booklist")
      .then((response) => response.json())
      .then((bookArray) => {
        updateBook(bookArray);
      });
  };

  let [allbook, setBook] = useState([]);
  const getMyBook = () => {
    fetch("http://localhost:1234/allbook")
      .then((response) => response.json())
      .then((bookArray) => {
        setBook(bookArray);
      });
  };

  useEffect(() => {
    getBook();
    getMyBook();
  }, [1]);

  return (
    <section className="container mt-5">
      <div className="row text-center">
        <h1 className="col-lg-12 text-center mb-4">
          Book List : {booklist.length}
        </h1>
        {booklist.map((bookname, index) => {
          return (
            <div className="col-lg-3 mb-4" key={index}>
              <h4 className="p-4 rounded bg-light text-primary">{bookname} </h4>
            </div>
          );
        })}
      </div>

      <div className="row" mt-5>
        <div className="col-lg-12">
          <h3 className="text-center mb-4">
            Total My Books : {allbook.length}
          </h3>
          <table className="table table-bordered">
            <thead>
              <tr>
                <th> Book Name </th>
                <th> Book Price </th>
                <th> Book Author </th>
              </tr>
            </thead>
            <tbody>
              {allbook.map((book, index) => {
                return (
                  <tr key={index}>
                    <td> {book.name} </td>
                    <td> {book.price} </td>
                    <td> {book.author} </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Mybook;
