<template>
  <v-app class="bg">
    <v-main>
      <v-container >
        <v-layout row class="txt" >
          <v-flex md6>
            <div class="left">
              <v-card-title class="headline"> Hello User </v-card-title>
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
                    
                    type="text"
                    class="search"
                    
                    
                  ></v-text-field>
                  
                </div>
                
              </v-card-text>
              <v-card-title > Show Users </v-card-title>
               <v-card-actions class="ml-2">
              
              <v-btn  class="round" x-large color="#F935A9"> <v-icon>mdi-account-group</v-icon> </v-btn ><v-btn class="round"  x-large color="#30BBB5"> <v-icon>mdi-human-male</v-icon> </v-btn>
              <v-btn class="round"  x-large color="#7946C1"> <v-icon>mdi-human-female</v-icon>  </v-btn>

            </v-card-actions>
            </div>

           
          </v-flex>
          <v-flex ms6>
            <v-card class="white right">
              <v-card-title class="headline">
                Random User Dashboard
              </v-card-title>
            </v-card></v-flex
          >
        </v-layout>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      title: "Vuetify.js",
      queryUser: {
        name:""
      }
    };
  },
};
</script>
<style scoped>
.bg {
  background-color: #262a41;
}
.right {
  width: 50%;
  height: 90%;
  border-radius: 35px;
  position: absolute;
  right: 50px;
  top: 50px;
}
.left {
  position: absolute;
  top: 250px;
  left: 25px;
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
.search{
background: #3C3F54 0% 0% no-repeat padding-box;
border: 1px solid #3C3F54;
border-radius: 28px;
opacity: 1;
}
</style>
