import React, { useState, useRef } from 'react';
import { createPortal } from 'react-dom';
import classNames from 'classnames';
import s from './Modal.module.css';

//Components
import CloseButton from '../CloseButton/CloseButton';

//Hooks
import useOnClickOutside from '../../hooks/useOnClickOutside';
import useBackgroundScroll from '../../hooks/useBackgroundScroll';

const useModal = (settings) => {
   //Refs
   const modalRef = useRef()

   // States
   const [opend, setOpend] = useState(false)

   //Default settings
   const {
      withBackground = true,
      withCloseButton = true,
      closableBackground = true,
      scrollableBackground = false,
   } = settings;

   //Handlers
   const toggleModal = () => setOpend(value => !value);
   const closeModal = () => setOpend(false)
   const openModal = () => setOpend(true)

   //Init 
   useOnClickOutside(modalRef, closeModal, closableBackground);
   useBackgroundScroll(opend, scrollableBackground);

   const Modal = (props) => {
      return (opend && createPortal(
         <div
            className={classNames(s.backgroundInit, {
               [s.withBackground]: withBackground
            })}>
            <div ref={modalRef} className={s.wrapper}>
               {/* Modal's default styled close button */}
               {withCloseButton && <CloseButton closeModal={closeModal} />}

               {/* Modal's default styled title */}
               {props.title &&
                  <h2 className={classNames(s.title)}>{props.title}</h2>
               }

               {/* Modal's default styled subtitle */}
               {props.subtitle &&
                  <h2 className={classNames(s.subtitle)}>{props.subtitle}</h2>
               }

               {/* Modal's content */}
               <div className={s.wrapperInner}>
                  <div className={s.content}>
                     {props.children}
                  </div>
               </div>
            </div>
         </div>,
         document.getElementById('root'))
      );
   }

   return [Modal, openModal];
}


export default useModal;