import * as types from './actionTypes'
import courseApi from '../api/mockCourseApi'
import { ajaxError, beginAjaxCall } from './axajStatusActions'

export function loadCoursesSuccess(courses) {
  return { type: types.LOAD_COURSES_SUCCESS, courses }
}

export function loadAuthorsSuccess(authors) {
  return { type: types.LOAD_AUTHORS_SUCCESS, authors }
}

export function createCourseSuccess(course) {
  return { type: types.CREATE_COURSE_SUCCESS, course }
}

export function updateCourseSuccess(course) {
  return { type: types.UPDATE_COURSE_SUCCESS, course }
}

export function saveCourseError(course, error) {
  return { type: types.SAVE_COURSE_ERROR, course, error }
}

export function loadCourses() {
  return dispatch => {
    dispatch(beginAjaxCall())
    return courseApi
      .getAllCourses()
      .then(courses => {
        dispatch(loadCoursesSuccess(courses))
      })
      .catch(error => {
        throw error
      })
  }
}

export function saveCourse(course) {
  return dispatch => {
    dispatch(beginAjaxCall())
    return courseApi
      .saveCourse(course)
      .then(savedCourse => {
        course.id
          ? dispatch(updateCourseSuccess(savedCourse))
          : dispatch(createCourseSuccess(savedCourse))
      })
      .catch(error => {
        dispatch(ajaxError())
        throw error
      })
  }
}
