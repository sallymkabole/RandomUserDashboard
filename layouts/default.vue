<template>
  <v-app class="bg">
    <v-main>
      <v-container>
        <nuxt></nuxt>
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
  width: 113px;
  height: 113px;
  border-radius: 50%;
  border: 8px solid #75d6d1;
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