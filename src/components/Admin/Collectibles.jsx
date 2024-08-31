
import  Nav  from "../layouts/Nav";
import Sidebar from "../layouts/Sidebar";
import  Footer  from "../layouts/Footer";

const Collectibles = () => {
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
                     <h1 className="m-0 text-dark"><span className="fa fa-list-alt"></span> Collectibles</h1>
                  </div>
                  <div className="col-sm-6">
                     <ol className="breadcrumb float-sm-right">
                        <li className="breadcrumb-item"><a href="#">Home</a></li>
                        <li className="breadcrumb-item active">Collectibles</li>
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
                              <th>Tenant Name</th>
                              <th>Room No.</th>
                              <th>Monthly Due</th>
                              <th>Total Payment</th>
                              <th>Balance</th>
                           </tr>
                        </thead>
                        <tbody>
                          <tr>
                             <td>Tenant 1</td>
                             <td>1</td>
                             <td>3000</td>
                             <td>3000</td>
                             <td>2000</td>
                          </tr>
                          <tr>
                             <td>Tenant 2</td>
                             <td>2</td>
                             <td>3000</td>
                             <td>3000</td>
                             <td>2000</td>
                          </tr>
                          <tr>
                             <td>Tenant 3</td>
                             <td>3</td>
                             <td>3000</td>
                             <td>3000</td>
                             <td>2000</td>
                          </tr>
                          <tr>
                             <td>Tenant 4</td>
                             <td>4</td>
                             <td>3000</td>
                             <td>3000</td>
                             <td>2000</td>
                          </tr>
                          <tr>
                             <td>Tenant 5</td>
                             <td>5</td>
                             <td>3000</td>
                             <td>3000</td>
                             <td>2000</td>
                          </tr>
                          <tr>
                             <td>Tenant 6</td>
                             <td>6</td>
                             <td>3000</td>
                             <td>3000</td>
                             <td>2000</td>
                          </tr>
                          <tr>
                             <td></td>
                             <td></td>
                             <td></td>
                             <td><b>Total Collectible</b></td>
                             <td>20000</td>
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
export default Collectibles;