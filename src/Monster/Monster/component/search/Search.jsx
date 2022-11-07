import React from 'react'

export default function Search({ handleChange, placeholder }) {
  return (
    <div>
        <label className="relative block mt-5 flex justify-center">
        <input className="placeholder:italic placeholder:text-slate-400 block bg-white w-auto border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-[#95dada] focus:ring-sky-500 focus:ring-1 sm:text-sm" 
        placeholder={placeholder} type="text" name="search" onChange={handleChange}/>
        </label>
    </div>
  )
}
