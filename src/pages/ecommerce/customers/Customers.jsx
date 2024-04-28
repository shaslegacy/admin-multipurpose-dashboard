import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import PageTitle from "src/components/core/PageTitle";
import Pagination from "src/components/ecommerce/products/pagination";
import { getUsers } from "src/features/customers/customerSlice";

const Customers = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  const customerState = useSelector((state) => state.customers.customers);

  return (
    <div className="content">
      <div className="container-fluid">
        <PageTitle title="Customers" />

        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-body">
                <div className="row mb-2">
                  <div className="col-sm-4">
                    <a
                      href="javascript:void(0);"
                      className="btn btn-danger mb-2"
                    >
                      <i className="mdi mdi-plus-circle mr-2"></i> Add Customers
                    </a>
                  </div>
                  <div className="col-sm-8">
                    <div className="text-sm-right">
                      <button
                        type="button"
                        className="btn btn-success mb-2 mr-1"
                      >
                        <i className="mdi mdi-cog"></i>
                      </button>
                      <button type="button" className="btn btn-light mb-2 mr-1">
                        Import
                      </button>
                      <button type="button" className="btn btn-light mb-2">
                        Export
                      </button>
                    </div>
                  </div>
                </div>

                <div className="table-responsive">
                  <table
                    className="table table-centered table-striped dt-responsive nowrap w-100"
                    id="products-datatable"
                  >
                    <thead>
                      <tr>
                        <th style={{ width: "20px" }}>
                          <div className="custom-control custom-checkbox">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="customCheck1"
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="customCheck1"
                            >
                              &nbsp;
                            </label>
                          </div>
                        </th>
                        <th>Customer</th>
                        <th>Phone</th>
                        <th>Email</th>
                        {/* <th>Orders</th>
                                                        <th>Last Order</th> */}
                        <th>Status</th>
                        <th style={{ width: "75px" }}>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {customerState &&
                        customerState.map(
                          (customer, i) =>
                            customer.role !== "admin" && (
                              <tr key={i}>
                                <td>
                                  <div className="custom-control custom-checkbox">
                                    <input
                                      type="checkbox"
                                      className="custom-control-input"
                                      id={`customCheck${i+2}`}
                                    />
                                    <label
                                      className="custom-control-label"
                                      htmlFor={`customCheck${i+2}`}
                                    >
                                    </label>
                                  </div>
                                </td>
                                <td className="table-user">
                                  <img
                                    src="../../assets/images/users/user-4.jpg"
                                    alt="table-user"
                                    className="mr-2 rounded-circle"
                                  />
                                  <Link
                                    to="javascript:void(0);"
                                    className="text-body font-weight-semibold"
                                  >
                                    {customer.firstname +
                                      " " +
                                      customer.lastname}
                                  </Link>
                                </td>
                                <td>{customer.mobile}</td>
                                <td>{customer.email}</td>
                                {/* <td>
                                                            43
                                                        </td>
                                                        <td>
                                                            August 05 2019 <small className="text-muted">10:29 PM</small>
                                                        </td> */}
                                <td>
                                  <span
                                    className={`badge badge-soft-${
                                      customer.isBlocked ? "danger" : "success"
                                    }`}
                                  >
                                    {customer.isBlocked ? "Blocked" : "Active"}
                                  </span>
                                </td>

                                <td style={{ display: "flex" }}>
                                  <Link
                                    to="javascript:void(0);"
                                    className="action-icon"
                                  >
                                    <i className="mdi mdi-square-edit-outline"></i>
                                  </Link>
                                  <Link
                                    to="javascript:void(0);"
                                    className="action-icon"
                                  >
                                    <i className="mdi mdi-delete"></i>
                                  </Link>
                                </td>
                              </tr>
                            )
                        )}
                    </tbody>
                  </table>
                </div>
                <Pagination />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customers;
