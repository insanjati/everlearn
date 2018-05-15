<template>
  <div>
    <v-layout class="mt-2">
      <v-flex xs6>
        <tab :courses="courses" />
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import CourseService from '@/services/CourseService'
export default {
  data () {
    return {
      courses: {}
    }
  },
  async mounted () {
    this.courses = (await CourseService.getAllCourses).data
  }
}
</script>
