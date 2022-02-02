import React from 'react';
import s from './CloseButton.module.css';

const CloseButton = (props) => {
   let buttonStyle = s.defaultButton;

   switch (props.settings.type) {
      case 'text':
         buttonStyle = s.textButton;
         break;
      case 'rounded':
         buttonStyle = s.roundedButton;
         break;
      default:
         buttonStyle = s.defaultButton;
         break;
   }

   const textSetup = () => {
      if (props.settings.type !== 'text') return '';

      return props.settings.text || 'Close';
   }

   const classNameSetup = () => {
      return props.settings.customClassName || '';
   }

   return (
      <div className={`${s.initStyle} ${buttonStyle} ${classNameSetup()}
         ${props.fullScreen && s.fullScreen}`} onClick={props.handleAction}>
         {textSetup()}
      </div>
   );
}


export default CloseButton;