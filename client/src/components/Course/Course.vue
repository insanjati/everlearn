<template>
  <v-container class="mt-5">
    <v-layout row wrap>
      <v-flex xs12>
        <v-card>
          <v-card-title>
            <h1 class="primary--text">{{ course.title }}</h1>
          </v-card-title>
          <v-card-media
            :src="course.imageUrl"
            height="400px"
          ></v-card-media>
          <v-card-text>
            <div class="info--text">{{ course.price }}</div>
            <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci assumenda at deserunt dolorum eius esse eum, expedita hic illo ipsum magni, nobis, odio odit quaerat quibusdam quis rem veritatis voluptas!</div>
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
  export default {
    props: ['id'],
    computed: {
      course () {
        // console.log(this.id)
        return this.$store.getters.loadedCourse(this.id)
      }
    }
  }
</script>
