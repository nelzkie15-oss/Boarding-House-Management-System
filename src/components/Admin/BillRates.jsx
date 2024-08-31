import  Nav  from "../layouts/Nav";
import Sidebar from "../layouts/Sidebar";
import  Footer  from "../layouts/Footer";

const BillRates = () => {
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
                     <h1 className="m-0 text-dark"><span className="fa fa-bed"></span> Bill Rates</h1>
                  </div>
                  <div className="col-sm-6">
                     <ol className="breadcrumb float-sm-right">
                        <li className="breadcrumb-item"><a href="#">Home</a></li>
                        <li className="breadcrumb-item active">Bill Rates</li>
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
                              <th>Bills</th>
                              <th>Rate</th>
                              <th>Action</th>
                           </tr>
                        </thead>
                        <tbody>
                           <tr>
                              <td>Electricity</td>
                              <td>100 / KWh</td>
                              <td className="text-center">
                                 <a className="btn btn-sm btn-success" href="#" data-toggle="modal" data-target="#edit"><i
                                       className="fa fa-edit"></i></a>&nbsp;
                                 <a className="btn btn-sm btn-danger" href="#" data-toggle="modal" data-target="#delete"><i
                                       className="fa fa-trash-alt"></i></a>
                              </td>
                           </tr>
                           <tr>
                              <td>Water</td>
                              <td>70 Cu</td>
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
export default BillRates;