import { useEffect } from "react"

const useBackgroundScroll = (opened, condition) => {
   useEffect(() => {
      const bodyElement = document.querySelector('body');

      if (!condition) {
         if (opened) bodyElement.classList.add('overflow-hidden');
         else bodyElement.classList.remove('overflow-hidden');
      }

      return () => {
         bodyElement.classList.remove('overflow-hidden')
      }

   }, [opened, condition])
}


export default useBackgroundScroll
