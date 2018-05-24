import Api from '@/services/Api'

export default {
  login () {
    return Api().post('admin')
  },
  getMentors () {
    return Api().get('admin/mentors')
  },
  getStudents () {
    return Api().get('admin/students')
  }
}
