<template>
  <v-container>
    <v-flex xs6 offset-xs3>
      <h1>NEW COURSE</h1>
      <v-layout row wrap>
        <v-flex xs4>
          <v-subheader>Course Name</v-subheader>
        </v-flex>
        <v-flex xs8>
          <v-text-field name="input-1"></v-text-field>
        </v-flex>
      </v-layout>
      <v-layout row>
        <v-flex xs4>
          <v-subheader>Mentor Name</v-subheader>
        </v-flex>
        <v-flex xs8>
          <v-text-field name="input-2"></v-text-field>
        </v-flex>
      </v-layout>
      <v-layout row>
        <v-flex xs4>
          <v-subheader>Category</v-subheader>
        </v-flex>
        <v-flex xs8>
          <v-select name="input-3" :items="[{ text: 'Mobile' }]" label=""></v-select>
        </v-flex>
      </v-layout>
      <v-layout row>
        <v-flex xs4>
          <v-subheader>Price</v-subheader>
        </v-flex>
        <v-flex xs8>
          <v-text-field name="input-4" prefix="Rp"></v-text-field>
        </v-flex>
      </v-layout>
      <v-layout row>
        <v-flex xs4>
          <v-subheader>Description</v-subheader>
        </v-flex>
        <v-flex xs8>
          <v-text-field name="input-5"></v-text-field>
        </v-flex>
      </v-layout>
      <v-layout row>
        <v-flex xs4>
          <v-subheader>Curriculum</v-subheader>
        </v-flex>
        <v-flex xs8>
          <v-text-field name="input-6"></v-text-field>
        </v-flex>
      </v-layout>
      <v-layout row>
        <v-flex xs4>
          <v-subheader>Location</v-subheader>
        </v-flex>
        <v-flex xs8>
          <v-text-field name="input-7"></v-text-field>
        </v-flex>
      </v-layout>
    </v-flex>
  </v-container>
</template>

<script>
  export default {
    data: () => ({
      first: '',
      last: '',
      email: '',
      emailRules: [
        v => {
          return !!v || 'E-mail is required'
        },
        v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
      ],
      dropdown_edit: [
        { text: '100%' },
        { text: '75%' },
        { text: '50%' },
        { text: '25%' },
        { text: '0%' }
      ]
    })
  }
</script>