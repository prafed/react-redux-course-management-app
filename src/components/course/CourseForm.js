import React from 'react'
import PropTypes from 'prop-types'
import TextInput from '../common/inputs/TextInput'
import SelectInput from '../common/inputs/SelectInput'

const CourseForm = ({
  course,
  errors,
  onChange,
  onSave,
  saving,
  allAuthors
}) => {
  return (
    <form>
      <TextInput
        label="Title"
        name="title"
        value={course.title}
        onChange={onChange}
        error={errors.title}
      />

      <SelectInput
        label="Author"
        name="authorId"
        value={course.authorId}
        defaultOption="Select Author"
        options={allAuthors}
        onChange={onChange}
        error={errors.authorId}
      />

      <TextInput
        label="Category"
        name="category"
        value={course.category}
        onChange={onChange}
        error={errors.category}
      />

      <TextInput
        label="Length"
        name="length"
        value={course.length}
        onChange={onChange}
        error={errors.length}
      />

      <div className="form-group">
        <div className="col-sm-10">
          <button
            type="input"
            disabled={saving}
            className="btn btn-primary mb-2"
            onClick={onSave}
          >
            {saving ? 'Saving...' : 'Save'}
          </button>
        </div>
      </div>
    </form>
  )
}

CourseForm.propTypes = {
  course: PropTypes.object.isRequired,
  errors: PropTypes.object,
  onChange: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
  saving: PropTypes.bool.isRequired,
  allAuthors: PropTypes.array.isRequired
}

export default CourseForm
