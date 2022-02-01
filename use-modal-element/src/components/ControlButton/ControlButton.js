import React from 'react';
import classNames from 'classnames';
import s from './ControlButton.module.css';

const ControlButton = (props) => {
   let buttonStyle = s.defaultButton;

   switch (props.settings.type) {
      case 'text':
         buttonStyle = s.textButton;
         break;
      case 'outlined':
         buttonStyle = s.outlinedButton;
         break;
      default:
         buttonStyle = s.defaultButton;
         break;
   }

   const textSetup = () => {
      return props.settings.text || 'Click me!';
   }

   return (
      <div className={classNames(s.initStyle, buttonStyle)}
         onClick={props.settings.action}>
         {textSetup()}
      </div>
   );
}


export default ControlButton;