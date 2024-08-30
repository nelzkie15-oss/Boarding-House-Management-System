import  Nav  from "../layouts/Nav";
import Sidebar from "../layouts/Sidebar";
import  Footer  from "../layouts/Footer";

const BedManagement = () => {
    return (
        <>
          <div className="wrapper">
            <Nav />
            <Sidebar />
            <div className="content-wrapper">
            <div className="content-header">
            <div className="container-fluid">
               <div className="row mb-2">
                  <div className="col-sm-6">
                     <h1 className="m-0 text-dark"><span className="fa fa-bed"></span> Beds</h1>
                  </div>
                  <div className="col-sm-6">
                     <ol className="breadcrumb float-sm-right">
                        <li className="breadcrumb-item"><a href="#">Home</a></li>
                        <li className="breadcrumb-item active">Beds</li>
                     </ol>
                  </div>
                  <a className="btn btn-sm elevation-2" href="add-room.html" style={{ marginTop: "20px", marginLeft: "10px", backgroundColor: "#05445E", color: "#ddd" }}><i
                        className="fa fa-user-plus"></i>
                     &nbsp;Add New</a>
               </div>
            </div>
         </div>
         <section className="content">
            <div className="container-fluid">
               <div className="card card-info elevation-2">
                  <br />
                  <div className="col-md-12 table-responsive">
                     <table id="example1" className="table table-bordered table-hover">
                        <thead className="btn-cancel">
                           <tr>
                              <th>Bed No.</th>
                              <th>Room No.</th>
                              <th>Daily Rate</th>
                              <th>Monthly Rate</th>
                              <th>Status</th>
                              <th>Action</th>
                           </tr>
                        </thead>
                        <tbody>
                           <tr>
                              <td>BD-0001</td>
                              <td>RM-0001</td>
                              <td>100.00</td>
                              <td>300.00</td>
                              <td><span className="badge bg-success">available</span></td>
                              <td className="text-center">
                                 <a className="btn btn-sm btn-success" href="#" data-toggle="modal" data-target="#edit"><i
                                       className="fa fa-edit"></i></a>&nbsp;
                                 <a className="btn btn-sm btn-danger" href="#" data-toggle="modal" data-target="#delete"><i
                                       className="fa fa-trash-alt"></i></a>
                              </td>
                           </tr>
                           <tr>
                              <td>BD-0002</td>
                              <td>RM-0002</td>
                              <td>120.00</td>
                              <td>3600.00</td>
                              <td><span className="badge bg-success">available</span></td>
                              <td className="text-center">
                                 <a className="btn btn-sm btn-success" href="#" data-toggle="modal" data-target="#edit"><i
                                       className="fa fa-edit"></i></a>&nbsp;
                                 <a className="btn btn-sm btn-danger" href="#" data-toggle="modal" data-target="#delete"><i
                                       className="fa fa-trash-alt"></i></a>
                              </td>
                           </tr>
                           <tr>
                              <td>BD-0003</td>
                              <td>RM-0003</td>
                              <td>150.00</td>
                              <td>4500.00</td>
                              <td><span className="badge bg-warning">occupied</span></td>
                              <td className="text-center">
                                 <a className="btn btn-sm btn-success" href="#" data-toggle="modal" data-target="#edit"><i
                                       className="fa fa-edit"></i></a>&nbsp;
                                 <a className="btn btn-sm btn-danger" href="#" data-toggle="modal" data-target="#delete"><i
                                       className="fa fa-trash-alt"></i></a>
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
}
export default BedManagement;