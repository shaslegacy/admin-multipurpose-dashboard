import React from "react";

const RecentProducts = () => {
  return (
    <div className="col-xl-6">
    <div className="card-box">
      <h4 className="header-title mb-3">Recent Products</h4>

      <div className="table-responsive">
        <table className="table table-centered table-hover mb-0">
          <thead>
            <tr>
              <th className="border-top-0">Product</th>
              <th className="border-top-0">Category</th>
              <th className="border-top-0">Added Date</th>
              <th className="border-top-0">Amount</th>
              <th className="border-top-0">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <img
                  src="../assets/images/products/product-1.png"
                  alt="product-pic"
                  height="36"
                />
                <span className="ml-2">Adirondack Chair</span>
              </td>
              <td>Dining Chairs</td>
              <td>27.03.2018</td>
              <td>$345.98</td>
              <td>
                <span className="badge bg-soft-success text-success">
                  Active
                </span>
              </td>
            </tr>
            <tr>
              <td>
                <img
                  src="../assets/images/products/product-2.png"
                  alt="product-pic"
                  height="36"
                />
                <span className="ml-2">Biblio Plastic Armchair</span>
              </td>
              <td>Baby Chairs</td>
              <td>28.03.2018</td>
              <td>$1,250</td>
              <td>
                <span className="badge bg-soft-success text-success">
                  Active
                </span>
              </td>
            </tr>
            <tr>
              <td>
                <img
                  src="../assets/images/products/product-3.png"
                  alt="product-pic"
                  height="36"
                />
                <span className="ml-2">Amazing Modern Chair</span>
              </td>
              <td>Plastic Armchair</td>
              <td>28.03.2018</td>
              <td>$145</td>
              <td>
                <span className="badge bg-soft-danger text-danger">
                  Deactive
                </span>
              </td>
            </tr>
            <tr>
              <td>
                <img
                  src="../assets/images/products/product-4.png"
                  alt="product-pic"
                  height="36"
                />
                <span className="ml-2">Designer Awesome Chair</span>
              </td>
              <td>Wing Chairs</td>
              <td>29.03.2018</td>
              <td>$2,005.89</td>
              <td>
                <span className="badge bg-soft-success text-success">
                  Active
                </span>
              </td>
            </tr>
            <tr>
              <td>
                <img
                  src="../assets/images/products/product-5.png"
                  alt="product-pic"
                  height="36"
                />
                <span className="ml-2">The butterfly chair</span>
              </td>
              <td>Plastic Armchair</td>
              <td>31.03.2018</td>
              <td>$24.95</td>
              <td>
                <span className="badge bg-soft-success text-success">
                  Active
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
  );
};

export default RecentProducts;
