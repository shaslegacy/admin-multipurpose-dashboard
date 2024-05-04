import React from 'react';
import './styles/main.scss';
import RightSidebar from './components/core/sidebar/RightSidebar';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Login from './pages/auth/Login';
import RecoverPassword from './pages/auth/RecoverPassword';
import LogoutConfirmation from './pages/auth/LogoutConfirmation';
import AdminRoutes from './routing/AdminRoutes';
import { PrivateRoutes } from './routing/PrivateRoutes';
import { OpenRoutes } from './routing/OpenRoutes';

  const App = () => {

  return (
    <div id="wrapper">
      <Router>
        <Routes>
          <Route path="/" element={<OpenRoutes><Login /></OpenRoutes>} />
          <Route path="/recover-password" element={<RecoverPassword />} />
          <Route path="/logout" element={<LogoutConfirmation />} />
          <Route path="/admin/*" element={<PrivateRoutes><AdminRoutes /></PrivateRoutes>} />
        </Routes>
      </Router>
      {/* Page Content End */}
      <RightSidebar />
      <div className="rightbar-overlay"></div>
    </div>
  );
}

// const ProtectedRoutes = () => {

// }

export default App;
