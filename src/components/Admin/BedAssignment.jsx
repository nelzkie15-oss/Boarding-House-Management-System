import  Nav  from "../layouts/Nav";
import Sidebar from "../layouts/Sidebar";
import  Footer  from "../layouts/Footer";

const BedAssignment = () => {
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
                     <h1 className="m-0 text-dark"><span className="fa fa-bed"></span> Bed Assignment</h1>
                  </div>
                  <div className="col-sm-6">
                     <ol className="breadcrumb float-sm-right">
                        <li className="breadcrumb-item"><a href="#">Home</a></li>
                        <li className="breadcrumb-item active">Bed Assignment</li>
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
                              <th>Tenant Name</th>
                              <th>Room No.</th>
                              <th>Bed No.</th>
                              <th>Date Start</th>
                              <th>Due Date</th>
                              <th>Action</th>
                           </tr>
                        </thead>
                        <tbody>
                           <tr>
                              <td>John Doe</td>
                              <td>RM-0001</td>
                              <td>BD-0001</td>
                              <td>Sept 06,2021</td>
                              <td>Sept 07,2021</td>
                              <td className="text-center">
                                 <a className="btn btn-sm btn-success" href="#" data-toggle="modal" data-target="#edit"><i
                                       className="fa fa-edit"></i></a>&nbsp;
                                 <a className="btn btn-sm btn-danger" href="#" data-toggle="modal" data-target="#delete"><i
                                       className="fa fa-trash-alt"></i></a>
                              </td>
                           </tr>
                           <tr>
                              <td>Jane Doe</td>
                              <td>RM-00034</td>
                              <td>BD-00021</td>
                              <td>Sept 06,2021</td>
                              <td>Sept 07,2021</td>
                              <td className="text-center">
                                 <a className="btn btn-sm btn-success" href="#" data-toggle="modal" data-target="#edit"><i
                                       className="fa fa-edit"></i></a>&nbsp;
                                 <a className="btn btn-sm btn-danger" href="#" data-toggle="modal" data-target="#delete"><i
                                       className="fa fa-trash-alt"></i></a>
                              </td>
                           </tr>
                           <tr>
                              <td>Juan Dela Cruz</td>
                              <td>RM-0002</td>
                              <td>BD-0003</td>
                              <td>Sept 06,2021</td>
                              <td>Oct 06,2021</td>
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
export default BedAssignment;