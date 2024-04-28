import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Bredcrumb from 'src/components/core/Bredcrumb';
import SearchField from 'src/components/ecommerce/DefaultList/SearchField';
import TableBody from 'src/components/ecommerce/DefaultList/TableBody';
import TableHeader from 'src/components/ecommerce/DefaultList/TableHeader';
import UpButton from 'src/components/ecommerce/DefaultList/UpButton';
import Pagination from 'src/components/ecommerce/products/pagination';
import { getBrands, deleteABrand, resetState } from 'src/features/brand/brandSlice';

const BrandList = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(resetState());
        dispatch(getBrands());
    },[])

    const brandState = useSelector((state) => state.brands.brands);

    const deleteBrand = (e) => {
        dispatch(deleteABrand(e));
        setTimeout(() => {
          dispatch(getBrands());
        }, 100);
      };

  return (
    <div className="content"> 
        <div className="container-fluid">
               
            <Bredcrumb title="Brand"/>
            
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card-body">
                            <div className="row mb-2">
                                
                                <SearchField />
                               <UpButton buttonTitle="Brand" route="add-brand"/>
                            </div>
    
                            <div className="table-responsive">
                                <table className="table table-centered table-nowrap mb-0">
                                    <TableHeader />
                                    <TableBody dataState={brandState} sourceName={"brand"} performAction={deleteBrand} />
                                </table>
                            </div>
                            {brandState.length > 10 && <Pagination />}
                        </div> 
                    </div> 
                </div> 
            </div>
            
            
        </div> 
    </div>
  )
}

export default BrandList