<template>
  <v-app class="bg">
    <v-main>
      <v-container>
        <v-layout row>
           <v-flex xs6>
            </v-flex>
           <v-flex xs6> <v-card class="white right mt-12">
            <v-card-title class="headline">
              Random User Dashboard
            </v-card-title>
            <v-card-text>
              <p>
                Vuetify is a progressive Material Design component framework for
                Vue.js. It was designed to empower developers to create amazing
                applications.
              </p>
              <p>
                For more information on Vuetify, check out the
                <a
                  href="https://vuetifyjs.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  documentation </a
                >.
              </p>

              <p>
                Thank you for developing with Vuetify and I look forward to
                bringing more exciting features in the future.
              </p>
              <div class="text-xs-right">
                <em><small>&mdash; John Leider</small></em>
              </div>
              <hr class="my-3" />
              <a
                href="https://nuxtjs.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Nuxt Documentation
              </a>
              <br />
              <a
                href="https://github.com/nuxt/nuxt.js"
                target="_blank"
                rel="noopener noreferrer"
              >
                Nuxt GitHub
              </a>
            </v-card-text>
            <v-card-actions>
              <v-spacer />
              <v-btn color="primary" nuxt to="/inspire"> Continue </v-btn>
            </v-card-actions>
          </v-card></v-flex>
         
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
      items: [
        {
          icon: "mdi-apps",
          title: "Welcome",
          to: "/",
        },
        {
          icon: "mdi-chart-bubble",
          title: "Inspire",
          to: "/inspire",
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: "Vuetify.js",
    };
  },
};
</script>
<style scoped>
.bg {
  background-color: #262a41;
}
.right {
  width: 800px;
  
}
</style>
