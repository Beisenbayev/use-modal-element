import React from 'react';
import './close-button.css';

const CloseButton = (props) => {
   return (
      <div className='modal-close-btn'
         onClick={props.closeModal}></div>
   );
}


export default CloseButton;