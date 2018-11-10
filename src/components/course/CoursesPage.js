import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import CoursesList from './CoursesList'

class CoursesPage extends React.Component {
  constructor(props, context) {
    super(props, context)
  }

  redirectToAddCoursePage = () => {
    this.props.history.push('/course')
  }

  render() {
    return (
      <div>
        <div className="row">
          <div>
            <h1>Courses</h1>
          </div>
        </div>
        <div className="row">
          <div>
            <input
              type="submit"
              value="Add Course"
              className="btn btn-primary"
              onClick={this.redirectToAddCoursePage}
            />
          </div>
        </div>
        <div className="row">
          <div>
            <CoursesList courses={this.props.courses} />
          </div>
        </div>
      </div>
    )
  }
}

CoursesPage.propTypes = {
  courses: PropTypes.array.isRequired,
  history: PropTypes.object
}

function mapStateToProps(state, ownProps) {
  return {
    courses: state.courses
  }
}

function mapDispatchToProps(dispatch) {
  return {
    // actions: bindActionCreators(courseActions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CoursesPage)
