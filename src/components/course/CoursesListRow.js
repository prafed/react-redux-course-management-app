import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'

const CoursesListRow = ({ course }) => {
  return (
    <tr>
      <td>
        <a href={course.id} target="_blank" rel="noreferrer noopener">
          Watch
        </a>
      </td>
      <td>
        <NavLink to={'/course/' + course.id}>{course.title}</NavLink>
      </td>
      <td>{course.authorId}</td>
      <td>{course.category}</td>
      <td>{course.length}</td>
    </tr>
  )
}

CoursesListRow.propTypes = {
  course: PropTypes.object.isRequired
}

export default CoursesListRow
