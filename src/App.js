import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard";
import Payment from "./pages/payment/Payment";
import Transactions from "./pages/transactions/Transactions";
import Recipients from "./pages/recipients/Recipients";
import Account from "./pages/account/Account";
import "./App.css";
import PageLayout from "./layout/page-layout/PageLayout";
import SideNavLayout from "./layout/side-nav-layout/SideNavLayout";
import SideNav from "./components/side-nav/SideNav";

function App() {
  return (
    <div className="App">
      <PageLayout>
        <header className="page-header">
          <SideNavLayout>
            <SideNav />
          </SideNavLayout>
        </header>
        <main className="page-main">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="payment" element={<Payment />} />
            <Route path="transactions" element={<Transactions />} />
            <Route path="recipients" element={<Recipients />} />
            <Route path="account" element={<Account />} />
          </Routes>
        </main>
      </PageLayout>
    </div>
  );
}

export default App;
