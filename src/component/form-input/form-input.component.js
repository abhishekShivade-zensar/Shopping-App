import React from 'react'
import './form-input.styles.scss'

const FormInput = ({ label }, ...otherProps) => {
    return (
        <div className='group'>
            {label && (
                <label className={`${otherProps.values.length ? 'shrink' : null}`}>{label}</label>
            )}
            <input className='form-input' {...otherProps} />
        </div>
    )
}

export default FormInput