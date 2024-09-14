import {  useState } from "react";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

const AddroomModal = () => {

  const [formData, setFormData] = useState({
    room_number: "",
    description: "",
    file: null,

});

const [message, setMessage] = useState('');
const [errors, setErrors] = useState({});

const handleChange = (e) => {
  const { name, value, type, files } = e.target;
  setFormData({
    ...formData,
    [name]: type === 'file' ? files[0] : value,
  });
};

const validateForm = () => {
  let formErrors = {};
  if (!formData.room_number) formErrors.room_number = 'Room Number is required';
  if (!formData.description) formErrors.description = 'Description is required';
  if (!formData.file) formErrors.file = 'Upload file is required';
  return formErrors;
};

  const handleRoom = (e) => {
    e.preventDefault();

    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    const data = new FormData();
    data.append('room_number', formData.room_number);
    data.append('description', formData.description);
    if (formData.file) {
      data.append('file', formData.file);
    }

    axios.post('http://127.0.0.1:8000/api/rooms', data)
      .then(response => {
        toast.success("Insert room successfully");
        setTimeout(() => {
            window.location.href = "/admin/roommanagement";
        }, 1500);
        setMessage(response.data.message);
  
      })
      .catch(error => {
        message(error);
      });
  }


  return (
    <>
     <ToastContainer />
      <div className="modal fade" id="addroomModal">
        <div className="modal-dialog modal-md">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Add Room</h4>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <form onSubmit={handleRoom} method="POST">
            <div className="alert alert-danger mx-3 mt-2" hidden>{message}</div>
            <div className="modal-body">
              <div className="row">
                <div className="col-md-12">
                  <div className="form-group">
                    <label>Room No.</label>
                    <input
                      type="text"
                      name="room_number"
                      id="room_number"
                      onChange={handleChange}
                      className="form-control"
                      placeholder="ex. RM-0001"
                    />
                  </div>
                  {errors.room_number && <p className="text-danger">{errors.room_number}</p>}
                </div>
                <div className="col-md-12">
                  <div className="form-group">
                    <label>Description</label>
                    <textarea
                      className="form-control"
                      name="description"
                      onChange={handleChange}
                      placeholder="ex. Neque porro quisquam est qui dolorem ipsum quia dolor sit amet"
                    ></textarea>
                  </div>
                  {errors.description && <p className="text-danger">{errors.description}</p>}
                </div>
                <div className="col-md-12">
                  <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Room Picture</label>
                    <input
                      type="file"
                      id="file"
                      name="file"
                      onChange={handleChange}
                      className="form-control"
                    />
                  </div>
                  {errors.file && <p className="text-danger">{errors.file}</p>}
                </div>
              </div>
            </div>
            <div className="modal-footer justify-content-between">
              <button
                type="button"
                className="btn btn-default"
                data-dismiss="modal"
              >
                Close
              </button>
              <button  className="btn btn-primary">
                Save
              </button>
            </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default AddroomModal;
