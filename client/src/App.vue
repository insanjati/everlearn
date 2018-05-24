<template>
  <v-app>
    <v-toolbar class="px-3 py-3">
      <!-- <v-toolbar-side-icon></v-toolbar-side-icon> -->
      <v-toolbar-title>
        <router-link 
          to="/" 
          tag="span" 
          style="cursor: pointer"
          src="./assets/EVERLEARN.png">
          <img src="@/assets/everlearn-blueblack.png" alt="everlearn" height="50px">
        </router-link>
      </v-toolbar-title>
      <v-layout row wrap>
        <v-flex md7 offset-md3>
          <v-text-field 
            solo 
            label="Search for courses"
            append-icon="search">
          </v-text-field>
        </v-flex>
      </v-layout>
      <!-- <v-spacer></v-spacer> -->
      <v-toolbar-items class="hidden-sm-and-down">
        <v-menu offset-y>
          <v-btn 
            flat
            class="pl-2 pr-3"
            slot="activator">
            <v-icon left>apps</v-icon>
            Category
          </v-btn>
          <v-list>
            <v-list-tile 
              v-for="item in category" 
              :key="item.title" 
              @click=""
              :to="item.link">
              <v-list-tile-title>{{ item.title }}</v-list-tile-title>
            </v-list-tile>
          </v-list>
        </v-menu>
        <v-btn 
          flat
          v-for="item in navbar"
          :key="item.title"
          :class="item.class"
          :to="item.link">
          <v-icon left>{{ item.icon }}</v-icon>
          {{ item.title }}
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <main>
      <router-view></router-view>

    </main>
    <v-footer height="auto" class="indigo">
      <v-layout row wrap justify-center my-5>
        <img src="@/assets/everlearn-bluewhite.png" alt="everlearn" height="50px">
        <v-flex mt-3 xs12 text-xs-center white--text>
          Released under the <strong>MIT License</strong>
        </v-flex>
        <v-flex xs12 text-xs-center white--text>
          Copyright © 2018 — <strong>EVERLEARN</strong>
        </v-flex>
      </v-layout>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      navbar: [
        // { icon: 'apps', title: 'Category', class: 'pl-2 pr-3', slot: 'activator' },
        { icon: 'bookmark', title: '', class: 'pl-3' },
        { icon: 'shopping_cart', title: '', class: 'pl-3' },
        { icon: 'account_circle', title: '', class: 'pl-3' },
        { icon: '', title: 'Log In', class: 'blue-grey lighten-1 ml-2 pr-3 white--text', link: '/login' },
        { icon: '', title: 'Register', class: 'info ml-2 pr-3', link: '/register' }
      ],
      category: [
        { title: 'All Courses', link: '/courses' },
        { title: 'Software Engineering' },
        { title: 'Language' },
        { title: 'Sport' },
        { title: 'Arts' }
      ]
    }
  },
  name: 'App'
}
</script>
