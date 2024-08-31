import profile from "./../../assets/img/profile.png";
import profile1 from "./../../assets/img/profile.png";
import profile2 from "./../../assets/img/profile.png";
import  Nav  from "../layouts/Nav";
import Sidebar from "../layouts/Sidebar";
import  Footer  from "../layouts/Footer";
import AddtenantModal from "./TenantsModal/AddtenantModal";
const Tenants = () => {
  return (
    <>
      <div className="wrapper">
        <Nav />
        <Sidebar />
        <div className="content-wrapper">
          <section className="content">
            <div className="content-header">
              <div className="container-fluid">
                <div className="row mb-2">
                  <div className="col-sm-6">
                    <h1 className="m-0 text-dark">
                      <span className="fa fa-user-tie"></span> Tenants
                    </h1>
                  </div>
                  <div className="col-sm-6">
                    <ol className="breadcrumb float-sm-right">
                      <li className="breadcrumb-item">
                        <a href="#">Home</a>
                      </li>
                      <li className="breadcrumb-item active">Tenants</li>
                    </ol>
                  </div>
                  <button data-toggle="modal" data-target="#addtenantModal" className="btn btn-sm elevation-2"  style={{ marginTop: "20px", marginLeft: "10px", backgroundColor: "#05445E", color: "#ddd" }}><i
                        className="fa fa-user-plus"></i>
                     &nbsp;Add New</button>
                     <AddtenantModal />
                </div>
              </div>
            </div>
            <div className="container-fluid">
              <div className="card card-info elevation-2">
                <br />
                <div className="col-md-12 table-responsive">
                  <table
                    id="example1"
                    className="table table-bordered table-hover"
                  >
                    <thead className="btn-cancel">
                      <tr>
                        <th>Profile</th>
                        <th>Tenant Info</th>
                        <th>Address</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <center>
                            <img
                              src={profile}
                              style={{ width: "50px", height: "50px" }}
                              alt="User Image"
                            />
                          </center>
                        </td>
                        <td>
                          <p className="info">
                            Name: <b>James Andress</b>
                          </p>
                          <p className="info">
                            <small>
                              Contact: <b>098733526171</b>
                            </small>
                          </p>
                          <p className="info">
                            <small>
                              Email: <b>james@gmail.com</b>
                            </small>
                          </p>
                        </td>
                        <td>Pasig, Metro Manila</td>
                        <td className="text-center">
                          <a
                            className="btn btn-sm btn-success"
                            href="#"
                            data-toggle="modal"
                            data-target="#edit"
                          >
                            <i className="fa fa-user-edit"></i>
                          </a>
                          &nbsp;
                          <a
                            className="btn btn-sm btn-danger"
                            href="#"
                            data-toggle="modal"
                            data-target="#delete"
                          >
                            <i className="fa fa-trash-alt"></i>
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <center>
                            <img
                              src={profile1}
                              style={{ width: "50px", height: "50px" }}
                              alt="User Image"
                            />
                          </center>
                        </td>
                        <td>
                          <p className="info">
                            Name: <b>John Doe</b>
                          </p>
                          <p className="info">
                            <small>
                              Contact: <b>098733526171</b>
                            </small>
                          </p>
                          <p className="info">
                            <small>
                              Email: <b>john@gmail.com</b>
                            </small>
                          </p>
                        </td>
                        <td>Makati, Metro Manila</td>
                        <td className="text-center">
                          <a
                            className="btn btn-sm btn-success"
                            href="#"
                            data-toggle="modal"
                            data-target="#edit"
                          >
                            <i className="fa fa-user-edit"></i>
                          </a>
                          &nbsp;
                          <a
                            className="btn btn-sm btn-danger"
                            href="#"
                            data-toggle="modal"
                            data-target="#delete"
                          >
                            <i className="fa fa-trash-alt"></i>
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <center>
                            <img
                              src={profile2}
                              style={{ width: "50px", height: "50px" }}
                              alt="User Image"
                            />
                          </center>
                        </td>
                        <td>
                          <p className="info">
                            Name: <b>Juan Luna</b>
                          </p>
                          <p className="info">
                            <small>
                              Contact: <b>098733526171</b>
                            </small>
                          </p>
                          <p className="info">
                            <small>
                              Email: <b>juan@gmail.com</b>
                            </small>
                          </p>
                        </td>
                        <td>Mandaluyong, Metro Manila</td>
                        <td className="text-center">
                          <a
                            className="btn btn-sm btn-success"
                            href="#"
                            data-toggle="modal"
                            data-target="#edit"
                          >
                            <i className="fa fa-user-edit"></i>
                          </a>
                          &nbsp;
                          <a
                            className="btn btn-sm btn-danger"
                            href="#"
                            data-toggle="modal"
                            data-target="#delete"
                          >
                            <i className="fa fa-trash-alt"></i>
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>
        </div>
        <Footer />
        <aside className="control-sidebar control-sidebar-dark"></aside>
      </div>
    </>
  );
};
export default Tenants;
