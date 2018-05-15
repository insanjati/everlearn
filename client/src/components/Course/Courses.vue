<template>
  <v-container fluid class="mt-5">
    <v-layout 
    row
    wrap
    mb-4
    v-for="course in courses.courses"
    :key="course.id">
      <v-flex xs12 sm10 md8 offset-sm1 offset-md2>
        <v-card class="grey lighten-1">
          <v-container fluid>
            <v-layout row>
              <v-flex xs5 sm4 md3>
                <v-card-media
                  src= "https://guitarlessons-com-public.s3.amazonaws.com/images/5f55b84-2-how-to-hold-the-guitar.jpg"
                  height="168px">
                </v-card-media>
              </v-flex>
              <v-flex xs7 sm8 md9 ml-3>
                <v-card-title primary-title>
                  <div>
                    <h1 class="white--text">{{ course.courseName }}</h1>
                    <div>Rp {{ course.price }}</div>
                    <div>{{ course.description }}</div>
                  </div>
                </v-card-title>
                <v-card-actions>
                  <v-btn flat :to="'/courses/' + course.id">
                    <v-icon left light>more</v-icon>
                    LEARN MORE
                  </v-btn>
                </v-card-actions>
              </v-flex>
            </v-layout>
          </v-container>
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
        courses: []
      }
    },
    mounted () {
      this.getCourses()
    },
    methods: {
      async getCourses () {
        try {
          const response = await CourseService.getAllCourses()
          this.courses = response.data
        } catch (err) {
          console.log(err)
        }
      }
    }
  }
</script>
