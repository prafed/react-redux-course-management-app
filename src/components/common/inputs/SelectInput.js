import React from 'react'
import PropTypes from 'prop-types'

const SelectInput = ({
  label,
  name,
  value,
  defaultOption,
  onChange,
  error,
  options
}) => {
  return (
    <div className="form-group row col-md-8">
      <label className="col-sm-2 col-form-label" htmlFor={name}>
        {label}
      </label>
      <div className="col-sm-10">
        <select
          className="form-control"
          name={name}
          value={value}
          onChange={onChange}
        >
          <option value="">{defaultOption}</option>
          {options.map(option => {
            return (
              <option key={option.value} value={option.value}>
                {option.text}
              </option>
            )
          })}
          ;
        </select>

        {error && <div className="alert alert-danger">{error}</div>}
      </div>
    </div>
  )
}

SelectInput.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string,
  placeholder: PropTypes.string,
  defaultOption: PropTypes.string,
  options: PropTypes.array.isRequired
}

export default SelectInput
