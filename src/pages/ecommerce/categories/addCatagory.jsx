import React, { useEffect } from 'react'
import Bredcrumb from 'src/components/core/Bredcrumb'
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import * as yup from "yup";
import { useFormik } from "formik";
import { createCategory, getAProductCategory, resetState, updateAProductCategory } from 'src/features/pcategory/categorySlice';

let schema = yup.object().shape({
    title: yup.string().required("Category Name is Required"),
    });

const AddCatagory = () => {

  const dispatch = useDispatch();
  const location = useLocation();
  const getPCatId = location.pathname.split("/")[4];
  console.log(location.pathname);
  const navigate = useNavigate();
  const newCategory = useSelector((state) => state.categories);
  const {
    isSuccess,
    isError,
    isLoading,
    createdCategory,
    categoryName,
    updatedCategory,
  } = newCategory;

  useEffect(() => {
    if (getPCatId !== undefined) {
      dispatch(getAProductCategory(getPCatId));
    } else {
      dispatch(resetState());
    }
  }, [getPCatId]);

  useEffect(() => {
    if (isSuccess && createdCategory) {
      toast.success("Category Added Successfully!");
    }
    if (isSuccess && updatedCategory) {
      toast.success("Category Updated Successfullly!");
      navigate("/admin/mera-bazzar/categories");
    }
    if (isError) {
      toast.error("Something Went Wrong!");
    }
  }, [isSuccess, isError, isLoading]);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      title: categoryName || "",
    },
    validationSchema: schema,
    onSubmit: (values) => {
      if (getPCatId !== undefined) {
        const data = { id: getPCatId, pCatData: values };
        dispatch(updateAProductCategory(data));
        dispatch(resetState());
      } else {
        dispatch(createCategory(values));
        formik.resetForm();
        setTimeout(() => {
          dispatch(resetState());
        }, 300);
      }
    }
  })

  return (
    <div class="content">
        <div class="container-fluid">
            
            <Bredcrumb title={`${getPCatId !== undefined ? "Edit" : "Add"} Category`}/>

            <div class="row">
            <div class="col-lg-12">
                <div class="card">
                    <div class="card-body">
                        <form action="" onSubmit={formik.handleSubmit}>
                            <div class="form-group">
                                <label for="catName">Category Name <span class="text-danger">*</span></label>
                                <input
                                    type="text"
                                    id="catName"
                                    name='title'
                                    class="form-control"
                                    placeholder="Enter Category Name"
                                    onChange={formik.handleChange("title")}
                                    onBlur={formik.handleBlur("title")}
                                    value={formik.values.title}
                                />
                                {formik.touched.title && formik.errors.title ? (
                                    <small id="emailHelp" class="form-text text-danger">{formik.errors.title}</small>
                                ): null}
                            </div>
                            
                            <div class="col-12 text-center">
                                <button type="submit" class="btn btn-success waves-effect waves-light m-1"><i class="fe-check-circle mr-1"></i> {getPCatId !== undefined ? "Edit" : "Add"} Category</button>
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

export default AddCatagory