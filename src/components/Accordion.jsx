/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import AccordionItem from './AccordionItem'

export default function Accordion({data}) {

  const [curOpen, setIsOpen] = useState(null)

  return (
    <div className='accordion'>
      {data.map((el, i) => <AccordionItem curOpen={curOpen} onOpen={setIsOpen} title ={el.title} num={i} key={el.title}> {el.text} </AccordionItem > )}
    </div>
  )
}
