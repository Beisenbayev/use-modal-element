import { useEffect } from 'react'

const useOnClickOutside = (ref, handler, condition) => {
   useEffect(() => {
      const listener = event => {
         if (!ref.current || ref.current.contains(event.target) || !condition) {
            return
         }

         handler(event)
      }

      document.addEventListener('mousedown', listener)
      document.addEventListener('touchstart', listener)

      return () => {
         document.removeEventListener('mousedown', listener)
         document.removeEventListener('touchstart', listener)
      }
      
   }, [ref, handler, condition])
}


export default useOnClickOutside;