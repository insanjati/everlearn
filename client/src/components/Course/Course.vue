<template>
  <v-container class="mt-5">
    <v-layout row wrap>
      <v-flex xs12>
        <v-card>
          <v-card-title>
            <h1 class="primary--text">{{ course.course.courseName }}</h1>
          </v-card-title>
          <v-card-media
            :src="course.imageUrl"
            height="400px"
          ></v-card-media>
          <v-card-text>
            <div class="info--text">{{ course.course.price }}</div>
            <div>{{ course.course.description }}</div>
          </v-card-text>
          <v-card-actions>
            <!-- <v-spacer></v-spacer> -->
            <v-btn class="primary">ENROLL</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  import CourseService from '@/services/CourseService'

  export default {
    data () {
      return {
        course: []
      }
    },
    mounted () {
      this.getCourseById()
    },
    methods: {
      async getCourseById () {
        try {
          const response = await CourseService.getCourseById(this.$route.params.id)
          this.course = response.data
        } catch (err) {
          console.log(err)
        }
      }
    }
  }
</script>
