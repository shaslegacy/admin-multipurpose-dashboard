import React, { useEffect, useState } from 'react'
import Bredcrumb from 'src/components/core/Bredcrumb'
import { useFormik } from 'formik';
import { Link, useNavigate } from "react-router-dom";
import ReactQuill from 'react-quill';
import { toast } from "react-toastify";
import * as yup from 'yup';
import './styles.scss'
import 'react-quill/dist/quill.snow.css';
import SelectResource from 'src/components/core/SelectResource';
import { useDispatch, useSelector } from "react-redux";
import { getBrands } from "../../../features/brand/brandSlice";
import { getCategories } from "../../../features/pcategory/categorySlice";
import { getColors } from "../../../features/color/colorSlice";
import { delImg, uploadImg } from "../../../features/upload/uploadSlice";
import { createProducts, resetState } from "../../../features/product/productSlice";
import Dropzone from "react-dropzone";
import tags from '../../../data/tags.json';

let schema = yup.object().shape({
    title: yup.string().required("Title is Required"),
    description: yup.string().required("Description is Required"),
    price: yup.number().required("Price is Required"),
    brand: yup.string().required("Brand is Required"),
    category: yup.string().required("Category is Required"),
    tags: yup.string().required("Tag is Required"),
    color: yup
      .array()
      .min(1, "Pick at least one color")
      .required("Color is Required"),
    quantity: yup.number().required("Quantity is Required"),
  });

