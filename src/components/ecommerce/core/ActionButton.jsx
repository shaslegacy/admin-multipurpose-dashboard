// ActionButton.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CustomModal from '../../core/CustomModal'; // Adjust import path as needed

const ActionButton = ({ id, sourceName, performAction }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <>
      <td>
        <Link to={`/admin/mera-bazzar/edit-${sourceName}/${id}`} className="action-icon">
          <i className="mdi mdi-square-edit-outline"></i>
        </Link>
        <Link onClick={openModal} className="action-icon" data-toggle="modal" data-target="#danger-alert-modal">
          <i className="mdi mdi-delete"></i>
        </Link>
      </td>
      {modalIsOpen && (
        <CustomModal
          modalIsOpen={modalIsOpen}
          closeModal={closeModal}
          performAction={performAction}
          id={id}
          title={`Are you sure you want to delete this ${sourceName}?`}
        />
      )}
    </>
  );
};

export default ActionButton;
