import React from 'react';
import { formatDateTime } from '../../../../utils/dateTimeUtils';

const TrackOrder = ({paymentIntent, status, orderDate}) => {
    const { formattedDate, formattedTime } = formatDateTime(orderDate);

  return (
    <div className="col-lg-4">
        <div className="card">
            <div className="card-body">
                <h4 className="header-title mb-3">Track Order</h4>

                <div className="row">
                    <div className="col-lg-6">
                        <div className="mb-4">
                            <h5 className="mt-0">Order ID:</h5>
                            <p>{paymentIntent?.id}</p>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="mb-4">
                            <h5 className="mt-0">Tracking ID:</h5>
                            <p>894152012012</p>
                        </div>
                    </div>
                </div>

                <div className="track-order-list">
                    <ul className="list-unstyled">
                        <li className="completed">
                            <h5 className="mt-0 mb-1">{status}</h5>
                            <p className="text-muted">{formattedDate} <small className="text-muted">{formattedTime}</small> </p>
                        </li>
                        <li className="completed">
                            <h5 className="mt-0 mb-1">Packed</h5>
                            <p className="text-muted">April 22 2019 <small className="text-muted">12:16 AM</small></p>
                        </li>
                        <li>
                            <span className="active-dot dot"></span>
                            <h5 className="mt-0 mb-1">Shipped</h5>
                            <p className="text-muted">April 22 2019 <small className="text-muted">05:16 PM</small></p>
                        </li>
                        <li>
                            <h5 className="mt-0 mb-1"> Delivered</h5>
                            <p className="text-muted">Estimated delivery within 3 days</p>
                        </li>
                    </ul>

                    <div className="text-center mt-4">
                        <a href="#" className="btn btn-primary">Show Details</a>
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default TrackOrder