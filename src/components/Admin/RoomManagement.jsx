import room from "./../../assets/img/room.jpg";
import  Nav  from "../layouts/Nav";
import Sidebar from "../layouts/Sidebar";
import  Footer  from "../layouts/Footer";
import AddroomModal from "./RoomModal/AddroomModal";

const RoomManagement = () => {
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
                     <h1 className="m-0 text-dark"><span className="fa fa-home"></span> Rooms</h1>
                  </div>
                  <div className="col-sm-6">
                     <ol className="breadcrumb float-sm-right">
                        <li className="breadcrumb-item"><a href="#">Home</a></li>
                        <li className="breadcrumb-item active">Rooms</li>
                     </ol>
                  </div>
                  <button data-toggle="modal" data-target="#addroomModal" className="btn btn-sm elevation-2"  style={{ marginTop: "20px", marginLeft: "10px", backgroundColor: "#05445E", color: "#ddd" }}><i
                        className="fa fa-user-plus"></i>
                     &nbsp;Add New</button>
                     <AddroomModal />
               </div>
            </div>
         </div>
            <section className="content">
            <div className="container-fluid">
               <div className="card card-info elevation-2">
                  <br />
                  <div className="col-md-12 table-responsive">
                  <table id="room_table" className="table table-bordered table-striped">
                        <thead className="btn-cancel">
                           <tr>
                              <th>Room Number</th>
                              <th>Description</th>
                              <th>Image</th>
                              <th>Action</th>
                           </tr>
                        </thead>
                        <tbody>
                           <tr>
                              <td>RM-0001</td>
                              <td>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet</td>
                              <td><img src={room} style={{ border: "2px solid gray",  width:"100px", height: "100px" }} /></td>
                              <td className="text-center">
                                 <a className="btn btn-sm btn-success" href="#" data-toggle="modal" data-target="#edit"><i
                                       className="fa fa-edit"></i></a>&nbsp;
                                 <a className="btn btn-sm btn-danger" href="#" data-toggle="modal" data-target="#delete"><i
                                       className="fa fa-trash-alt"></i></a>
                              </td>
                           </tr>
                           <tr>
                              <td>RM-0002</td>
                              <td>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet</td>
                              <td><img src={room} style={{ border: "2px solid gray",  width:"100px", height: "100px" }} /></td>
                              <td className="text-center">
                                 <a className="btn btn-sm btn-success" href="#" data-toggle="modal" data-target="#edit"><i
                                       className="fa fa-edit"></i></a>&nbsp;
                                 <a className="btn btn-sm btn-danger" href="#" data-toggle="modal" data-target="#delete"><i
                                       className="fa fa-trash-alt"></i></a>
                              </td>
                           </tr>
                           <tr>
                              <td>RM-0003</td>
                              <td>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet</td>
                              <td><img src={room} style={{ border: "2px solid gray",  width:"100px", height: "100px" }} /></td>
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

export default RoomManagement;