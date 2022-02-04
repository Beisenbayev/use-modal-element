import { useEffect } from "react"
import s from '../styles/index.module.css';

const useBackgroundScroll = (opened, condition) => {
   useEffect(() => {
      const bodyElement = document.querySelector('body');
      //const htlmElement = document.querySelector('html');

      if (!condition) {
         if (opened) {
            bodyElement.classList.add(s.overflowHidden);
            //htlmElement.classList.add(s.overflowHidden);
         }
         else {
            bodyElement.classList.remove(s.overflowHidden);
            //htlmElement.classList.remove(s.overflowHidden);
         }
      }

      return () => {
         {
            bodyElement.classList.remove(s.overflowHidden);
            //htlmElement.classList.remove(s.overflowHidden);
         }
      }

   }, [opened, condition])
}


export default useBackgroundScroll
