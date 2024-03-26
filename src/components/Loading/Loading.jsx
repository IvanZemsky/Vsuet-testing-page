import React, { useEffect, useState } from 'react'
import style from './Loading.module.css'

const clocks = ["🕛", "🕐", "🕑", "🕒", "🕓", "🕔", "🕕", "🕖", "🕗", "🕘", "🕙", "🕚"]

const Loading = () => {
   const [clock, setClock] = useState(clocks[0])

   useEffect(() => {
      let i = 0;
      const timout = setInterval(() => {
         (i === clocks.length - 1) ? i = 0 : i++;
         setClock(clocks[i])
      }, 275);

      return () => clearInterval(timout)
   }, [])

  return (
    <div className={style.loading}>
      {clock}
    </div>
  )
}

export default Loading
