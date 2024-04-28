import React, { useEffect, useState } from 'react'
import Bredcrumb from 'src/components/core/Bredcrumb'
import { useFormik } from 'formik';
import { Link, useNavigate, useLocation } from "react-router-dom";
import ReactQuill from 'react-quill';
import { toast } from "react-toastify";
import * as yup from 'yup';
import './styles.scss'
import 'react-quill/dist/quill.snow.css';
import SelectResource from 'src/components/core/SelectResource';
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../features/bcategory/bCategorySlice";
import { delImg, uploadImg } from "../../features/upload/uploadSlice";
import Dropzone from "react-dropzone";
import { createBlogs, getABlog, resetState, updateABlog } from '../../features/blog/blogSlice';

let schema = yup.object().shape({
    title: yup.string().required("Title is Required"),
    description: yup.string().required("Description is Required"),
    category: yup.string().required("Category is Required"),
  });

const AddBlog = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const getBlogId = location.pathname.split("/")[4];
      const catState = useSelector((state) => state.blogCategories.categories);
      const imgState = useSelector((state) => state.upload.images);
      const newBlog = useSelector((state) => state.blogs);
      const { isSuccess,
        isError,
        isLoading,
        createdBlog,
        blogName,
        blogDesc,
        blogCategory,
        blogImages,
        updatedBlog,
     } = newBlog;

     useEffect(() => {
        if (getBlogId !== undefined) {
          dispatch(getABlog(getBlogId));
          img.push(blogImages);
        } else {
          dispatch(resetState());
        }
      }, [getBlogId]);
    
      useEffect(() => {
        dispatch(resetState());
        dispatch(getCategories());
      }, []);
    
      useEffect(() => {
        if (isSuccess && createdBlog) {
          toast.success("Blog Added Successfully!");
        }
        if (isSuccess && updatedBlog) {
          toast.success("Blog Updated Successfully!");
          navigate("/admin/blogs");
        }
        if (isError) {
          toast.error("Something Went Wrong!");
        }
      }, [isSuccess, isError, isLoading]);
    
      const img = [];
      imgState.forEach((i) => {
        img.push({
          public_id: i.public_id,
          url: i.url,
        });
      });

      useEffect(() => {
        formik.values.images = img;
      }, [blogImages]);
    
      const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
          title: blogName || "",
          description: blogDesc || "",
          category: blogCategory || "",
          images: "",
        },
        validationSchema: schema,
        onSubmit: (values) => {
          if (getBlogId !== undefined) {
            const data = { id: getBlogId, blogData: values };
            dispatch(updateABlog(data));
            dispatch(resetState());
          } else {
            dispatch(createBlogs(values));
            formik.resetForm();
            setTimeout(() => {
              dispatch(resetState());
            }, 300);
          }
        },
      });
  return (
    <div className="content">
        <div className="container-fluid">     
            
            <Bredcrumb title={getBlogId !== undefined ? "Edit" : "Add"} />

            <form onSubmit={formik.handleSubmit}>
                <div className="row">
                    <div className="col-lg-6">
                        <div className="card-box">
                            <h5 className="text-uppercase bg-light p-2 mt-0 mb-3">General</h5>

                            <div className="form-group mb-3">
                                <label htmlFor="blog-title">Title <span className="text-danger">*</span></label>
                                <input type="text"
                                    id="blog-title"
                                    className="form-control"
                                    name='title'
                                    placeholder="Enter blog title"
                                    onChange={formik.handleChange("title")}
                                    onBlur={formik.handleBlur("title")}
                                    value={formik.values.title}
                                     />
                                    {formik.touched.title && formik.errors.title ? (
                                      <div className="text-danger mt-1 error-text">{formik.errors.title}</div>
                                    ) : null}
                            </div>

                            <div className="form-group mb-3">
                                <label htmlFor="blog-description">Blog Description <span className="text-danger">*</span></label>
                                <ReactQuill 
                                 theme="snow"
                                 id="blog-description" 
                                 rows="5" 
                                 name='description'
                                 placeholder="Please enter description"
                                 onChange={formik.handleChange("description")}
                                 value={formik.values.description}
                                  />
                                {formik.touched.description && formik.errors.description ? (
                                      <div className="text-danger mt-1 error-text">{formik.errors.description}</div>
                                    ) : null}
                            </div>

                            <div className="form-group mb-3">
                                <SelectResource
                                 title="Category"
                                  name="category"
                                  id ="blog-category"
                                  onChnge={formik.handleChange("category")}
                                  onBlr={formik.handleBlur("category")}
                                  val={formik.values.category}
                                  data={catState}
                                   />
                                    <div className="text-danger mt-1 error-text">{formik.touched.category && formik.errors.category }</div>
                            </div>
                        </div> 
                    </div> 

                    <div className="col-lg-6">
                        <div className="card-box">
                            <h5 className="text-uppercase mt-0 mb-3 bg-light p-2">Blog Images</h5>
                            
                            <Dropzone onDrop={(acceptedFiles) => dispatch(uploadImg(acceptedFiles))}>
                                {({getRootProps, getInputProps}) => (
                                    <section className="dropzone dz-clickable">
                                    <div {...getRootProps()} className="dz-message needsclick">
                                    <i className="h1 text-muted dripicons-cloud-upload"></i>
                                        <input {...getInputProps()} />
                                        <h3>Drop files here or click to upload.</h3>
                                    </div>
                                    </section>
                                )}
                            </Dropzone>
                            <div className="dropzone-previews mt-3" id="file-previews">
                                {imgState && imgState.map((img, index) => (
                                    <div key={index} className="card mt-1 mb-0 shadow-none border dz-processing dz-image-preview dz-error dz-complete">
                                    <div className="p-2">
                                        <div className="row align-items-center">
                                            <div className="col-auto">
                                            <img src={img.url} className="avatar-sm rounded bg-light" alt={img.public_id} />
                                            </div>
                                            <div className="col pl-0">
                                                <Link href="javascript:void(0);" className="text-muted font-weight-bold" data-dz-name="">{img.asset_id}</Link>
                                                <p className="mb-0" data-dz-size=""><strong>80.7</strong> KB</p>
                                            </div>
                                            <div className="col-auto">
                                                <Link onClick={() => dispatch(delImg(img.public_id))} className="btn btn-link btn-lg text-muted" data-dz-remove="">
                                                    <i className="dripicons-cross"></i>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                ))}

                            </div>
                        </div>

                    </div> 
                </div>
                

                <div className="row">
                    <div className="col-12">
                        <div className="text-center mb-3">
                            <button type="button" className="btn w-sm btn-light waves-effect btn-sm m-1">Cancel</button>
                            <button type="submit" className="btn btn-sm btn-success waves-effect waves-light m-1 w-sm"><i className='mdi mdi-send-outline mr-1'></i>{getBlogId !== undefined ? "Edit" : "Post"} Blog</button>
                            <button type="button" className="btn w-sm btn-danger waves-effect waves-light btn-sm">Delete</button>
                        </div>
                    </div> 
                </div>

            </form>
            
        </div> 
    </div>
  )
}

export default AddBlog