  <template>
    <div
      v-if="isLoggedIn"
      style="margin-bottom:20px;"
    >  
      <v-app-bar
        dark style="background-color: #00A6B3;"
      >
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
  
        <v-spacer></v-spacer>
  
        <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
  
        <v-btn icon>
          <v-icon>mdi-filter</v-icon>
        </v-btn>
  
        <v-btn icon>
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </v-app-bar>
  
      <v-navigation-drawer
        v-model="drawer"
        absolute    
        temporary    
      >
        <v-list
          nav
          dense
        >
          <v-list-item-group
            v-model="group"
            active-class="deep-purple--text text--accent-4"
          >
            <v-list-item link>
              <v-list-item-icon>
                <v-icon>mdi-briefcase</v-icon>
              </v-list-item-icon>
              <v-list-item-title>
                <router-link to="/register">Add Asset</router-link>
              </v-list-item-title>
            </v-list-item>
  
            <v-list-item link>
              <v-list-item-icon>
                <v-icon>mdi-pencil-box-outline</v-icon>
              </v-list-item-icon>
              <v-list-item-title>
                <router-link to="/edit">Edit Asset</router-link>
              </v-list-item-title>
            </v-list-item>
  
            <v-list-item link>
              <v-list-item-icon>
                <v-icon>mdi-information-outline</v-icon>
              </v-list-item-icon>
              <v-list-item-title>
                <router-link to="/">Products Info</router-link>
              </v-list-item-title>
            </v-list-item>
            
            <v-list-item link>
              <v-list-item-icon>
                <v-icon>mdi-star</v-icon>
              </v-list-item-icon>
              <v-list-item-title >
                <a @click="logout">Logout</a>
              </v-list-item-title>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>
    </div>
  </template>
  <script>
  export default {
    name: 'NavBar',
    data: () => ({
      drawer: false,
      group: null,
    }),

    watch: {
      group () {
        this.drawer = false
      },
    },
    computed : {
        isLoggedIn : function(){ return this.$store.getters.isAuthenticated}
      },
      methods: {
        async logout (){
          await this.$store.dispatch('LogOut')
          this.$router.push('/login')
        }
      },
  }
  </script>
  <style>
  a{
    text-decoration: none;
    font-weight: bold;
    font-size: 15px;
    color: gray;
  }
  a:hover {
    cursor: pointer;
  }
  </style>
  