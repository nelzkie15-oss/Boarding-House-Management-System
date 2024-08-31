import visa from "./../../assets/img/credit/visa.png";
import mastercard from "./../../assets/img/credit/mastercard.png";
import american_express from "./../../assets/img/credit/american-express.png";
import paypal2 from "./../../assets/img/credit/paypal2.png";
import  Nav  from "../layouts/Nav";
import Sidebar from "../layouts/Sidebar";
import  Footer  from "../layouts/Footer";
import { useRef } from 'react';

const Invoice = () => {

  const formRef = useRef();

  const handlePrint = () => {
    const formHtml = formRef.current.innerHTML;
    printComponent(formHtml);
  };

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
                     <h1 className="m-0 text-dark">Invoice</h1>
                  </div>
                  <div className="col-sm-6">
                     <ol className="breadcrumb float-sm-right">
                        <li className="breadcrumb-item"><a href="#">Home</a></li>
                        <li className="breadcrumb-item active">Invoice</li>
                     </ol>
                  </div>

               </div>
            </div>
         </div>
     <section className="content">
    <div className="container-fluid" ref={formRef}>
        <div className="row">
          <div className="col-12">
            <div className="invoice p-3 mb-3">
              <div className="row">
                <div className="col-12">
                  <h4>
                    <i className="fas fa-globe"></i> Boarding-House-Management-System
                    <small className="float-right">Date: 09/06/2021</small>
                  </h4>
                </div>
              </div>
              <div className="row invoice-info">
                 <div className="col-sm-4 invoice-col">
                  From
                  <address>
                    <strong>Admin, Inc.</strong><br />
                    795 Folsom Ave, Suite 600<br />
                    San Francisco, CA 94107<br />
                    Phone: (804) 123-5432<br />
                    Email: info@almasaeedstudio.com
                  </address>
                </div> 
                <div className="col-sm-4 invoice-col">
                  To
                  <address><div className="form-group">
                    <label>Tenant name</label>
                    <input type="text" name="name" className="form-control" placeholder="ex. John Doe" />
                  </div></address>
                </div>
                <div className="col-sm-4 invoice-col">
                  <b><div className="form-group">
                    <label>Invoice</label>
                    <input type="text" name="invoice" className="form-control" placeholder="ex. #007612" />
                  </div></b>
                  <b><div className="form-group">
                    <label>Due Date</label>
                    <input type="date" name="date" className="form-control" />
                  </div></b><br />
                </div>
              </div>
              <div className="row">
                <div className="col-12 table-responsive">
                  <table className="table table-striped">
                    <thead>
                    <tr>
                      <th>Description</th>
                      <th>Month</th>
                      <th>Year</th>
                      <th>Subtotal</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                      <td>Monthly Rent</td>
                      <td>September</td>
                      <td>2021</td>
                      <td>Php 5,000.00</td>
                    </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="row">
                <div className="col-6">
                  <p className="lead">Payment Methods:</p>
                  <img src={visa} alt="Visa" />
                  <img src={mastercard} alt="Mastercard" />
                  <img src={american_express} alt="American Express" />
                  <img src={paypal2} alt="Paypal" />

                  <p className="text-muted well well-sm shadow-none" style={{ marginTop: "10px" }}>
                    Etsy doostang zoodles disqus groupon greplin oooj voxy zoodles, weebly ning heekya handango imeem
                    plugg
                    dopplr jibjab, movity jajah plickers sifteo edmodo ifttt zimbra.
                  </p>
                </div>
                <div className="col-6">
                  <p className="lead">Amount Due Sept/06/2021</p>

                  <div className="table-responsive">
                    <table className="table">
                      <tr>
                        <th  style={{ width:"50%" }}>Subtotal:</th>
                        <td>Php 3000.00</td>
                      </tr>
                      <tr>
                        <th>Tax (9.3%)</th>
                        <td>Php 10.34</td>
                      </tr>
                      <tr>
                        <th>Total:</th>
                        <td>php 3190.00</td>
                      </tr>
                    </table>
                  </div>
                </div>
              </div>
              <div className="row no-print">
                <div className="col-12">
                  <button onClick={handlePrint} target="_blank" className="btn btn-default"><i className="fas fa-print"></i> Print</button>
                </div>
              </div>
            </div>
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

const printComponent = (componentHtml) => {
  const printWindow = window.open('', '', 'height=600,width=800');
  printWindow.document.write('<html><head><title>Print</title>');
  printWindow.document.write('<link rel="stylesheet" type="text/css" href="./../../assets/print.css">'); // Include your CSS here
  printWindow.document.write('</head><body >');
  printWindow.document.write(componentHtml);
  printWindow.document.write('</body></html>');
  printWindow.document.close();
  printWindow.focus();
  printWindow.print();
};
export default Invoice;