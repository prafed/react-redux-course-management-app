import React from 'react'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

class Header extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm navbar-light bg-light">
        <ul className="navbar-nav">
          <li className="nav-link">
            <NavLink to="/" exact className="nav-item" activeClassName="active">
              Home
            </NavLink>
          </li>
          <li className="nav-link">
            <NavLink to="/courses" activeClassName="active">
              Courses
            </NavLink>
          </li>
          <li className="nav-link">
            <NavLink to="/about" activeClassName="active">
              About
            </NavLink>
          </li>

          {this.props.saving && <div className="loading">Loading&#8230;</div>}
        </ul>
      </nav>
    )
  }
}

Header.propTypes = {
  saving: PropTypes.bool.isRequired
}

function mapStateToProps(state) {
  return {
    saving: state.ajaxCallsInProgress > 0
  }
}

export default connect(mapStateToProps)(Header)
