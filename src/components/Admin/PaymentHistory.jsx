import  Nav  from "../layouts/Nav";
import Sidebar from "../layouts/Sidebar";
import  Footer  from "../layouts/Footer";

const PaymentHistory = () => {
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
                     <h1 className="m-0 text-dark"><span className="fa fa-file"></span> Payments History</h1>
                  </div>
                  <div className="col-sm-6">
                     <ol className="breadcrumb float-sm-right">
                        <li className="breadcrumb-item"><a href="#">Home</a></li>
                        <li className="breadcrumb-item active">Payments History</li>
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
                              <th>Invoice No.</th>
                              <th>Amount Paid</th>
                              <th>Date Of Payment</th>
                              <th>Remarks</th>
                           </tr>
                        </thead>
                        <tbody>
                           <tr>
                              <td>IN-00012</td>
                              <td>1,500.00</td>
                              <td>Sept 30,2021</td>
                              <td>Paid</td>
                           </tr>
                           <tr>
                              <td>IN-000234</td>
                              <td>1,500.00</td>
                              <td>Sept 30,2021</td>
                              <td>Paid</td>
                           </tr>
                           <tr>
                              <td>IN-000122</td>
                              <td>1,500.00</td>
                              <td>Sept 30,2021</td>
                              <td>Paid</td>
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
export default PaymentHistory;