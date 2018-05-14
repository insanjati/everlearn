import Api from '@/services/Api'

export default {
  get_studentsAll () {
    return Api().get('admin/students')
  },
  get_studentsById (studentId) {
    return Api().get(`admin/students/${studentId}`)
  },
  delete_student (studentId) {
    return Api().post('admin/students/${studentId}')
  }
}
