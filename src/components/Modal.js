import React from 'react';

const Modal = ({ project, closeModal }) => {
  if (!project) return null;
  return (
    <div className="modal" id="modal">
      <div className="modal-content">
        <span className="close" onClick={closeModal}>
          &times;
        </span>
        <h2>{project.name}</h2>
        <img src={project.imgurl} alt={project.name} />
        <p>{project.description}</p>
      </div>
    </div>
  );
};

export default Modal;
