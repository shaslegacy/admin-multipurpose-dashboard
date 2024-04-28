import React from 'react';
import {Link} from 'react-router-dom';
import './styles.scss';

const ProductList = ({product}) => {
  return (
    <div className="card-box product-box">
        <div className="product-action">
            <Link href="javascript: void(0);" className="btn btn-success btn-xs waves-effect waves-light m-1"><i className="mdi mdi-pencil"></i></Link>
            <Link href="javascript: void(0);" className="btn btn-danger btn-xs waves-effect waves-light"><i className="mdi mdi-close"></i></Link>
        </div>

        <div className="bg-light">
            <img src={product.images[0]?.url ? product.images[0].url:'../../../assets/images/no-image.jpeg' } alt="product-pic" className="img-fluid" style={{height: "221px"}}/>
        </div>

        <div className="product-info">
            <div className="row align-items-center">
                <div className="col">
                    <h5 className="font-16 mt-0 sp-line-1"><Link to={`./../product/${product._id}`} className="text-dark">{product.title}</Link> </h5>
                    <div className="text-warning mb-2 font-13">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                    </div>
                    <h5 className="m-0"> <span className="text-muted"> Stocks : {product.quantity} pcs</span></h5>
                </div>
                <div className="col-auto">
                    <div className="product-price-tag">
                      ₹{product.price}
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProductList