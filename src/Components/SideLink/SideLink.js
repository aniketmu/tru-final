import React from 'react'
import './SideLink.css'

const SideLink = ({link, icon}) => {
  return (
    <div className='link'>
        {icon}
        <p>{link}</p>
    </div>
  )
}

export default SideLink