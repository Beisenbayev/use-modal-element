import React, { useState, useRef } from 'react';
import { createPortal } from 'react-dom';
import classNames from 'classnames';
import './modal.css';

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

   const modal = (
      <>
         {opend && createPortal(
            <div
               className={classNames('modal-background-init', {
                  'with-background': withBackground
               })}>
               <div ref={modalRef} className='modal-wrapper'>
                  {withCloseButton && <CloseButton />}
                  <div className='modal-wrapper-inner'>
                     <div className='modal-content'>
                        <h4>Title</h4>
                     </div>
                  </div>
               </div>
            </div>,
            document.getElementById('root'))
         }
      </>
   );

   return [modal, openModal];
}


export default useModal;