import React from 'react'
import { Link } from 'react-router-dom';
const LogoutConfirmation = () => {
  return (
    <div className='authentication-bg authentication-bg-pattern'>
       <div class="account-pages mt-5 mb-5">
         <div class="container">
            <div class="row justify-content-center">
                <div class="col-md-8 col-lg-6 col-xl-5">
                    <div class="card bg-pattern">

                        <div class="card-body p-4">
                            
                            <div class="text-center w-75 m-auto">
                                <div class="auth-logo">
                                    <a href="index.html" class="logo logo-dark text-center">
                                        <span class="logo-lg">
                                            <h4>Shas Legacy</h4>
                                            <img src="../assets/images/logo-dark.png" alt="" height="22" />
                                        </span>
                                    </a>
                
                                    <a href="index.html" class="logo logo-light text-center">
                                        <span class="logo-lg">
                                            <img src="../assets/images/logo-light.png" alt="" height="22" />
                                        </span>
                                    </a>
                                </div>
                            </div>

                            <div class="text-center">
                                <div class="mt-4">
                                    <div class="logout-checkmark">
                                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130.2 130.2">
                                            <circle class="path circle" fill="none" stroke="#4bd396" stroke-width="6" stroke-miterlimit="10" cx="65.1" cy="65.1" r="62.1"/>
                                            <polyline class="path check" fill="none" stroke="#4bd396" stroke-width="6" stroke-linecap="round" stroke-miterlimit="10" points="100.2,40.2 51.5,88.8 29.8,67.5 "/>
                                        </svg>
                                    </div>
                                </div>

                                <h3>See you again !</h3>

                                <p class="text-muted"> You are now successfully sign out. </p>
                            </div>

                        </div>
                    </div>

                    <div class="row mt-3">
                        <div class="col-12 text-center">
                            <p class="text-dark-50">Back to <Link to="/" class="text-dark ml-1"><b>Sign In</b></Link></p>
                        </div>
                    </div>

                </div> 
            </div>
         </div>
       </div>
       <footer className="footer footer-alt">
            2023 - {new Date().getFullYear()} &copy; Admin Dashboard by <Link to="#">Shas Legacy</Link> 
        </footer>
    </div>
  )
}

export default LogoutConfirmation