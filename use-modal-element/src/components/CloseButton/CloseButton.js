import React from 'react';
import classNames from 'classnames';
import s from './CloseButton.module.css';

const CloseButton = (props) => {
   return (
      <div className={classNames(s.wrapper, {
         [s.fullScreen]: props.fullScreen,
      })} onClick={props.closeModal}>
         <div className={s.content}></div>
      </div>
   );
}


export default CloseButton;