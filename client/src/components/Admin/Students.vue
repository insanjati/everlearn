<template>
<v-container my-5>
  <!-- <div>{{ students }}</div> -->
  <v-layout justify-center mb-4 class="trans">
    <h1>STUDENTS LIST</h1>
  </v-layout>
  <v-data-table
    :headers="headers"
    :items="students"
    class="elevation-1"
  >
    <template slot="items" slot-scope="props">
      <td>{{ props.item.fullName }}</td>
      <td>{{ props.item.email }}</td>
      <td>{{ props.item.phoneNumber }}</td>
      <td>{{ props.item.dateOfBirth }}</td>
      <!-- <td>{{ props.item.about }}</td>
      <td>{{ props.item.bankName }}</td> -->
    </template>
  </v-data-table>
</v-container>
</template>

<script>
  import AdminService from '@/services/AdminService'

  export default {
    data () {
      return {
        headers: [
          { text: 'FULL NAME', align: 'center', sortable: false },
          { text: 'EMAIL', align: 'center', sortable: false },
          { text: 'PHONE', align: 'center', sortable: false },
          { text: 'BIRTHDATE', align: 'center', sortable: false }
        //   { text: 'ABOUT', align: 'center', sortable: false },
        //   { text: 'BANK NAME', align: 'center', sortable: false }
        ],
        students: []
      }
    },
    mounted () {
      this.getStudents()
    },
    methods: {
      async getStudents () {
        const response = await AdminService.getStudents()
        this.students = response.data.students
      }
    }
  }
</script>
