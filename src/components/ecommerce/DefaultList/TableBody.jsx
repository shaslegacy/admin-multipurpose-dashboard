import React from 'react'
import ActionButton from '../core/ActionButton'

const TableBody = ({dataState, sourceName, performAction}) => {
  return (
    <tbody>
        { dataState.length > 0 && dataState.map((data, index) => (
            <tr>
                <td>
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id={`customCheck${index + 2}`}/>
                        <label className="custom-control-label" for={`customCheck${index + 2}`}>&nbsp;</label>
                    </div>
                </td>
                <td>{index + 1}</td>
                <td> {data.title}</td>
                <td>
                {new Date(data.createdAt).toLocaleString('en-US', {
                    month: 'long',
                    day: '2-digit',
                    year: 'numeric'
                })}{' '}
                <small className="text-muted">
                    {new Date(data.createdAt).toLocaleString('en-US', {
                        hour: 'numeric',
                        minute: 'numeric',
                        hour12: true
                    })}
                </small>
                </td>
                <ActionButton id={data._id} sourceName={sourceName} performAction={performAction}/>
            </tr>
        ))}

        { dataState.length === 0 && <tr><td colSpan="5"><p className="text-center">No Data Found</p></td></tr>}
        
    </tbody>
  )
}

export default TableBody