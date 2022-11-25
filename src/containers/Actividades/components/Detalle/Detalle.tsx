import React, { useState } from 'react'
import ButtonNav from './ButtonNav'
import { CardDetalle } from './CardDetalle'
import NavBar from './NavBar'

const Detalle = () => {
   
    return (
    <>
        <NavBar/>
        {
            [1,2,3].map(()=> <CardDetalle/>)
        }
        <ButtonNav/>
    </>
  )
}

export default Detalle