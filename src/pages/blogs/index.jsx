import React, { useEffect } from 'react'
import Bredcrumb from 'src/components/core/Bredcrumb';
import { getBlogs, resetState, deleteABlog } from 'src/features/blog/blogSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import TimeConverter from 'src/components/core/TimeConverter';
import { toast } from "react-toastify";

const BlogList = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(resetState());
        dispatch(getBlogs());
    }, []);

    const blogState = useSelector((state) => state.blogs.blogs);


    const deleteBlog = (e) => {
        dispatch(deleteABlog(e));
        setTimeout(() => {
          toast.success("Blog Deleted Successfully!");
          dispatch(getBlogs());
        }, 100);
      };
  return (
    <div className="content">
        <div className="container-fluid">
            <Bredcrumb title="Blog"/>

            <div className="row">

                <div className="col-xl-12 col-lg-12 order-lg-2 order-xl-1">
                    <div className="card">
                        <div className="card-body p-0">
                            <ul className="nav nav-tabs nav-bordered">
                                <li className="nav-item">
                                    <Link to="/admin/blog/create-blog" className="btn btn-danger btn-sm waves-effect waves-light mb-2 mr-0 text-white ">
                                        <span className="d-none d-md-block">Create Post</span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    

                    {blogState.map((blog) => (
                        <div className="card-box">
                            <div className="media">
                                <img className="mr-2 avatar-sm rounded-circle" src="../../assets/images/users/user-3.jpg"
                                    alt="author" />
                                <div className="media-body">
                                    <div className="dropdown float-right text-muted">
                                        <a href="#" className="dropdown-toggle text-muted font-18" data-toggle="dropdown" aria-expanded="false">
                                            <i className="mdi mdi-dots-horizontal"></i>
                                        </a>
                                        <div className="dropdown-menu dropdown-menu-right">
                                            
                                            <Link to={`/admin/blog/edit-blog/${blog._id}`} className="dropdown-item">Edit</Link>
                                            
                                            <Link onClick={() => deleteBlog(blog._id)} className="dropdown-item">Delete</Link>
                                        </div>
                                    </div>
                                    <h5 className="m-0"><a href="contacts-profile.html" className="text-reset">{blog.title}</a></h5>
                                    <span className='badge badge-soft-success'> {blog.category}</span>
                                    <p className="text-muted"><small><TimeConverter createdAt={blog.createdAt} /></small></p>
                                </div>
                            </div>
                            <p dangerouslySetInnerHTML={{ __html: blog.description }} />


                            <div className="mt-2">
                                <a href="javascript: void(0);" className="btn btn-sm btn-link text-muted pl-0"><i className="mdi mdi-heart text-danger"></i> {blog.likes.length} Likes</a>
                                <a href="javascript: void(0);" className="btn btn-sm btn-link text-muted"><i className="mdi mdi-eye"></i> Seen by {blog.numViews}</a>
                                <a href="javascript: void(0);" className="btn btn-sm btn-link text-muted"><i className="mdi mdi-comment-multiple-outline"></i> 184 Comments</a>
                                <a href="javascript: void(0);" className="btn btn-sm btn-link text-muted"><i className="mdi mdi-share-variant"></i> Share</a>
                            </div>

                            <div className="media mt-3">
                                <img src="../../../assets/images/users/user-1.jpg" height="32" className="align-self-start rounded mr-2" alt="Arya Stark" />
                                <div className="media-body">
                                    <input type="text" className="form-control form-control-light border-0 form-control-sm" placeholder="Write a comment" />
                                </div> 
                            </div>
                        </div>
                    ))}

                    

                    <div className="text-center mb-3">
                        <a href="javascript:void(0);" className="text-danger"><i className="mdi mdi-spin mdi-loading mr-1 font-16"></i> Load more </a>
                    </div>
                </div>
            </div>
        </div>
    </div> 
  )
}

export default BlogList