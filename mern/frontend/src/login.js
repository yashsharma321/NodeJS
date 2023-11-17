import { useState } from "react";

const Mylogin = () => {
  let [fullname, pickName] = useState("");
  let [emailid, pickEmail] = useState("");
  let [password, pickPassword] = useState("");
  let [message, updateMessage] = useState("");

  const save = () => {
    let url = "http://localhost:5555/account";
    let userdata = {
      username: fullname,
      email: emailid,
      password: password,
    };
    let postData = {
      headers: { "Content-Type": "application/json" },
      method: "POST",
      body: JSON.stringify(userdata),
    };
    fetch(url, postData)
      .then((response) => response.json())
      .then((userinfo) => {
        updateMessage("Account Created. Please Login");
        pickName("");
        pickEmail("");
        pickPassword("");
      });
  };

  return (
    <div className="container mt-4">
      <div className="row">
        <p className="text-center m-4 text-danger"> {message} </p>
        <div className="col-lg-4">
          <div className="border p-4 rounded">
            <h3 className="text-center"> Login </h3>
            <div className="mb-3">
              <label> e-Mail Id </label>
              <input type="email" className="form-control" />
            </div>
            <div className="mb-3">
              <label> Password </label>
              <input type="password" className="form-control" />
            </div>
            <div className="text-center">
              <button className="btn btn-danger"> Login </button>
            </div>
          </div>
        </div>
        <div className="col-lg-4"></div>
        <div className="col-lg-4">
          <div className="border p-4 rounded">
            <h3 className="text-center"> Create New Account </h3>
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
              <label> e-Mail Id </label>
              <input
                type="email"
                className="form-control"
                onChange={(obj) => pickEmail(obj.target.value)}
                value={emailid}
              />
            </div>
            <div className="mb-3">
              <label> Password </label>
              <input
                type="password"
                className="form-control"
                onChange={(obj) => pickPassword(obj.target.value)}
                value={password}
              />
            </div>
            <div className="text-center">
              <button className="btn btn-primary" onClick={save}>
                Register
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mylogin;
