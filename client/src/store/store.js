import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    loadedCourses: [
      { id: 0, title: 'Football Course', price: '300.000', date: '2018-05-15', imageUrl: 'https://content.nike.com/content/dam/one-nike/en_lu/SU17/KIDS/APRIL_EU_YA_KLP_FOOTBALL_P1_DESKTOP.jpg.transform/full-screen/APRIL_EU_YA_KLP_FOOTBALL_P1_DESKTOP.jpg' },
      { id: 1, title: 'Fingerstyle Masterclass', price: '200.000', date: '2018-07-15', imageUrl: 'https://guitarlessons-com-public.s3.amazonaws.com/images/5f55b84-2-how-to-hold-the-guitar.jpg' },
      { id: 2, title: 'Swimming for Beginner', price: '100.000', date: '2018-06-15', imageUrl: 'https://www.publicdomainpictures.net/pictures/30000/velka/swimming.jpg' },
      { id: 3, title: '', price: '', date: '2017-06-15', imageUrl: '' },
      { id: 4, title: '', price: '', date: '2017-06-15', imageUrl: '' },
      { id: 5, title: '', price: '', date: '2017-06-15', imageUrl: '' },
      { id: 6, title: '', price: '', date: '2017-06-15', imageUrl: '' },
      { id: 7, title: '', price: '', date: '2017-06-15', imageUrl: '' },
      { id: 8, title: '', price: '', date: '2017-06-15', imageUrl: '' }
    ],
    users: {
      id: '0909ioi',
      registeredCourses: [1]
    }
  },
  mutations: {},
  actions: {},
  getters: {
    loadedCourses (state) {
      return state.loadedCourses.sort((courseA, courseB) => {
        return courseA.date < courseB.date
      })
    },
    featuredCourses (state, getters) {
      return getters.loadedCourses.slice(0, 6)
    },
    loadedCourse (state) {
      return (courseId) => {
        console.log(courseId)
        return state.loadedCourses.find(course => {
          return course.id === courseId
        })
      }
    }
  }
})
