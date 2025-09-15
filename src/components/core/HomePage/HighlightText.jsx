import React from 'react'
import { Link } from 'react-router-dom';
const HighlightText = ({text}) => {
  return (
    <span className='font-bold bg-gradient-to-b from-blue-200 to-blue-200 bg-clip-text text-transparent '> {/* */}
         {" "}
        {text}
    </span>
  )
}

export default HighlightText