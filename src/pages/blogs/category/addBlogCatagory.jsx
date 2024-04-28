import React, { useEffect } from 'react'
import Bredcrumb from 'src/components/core/Bredcrumb'
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import * as yup from "yup";
import { useFormik } from "formik";
import { createNewblogCat, getABlogCat, resetState, updateABlogCat } from 'src/features/bcategory/bCategorySlice';

let schema = yup.object().shape({
    title: yup.string().required("Category Name is Required"),
    });

const AddBlogCatagory = () => {

  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const getBlogCatId = location.pathname.split("/")[4];
  const newBlogCategory = useSelector((state) => state.blogCategories);
  const {
    isSuccess,
    isError,
    isLoading,
    createBlogCategory,
    blogCatName,
    updatedBlogCategory,
  } = newBlogCategory;

  useEffect(() => {
    if (getBlogCatId !== undefined) {
      dispatch(getABlogCat(getBlogCatId));
    } else {
      dispatch(resetState());
    }
  }, [getBlogCatId]);

  useEffect(() => {
    if (isSuccess && createBlogCategory) {
      toast.success("Category Added Successfullly!");
    }
    if (isSuccess && updatedBlogCategory) {
      toast.success("Blog Category Updated Successfullly!");
      navigate("/admin/blog/blog-categories");
    }
    if (isError) {
      toast.error("Something Went Wrong!");
    }
  }, [isSuccess, isError, isLoading]);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      title: blogCatName || "",
    },
    validationSchema: schema,
    onSubmit: (values) => {
      const data = { id: getBlogCatId, blogCatData: values };
      if (getBlogCatId !== undefined) {
        dispatch(updateABlogCat(data));
        dispatch(resetState());
      } else {
        dispatch(createNewblogCat(values));
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
            
            <Bredcrumb title={`${getBlogCatId !== undefined ? "Edit" : "Add"} Blog Category`}/>

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
                                <button type="submit" class="btn btn-success waves-effect waves-light m-1"><i class="fe-check-circle mr-1"></i> {getBlogCatId !== undefined ? "Edit" : "Add"} Category</button>
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

export default AddBlogCatagory