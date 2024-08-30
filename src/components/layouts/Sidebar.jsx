import logo from './../../assets/img/logo1.png';
import { Link } from "react-router-dom";
const Sidebar = () =>  {
    return (
 
    <aside className="main-sidebar sidebar-dark-primary elevation-4">
        <a href="index.html" className="brand-link">
            <img src={logo} alt="Logo"  style={{ width:"200", marginBottom:"-120px", marginTop:"-50px", opacity: ".8" }} />
        </a>
        <div className="sidebar">
            <nav className="mt-2">
            <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
            
                <li className="nav-item">
                <Link to="/admin/dashboard" className="nav-link">
                    <i className="nav-icon fa fa-tachometer-alt"></i>
                    <p>
                    Dashboard
                    </p>
                </Link>
                </li>
                <li className="nav-item">
                <Link to="/admin/tenants" className="nav-link">
                    <i className="nav-icon fa fa-users"></i>
                    <p>
                    Tenants Profile
                    </p>
                </Link>
                </li>
                
                <li className="nav-item">
                <Link to="/admin/roommanagement" className="nav-link">
                    <i className="nav-icon fa fa-home"></i>
                    <p>
                    Room Management
                    </p>
                </Link>
                </li>
                <li className="nav-item">
                <Link to="/admin/bedmanagement" className="nav-link">
                    <i className="nav-icon fa fa-bed"></i>
                    <p>
                    Bed Management
                    </p>
                </Link>
                </li>
                <li className="nav-item">
                <Link to="/admin/bedassignment" className="nav-link">
                    <i className="nav-icon fa fa-bed"></i>
                    <p>
                    Bed Assignment
                    </p>
                </Link>
                </li>
                <li className="nav-item">
                <Link to="/admin/billrates" className="nav-link">
                    <i className="nav-icon fa fa-money-bill"></i>
                    <p>
                    Utility Bills
                    </p>
                </Link>
                </li>
                <li className="nav-item">
                <Link to="/admin/invoice" className="nav-link">
                    <i className="nav-icon fa fa-file-invoice"></i>
                    <p>
                    Invoice
                    </p>
                </Link>
                </li>
                <li className="nav-item">
                <Link to="/admin/paymenthistory" className="nav-link">
                    <i className="nav-icon fa fa-file "></i>
                    <p>
                    Payment History
                    </p>
                </Link>
                </li>
                <li className="nav-item">
                <Link to="/admin/payments" className="nav-link">
                    <i className="nav-icon fa fa-file-invoice"></i>
                    <p>
                    Payments 
                    </p>
                </Link>
                </li>
         
                <li className="nav-item">
                <Link to="/admin/notice" className="nav-link">
                    <i className="nav-icon fa fa-bell"></i>
                    <p>
                    Notice Board
                    </p>
                </Link>
                </li>
                <li className="nav-item">
                <Link to="/admin/suggestions" className="nav-link">
                    <i className="nav-icon fa fa-file-invoice"></i>
                    <p>
                    Suggestions 
                    </p>
                </Link>
                </li>
                <li className="nav-header">REPORTS</li>
                <li className="nav-item">
                <Link to="/admin/incomereport" className="nav-link">
                    <i className="nav-icon fa fa-chart-bar"></i>
                    <p>
                    Income Report  
                    </p>
                </Link>
                </li>
                <li className="nav-item">
                <Link to="/admin/collectibles" className="nav-link">
                    <i className="nav-icon fa fa-table"></i>
                    <p>
                    Collectibles 
                    </p>
                </Link>
                </li>
            </ul>
            </nav>
        </div>
        </aside>

  )
}
export default Sidebar;