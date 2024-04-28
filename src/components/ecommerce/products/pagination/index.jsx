import React from 'react'

const Pagination = () => {
  return (
        <ul className="pagination pagination-rounded justify-content-end my-2">
            <li className="page-item">
                <a className="page-link" href="javascript: void(0);" aria-label="Previous">
                    <span aria-hidden="true">«</span>
                    <span className="sr-only">Previous</span>
                </a>
            </li>
            <li className="page-item active"><a className="page-link" href="javascript: void(0);">1</a></li>
            <li className="page-item"><a className="page-link" href="javascript: void(0);">2</a></li>
            <li className="page-item"><a className="page-link" href="javascript: void(0);">3</a></li>
            <li className="page-item"><a className="page-link" href="javascript: void(0);">4</a></li>
            <li className="page-item"><a className="page-link" href="javascript: void(0);">5</a></li>
            <li className="page-item">
                <a className="page-link" href="javascript: void(0);" aria-label="Next">
                    <span aria-hidden="true">»</span>
                    <span className="sr-only">Next</span>
                </a>
            </li>
        </ul>
  )
}

export default Pagination