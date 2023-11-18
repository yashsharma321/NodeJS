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

  // login process
  let [username, pickUsername] = useState("");
  let [mypassword, pickMypassword] = useState("");

  const logincheck = () => {
    let url = "http://localhost:5555/account";
    let userdata = {
      email: username,
      password: mypassword,
    };
    let postData = {
      headers: { "Content-Type": "application/json" },
      method: "PUT",
      body: JSON.stringify(userdata),
    };
    fetch(url, postData)
      .then((response) => response.json())
      .then((userinfo) => {
        if (userinfo.length > 0) {
          localStorage.setItem("adminid", userinfo[0]._id); // response is comming in array format
          localStorage.setItem("adminname", userinfo[0].username);
          window.location.reload();
        } else {
          updateMessage("Invalid or Not Exists !");
        }
        pickUsername("");
        pickMypassword("");
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
              <input
                type="email"
                className="form-control"
                onChange={(obj) => pickUsername(obj.target.value)}
                value={username}
              />
            </div>
            <div className="mb-3">
              <label> Password </label>
              <input
                type="password"
                className="form-control"
                onChange={(obj) => pickMypassword(obj.target.value)}
                value={mypassword}
              />
            </div>
            <div className="text-center">
              <button className="btn btn-danger" onClick={logincheck}>
                Login
              </button>
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
