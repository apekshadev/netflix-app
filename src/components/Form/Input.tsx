import { error } from 'console';
import React from 'react'
import { InputProps } from '../../type';

const Input:React.FC<InputProps>= ({
  type,
  placeholder,
  name,
  value,
  onchange,
  error,
}) => {

  return (
    <> <input type={type} placeholder={placeholder} name={name} onChange={(e)=>onchange(e.target.value)} value={value}
    className='p-4 my-4 w-full rounded bg-gray-800 bg-opacity-75 text-white' />
    <p className="text-red-600 text-sm">{error}</p></>
   
  )
}

export default Input