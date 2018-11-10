import React from 'react'
import PropTypes from 'prop-types'
import CoursesListRow from './CoursesListRow'

const CoursesList = ({ courses }) => {
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">Link</th>
          <th scope="col">Title</th>
          <th scope="col">Author</th>
          <th scope="col">Category</th>
          <th scope="col">Length</th>
        </tr>
      </thead>
      <tbody>
        {courses.map(course => {
          return <CoursesListRow key={course.id} course={course} />
        })}
      </tbody>
    </table>
  )
}

CoursesList.propTypes = {
  courses: PropTypes.array.isRequired
}

export default CoursesList
