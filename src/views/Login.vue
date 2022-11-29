<template>
  <v-app >
     <v-main>
        <v-container fluid fill-height src="@/assets/fondologin.png">
           <v-layout align-center justify-center>
              <v-flex xs12 sm8 md2>
                 <v-card class="elevation-12">
                    <v-toolbar dark color="ligth-gray">
                       <v-toolbar-title>Global Product Database</v-toolbar-title>
                    </v-toolbar>
                    <v-card-text>
                    <form ref="form" @submit.prevent="submit()">
                      <h1 style="text-align: left;
                        font-family: Lato, Light;
                        font-size: 50px;
                        letter-spacing: 1.1px;
                        color: #3D3D3D;
                        opacity: 1;">Sing In</h1><br>
                           <v-text-field
                             v-model="form.username"
                             name="username"
                             label="Username"
                             type="text"
                             placeholder="username"
                             required
                             style="background: #F2F2F2 0% 0% no-repeat padding-box;
                              border-radius: 4px;"
                              append-icon="mdi-account"
                          ></v-text-field>
                          
                           <v-text-field
                             v-model="form.password"
                             name="password"
                             label="Password"
                             type="password"
                             placeholder="password"
                             append-icon="mdi-lock"
                             style="background: #F2F2F2 0% 0% no-repeat padding-box;
                              border-radius: 4px;"
                             required
                          ></v-text-field>
                          <v-btn type="submit" class="mt-4" style="
background: #00A6B3 0% 0% no-repeat padding-box;
border-radius: 24px;
opacity: 1; width: 280px; height: 42px;"  value="log in">Sign In</v-btn><br>

                     </form>
                    
                    </v-card-text>
                    <v-img
  lazy-src="https://picsum.photos/id/11/10/6"
  max-height="70"
  max-width="100%"
  src="@/assets/fondologin.png"
></v-img>
                 </v-card>
               
              </v-flex>
           </v-layout>
        </v-container>
     </v-main>
  </v-app>
</template>
<script>
    import { mapActions } from "vuex";
    export default {
      name: "Login",
      components: {},
      data() {
        return {
          form: {
            username: "",
            password: "",
          },
          showError: false
        };
      },
      methods: {
        ...mapActions(["LogIn"]),
        async submit() {
          const User = new FormData();
          User.append("username", this.form.username);
          User.append("password", this.form.password);
          try {
              await this.LogIn(User);
              this.$router.push("/posts");
              this.showError = false
          } catch (error) {
            this.showError = true
          }
        },
      },
    };
</script>
<style scoped>
#app {
  background: url('@/assets/fondologin.png')  no-repeat center center !important;
  background-size: cover !important;
  top: 0px !important;
left: 0px !important;
width: 100% !important;
height: 100% !important;
position: absolute !important;
/* UI Properties */

opacity: 1;
}
    * {
      box-sizing: border-box;
    }
    label {
      padding: 12px 12px 12px 0;
      display: inline-block;
    }
    button[type=submit] {
      background-color: #4CAF50;
      color: white;
      padding: 12px 20px;
      cursor: pointer;
      border-radius:30px;
    }
    button[type=submit]:hover {
      background-color: #45a049;
    }
    input {
      margin: 5px;
      box-shadow:0 0 15px 4px rgba(0,0,0,0.06);
      padding:10px;
      border-radius:30px;
    }
    #error {
      color: red;
    }
</style>
    
    
  