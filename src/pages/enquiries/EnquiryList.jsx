import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Bredcrumb from 'src/components/core/Bredcrumb'
import ActionButton from 'src/components/ecommerce/core/ActionButton'
import Pagination from 'src/components/ecommerce/products/pagination'
import { getEnquiries, resetState, deleteEnquiry, udpateEnquiry, getEnquiry } from 'src/features/enquiry/enquirySlice'
import { useDispatch, useSelector } from 'react-redux'

const EnquiryList = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(resetState());
        dispatch(getEnquiries());
    }, []);

    const enquiryState = useSelector((state) => state.enquiries.enquiries);

  return (
    <div className="content">
        <div className="container-fluid">
            
            <Bredcrumb title="Enquiries"/>

            <div className="row">
                <div className="col-lg-8">
                    <div className="card">
                        <div className="card-body">
                            <div className="row mb-2">
                                <div className="col-sm-4">
                                    <form className="form-inline">
                                        <div className="form-group mb-2">
                                            <label for="inputPassword2" className="sr-only">Search</label>
                                            <input type="search" className="form-control" id="inputPassword2" placeholder="Search..." />
                                        </div>
                                    </form>
                                </div>
                                <div className="col-sm-8">
                                    <div className="text-sm-right">
                                        <button type="button" className="btn btn-success waves-effect waves-light mb-2 mr-1"><i className="mdi mdi-cog"></i></button>
                                        <button type="button" className="btn btn-danger waves-effect waves-light mb-2" data-toggle="modal" data-target="#custom-modal">Add Enquiry</button>
                                    </div>
                                </div>
                            </div>
    
                            <div className="table-responsive">
                                <table className="table table-centered table-nowrap table-hover mb-0">
                                    <thead>
                                        <tr>
                                            <th>Basic Info</th>
                                            <th>Phone</th>
                                            <th>Email</th>
                                            <th>Status</th>
                                            <th style={{width: "82px"}}>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {enquiryState.map((enquiry) => (
                                             <tr>
                                             <td className="table-user">
                                                 <img src="../assets/images/users/user-4.jpg" alt="table-user" className="mr-2 rounded-circle" />
                                                 <Link to="javascript:void(0);" className="text-body font-weight-semibold">{enquiry.name}</Link>
                                             </td>
                                             <td>
                                                 {enquiry.mobile}
                                             </td>
                                             <td>
                                                 {enquiry.email}
                                             </td>
                                             <td>
                                                 {enquiry.status}
                                             </td>
                                             <ActionButton/>
                                         </tr>
                                        ))}

                                    </tbody>
                                </table>
                            </div>

                            <Pagination/>

                        </div>
                    </div>
                </div>

                <div className="col-lg-4">
                    <div className="card-box">
                        <div className="media mb-3">
                            <img className="d-flex mr-3 rounded-circle avatar-lg" src="../assets/images/users/user-8.jpg" alt="Generic placeholder" />
                            <div className="media-body">
                                <h4 className="mt-0 mb-1">Jade M. Walker</h4>
                                <p className="text-muted">Branch manager</p>
                                <p className="text-muted"><i className="mdi mdi-office-building"></i> Vine Corporation</p>

                                <Link to="javascript: void(0);" className="btn- btn-xs btn-info mr-1">Send Email</Link>
                                <Link to="javascript: void(0);" className="btn- btn-xs btn-secondary mr-1">Call</Link>
                                <Link to="javascript: void(0);" className="btn- btn-xs btn-secondary">Edit</Link>
                            </div>
                        </div>

                        <div className="mb-3 mt-4 bg-light p-2">
                            <h4 className="font-13 text-muted text-uppercase">Comments :</h4>
                            <p className="mb-3">
                                Hi I'm Johnathn Deo,has been the industry's standard dummy text ever since the
                                1500s, when an unknown printer took a galley of type.
                            </p>
                        </div>

                    </div>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default EnquiryList