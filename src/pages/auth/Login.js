import React, { useEffect } from 'react';
import './style.scss';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { login } from 'src/features/auth/authSlice';

let schema = yup.object().shape({
  email: yup
    .string()
    .email("Email should be valid")
    .required("Email is Required"),
  password: yup.string().required("Password is Required"),
});

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: schema,
    onSubmit: values => {
      dispatch(login(values));
    },
  });
  const authState = useSelector((state) => state);

  const { user, isError, isSuccess, isLoading, message } = authState.auth;
  useEffect(() => {
    if (user || isSuccess) {
      navigate("admin");
    } else {
      navigate("");
    }
  }, [user, isError, isSuccess, isLoading]);

  return (
    <div className='authentication-bg authentication-bg-pattern'>
         <div className="account-pages mt-5 mb-5">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8 col-lg-6 col-xl-5">
                        <div className="card bg-pattern">

                            <div className="card-body p-4">
                                
                                <div className="text-center w-75 m-auto">
                                    <div className="auth-logo">
                                        <Link to="/" className="logo logo-dark text-center">
                                            <span className="logo-lg">
                                                <img src="../assets/images/logo-dark.png" alt="" height="22" />
                                            </span>
                                        </Link>
                    
                                        <Link to="/" className="logo logo-light text-center">
                                            <span className="logo-lg">
                                                <img src="../assets/images/logo-light.png" alt="" height="22" />
                                            </span>
                                        </Link>
                                    </div>
                                    <p className="text-muted mb-4 mt-3">Enter your email address and password to access admin panel.</p>
                                </div>
                                <div className="error text-center">
                                  {message.message == "Rejected" ? "You are not an Admin" : ""}
                                </div>
                                <form onSubmit={formik.handleSubmit}>
                                  <div className="form-group mb-3">
                                    <label htmlFor="email">Email address</label>
                                    <input
                                      type="text"
                                      id="email"
                                      name="email"
                                      className={`form-control`}
                                      placeholder="Enter your email"
                                      value={formik.values.email}
                                      onChange={formik.handleChange("email")}
                                      onBlur={formik.handleBlur("email")}
                                    />
                                    {formik.touched.email && formik.errors.email ? (
                                      <div className="text-danger mt-1 error-text">{formik.errors.email}</div>
                                    ) : null}
                                  </div>

                                  <div className="form-group mb-3">
                                    <label htmlFor="password">Password</label>
                                    <input
                                      type="password"
                                      id="password"
                                      name="password"
                                      className={`form-control`}
                                      placeholder="Enter your password"
                                      value={formik.values.password}
                                      onChange={formik.handleChange("password")}
                                      onBlur={formik.handleBlur("password")}
                                    />
                                    {formik.touched.password && formik.errors.password ? (
                                      <div className="text-danger mt-1 error-text">{formik.errors.password}</div>
                                    ) : null}
                                  </div>

                                  {/* <div className="form-group mb-3">
                                    <div className="custom-control custom-checkbox">
                                      <input
                                        type="checkbox"
                                        className="custom-control-input"
                                        id="rememberMe"
                                        name="rememberMe"
                                        // checked={formData.rememberMe}
                                        // onChange={handleInputChange}
                                      />
                                      <label className="custom-control-label" htmlFor="rememberMe">
                                        Remember me
                                      </label>
                                    </div>
                                  </div> */}

                                  <div className="form-group mb-0 text-center">
                                    <button
                                      className="btn btn-primary btn-block"
                                      type="submit"
                                      disabled={isLoading}
                                    >
                                      {isLoading ? "Logging In..." : "Log In"}
                                    </button>
                                  </div>
                                </form>
                                <div className="text-center">
                                    <h5 className="mt-3 text-muted">Sign in with</h5>
                                    <ul className="social-list list-inline mt-3 mb-0">
                                        <li className="list-inline-item">
                                            <Link to="#" className="social-list-item border-primary text-primary"><i className="mdi mdi-facebook"></i></Link>
                                        </li>
                                        <li className="list-inline-item">
                                            <Link to="#" className="social-list-item border-danger text-danger"><i className="mdi mdi-google"></i></Link>
                                        </li>
                                        <li className="list-inline-item">
                                            <Link to="#" className="social-list-item border-info text-info"><i className="mdi mdi-twitter"></i></Link>
                                        </li>
                                        <li className="list-inline-item">
                                            <Link to="#" className="social-list-item border-secondary text-secondary"><i className="mdi mdi-github"></i></Link>
                                        </li>
                                    </ul>
                                </div>

                            </div>
                        </div>

                        <div className="row mt-3">
                            <div className="col-12 text-center">
                                <p> <Link to="auth-recoverpw.html" className="text-white-50 ml-1">Forgot your password?</Link></p>
                                <p className="text-white-50">Don't have an account? <Link to="auth-register.html" className="text-white ml-1"><b>Sign Up</b></Link></p>
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

export default Login