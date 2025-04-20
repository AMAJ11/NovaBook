<template>
  <v-app>  
    <v-app-bar>
      <v-toolbar>
      <v-btn to="/">  <v-icon size="x-large"> mdi-arrow-left </v-icon> </v-btn> 
       <v-btn to="/quraan"> Read Quraan </v-btn> 
       <v-btn to="/about"> About </v-btn>
       <v-spacer></v-spacer>  
       <v-switch style="translate: 0px 10px;" class="hidden-xs" @click="toggleTheme"
       :append-icon='icon == true ? "mdi-weather-night" : "mdi-white-balance-sunny" '></v-switch>
       <v-select :item-title="title" item-value="value" v-model="lan" :items="item">
      </v-select>
    </v-toolbar>
      </v-app-bar>

  <div class="about">
    <h1>This is an about page</h1>
  </div>
      
  
</v-app>
</template>

<style scoped>
 .about{margin:7% 3%}

</style>

<script>
export default {
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

  data(){
    return{
      icon: true,
 item: [
        { title: "EN", value: 0 },
        { title: "AR", value: 1 },
      ],
      lan:+localStorage.getItem("lan")

    }
  }
}
</script>

<script setup>
import { useTheme } from 'vuetify'
const theme = useTheme()
let icon = true
function toggleTheme() {
  icon = !icon;
  theme.global.name.value = theme.global.current.value.dark ? 'myCustomLightTheme' : 'dark'
}
</script>