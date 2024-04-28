import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import Bredcrumb from 'src/components/core/Bredcrumb';
import { getProduct } from 'src/features/product/productSlice';
import StarRating from 'src/features/product/StarRating';

const ProductDetails = () => {
    const location = useLocation();
    const productId = location.pathname.split("/")[4];
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(getProduct(productId));
    }, []);

    const sigleProductState = useSelector((state) => state.products.product);
    
  return (
    <div className="content">

                    <div className="container-fluid">
                        <Bredcrumb title={sigleProductState?.title} />     

                        <div className="row">
                            <div className="col-12">
                                <div className="card-box">
                                    <div className="row">
                                        <div className="col-lg-5">

                                            <div className="tab-content pt-0">
                                                {sigleProductState?.images?.map((image, i) => (
                                                    <div className={`tab-pane ${i === 0 ? 'active show' : ''}`} id={`product-${i+1}-item`}>
                                                    <img src={image.url} alt="" className="img-fluid mx-auto d-block rounded" />
                                                </div>
                                                ))}
                                            </div>

                                            <ul className="nav nav-pills nav-justified">
                                                {sigleProductState?.images?.map((image, i) => (
                                                    <li className="nav-item">
                                                    <a href={`#product-${i+1}-item`} data-toggle="tab" aria-expanded="false" className={`nav-link product-thumb ${i === 0 ? ' active show' : ''}`}>
                                                        <img src={image.url} alt="" className="img-fluid mx-auto d-block rounded" />
                                                    </a>
                                                </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div className="col-lg-7">
                                            <div className="pl-xl-3 mt-3 mt-xl-0">
                                                <a href="#" className="text-primary">{sigleProductState?.brand}</a>
                                                <h4 className="mb-3">{sigleProductState?.title}</h4>
                                                <p className="text-muted float-left mr-3">
                                                    <span className="mdi mdi-star text-warning"></span>
                                                    <span className="mdi mdi-star text-warning"></span>
                                                    <span className="mdi mdi-star text-warning"></span>
                                                    <span className="mdi mdi-star text-warning"></span>
                                                    <span className="mdi mdi-star"></span>
                                                </p>
                                                <p className="mb-4"><a href="#" className="text-muted">( {sigleProductState?.ratings.length} Customer Reviews )</a></p>
                                                <h6 className="text-danger text-uppercase">20 % Off</h6>
                                                <h4 className="mb-4">Price : <span className="text-muted mr-2"><del>₹{sigleProductState?.price + 10} INR</del></span> <b>₹{sigleProductState?.price} INR</b></h4>
                                                <h4><span className="badge bg-soft-success text-success mb-4">{sigleProductState?.quantity > 0 ? 'In Stock' : 'Out of Stock'}</span></h4>
                                                <p className="text-muted mb-4" dangerouslySetInnerHTML={{ __html: sigleProductState?.description }} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row mt-4">
                                        <div className="col-lg-4">
                                            <div className="border p-3 mt-4 mt-lg-0 rounded">
                                                <h4 className="header-title mb-3">Other Details</h4>

                                                <div className="table-responsive">
                                                    <table className="table mb-0">
                                                        <tbody>
                                                            <tr>
                                                                <td>Category :</td>
                                                                <td>{sigleProductState?.category}</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Color : </td>
                                                                <td>
                                                                    {sigleProductState?.color.map((color) => {return (<span key={color._id} className="badge badge-primary mr-1">{color.color}</span>)})}
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>Quantity :</td>
                                                                <td>{sigleProductState?.quantity}</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Sold : </td>
                                                                <td>{sigleProductState?.sold}</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-8">
                                            <div className="border p-3 mt-4 mt-lg-0 rounded">
                                                <h4 className="header-title mb-3">Reviews</h4>
                                                {sigleProductState?.ratings.map((rating) => (
                                                    <div className="media mb-1">
                                                        <img className="mr-2 rounded-circle" src="/assets/images/users/user-3.jpg" alt="Generic placeholder image" height="32" />
                                                        <div className="media-body">
                                                            <h5 className="mt-1">Jeremy Tomlinson 

                                                            <small className="text-muted float-right">
                                                            <StarRating rating={rating.star} />
                                                            </small></h5>
                                                            {rating.comment ? <p>{rating.comment}</p> : <p>No Comment</p>}
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>

                </div>
  )
}

export default ProductDetails