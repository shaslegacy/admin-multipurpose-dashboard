import React, { ReactNode } from 'react'
import Header from './header/Header'
import LeftSidebar from './sidebar/LeftSidebar'
import Footer from './footer/Footer';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
interface MainLayoutProps {
    children: ReactNode;
  }

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <>
    <Header/>
    <LeftSidebar/>
    <div className="content-page">
        <main>{children}</main>
        <ToastContainer
            position="top-right"
            autoClose={350}
            hideProgressBar={false}
            newestOnTop={true}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            theme="light"
          />
        <Footer />
    </div>
   </>
  )
}

export default MainLayout