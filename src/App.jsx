import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './components/Login';
import Dashboard from './components/Admin/Dashboard';
import Tenants from './components/Admin/Tenants.jsx';
import RoomManagement from "./components/Admin/RoomManagement.jsx";
import BedManagement from "./components/Admin/BedManagement.jsx";
import BedAssignment from "./components/Admin/BedAssignment.jsx";
import BillRates from "./components/Admin/BillRates.jsx";
import Invoice from "./components/Admin/Invoice.jsx";
import PaymentHistory from "./components/Admin/PaymentHistory.jsx";
import Payments from './components/Admin/Payments';
import Notice from "./components/Admin/Notice.jsx";
import Suggestions from "./components/Admin/Suggestions.jsx";
import IncomeReport from "./components/Admin/IncomeReport.jsx";
import Collectibles from "./components/Admin/Collectibles.jsx";

function App() {

  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Routes>
              <Route index element={<Login />} />
              <Route path="/" element={<Login />} />
              <Route path="/admin/dashboard" element={<Dashboard />} />
              <Route path="/admin/tenants" element={<Tenants />} />
              <Route path="/admin/roommanagement" element={<RoomManagement />} />
              <Route path="/admin/bedmanagement" element={<BedManagement />} />
              <Route path="/admin/bedassignment" element={<BedAssignment />} />
              <Route path="/admin/billrates" element={<BillRates />} />
              <Route path="/admin/invoice" element={<Invoice />} />
              <Route path="/admin/paymenthistory" element={<PaymentHistory />} />
              <Route path="/admin/payments" element={<Payments />} />
              <Route path="/admin/notice" element={<Notice />} />
              <Route path="/admin/suggestions" element={<Suggestions />} />
              <Route path="/admin/incomereport" element={<IncomeReport />} />
              <Route path="/admin/collectibles" element={<Collectibles />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
