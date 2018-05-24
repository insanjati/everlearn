import Api from '@/services/Api'

export default {
  registerMentor (credentials) {
    return Api().post('register/mentor', credentials)
  },
  loginMentor (credentials) {
    return Api().post('login/mentor', credentials)
  },
  registerStudent (credentials) {
    return Api().post('register/student', credentials)
  },
  loginStudent (credentials) {
    return Api().post('login/student', credentials)
  }
}
