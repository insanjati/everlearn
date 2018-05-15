import Api from '@/services/Api'

export default {
  getAllCourses () {
    return Api().get('courses')
  },
  getCourseById (courseId) {
    return Api().get(`courses/${courseId}`)
  }
}
