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
                    v-model="queryUser.name"
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
                        @click="displayMales"
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
                      v-model="queryUser.name"
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
                  <v-card  v-for="(person, key) in people"
                        :key="key" width="900" height="115" class="ml-10 mt-4">
                    <v-flex xs1 class="mt-4 ml-4 mr-2"></v-flex>
                    <v-list-item>
                      <img v-bind:src="person.picture.large" v-bind:alt="person" class=" img">

                      <v-list-item-content
                        class="ml-6"
                        
                      >
                        <v-list-item-title
                          >{{ person.name.first }}
                          {{ person.name.last }} </v-list-item-title
                        >
                        <v-list-item-subtitle
                          >{{ person.location.street.number }}
                          {{ person.location.city }}
                          {{ person.location.state }}</v-list-item-subtitle
                        >

                        <v-list-item-subtitle
                          ><v-icon>mdi-email-outline</v-icon> {{ person.email }}

                          <v-icon>mdi-phone-in-talk</v-icon> {{ person.phone }}
                        </v-list-item-subtitle>
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
                  href="https://randomuser.me/api/?gender=male&nat=gb,us,es&format=csv&dl"
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
export default {
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      title: "Vuetify.js",
      country: true,
      people: [],
      
      queryUser: {
        name: "",
      },

      items: ["Kenya", "Nigeria", "Ghana", "Tz"],
    };
  },

  created: function () {
    axios.get("https://randomuser.me/api/?gender=male&results=3").then((res) => {
      this.people = res.data.results;
    });
  },
  methods: {
    
    displayMales () {
      axios.get("https://randomuser.me/api/?gender=male").then((res) => {
      this.people = res.data.results;
    });
    },
    pagination () {
      axios.get("https://randomuser.me/api/?page=3&gender=male&results=3&seed=3").then((res) => {
      this.people = res.data.results;
    })
    }
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