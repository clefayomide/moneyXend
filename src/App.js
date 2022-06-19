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
import MobileMenu from "./components/mobile-menu/MobileMenu";
import { useState } from "react";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleMenuClose = () => {
    setIsMenuOpen(false)
  }
  return (
    <div className="App" style={{overflow: `${isMenuOpen ? "hidden" : "auto"}`}}>
      <PageLayout>
        <header className="page-header">
          <div className="big-screen-header">
            <SideNavLayout>
              <SideNav />
            </SideNavLayout>
          </div>

          <div className="small-screen-header">
            <MobileMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}/>
          </div>
        </header>
        <main className="page-main" onClick={handleMenuClose} >
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
