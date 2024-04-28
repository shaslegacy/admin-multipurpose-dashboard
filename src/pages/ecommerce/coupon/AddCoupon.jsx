import { React, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import * as yup from "yup";
import { useFormik } from "formik";
import {
  createCoupon,
  getACoupon,
  resetState,
  updateACoupon,
} from "../../../features/coupon/couponSlice";
import Bredcrumb from "src/components/core/Bredcrumb";

let schema = yup.object().shape({
  name: yup.string().required("Coupon Name is Required"),
  expiry: yup.date().required("Expiry Date is Required"),
  discount: yup.number().required("Discount Percentage is Required"),
});

const AddCoupon = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const getCouponId = location.pathname.split("/")[4];
  const newCoupon = useSelector((state) => state.coupon);
 
  const {
    isSuccess,
    isError,
    isLoading,
    createdCoupon,
    couponName,
    couponDiscount,
    couponExpiry,
    updatedCoupon,
  } = newCoupon;

  useEffect(() => {
    if (getCouponId !== undefined) {
      dispatch(getACoupon(getCouponId));
    } else {
      dispatch(resetState());
    }
  }, [getCouponId]);

  useEffect(() => {
    if (isSuccess && createdCoupon) {
      toast.success("Coupon Added Successfullly!");
    }
    if (isSuccess && updatedCoupon) {
      toast.success("Coupon Updated Successfully!");
      navigate("/admin/mera-bazzar/coupons");
    }
    if (isError && couponName && couponDiscount && couponExpiry) {
      toast.error("Something Went Wrong!");
    }
  }, [isSuccess, isError, isLoading]);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      name: couponName || "",
      expiry: couponExpiry ? couponExpiry.split('T')[0] : "",
      discount: couponDiscount || "",
    },
    validationSchema: schema,
    onSubmit: (values) => {
      if (getCouponId !== undefined) {
        const data = { id: getCouponId, couponData: values };
        dispatch(updateACoupon(data));
        dispatch(resetState());
      } else {
        dispatch(createCoupon(values));
        formik.resetForm();
        setTimeout(() => {
          dispatch(resetState);
        }, 300);
      }
    },
  });

  return (
    <div className="content">
        <div className="container-fluid">     
            <Bredcrumb title={`${getCouponId !== undefined ? "Edit" : "Add"} Coupon`} />

            <form onSubmit={formik.handleSubmit}>
                <div className="row">
                    <div className="col-lg-6">
                        <div className="card-box">
                            <div className="form-group mb-3">
                                <label htmlFor="name">Name <span className="text-danger">*</span></label>
                                <input type="text"
                                    id="name"
                                    className="form-control"
                                    name='name'
                                    placeholder="Name"
                                    onChange={formik.handleChange("name")}
                                    onBlur={formik.handleBlur("name")}
                                    value={formik.values.name}
                                />
                                {formik.touched.name && formik.errors.name ? (
                                    <div className="text-danger mt-1 error-text">{formik.errors.name}</div>
                                ) : null}
                            </div>

                            <div className="form-group mb-3">
                                <label htmlFor="expiry">Expiry Date <span className="text-danger">*</span></label>
                                <input type="date"
                                    id="expiry"
                                    className="form-control"
                                    name='expiry'
                                    placeholder="Expiry Date"
                                    onChange={formik.handleChange("expiry")}
                                    onBlur={formik.handleBlur("expiry")}
                                    value={formik.values.expiry || ''} // Ensure it's not undefined
                                />
                                {formik.touched.expiry && formik.errors.expiry ? (
                                    <div className="text-danger mt-1 error-text">{formik.errors.expiry}</div>
                                ) : null}
                            </div>
                            
                            <div className="form-group mb-3">
                                <label htmlFor="discount">Discount <span className="text-danger">*</span></label>
                                <input type="number"
                                    id="discount"
                                    className="form-control"
                                    name='discount'
                                    placeholder="Specify Discount"
                                    onChange={formik.handleChange("discount")}
                                    onBlur={formik.handleBlur("discount")}
                                    value={formik.values.discount}
                                />
                                {formik.touched.discount && formik.errors.discount ? (
                                    <div className="text-danger mt-1 error-text">{formik.errors.discount}</div>
                                ) : null}
                            </div>
                        </div> 
                    </div> 
                </div>

                <div className="row">
                    <div className="col-12">
                        <div className="text-center mb-3">
                            <button type="button" className="btn w-sm btn-light waves-effect btn-sm m-1">Cancel</button>
                            <button type="submit" className="btn btn-sm btn-success waves-effect waves-light m-1 w-sm">{getCouponId !== undefined ? "Edit" : "Add"} Coupon</button>
                            <button type="button" className="btn w-sm btn-danger waves-effect waves-light btn-sm">Delete</button>
                        </div>
                    </div> 
                </div>
            </form>
        </div> 
    </div>
  )
}

export default AddCoupon;
