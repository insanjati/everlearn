<template>
  <div>
    <v-carousel hide-controls>
      <v-carousel-item 
        v-for="content in contents"
        :src="content.imageUrl"
        :key="content.id"
        style="cursor: pointer"
        @click="onLoadContent(course.id)">
      </v-carousel-item>
    </v-carousel>
    <v-container fluid my-5>
      <v-layout row wrap>
        <v-flex 
          v-for="course in courses"
          :key="course.id"
          md4 xs12
          class="pa-4">
          <v-card color="grey lighten-1">
            <v-card-media
              height="300px"
              :src="course.imageUrl"
              style="cursor: pointer"
              @click="onLoadCourse(course.id)">
            </v-card-media>
            <v-card-title primary-title>
              <div>
                <div 
                  class="headline"
                  style="cursor: pointer"
                  @click="onLoadCourse(course.id)">
                  {{ course.title }}
                </div>
                <span class="black--text">Rp {{ course.price }}</span>
              </div>
            </v-card-title>
            <v-card-actions color="grey darken-1">
              <v-btn
                color="grey darken-3"
                dark
                small
                absolute
                bottom
                right
                fab>
                <v-icon>add_shopping_cart</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
    <v-parallax src="https://teachforall.org/sites/default/files/TFB1.jpg">
      <v-layout column align-center justify-center class="trans">
        <h1 class="white--text">BE A TEACHER</h1>
        <!-- <h4 class="grey--text">ENLIGHT THE UNIVERSE!</h4> -->
        <v-btn color="info">REGISTER</v-btn>
      </v-layout>
    </v-parallax>
  </div>
</template>

<script>
export default {
  data () {
    return {
      contents: [
        { id: 0, title: 'Content1', imageUrl: 'https://pbs.twimg.com/media/CNYHqMIW8AAxTiu.jpg' },
        { id: 1, title: 'Content2', imageUrl: 'http://dessart.club/wp-content/uploads/2015/06/14-perfect-japanese-words-you-need-in-your-life-1.png' },
        { id: 2, title: 'Content3', imageUrl: 'https://i.pinimg.com/originals/51/bb/93/51bb9397d490185a4c12a2763f4bf2b0.png' }
      ]
    }
  },
  computed: {
    courses () {
      return this.$store.getters.featuredCourses
    }
  },
  methods: {
    onLoadCourse (id) {
      this.$router.push('/courses/' + id)
    },
    onLoadContent (title) {
      this.$router.push('/' + title)
    }
  }
}
</script>

<style scoped>
  .headline {
    font-weight: bold;
  }
  .trans {
    background: rgba(0, 0, 0, 0.6);
  }
</style>
