import React from 'react'

const SearchField = () => {
  return (
    <div className="col-lg-8">
        <form className="form-inline">
            <div className="form-group mb-2">
                <label for="inputPassword2" className="sr-only">Search</label>
                <input type="search" className="form-control" id="inputPassword2" placeholder="Search..." />
            </div>
        </form>                            
    </div>
)
}

export default SearchField