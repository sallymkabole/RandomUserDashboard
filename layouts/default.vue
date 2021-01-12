<template>
  <v-app class="bg">
     <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
  </v-app>
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
      quantity: 3,
      queryUser: {
        name: "",
      },

      items: ["Kenya", "Nigeria", "Ghana", "Tz"],
    };
  },
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
</style>