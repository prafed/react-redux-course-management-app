import React from 'react'
import PropTypes from 'prop-types'

const TextInput = ({ label, name, value, placeholder, onChange, error }) => {
  let wrapperClass = 'form-group row col-md-8'
  if (error && error.length > 0) {
    wrapperClass += ' ' + 'has-error'
  }

  placeholder = placeholder ? placeholder : label

  return (
    <div className={wrapperClass}>
      <label className="col-sm-2 col-form-label" htmlFor={name}>
        {label}
      </label>
      <div className="col-sm-10">
        <input
          type="text"
          className="form-control"
          name={name}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
        />
        {error && <div className="alert alert-danger">{error}</div>}
      </div>
    </div>
  )
}

TextInput.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string,
  placeholder: PropTypes.string
}

export default TextInput
