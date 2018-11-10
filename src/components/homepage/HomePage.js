import React from 'react'
import { Link } from 'react-router-dom'

class HomePage extends React.Component {
  render() {
    return (
      <div className="jumbotron">
        <h1>Welcome</h1>
        <p>This is the homepage....</p>
        <Link to="/courses" className="btn btn-primary btn-lg">
          View All Courses
        </Link>
      </div>
    )
  }
}

export default HomePage
