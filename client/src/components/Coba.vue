<template>
  <div class="posts">
    <h1>Posts</h1>
    This just percobaan on axios.
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
