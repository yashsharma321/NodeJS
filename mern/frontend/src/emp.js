import { useState, useEffect } from "react";
import swal from "sweetalert";

const Myemp = () => {
  let [allemp, updateEmp] = useState([]);
  const getEmp = () => {
    fetch("http://localhost:5555/emplist")
      .then((response) => response.json())
      .then((empArray) => {
        updateEmp(empArray);
      });
  };

  useEffect(() => {
    getEmp();
  }, [1]);

  let [fullname, pickName] = useState("");
  let [cityname, pickCity] = useState("");
  let [deptname, pickDept] = useState("");
  let [salary, pickSalary] = useState("");

  const save = () => {
    let newemp = {
      empname: fullname,
      dept: deptname,
      city: cityname,
      salary: salary,
    };
    let postdata = {
      headers: { "Content-Type": "application/json" },
      method: "POST",
      body: JSON.stringify(newemp),
    };

    let url = "http://localhost:5555/emplist";

    fetch(url, postdata)
      .then((response) => response.json())
      .then((empinfo) => {
        swal(fullname, "Save Successfully", "success");
        pickName("");
        pickCity("");
        pickDept("");
        pickSalary("");
        getEmp(); //To reload the list
      });
  };

  const delemp = (id, name) => {
    let url = "http://localhost:5555/emplist/" + id;
    let postdata = { method: "DELETE" };
    fetch(url, postdata)
      .then((response) => response.json())
      .then((serverRes) => {
        swal(name, serverRes.info, "success");
        getEmp(); // to reload the list
      });
  };

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-lg-3">
          <h3 className="text-center"> Enter Employee Details </h3>
          <div className="mb-3">
            <label> Full Name </label>
            <input
              type="text"
              className="form-control"
              onChange={(obj) => pickName(obj.target.value)}
              value={fullname}
            />
          </div>

          <div className="mb-3">
            <label> Department </label>
            <input
              type="text"
              className="form-control"
              onChange={(obj) => pickDept(obj.target.value)}
              value={deptname}
            />
          </div>

          <div className="mb-3">
            <label> City Name </label>
            <input
              type="text"
              className="form-control"
              onChange={(obj) => pickCity(obj.target.value)}
              value={cityname}
            />
          </div>

          <div className="mb-3">
            <label> Salary </label>
            <input
              type="text"
              className="form-control"
              onChange={(obj) => pickSalary(obj.target.value)}
              value={salary}
            />
          </div>

          <div className="text-center">
            <button className="btn btn-primary" onClick={save}>
              Save
            </button>
          </div>
        </div>
        <div className="col-lg-9">
          <h3 className="text-center"> Total Employee : {allemp.length}</h3>
          <table className="table">
            <thead>
              <tr>
                <th> Emp Name </th>
                <th> Department </th>
                <th> City </th>
                <th> Salary </th>
                <th> Delete </th>
              </tr>
            </thead>
            <tbody>
              {allemp.map((emp, index) => {
                return (
                  <tr key={index}>
                    <td> {emp.empname} </td>
                    <td> {emp.dept} </td>
                    <td> {emp.city} </td>
                    <td> {emp.salary} </td>
                    <td>
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={delemp.bind(this, emp._id, emp.empname)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Myemp;
