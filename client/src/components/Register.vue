<template>
  <v-container my-5>
    <v-layout row wrap justify-center>
      <v-flex md5>
        <v-tabs
          v-model="active"
          color="indigo"
          dark
          slider-color="indigo lighten-3"
        >
          <v-tab ripple><strong>MENTOR</strong></v-tab>
            <v-tab-item>
              <v-card flat>
                <v-card-text>
                  <v-flex md12 class="white" pa-5>
                    <h1> REGISTER AS A MENTOR</h1>
                    <!-- <v-form ref="form" v-model="valid" lazy-validation> -->
                    <v-form ref="form">
                      <v-text-field
                        v-model="email"
                        :rules="emailRules"
                        label="E-mail"
                        required
                      ></v-text-field>
                      <v-text-field
                        v-model="password"
                        label="Password"
                        hint="At least 6 characters"
                        required
                      ></v-text-field>
                      <v-checkbox
                        v-model="checkbox"
                        :rules="[v => !!v || 'You must agree to continue!']"
                        label="Do you accept the terms and conditions?"
                        required
                      ></v-checkbox>
                      <v-btn dark class="indigo" @click="submit">
                        submit
                      </v-btn>
                    </v-form>
                  </v-flex>
                </v-card-text>
              </v-card> 
            </v-tab-item>

          <v-tab ripple><strong>STUDENT</strong></v-tab>
            <v-tab-item>
              <v-card flat>
                <v-card-text>
                  <v-flex md12 class="white" pa-5>
                    <h1> REGISTER AS A STUDENT </h1>
                    <!-- <v-form ref="form" v-model="valid" lazy-validation> -->
                    <v-form ref="form">
                      <v-text-field
                        v-model="email"
                        :rules="emailRules"
                        label="E-mail"
                        required
                      ></v-text-field>
                      <v-text-field
                        v-model="password"
                        label="Password"
                        hint="At least 6 characters"
                        required
                      ></v-text-field>
                      <v-checkbox
                        v-model="checkbox"
                        :rules="[v => !!v || 'You must agree to continue!']"
                        label="Do you accept the terms and conditions?"
                        required
                      ></v-checkbox>
                      <v-btn dark class="indigo" @click="submit">
                        submit
                      </v-btn>
                      <v-layout mt-3>
                        <h4 style="cursor: pointer" class="indigo--text" :to="'/courses'">Forgot password</h4>
                      </v-layout>
                    </v-form>
                  </v-flex>
                </v-card-text>
              </v-card> 
            </v-tab-item>
          </v-tabs>
        </v-flex>
      </v-layout>
    </v-container>
</template>

<script>
  import AuthService from '@/services/AuthService'

  export default {
    data: () => ({
      email: '',
      password: '',
      checkbox: false
    })

    // methods: {
    //   async submit () {
    //     try{
    //       const response = await AuthService.register
    //     }

    //     if (this.$refs.form.validate()) {
    //       // Native form submission is not yet supported
    //       axios.post('/api/submit', {
    //         name: this.name,
    //         email: this.email,
    //         select: this.select,
    //         checkbox: this.checkbox
    //       })
    //     }
    //   },
    //   clear () {
    //     this.$refs.form.reset()
    //   }
    // }
  }
</script>
