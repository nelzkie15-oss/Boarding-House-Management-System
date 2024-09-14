
import  Nav  from "../layouts/Nav";
import Sidebar from "../layouts/Sidebar";
import  Footer  from "../layouts/Footer";
import AddroomModal from "./RoomModal/AddroomModal";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const RoomManagement = () => {

   const [rooms, setRooms] = useState([]);
   const [loading, setLoading] = useState(true);
   const [error, setError] = useState(null);
   // const [showContent, setShowContent] = React.useState(false);

   useEffect(() => {
     // Fetch data from the API
     axios.get('http://127.0.0.1:8000/api/rooms')
         .then(response => {
            setRooms(response.data);
            setLoading(false);
         })
         .catch(error => {
            setError('There was an error fetching the data.');
            setLoading(false);
         });
   }, []); // Empty dependency array means this runs once when the component mounts
 
   // if (loading) return <p>Loading...</p>;
   // if (error) return <p>{error}</p>;

    return (
        <>
          <div className="wrapper">
          <ToastContainer />
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
                        {rooms.length > 0 ? (rooms.map(room => (
                               <tr key={room.id}>
                              <td>{room.room_number}</td>
                              <td>{room.description}</td>
                              <td><img src={`http://127.0.0.1:8000/storage/uploads/${room.file}`} style={{ border: "2px solid gray",  width:"100px", height: "100px" }} /></td>
                              <td className="text-center">
                                 <a className="btn btn-sm btn-success" href="#" data-toggle="modal" data-target="#edit"><i
                                       className="fa fa-edit"></i></a>&nbsp;
                                 <a className="btn btn-sm btn-danger" href="#" data-toggle="modal" data-target="#delete"><i
                                       className="fa fa-trash-alt"></i></a>
                              </td>
                           </tr>
                      ))
                     ) : (
                       <p>There are no employees</p>
                     )}
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
//   <td><img src={`http://127.0.0.1:8000/storage/uploads/${room.file}`} style={{ border: "2px solid gray",  width:"100px", height: "100px", filter: !showContent ? "blur(1.5rem)" : "none"  }}  alt={showContent ? alt : ""} />
//   {!showContent && <div className="warning-text">
//      This image may contain sensitive content
//      </div>}
//   </td>
export default RoomManagement;