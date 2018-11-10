import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as courseActions from '../../actions/courseActions'
import PropTypes from 'prop-types'
import CourseForm from './CourseForm'
import toastr from 'toastr'

class ManageCoursesPage extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      course: Object.assign({}, props.course),
      errors: {},
      saving: false
    }
  }

  // componentWillReceiveProps(nextProps) {
  // if (this.props.course.id !== nextProps.course.id) {
  //   this.setState({
  //     course: Object.assign({}, nextProps.course)
  //   })
  // }
  // }

  onChange = event => {
    let course = Object.assign({}, this.state.course)
    course[event.target.name] = event.target.value

    this.setState({ course: course })
  }

  onSave = event => {
    event.preventDefault()

    this.setLoadingState()

    /** CourseActions.saveCourse **/
    this.props.actions
      .saveCourse(this.state.course)
      .then(this.redirect)
      .catch(error => {
        toastr.error(error)
        this.unsetLoadingState()
      })
  }

  setLoadingState = () => {
    this.setState({ saving: true })
  }

  unsetLoadingState = () => {
    this.setState({ saving: false })
  }

  redirect = () => {
    this.unsetLoadingState()
    toastr.success('Course Saved!')
    this.props.history.push('/courses')
  }

  render() {
    let course = this.state.course

    return (
      <div>
        <h2>Manage Course</h2>
        <CourseForm
          course={course}
          errors={this.state.errors}
          onChange={this.onChange}
          onSave={this.onSave}
          saving={this.state.saving}
          allAuthors={this.props.allAuthors}
        />
      </div>
    )
  }
}

ManageCoursesPage.propTypes = {
  actions: PropTypes.object.isRequired,
  errors: PropTypes.object,
  allAuthors: PropTypes.array.isRequired,
  history: PropTypes.object,
  match: PropTypes.object,
  course: PropTypes.object
}

function getCourseById(allCourses, id) {
  const course = allCourses.filter(course => course.id === id)
  if (course) return course[0]
  return null
}

function mapStateToProps(state, ownProps) {
  let course = {
    id: '',
    watchHref: '',
    title: '',
    authorId: '',
    category: '',
    length: ''
  }

  const courseId = ownProps.match.params.id

  if (courseId && state.courses.length > 0) {
    course = getCourseById(state.courses, courseId)
  }

  console.log(course)

  let transformedAuthors = []

  if (state.authors.length > 0 && state.courses.length > 0) {
    transformedAuthors = state.authors.map(author => {
      return {
        value: author.id,
        text: author.firstName + ' ' + author.lastName
      }
    })
  }

  return {
    allAuthors: transformedAuthors,
    course: course
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(courseActions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ManageCoursesPage)
