import React from "react";

const TransactionHistory = () => {
  return (
    <div className="col-xl-6">
      <div className="card-box">
        <h4 className="header-title mb-3">Transaction History</h4>

        <div className="table-responsive">
          <table className="table table-centered table-hover mb-0">
            <thead>
              <tr>
                <th className="border-top-0">Name</th>
                <th className="border-top-0">Card</th>
                <th className="border-top-0">Date</th>
                <th className="border-top-0">Amount</th>
                <th className="border-top-0">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <img
                    src="../assets/images/users/user-2.jpg"
                    alt="user-pic"
                    className="rounded-circle avatar-sm bx-shadow-lg"
                  />
                  <span className="ml-2">Imelda J. Stanberry</span>
                </td>
                <td>
                  <img
                    src="../assets/images/cards/visa.png"
                    alt="user-card"
                    height="24"
                  />
                  <span className="ml-2">**** 3256</span>
                </td>
                <td>27.03.2018</td>
                <td>$345.98</td>
                <td>
                  <span className="badge badge-pill badge-danger">Failed</span>
                </td>
              </tr>
              <tr>
                <td>
                  <img
                    src="../assets/images/users/user-3.jpg"
                    alt="user-pic"
                    className="rounded-circle avatar-sm bx-shadow-lg"
                  />
                  <span className="ml-2">Francisca S. Lobb</span>
                </td>
                <td>
                  <img
                    src="../assets/images/cards/master.png"
                    alt="user-card"
                    height="24"
                  />
                  <span className="ml-2">**** 8451</span>
                </td>
                <td>28.03.2018</td>
                <td>$1,250</td>
                <td>
                  <span className="badge badge-pill badge-success">Paid</span>
                </td>
              </tr>
              <tr>
                <td>
                  <img
                    src="../assets/images/users/user-1.jpg"
                    alt="user-pic"
                    className="rounded-circle avatar-sm bx-shadow-lg"
                  />
                  <span className="ml-2">James A. Wert</span>
                </td>
                <td>
                  <img
                    src="../assets/images/cards/amazon.png"
                    alt="user-card"
                    height="24"
                  />
                  <span className="ml-2">**** 2258</span>
                </td>
                <td>28.03.2018</td>
                <td>$145</td>
                <td>
                  <span className="badge badge-pill badge-success">Paid</span>
                </td>
              </tr>
              <tr>
                <td>
                  <img
                    src="../assets/images/users/user-4.jpg"
                    alt="user-pic"
                    className="rounded-circle avatar-sm bx-shadow-lg"
                  />
                  <span className="ml-2">Dolores J. Pooley</span>
                </td>
                <td>
                  <img
                    src="../assets/images/cards/american-express.png"
                    alt="user-card"
                    height="24"
                  />
                  <span className="ml-2">**** 6950</span>
                </td>
                <td>29.03.2018</td>
                <td>$2,005.89</td>
                <td>
                  <span className="badge badge-pill badge-danger">Failed</span>
                </td>
              </tr>
              <tr>
                <td>
                  <img
                    src="../assets/images/users/user-5.jpg"
                    alt="user-pic"
                    className="rounded-circle avatar-sm bx-shadow-lg"
                  />
                  <span className="ml-2">Karen I. McCluskey</span>
                </td>
                <td>
                  <img
                    src="../assets/images/cards/discover.png"
                    alt="user-card"
                    height="24"
                  />
                  <span className="ml-2">**** 0021</span>
                </td>
                <td>31.03.2018</td>
                <td>$24.95</td>
                <td>
                  <span className="badge badge-pill badge-success">Paid</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TransactionHistory;
