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
import AdminLogin from '@/components/Admin/Login'
import MentorsManage from '@/components/Admin/Mentors'
import StudentsManage from '@/components/Admin/Students'

Vue.use(Router)

export default new Router({
  routes: [
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
      path: '/webmaster',
      name: 'AdminLogin',
      component: AdminLogin
    },
    {
      path: '/webmaster/mentors',
      name: 'MentorsManage',
      component: MentorsManage
    },
    {
      path: '/webmaster/students',
      name: 'StudentsManage',
      component: StudentsManage
    }
  ],
  mode: 'history'
})
