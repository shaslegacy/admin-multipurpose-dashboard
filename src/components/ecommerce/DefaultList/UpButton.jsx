import React from 'react'
import { Link } from 'react-router-dom'

const UpButton = ({buttonTitle, route}) => {
  return (
    <div className="col-lg-4">
        <div className="text-lg-right">
            <Link to={`/admin/mera-bazzar/${route}`} className="btn btn-danger waves-effect waves-light mb-2 mr-2"><i className="mdi mdi-basket mr-1"></i> Add New {buttonTitle}</Link>
            <button type="button" className="btn btn-light waves-effect mb-2">Export</button>
        </div>
    </div>
  )
}

export default UpButton