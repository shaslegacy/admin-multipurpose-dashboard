import React from 'react'

const TableHeader = () => {
  return (
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
            <th>Date</th>
            <th style={{width: "125px"}}>Action</th>
        </tr>
    </thead>
  )
}

export default TableHeader