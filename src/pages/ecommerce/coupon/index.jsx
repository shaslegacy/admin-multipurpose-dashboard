import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Link} from 'react-router-dom';
import Bredcrumb from 'src/components/core/Bredcrumb';
import SearchField from 'src/components/ecommerce/DefaultList/SearchField';
import UpButton from 'src/components/ecommerce/DefaultList/UpButton';
import Pagination from 'src/components/ecommerce/products/pagination';
import { getAllCoupon, deleteACoupon, resetState } from '../../../features/coupon/couponSlice';

const Coupons = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(resetState());
        dispatch(getAllCoupon());
    },[])

    const couponState = useSelector((state) => state.coupon.coupons);

    const deleteCoupon = (e) => {
        dispatch(deleteACoupon(e));
    
        setTimeout(() => {
          dispatch(getAllCoupon());
        }, 100);
      };

  return (
    <div className="content"> 
        <div className="container-fluid">
               
            <Bredcrumb title="Coupons"/>
            
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card-body">
                            <div className="row mb-2">
                                
                                <SearchField />
                               <UpButton buttonTitle="Coupon" route={"add-coupon"} />
                            </div>
    
                            <div className="table-responsive">
                                <table className="table table-centered table-nowrap mb-0">
                                <thead className="thead-light">
                                    <tr>
                                        <th style={{width: "20px"}}>
                                            <div className="custom-control custom-checkbox">
                                                <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                                <label className="custom-control-label" for="customCheck1">&nbsp;</label>
                                            </div>
                                        </th>
                                        <th>Sr No.</th>
                                        <th>Name</th>
                                        <th>Discount</th>
                                        <th>Expiry Date</th>
                                        <th style={{width: "125px"}}>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {couponState.length> 0 && couponState.map((data, index) => (
                                        <tr>
                                            <td>
                                                <div className="custom-control custom-checkbox">
                                                    <input type="checkbox" className="custom-control-input" id={`customCheck${index + 2}`}/>
                                                    <label className="custom-control-label" for={`customCheck${index + 2}`}>&nbsp;</label>
                                                </div>
                                            </td>
                                            <td>{index + 1}</td>
                                            <td> {data.name}</td>
                                            <td>{data.discount}</td>
                                            <td>
                                            {new Date(data.expiry).toLocaleString('en-US', {
                                                month: 'long',
                                                day: '2-digit',
                                                year: 'numeric'
                                            })}{' '}
                                            <small className="text-muted">
                                                {new Date(data.expiry).toLocaleString('en-US', {
                                                    hour: 'numeric',
                                                    minute: 'numeric',
                                                    hour12: true
                                                })}
                                            </small>
                                            </td>
                                            <td>
                                            <Link to={`/admin/mera-bazzar/edit-coupon/${data._id}`} className="action-icon"> <i className="mdi mdi-square-edit-outline"></i></Link>
                                            <Link onClick={() => deleteCoupon(data._id)} className="action-icon"> <i className="mdi mdi-delete"></i></Link>
                                        </td>
                                        </tr>
                                    ))}
                                    
                                </tbody>
                                </table>
                            </div>
                             {couponState.length === 0 && <div className="text-center">No Data Found</div>}
                            {couponState.length > 10 && <Pagination />}
                        </div> 
                    </div> 
                </div> 
            </div>
            
            
        </div> 
    </div>
  )
}

export default Coupons