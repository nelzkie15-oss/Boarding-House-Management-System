const AddroomModal = () => {
  return (
    <>
      <div className="modal fade" id="addroomModal">
        <div className="modal-dialog modal-md">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Add Room</h4>
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
                <div className="col-md-12">
                  <div className="form-group">
                    <label>Room No.</label>
                    <input
                      type="text"
                      name="number"
                      className="form-control"
                      placeholder="ex. RM-0001"
                    />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-group">
                    <label>Description</label>
                    <textarea
                      className="form-control"
                      name="description"
                      placeholder="ex. Neque porro quisquam est qui dolorem ipsum quia dolor sit amet"
                    ></textarea>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Room Picture</label>
                    <input
                      type="file"
                      name="profile"
                      className="form-control"
                    />
                  </div>
                </div>
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
export default AddroomModal;
