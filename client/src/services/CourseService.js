import Api from '@/services/Api'

export default {
  getAllCourses () {
    return Api().get('songs')
  },
  getCourseById (courseId) {
    return Api().get(`courses/${courseId}`)
  }
}
