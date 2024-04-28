import React, { useEffect } from 'react'
import Bredcrumb from 'src/components/core/Bredcrumb'
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import * as yup from "yup";
import { useFormik } from "formik";
import { createColor,
        getAColor,
        resetState,
        updateAColor
      } from 'src/features/color/colorSlice';

let schema = yup.object().shape({
    title: yup.string().required("Color Name is Required"),
    });

const AddColor = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const getColorId = location.pathname.split("/")[4];
  const newColor = useSelector((state) => state.colors);
  const {
    isSuccess,
    isError,
    isLoading,
    createdColor,
    updatedColor,
    colorName,
  } = newColor;

  useEffect(() => {
    if (getColorId !== undefined) {
      dispatch(getAColor(getColorId));
    } else {
      dispatch(resetState());
    }
  }, [getColorId]);

  useEffect(() => {
    if (isSuccess && createdColor) {
      toast.success("Color Added Successfully!");
    }
    if (isSuccess && updatedColor) {
      toast.success("Color Updated Successfullly!");
      navigate("/admin/mera-bazzar/colors");
    }
    if (isError) {
      toast.error("Something Went Wrong!");
    }
  }, [isSuccess, isError, isLoading]);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      title: colorName || "",
    },
    validationSchema: schema,
    onSubmit: (values) => {
      if (getColorId !== undefined) {
        const data = { id: getColorId, colorData: values };
        dispatch(updateAColor(data));
        dispatch(resetState());
      } else {
        dispatch(createColor(values));
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
            
            <Bredcrumb title={`${getColorId !== undefined ? "Edit" : "Add"} Color`}/>

            <div class="row">
            <div class="col-lg-12">
                <div class="card">
                    <div class="card-body">
                        <form action="" onSubmit={formik.handleSubmit}>
                            <div class="form-group">
                                <label for="colorName">Color Name <span class="text-danger">*</span></label>
                                <input
                                    type="text"
                                    id="colorName"
                                    name='title'
                                    class="form-control"
                                    placeholder="Enter Color Name"
                                    onChange={formik.handleChange("title")}
                                    onBlur={formik.handleBlur("title")}
                                    value={formik.values.title}
                                />
                                {formik.touched.title && formik.errors.title ? (
                                    <small id="emailHelp" class="form-text text-danger">{formik.errors.title}</small>
                                ): null}
                            </div>
                            
                            <div class="col-12 text-center">
                                <button type="submit" class="btn btn-success waves-effect waves-light m-1"><i class="fe-check-circle mr-1"></i> {getColorId !== undefined ? "Edit" : "Add"} Color</button>
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

export default AddColor