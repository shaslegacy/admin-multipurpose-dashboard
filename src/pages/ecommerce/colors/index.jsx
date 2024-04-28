import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Bredcrumb from 'src/components/core/Bredcrumb';
import SearchField from 'src/components/ecommerce/DefaultList/SearchField';
import TableBody from 'src/components/ecommerce/DefaultList/TableBody';
import TableHeader from 'src/components/ecommerce/DefaultList/TableHeader';
import UpButton from 'src/components/ecommerce/DefaultList/UpButton';
import Pagination from 'src/components/ecommerce/products/pagination';
import { getColors, resetState, deleteAColor } from 'src/features/color/colorSlice';

const ColorList = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(resetState());
        dispatch(getColors());
    },[])

    const colorState = useSelector((state) => state.colors.colors);

    const deleteColor = (e) => {
        dispatch(deleteAColor(e));
        setTimeout(() => {
          dispatch(getColors());
        }, 100);
    }

  return (
    <div className="content"> 
        <div className="container-fluid">
               
            <Bredcrumb title="Colors"/>
            
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card-body">
                            <div className="row mb-2">
                                
                                <SearchField />
                               <UpButton buttonTitle="Color" route={"add-color"} />
                            </div>
    
                            <div className="table-responsive">
                                <table className="table table-centered table-nowrap mb-0">
                                    <TableHeader />
                                    <TableBody dataState={colorState} sourceName={"color"} performAction={deleteColor} />
                                </table>
                            </div>
                            {colorState.length > 10 && <Pagination />}
                        </div> 
                    </div> 
                </div> 
            </div>
            
            
        </div> 
    </div>
  )
}

export default ColorList