
import  Nav  from "../layouts/Nav";
import Sidebar from "../layouts/Sidebar";
import  Footer  from "../layouts/Footer";

const IncomeReport = () => {
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
                     <h1 className="m-0 text-dark"><span className="fa fa-chart-bar"></span> Income Reports</h1>
                  </div>
                  <div className="col-sm-6">
                     <ol className="breadcrumb float-sm-right">
                        <li className="breadcrumb-item"><a href="#">Home</a></li>
                        <li className="breadcrumb-item active">Income Reports</li>
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
                    <div className="row">
                      <div className="col-md-5">
                      <div className="form-group">
                        <label>From</label>
                        <input type="month" name="number" className="form-control" placeholder="ex. 6000.00"/>
                      </div></div>
                      <div className="col-md-5">
                        <div className="form-group">
                          <label>To</label>
                          <input type="month" name="number" className="form-control" placeholder="ex. 6000.00"/>
                        </div></div>
                        <div className="col-md-2" style={{ marginTop: "30px" }}>
                          <div className="form-group">
                            <button className="btn btn-info">Search</button>
                          </div></div>
                        </div>
                     <table id="example1" className="table table-bordered table-hover">
                        <thead className="btn-cancel">
                           <tr>
                              <th>Month</th>
                              <th>Income</th>
                           </tr>
                        </thead>
                        <tbody>
                          <tr>
                             <td>September</td>
                             <td>Php 5000.00</td>
                          </tr>
                          <tr>
                             <td>October</td>
                             <td>Php 5000.00</td>
                          </tr>
                          <tr>
                             <td>November</td>
                             <td>Php 5000.00</td>
                          </tr>
                          <tr>
                             <td>December</td>
                             <td>Php 5000.00</td>
                          </tr>
                          <tr>
                             <td><b>Total Income</b></td>
                             <td><b>Php 50,000.00</b></td>
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
export default IncomeReport;