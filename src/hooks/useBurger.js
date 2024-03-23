import { useState } from "react";

export function useBurger(initialState, CSStyleString) {
   const [openedStyle, setOpenedStyle] = useState(initialState);
   

   return [
      openedStyle,
      () => {
         (openedStyle === null) ? setOpenedStyle(CSStyleString) : setOpenedStyle(null);
         console.log(openedStyle)
      }
   ]
}