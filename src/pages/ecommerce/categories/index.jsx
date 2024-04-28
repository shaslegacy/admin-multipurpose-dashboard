import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Bredcrumb from 'src/components/core/Bredcrumb';
import SearchField from 'src/components/ecommerce/DefaultList/SearchField';
import TableBody from 'src/components/ecommerce/DefaultList/TableBody';
import TableHeader from 'src/components/ecommerce/DefaultList/TableHeader';
import UpButton from 'src/components/ecommerce/DefaultList/UpButton';
import Pagination from 'src/components/ecommerce/products/pagination';
import { getCategories, deleteAProductCategory, resetState } from 'src/features/pcategory/categorySlice';

const CategoryList = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(resetState());
        dispatch(getCategories());
    },[]);

    const categoryState = useSelector((state) => state.categories.categories);

    const deleteCategory = (e) => {
        dispatch(deleteAProductCategory(e));
        setTimeout(() => {
          dispatch(getCategories());
        }, 100);
      };

  return (
    <div className="content"> 
        <div className="container-fluid">
               
            <Bredcrumb title="Categories"/>
            
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card-body">
                            <div className="row mb-2">
                                
                                <SearchField />
                               <UpButton buttonTitle="Category" route="add-category" />
                            </div>
    
                            <div className="table-responsive">
                                <table className="table table-centered table-nowrap mb-0">
                                    <TableHeader />
                                    <TableBody dataState={categoryState} sourceName={"product-category"} performAction ={deleteCategory} />
                                </table>
                            </div>
                            {categoryState.length > 10 && <Pagination />}
                        </div> 
                    </div> 
                </div> 
            </div>
            
            
        </div> 
    </div>
  )
}

export default CategoryList