/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'

export default function AccordionItem({num, title, curOpen, onOpen, children}) {
  const isOpen = num === curOpen;
    const handleToggle = () => {
        onOpen(isOpen ? null : num)
    }

  return (
    <div className={`item ${isOpen ? "open" : ""}`} onClick={handleToggle}>

      <p className='number'>{num < 9 ? `0 ${num + 1}` : num + 1}</p>
      <p className='text'>{title}</p>
      <p className='icon'>{isOpen ? "-" : "+"}</p>

      {isOpen &&  <div className='content-box'>{children}</div>}
    </div>
  )
}
