import React from 'react'
import './styles.scss'

export default function FormInput({handleChange, label, ...others}) {
  return (
    <div className="group">
        <input className="form-input" onChange={handleChange}  {...others}/>
        {
            label ? 
            <label className={`${others.value.length ? 'shrink' : ''} form-input-label`}>
                {label}
            </label> 
            : null
        } 
    </div>
  )
}
