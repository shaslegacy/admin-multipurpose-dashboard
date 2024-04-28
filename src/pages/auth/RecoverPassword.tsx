import React from 'react'
import { Link } from 'react-router-dom'

const RecoverPassword = () => {
  return (
    <div className="authentication-bg authentication-bg-pattern">

        <div className="account-pages mt-5 mb-5">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8 col-lg-6 col-xl-5">
                        <div className="card bg-pattern">

                            <div className="card-body p-4">
                                
                                <div className="text-center w-75 m-auto">
                                    <div className="auth-logo">
                                        <Link to="/recover-password" className="logo logo-dark text-center">
                                            <span className="logo-lg">
                                                <img src="../assets/images/logo-dark.png" alt="" height="22" />
                                            </span>
                                        </Link>
                    
                                        <Link to="/recover-password" className="logo logo-light text-center">
                                            <span className="logo-lg">
                                                <img src="../assets/images/logo-light.png" alt="" height="22" />
                                            </span>
                                        </Link>
                                    </div>
                                    <p className="text-muted mb-4 mt-3">Enter your email address and we'll send you an email with instructions to reset your password.</p>
                                </div>

                                <form action="#">

                                    <div className="form-group mb-3">
                                        <label htmlFor="emailaddress">Email address</label>
                                        <input className="form-control" type="email" id="emailaddress" required={true} placeholder="Enter your email" />
                                    </div>

                                    <div className="form-group mb-0 text-center">
                                        <button className="btn btn-primary btn-block" type="submit"> Reset Password </button>
                                    </div>

                                </form>

                            </div>
                        </div>

                        <div className="row mt-3">
                            <div className="col-12 text-center">
                                <p className="text-white-50">Back to <Link to="/" className="text-white ml-1"><b>Log in</b></Link></p>
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

export default RecoverPassword