// CustomModal.js
import React from 'react';

const CustomModal = ({ title, performAction, id }) => {
  return (
    <div id="danger-alert-modal" class="modal fade" tabindex="-1" role="dialog" aria-hidden="true">
      <div className="modal-dialog modal-sm" role="document">
        <div className="modal-content modal-filled bg-danger">
          <div className="modal-body p-4">
            <div className="text-center">
              <i className="dripicons-wrong h1 text-white"></i>
              <h4 className="mt-2 text-white">Oh snap!</h4>
              <p className="mt-3 text-white">{title}</p>
              <button type="button" onClick = {() => performAction(id)} className="btn btn-light my-2 mr-2" data-dismiss="modal">Yes</button>
              <button type="button" className="btn btn-light my-2" data-dismiss="modal">No</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomModal;
