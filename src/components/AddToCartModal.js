


import React from 'react';

const AddToCartModal = ({ product, isOpen, onClose, onConfirm }) => {
  if (!isOpen || !product) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>{product.name}</h2>
        <p>Price: ${product.price}</p>
        <button onClick={onConfirm}>Confirm Add to Cart</button>


        <button onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
};

export default AddToCartModal;
