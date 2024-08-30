const AddtenantModal = () => {
  return (
    <>
      <div className="modal fade" id="addtenantModal">
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Add Tenant</h4>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="row">
                <div className="col-md-4">
                  <div className="form-group">
                    <label>Last Name</label>
                    <input
                      type="text"
                      name="lname"
                      className="form-control"
                      placeholder="Last Name"
                    />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group">
                    <label>First Name</label>
                    <input
                      type="text"
                      name="fname"
                      className="form-control"
                      placeholder="First Name"
                    />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group">
                    <label>Middle Name</label>
                    <input
                      type="text"
                      name="mname"
                      className="form-control"
                      placeholder="Middle Name"
                    />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-group">
                    <label>Address</label>
                    <textarea
                      className="form-control"
                      name="address"
                      placeholder="ex. Manggahan, Pasig City, Manila"
                    ></textarea>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group">
                    <label>Email</label>
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      placeholder="ex. email@gmail.com"
                    />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group">
                    <label>Contact</label>
                    <input
                      type="text"
                      name="contact"
                      className="form-control"
                      placeholder="ex. 09654645341"
                    />
                  </div>
                </div>
                <div className="col-md-4">
                  <label>Gender</label>
                  <div className="form-group">
                    <select className="form-control" name="gender">
                      <option>Male</option>
                      <option>Female</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Profile</label>
                <input type="file" name="profile" className="form-control" />
              </div>
            </div>
            <div className="modal-footer justify-content-between">
              <button
                type="button"
                className="btn btn-default"
                data-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default AddtenantModal;
