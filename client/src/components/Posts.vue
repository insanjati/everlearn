<template>
  <div class="posts">
    <h1>Posts</h1>
    This file will list all the courses.
    <div v-for="course in courses.courses">
    <!-- <div> -->
      <p>
        <span><b>{{ course.courseName }}</b></span><br />
        <span>{{ course.description }}</span>
      </p>
    </div>
  </div>
</template>

<script>
import CourseService from '@/services/CourseService'
export default {
  name: 'posts',
  data () {
    return {
      courses: []
    }
  },
  mounted () {
    this.getCourses()
  },
  methods: {
    async getCourses () {
      const response = await CourseService.getAllCourses()
      this.courses = response.data
    }
  }
}
</script>
