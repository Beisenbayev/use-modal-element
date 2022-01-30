import React from 'react';
import s from './CloseButton.module.css';

const CloseButton = (props) => {
   return (
      <div className={s.content}
         onClick={props.closeModal}></div>
   );
}


export default CloseButton;