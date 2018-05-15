import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/Home'
import Register from '@/components/Register'
import Login from '@/components/Login'
import Course from '@/components/Course/Course'
import Courses from '@/components/Course/Courses'
import AddCourse from '@/components/Course/AddCourse'
import MentorProfile from '@/components/Mentor/Profile'
import StudentProfile from '@/components/Student/Profile'
import MentorsManage from '@/components/Admin/Mentors'
import Coba from '@/components/Coba'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/coba',
      name: 'Coba',
      component: Coba
    },
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/courses',
      name: 'Courses',
      component: Courses
    },
    {
      path: '/courses/:id',
      name: 'Course',
      props: true,
      component: Course
    },
    {
      path: '/mentor/profile',
      name: 'MentorProfile',
      component: MentorProfile
    },
    {
      path: '/mentor/courses/add',
      name: 'AddCourse',
      component: AddCourse
    },
    {
      path: '/student/profile',
      name: 'StudentProfile',
      component: StudentProfile
    },
    {
      path: '/admin/mentors',
      name: 'MentorsManage',
      component: MentorsManage
    }
  ],
  mode: 'history'
})
