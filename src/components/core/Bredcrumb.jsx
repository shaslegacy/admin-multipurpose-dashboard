import React from 'react';
import { admin_panel_title, app_name } from '../../utils/appSetting';
import { Link } from 'react-router-dom';

const Bredcrumb = ({title}) => {
  return (
    <div className="row">
        <div className="col-12">
            <div className="page-title-box">
                <div className="page-title-right">
                    <ol className="breadcrumb m-0">
                        <li className="breadcrumb-item"><Link to="#">{admin_panel_title}</Link></li>
                        <li className="breadcrumb-item"><Link to="#">{app_name}</Link></li>
                        <li className="breadcrumb-item active">{title}</li>
                    </ol>
                </div>
                <h4 className="page-title">{title}</h4>
            </div>
        </div>
    </div>  
  )
}

export default Bredcrumb