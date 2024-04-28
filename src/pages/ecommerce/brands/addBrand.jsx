import React, { useEffect } from 'react'
import Bredcrumb from 'src/components/core/Bredcrumb'
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import * as yup from "yup";
import { useFormik } from "formik";
import { createBrand,
         getABrand,
         resetState,
         updateABrand, 
    } from 'src/features/brand/brandSlice';

let schema = yup.object().shape({
    title: yup.string().required("Brand Name is Required"),
    });

const AddBrand = () => {

  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const getBrandId = location.pathname.split("/")[4];
  const newBrand = useSelector((state) => state.brands);
  const {
    isSuccess,
    isError,
    isLoading,
    createdBrand,
    brandName,
    updatedBrand,
  } = newBrand;

  useEffect(() => {
    if (getBrandId !== undefined) {
      dispatch(getABrand(getBrandId));
    } else {
      dispatch(resetState());
    }
  }, [getBrandId]);

  useEffect(() => {
    if (isSuccess && createdBrand) {
      toast.success("Brand Added Successfullly!");
    }
    if (isSuccess && updatedBrand) {
      toast.success("Brand Updated Successfullly!");
      navigate("/admin/mera-bazzar/brands");
    }

    if (isError) {
      toast.error("Something Went Wrong!");
    }
  }, [isSuccess, isError, isLoading]);
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      title: brandName || "",
    },
    validationSchema: schema,
    onSubmit: (values) => {
      if (getBrandId !== undefined) {
        const data = { id: getBrandId, brandData: values };
        dispatch(updateABrand(data));
        dispatch(resetState());
      } else {
        dispatch(createBrand(values));
        formik.resetForm();
        setTimeout(() => {
          dispatch(resetState());
        }, 300);
      }
    },
  });

  return (
    <div class="content">
        <div class="container-fluid">
            
            <Bredcrumb title={`${getBrandId !== undefined ? "Edit" : "Add"} Brand`}/>

            <div class="row">
            <div class="col-lg-12">
                <div class="card">
                    <div class="card-body">
                        <form action="" onSubmit={formik.handleSubmit}>
                            <div class="form-group">
                                <label for="brandname">Brand Name <span class="text-danger">*</span></label>
                                <input
                                    type="text"
                                    id="brandname"
                                    name='title'
                                    class="form-control"
                                    placeholder="Enter Brand Name"
                                    onChange={formik.handleChange("title")}
                                    onBlur={formik.handleBlur("title")}
                                    value={formik.values.title}
                                />
                                {formik.touched.title && formik.errors.title ? (
                                    <small id="emailHelp" class="form-text text-danger">{formik.errors.title}</small>
                                ): null}
                            </div>
                            
                            <div class="col-12 text-center">
                                <button type="submit" class="btn btn-success waves-effect waves-light m-1"><i class="fe-check-circle mr-1"></i> {getBrandId !== undefined ? "Edit" : "Add"} Brand</button>
                                <button type="button" class="btn btn-light waves-effect waves-light m-1"><i class="fe-x mr-1"></i> Cancel</button>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
            </div>
            
        </div> 
    </div>
  )
}

export default AddBrand