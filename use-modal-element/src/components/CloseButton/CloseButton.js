import React from 'react';
import classNames from 'classnames';
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
      <div className={classNames(s.initStyle, buttonStyle, classNameSetup(), {
         [s.fullScreen]: props.fullScreen,
      })} onClick={props.handleAction}>
         {textSetup()}
      </div>
   );
}


export default CloseButton;