const AddProduct = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [color, setColor] = useState([]);
    const [images, setImages] = useState([]);
    useEffect(() => {
        dispatch(getBrands());
        dispatch(getCategories());
        dispatch(getColors());
      }, []);

      const brandState = useSelector((state) => state.brands.brands);
      const catState = useSelector((state) => state.categories.categories);
      const colorState = useSelector((state) => state.colors.colors);
      const imgState = useSelector((state) => state.upload.images);
      const newProduct = useSelector((state) => state.products);
      const { isSuccess, isError, isLoading, createdProduct } = newProduct;

        useEffect(() => {
            if (isSuccess && createdProduct) {
            toast.success("Product Added Successfullly!");
            }
            if (isError) {
            toast.error("Something Went Wrong!");
            }
        }, [isSuccess, isError, isLoading]);

        const coloropt = [];
        colorState.forEach((i) => {
            coloropt.push({
            label: i.title,
            value: i._id,
            });
        });

        const img = [];
        imgState.forEach((i) => {
            img.push({
            public_id: i.public_id,
            url: i.url,
            });
        });

        useEffect(() => {
            formik.values.color = color ? color : " ";
            formik.values.images = img;
        }, [color, img]);

    const formik = useFormik({
        initialValues: {
          title: "",
          description: "",
          price: "",
          brand: "",
          category: "",
          tags: "",
          color: "",
          quantity: "",
          images: "",
        },
        validationSchema: schema,
        onSubmit: (values) => {
          dispatch(createProducts(values));
          formik.resetForm();
          setColor(null);
          setTimeout(() => {
            dispatch(resetState());
          }, 3000);
        },
      });
      const handleColors = (e) => {
        const selectedOptions = Array.from(e.target.selectedOptions).map(option => ({
            _id: option.value,
            color: option.text,
        }));
        setColor(selectedOptions);
        console.log(color);
      };
  return (
    <div className="content">
        <div className="container-fluid">     
            
            <Bredcrumb title="Add Product" />

            <form onSubmit={formik.handleSubmit}>
                <div className="row">
                    <div className="col-lg-6">
                        <div className="card-box">
                            <h5 className="text-uppercase bg-light p-2 mt-0 mb-3">General</h5>

                            <div className="form-group mb-3">
                                <label htmlFor="product-name">Product Name <span className="text-danger">*</span></label>
                                <input type="text"
                                    id="product-name"
                                    className="form-control"
                                    name='title'
                                    placeholder="e.g : Apple iMac"
                                    onChange={formik.handleChange("title")}
                                    onBlur={formik.handleBlur("title")}
                                    value={formik.values.title}
                                     />
                                    {formik.touched.title && formik.errors.title ? (
                                      <div className="text-danger mt-1 error-text">{formik.errors.title}</div>
                                    ) : null}
                            </div>

                            <div className="form-group mb-3">
                                <label htmlFor="product-description">Product Description <span className="text-danger">*</span></label>
                                <ReactQuill 
                                 theme="snow"
                                 id="product-description" 
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
                                 title="Brand"
                                  name="brand"
                                  id ="product-brand"
                                  onChnge={formik.handleChange("brand")}
                                  onBlr={formik.handleBlur("brand")}
                                  val={formik.values.brand}
                                  data={brandState}
                                   />
                                    <div className="text-danger mt-1 error-text">{formik.touched.brand && formik.errors.brand}</div>
                            </div>

                            <div className="form-group mb-3">
                                <SelectResource
                                 title="Category"
                                  name="category"
                                  id ="product-category"
                                  onChnge={formik.handleChange("category")}
                                  onBlr={formik.handleBlur("category")}
                                  val={formik.values.category}
                                  data={catState}
                                   />
                                    <div className="text-danger mt-1 error-text">{formik.touched.category && formik.errors.category }</div>
                            </div>

                            <div className="form-group mb-3">
                                <label htmlFor="product-price">Price <span className="text-danger">*</span></label>
                                <input
                                 type="text"
                                 className="form-control"
                                 id="product-price"
                                 name='price'
                                 onChange={formik.handleChange("price")}
                                 onBlur={formik.handleBlur("price")}
                                 value={formik.values.price}
                                 placeholder="Enter amount" />
                                {formik.touched.price && formik.errors.price ? (
                                      <div className="text-danger mt-1 error-text">{formik.errors.price}</div>
                                ): null}
                            </div>

                            <div className="form-group mb-3">
                            <label htmlFor="product-color">Colors <span className="text-danger">*</span></label>
                                <select
                                className="form-control"
                                name="color"
                                id="product-color"
                                multiple = "multiple"
                                onChange={(e) => handleColors(e)}
                                value={color.map(c => c._id)}
                                >
                                    <option>Select</option>
                                    {coloropt && coloropt.map((item, index) => (
                                        <option key={index} value={item.value}>{item.label}</option>
                                    ))}
                                </select>
                                    <div className="text-danger mt-1 error-text">{formik.touched.color && formik.errors.color}</div>
                            </div>

                            <div className="form-group mb-3">
                                <label htmlFor="product-quantity">Quantity <span className="text-danger">*</span></label>
                                <input 
                                 type="number"
                                 className="form-control"
                                 id="product-quantity"
                                 placeholder="Enter quantity"
                                 name='quantity'
                                 onChange={formik.handleChange("quantity")}
                                 onBlur={formik.handleBlur("quantity")}
                                 value={formik.values.quantity}
                                  />
                                  {formik.touched.quantity && formik.errors.quantity ? (
                                    <div className="text-danger mt-1 error-text">{formik.errors.quantity}</div>
                                  ): null}
                            </div>
                        </div> 
                    </div> 

                    <div className="col-lg-6">
                        <div className="card-box">
                            <h5 className="text-uppercase mt-0 mb-3 bg-light p-2">Product Images</h5>
                            
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
                        <div className="card-box">
                            <h5 className="text-uppercase mt-0 mb-3 bg-light p-2">Other Information</h5>

                            <div className="form-group mb-0">
                                <SelectResource 
                                title="Tags" 
                                name="tags" 
                                id ="product-tags"
                                onChnge={formik.handleChange("tags")}
                                onBlr={formik.handleBlur("tags")}
                                val={formik.values.tags}
                                data={tags}
                                 />
                                    <div className="text-danger mt-1 error-text">{formik.touched.tags && formik.errors.tags}</div>
                            </div>
                        </div> 

                    </div> 
                </div>
                

                <div className="row">
                    <div className="col-12">
                        <div className="text-center mb-3">
                            <button type="button" className="btn w-sm btn-light waves-effect m-1">Cancel</button>
                            <button type="submit" className="btn w-sm btn-success waves-effect waves-light m-1">Save</button>
                            <button type="button" className="btn w-sm btn-danger waves-effect waves-light">Delete</button>
                        </div>
                    </div> 
                </div>

            </form>
            
        </div> 
    </div>
  )
}

export default AddProduct