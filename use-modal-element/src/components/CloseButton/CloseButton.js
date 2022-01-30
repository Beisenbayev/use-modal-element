import React from 'react';
import s from './CloseButton.module.css';

const CloseButton = (props) => {
   return (
      <div className={s.wrapper} onClick={props.closeModal}>
         <div className={s.content}></div>
      </div>
   );
}


export default CloseButton;