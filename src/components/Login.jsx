 import logo from './../assets/img/logo.png';
const Login = () => {

  async function handleLogin(e) {
    e.preventDefault();
    window.location.href = "/admin/dashboard";
}


  return (
   <div className="hold-transition login-page">
    <div className="login-box">
    <div className="card card-outline card-info">
      <div className="card-header text-center">
          <img src={logo} alt="Logo" style={{ width: "200", marginBottom: "-50px" }} />
       </div>
       <div className="card-body" >
          <form  onSubmit={handleLogin} method="post">
             <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Username" />
                <div className="input-group-append">
                   <div className="input-group-text">
                      <span className="fas fa-user"></span>
                   </div>
                </div>
             </div>
             <div className="input-group mb-3">
                <input type="password" className="form-control" placeholder="Password" />
                <div className="input-group-append">
                   <div className="input-group-text">
                      <span className="fas fa-lock"></span>
                   </div>
                </div>
             </div>
             <div className="input-group mb-3">
                   <select className="form-control">
                       <option>Admin</option>
                       <option>Tenants</option>
                   </select>
                   <div className="input-group-append">
                   <div className="input-group-text">
                      <span className="fas fa-users"></span>
                   </div>
                </div>
             </div>
             <div className="row">
                <div className="col-lg-12">
                   <button type="submit" className="btn btn-block btn-info">Login</button>
                </div>
             </div>
          </form>
       </div>
    </div>
 </div>
 </div>
  );
};

export default Login;
