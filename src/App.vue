<template>
  <v-layout>
    <v-app-bar class="bar">
      <v-toolbar class="hidden-xs">
        <v-avatar style="translate: 0 -20px;" color="grey" rounded="10" size="60" class="mt-10 mr-10 ml-5 hidden-sm-and-down">
          <img src="" alt="">
        </v-avatar>
        <v-btn class="hidden-xs" to="/"> <v-icon>mdi-account</v-icon> Signin/Signup</v-btn>
        <v-btn class="hidden-xs" to="/about"><v-icon>mdi-help</v-icon>About</v-btn>
        <v-btn class="hidden-xs" to="/post"><v-icon>mdi-account</v-icon>posts</v-btn>
        <v-btn class="hidden-xs" to="/quraan"><v-icon>mdi-book</v-icon>Quraan</v-btn>
        <v-spacer></v-spacer>
        <v-switch class="hidden-xs" @click="toggleTheme"
          :append-icon='icon == true ? "mdi-weather-night" : "mdi-white-balance-sunny" '></v-switch>
        <div style="width: 10%;" class="mr-4 hidden-sm">
          <!-- <v-select :item-title="title" item-value="value" v-model="this.lan" :items="this.item">
          </v-select> -->
        </div>
      </v-toolbar>

      <v-toolbar class="hidden-sm-and-up" style="">
        <v-btn class="hidden-sm-and-up" to="/"> <v-icon>mdi-account</v-icon> </v-btn>
        <v-spacer></v-spacer>
        <v-btn class="hidden-sm-and-up" to="/about"><v-icon>mdi-help</v-icon></v-btn>
        <v-spacer></v-spacer>
        <v-btn class="hidden-sm-and-up" to="/post"><v-icon>mdi-account</v-icon></v-btn>
        <v-spacer></v-spacer>
        <v-btn class="hidden-sm-and-up" to="/quraan"><v-icon>mdi-book</v-icon></v-btn>


      </v-toolbar>



      <!-- <v-btn class="hidden-sm-and-down" variant="outlined"
      color="primary"
    >
     <v-icon>mdi-menu-down</v-icon>

      <v-menu activator="parent">
        <v-list>
          <v-list-item
          >
            <v-list-item-title title="" value="sign"><v-btn to="/" variant="text" color="primary">Sign in/up</v-btn>  </v-list-item-title>
            <v-list-item-title title="" value="posts"><v-btn to="/post" variant="text" color="primary">Posts</v-btn>  </v-list-item-title>
            <v-list-item-title title="" value="About"><v-btn to="/about" variant="text" color="primary">About</v-btn>  </v-list-item-title>
            <v-list-item-title title="" value="About"><v-btn to="/quraan" variant="text" color="primary">Quraan</v-btn>  </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-btn> -->




    </v-app-bar>
    <!-- <v-system-bar class=""  style="height: 75px !important;padding-right: 10px;"> -->
    <v-toolbar class="px-7 pt-2 mt-16 hidden-md-and-up" color="orange-darken-3"
      style="height: auto;padding-right: 10px;">
      <v-avatar style="translate: 0 -23px;" color="grey" rounded="10" size="60" class="mt-10">
        <img src="" alt="">
      </v-avatar>
      <v-spacer></v-spacer>
      <v-switch class="hidden-sm-and-up" @click="toggleTheme"
        :append-icon='icon == true ? "mdi-weather-night" : "mdi-white-balance-sunny"'></v-switch>
      <div style="width: 40%;" class="mr-4 hidden-md-and-up">
        <v-select :item-title="title" :item-value="value" v-model="lan" :items="item">
        </v-select>
      </div><br>


    </v-toolbar>
  </v-layout>
  <router-view />
</template>

<script>

export default {
  name: 'App',
  created: function () {
  },
  data: function () {
    return {
      icon: true,
      sw: false,
      path: false,
      item: [
        { title: "EN", value: 0 },
        { title: "AR", value: 1 },
      ],
      lan:+localStorage.getItem("lan")

    }
  },
  watch: {
    icon(newvalue, oldvalue) {
      console.log(newvalue);
      this.icon = newvalue;
    },
    lan(newvalue, oldvalue) {
      console.log(this.lan);
      localStorage.setItem("lan", newvalue);
      window.location.reload();
    }

  },
  methods: {
    ch: function () {
      console.log(this.lan)
      localStorage.setItem("lan", JSON.stringify(this.lan));
      window.location.reload();
    },
  },
  mounted: function () {
    if (!localStorage.getItem("lan")) {
      localStorage.setItem("lan", 0)
    }
  },
}

</script>

<script setup>
import { useTheme } from 'vuetify'
const theme = useTheme()
let icon = true
function toggleTheme() {
  icon = !icon;
  theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
}
</script>

<style scoped>

.sh {
  transition: 0.4s;
  cursor: pointer;
  font-size: 35px !important;
}

.sh:hover {
  rotate: 360deg;
}
</style>

