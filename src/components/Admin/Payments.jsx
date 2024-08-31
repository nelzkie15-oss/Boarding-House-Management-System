import paypal2 from "./../../assets/img/credit/paypal2.png";
import  Nav  from "../layouts/Nav";
import Sidebar from "../layouts/Sidebar";
import  Footer  from "../layouts/Footer";

const Payments = () => {
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
                     <h1 className="m-0 text-dark"><span className="fa fa-money-bill"></span> Payments</h1>
                  </div>
                  <div className="col-sm-6">
                     <ol className="breadcrumb float-sm-right">
                        <li className="breadcrumb-item"><a href="#">Home</a></li>
                        <li className="breadcrumb-item active">Payments</li>
                     </ol>
                  </div>
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
                              <th>Payment Amount</th>
                              <th>Date</th>
                              <th>Proof of Payment</th>
                              <th>Remarks</th>
                              <th>Status</th>
                              <th>Action</th>
                           </tr>
                        </thead>
                        <tbody>
                           <tr>
                              <td>Php 3,000.00</td>
                              <td>Sept 06, 2021</td>
                              <td><img src={paypal2}  style={{ border: "2px solid gray", width:"50px", height:"30px" }} /></td>
                              <td>remarks</td>
                              <td><span className="badge bg-success">approved</span></td>
                              <td className="text-center">
                                <a className="btn btn-sm btn-info" href="#" data-toggle="modal" data-target="#edit"><i
                                      className="fa fa-eye"></i></a>&nbsp;
                                      <a className="btn btn-sm btn-success" href="#" data-toggle="modal" data-target="#edit"><i
                                            className="fa fa-edit"></i></a>
                              </td>
                           </tr>
                           <tr>
                              <td>Php 3,500.00</td>
                              <td>Sept 06, 2021</td>
                              <td><img src={paypal2}  style={{ border: "2px solid gray", width:"50px", height:"30px" }} /></td>
                              <td>remarks</td>
                              <td><span className="badge bg-info">pending</span></td>
                              <td className="text-center">
                                <a className="btn btn-sm btn-info" href="#" data-toggle="modal" data-target="#edit"><i
                                      className="fa fa-eye"></i></a>&nbsp;
                                      <a className="btn btn-sm btn-success" href="#" data-toggle="modal" data-target="#edit"><i
                                            className="fa fa-edit"></i></a>
                              </td>
                           </tr>
                           <tr>
                              <td>Php 4,000.00</td>
                              <td>Sept 06, 2021</td>
                              <td><img src={paypal2}  style={{ border: "2px solid gray", width:"50px", height:"30px" }} /></td>
                              <td>remarks</td>
                              <td><span className="badge bg-danger">disapproved</span></td>
                              <td className="text-center">
                                <a className="btn btn-sm btn-info" href="#" data-toggle="modal" data-target="#edit"><i
                                      className="fa fa-eye"></i></a>&nbsp;
                                      <a className="btn btn-sm btn-success" href="#" data-toggle="modal" data-target="#edit"><i
                                            className="fa fa-edit"></i></a>
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
export default Payments;