<template>
  <v-container fluid class="mt-5">
    <v-layout 
    row
    wrap
    mb-4
    v-for="course in courses"
    :key="course.id">
      <v-flex xs12 sm10 md8 offset-sm1 offset-md2>
        <v-card class="grey lighten-1">
          <v-container fluid>
            <v-layout row>
              <v-flex xs5 sm4 md3>
                <v-card-media
                  :src="course.imageUrl"
                  height="168px">
                </v-card-media>
              </v-flex>
              <v-flex xs7 sm8 md9 ml-3>
                <v-card-title primary-title>
                  <div>
                    <h1 class="white--text">{{ course.title }}</h1>
                    <div>Rp {{ course.price }}</div>
                    <div>{{ course.date }}</div>
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
export default {
  computed: {
    courses () {
      return this.$store.getters.loadedCourses
    }
  }
}
</script>
