import React from 'react'
import { Route, Switch } from 'react-router'
import AboutPage from './about/AboutPage'
import Header from './common/Header'
import CoursesPage from './course/CoursesPage'
import ManageCoursesPage from './course/ManageCoursesPage'
import HomePage from './homepage/HomePage'

class App extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/courses" component={CoursesPage} />
          <Route exact path="/course" component={ManageCoursesPage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/course/:id" component={ManageCoursesPage} />
        </Switch>
      </div>
    )
  }
}

export default App
