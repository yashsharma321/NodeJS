const Mylogin = () => {
  
	
	return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-lg-4"></div>
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
      </div>
    </div>
  );
};

export default Mylogin;
