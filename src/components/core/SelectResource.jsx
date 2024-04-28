import React from 'react'

const SelectResource = ({title, name, id, multiple, ...rest }) => {
  return (
    <>
        <label htmlFor={id}>{title} <span className="text-danger">*</span></label>
        <select
         className="form-control"
         name={name}
         id={id} 
         multiple = {multiple ? "multiple" : ""}
         onChange={rest.onChnge}
         onBlur={rest.onBlr}
         value={rest.val}
         >
            <option>Select</option>
            {rest.data && rest.data.map((item, index) => (
                <option key={index} value={rest.isState ? item.value : item.title}>{rest.isState ? item.label : item.title}</option>
            ))}
        </select>
    </>
  )
}

export default SelectResource