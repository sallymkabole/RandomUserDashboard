<template>
    
      
        <v-layout row class="white--text txt">
          <v-flex xs12 md6>
            <div class="left">
              <v-card-title class="greet"> Hello User </v-card-title>
              <v-card-text>
                <p>
                  Welcome to your dashboard,kindly sort through the user base
                </p>

                <div class="text-xs-right">
                  <v-text-field
                    id="user"

                    prepend-inner-icon="mdi-magnify"
                    label="Find a User"
                    type="search"
                    class="white--text search"
                  ></v-text-field>
                </div>
              </v-card-text>
              <v-card-title> Show Users </v-card-title>
              <v-card-actions>
                <v-card flat class="bg white--text" width="400">
                  <v-card-actions>
                    <v-flex md4>
                      <v-btn class="round white--text" x-large color="#F935A9"  to="/">
                        <v-icon>mdi-account-group</v-icon>
                      </v-btn>
                      <v-card-text>All Users</v-card-text>
                    </v-flex>

                    <v-flex md4
                      ><v-btn
                        class="round white--text"
                        x-large
                        color="#30BBB5"
                        to="/male-users"
                      >
                        <v-icon>mdi-human-male</v-icon>
                      </v-btn>
                      <v-card-text>Male Users</v-card-text></v-flex
                    >
                    <v-flex md4>
                      <v-btn
                        class="round white--text"
                        x-large
                        color="#7946C1"
                        to="/female-users"
                      >
                        <v-icon>mdi-human-female</v-icon>
                      </v-btn>
                      <v-card-text>Female Users</v-card-text>
                    </v-flex>
                  </v-card-actions>
                </v-card>
              </v-card-actions>
            </div>
          </v-flex>
          <v-flex xs12 md6>
            <v-card class="right">
              <v-flex md12>
                <v-flex xs12 md4>
                  <v-card-title class="text ml-4"> Male Users </v-card-title>
                  <v-card-subtitle class="grey--text mb-2 ml-4">
                    Filter by
                  </v-card-subtitle>
                </v-flex>
                <v-row>
                  <v-flex xs12 md4>
                    <v-text-field
                      id="user"
                      prepend-inner-icon="mdi-magnify"
                      label="Find in List"
                      type="text"
                      solo
                      class="ml-10"
                    ></v-text-field>
                  </v-flex>
                  <v-flex xs12 md4>
                    <v-autocomplete
                      
                      :items="items"
                      solo
                      dense
                      small-chips
                      height="50px"
                      clearable
                      label="Country"
                      multiple
                      class="ml-10 text--grey"
                    ></v-autocomplete>
                  </v-flex>
                  <v-flex xs12 md4>
                    <v-switch
                      v-model="country"
                      label="Country"
                      class="mb-12 ml-8"
                    ></v-switch>
                  </v-flex>
                </v-row>
                <v-row  class="mt-8">
                  <v-card   width="900" height="115" class="ml-10 mt-4">
                    <v-flex xs1 class="mt-4 ml-4 mr-2"></v-flex>
                    <v-list-item>

                      <v-list-item-content
                        class="ml-6"
                        
                      >
                        <v-list-item-title
                          >{{ getUser.fname }}
                          {{ getUser.fname }} 
                          {{ getUser.ageDob }} </v-list-item-title
                        >
                        <v-list-item-subtitle
                          >{{ getUser.email }}
                          {{ getUser.dateRegistered}}
                          {{ getUser.phone }}
                          {{ getUser.cell }}</v-list-item-subtitle
                        >

                       
                      </v-list-item-content>
                      <v-list-item-action>
                        <v-spacer></v-spacer
                        ><v-btn class="btn white--text" color="#30BBB5"
                          ><v-icon>mdi-arrow-right</v-icon></v-btn
                        >
                      </v-list-item-action>
                    </v-list-item>
                  </v-card>
                </v-row>
              </v-flex>
              <v-card-actions>
                <v-btn
                  rounded
                  class="ma-8 white--text download-btn"
                  color="#7946C1"
                  href="https://randomuser.me/api/?results=99&nat=gb,us,es&format=csv&dl"
                  download
                  ><v-icon class="pa-2">mdi-cloud-download-outline</v-icon>
                  Download</v-btn
                >
                <v-spacer></v-spacer>
                <div class="mr-4">
                  <v-btn rounded class=" " color="#E2E2EA"
                    ><v-icon>mdi-chevron-left</v-icon>
                  </v-btn>
                  <v-btn
                  @click="pagination"
                  rounded class="white--text " color="#262A41"
                    ><v-icon>mdi-chevron-right</v-icon>
                  </v-btn>
                </div>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
  
</template>

<script>
import axios from "axios";
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      title: "Vuetify.js",
      country: true,
      people: [],
      
      

      items: ["Kenya", "Nigeria", "Ghana", "Tz"],
    };
  },

  created: function () {
    axios.get("https://randomuser.me/api/?results=3", ).then((res) => {
      this.people = res.data.results;
    });
  },
  computed: {
    ...mapGetters([
      'getUser'
    ])
  },
  beforeDestroy () {
    clearInterval(this.interval)
  },
  mounted () {
    console.log(this.getUser, 'get user')
    this.interval = setInterval(() => {
      if (this.value === 100) {
        return (this.value = 0)
      }
      this.value += 10
    }, 1000)
  },
  methods: {
    
  }
}
</script>
<style scoped>
.bg {
  background-color: #262a41;
}
.right {
  width: 50%;
  height: 95%;
  border-radius: 35px;
  position: absolute;
  right: 50px;
  top: 20px;
  background-color: #f7f7ff;
}
.left {
  position: absolute;
  top: 250px;
  left: 150px;
  width: 650px;
}
.txt {
  font-family: "Poppins", sans-serif;
}
.round {
  background: 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 30px #00000029;
  border-radius: 20px;
  opacity: 1;
}
.search {
  background: #3c3f54 0% 0% no-repeat padding-box;
  border: 1px solid #3c3f54;
  border-radius: 28px;
  opacity: 1;
}
.text {
  color: #262a41;
  letter-spacing: -0.04px;
  opacity: 1;
  font: normal normal bold 37px/122px Poppins;
}
.greet {
  font: normal normal 200 49px/120px Poppins;
}
.v-text-field {
  width: 300px;
}
.img {
  width: 90px;
  height: 90px;
  border-radius: 50%;
  border: 6px solid #75d6d1;
  opacity: 1;
}
.btn {
  background: #30bbb5 0% 0% no-repeat padding-box;
  box-shadow: 2px 15px 30px #30bbb574;
  border-radius: 13px;
  opacity: 1;
}
.small {
  width: 700px;
}
.download-btn {
  background: #7946c1 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #00000029;
  border-radius: 35px;
  opacity: 1;
}
</style>