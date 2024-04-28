import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Bredcrumb from 'src/components/core/Bredcrumb';
import SearchField from 'src/components/ecommerce/DefaultList/SearchField';
import TableBody from 'src/components/ecommerce/DefaultList/TableBody';
import TableHeader from 'src/components/ecommerce/DefaultList/TableHeader';
import UpButton from 'src/components/ecommerce/DefaultList/UpButton';
import Pagination from 'src/components/ecommerce/products/pagination';
import { getCategories, deleteABlogCat, resetState } from 'src/features/bcategory/bCategorySlice';

const BlogCategory = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(resetState());
        dispatch(getCategories());
    },[]);

    const blogCategoryState = useSelector((state) => state.blogCategories.categories);

    const deleteBlogCategory = (e) => {
        dispatch(deleteABlogCat(e));
        setTimeout(() => {
          dispatch(getCategories());
        }, 100);
      };

  return (
    <div className="content"> 
        <div className="container-fluid">
               
            <Bredcrumb title="Blog Categories"/>
            
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card-body">
                            <div className="row mb-2">
                                
                                <SearchField />
                               <UpButton buttonTitle="Blog Category" route="add-blog-category" />
                            </div>
    
                            <div className="table-responsive">
                                <table className="table table-centered table-nowrap mb-0">
                                    <TableHeader />
                                    <TableBody dataState={blogCategoryState} sourceName={"category"} performAction={deleteBlogCategory} />
                                </table>
                            </div>
                            {blogCategoryState.length > 10 && <Pagination />}
                        </div> 
                    </div> 
                </div> 
            </div>
        </div> 
    </div>
  )
}

export default BlogCategory