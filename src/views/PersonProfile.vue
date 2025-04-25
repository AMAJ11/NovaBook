<template>
    <v-app class="pa-2 pa-md-16 pb-0">
        <v-container>
            <v-row>
                <v-col cols="12">
                    <v-avatar style="" size="300">
                        <v-img :src="profilephoto"></v-img>
                    </v-avatar>
                    <div class="mb-3 mt-4" style="display: block !important;">
                        <v-btn variant="text"> <v-icon color="primary"> mdi-message </v-icon>
                            <v-tooltip location="top" activator="parent"> Chat with him </v-tooltip>
                        </v-btn>
                        <v-btn variant="text"> <v-icon color="primary"> mdi-post-outline </v-icon>
                            <v-tooltip location="bottom" activator="parent"> view all posts </v-tooltip>
                        </v-btn>
                        <v-btn color="warning" append-icon="mdi-plus">Follow</v-btn>
                    </div>
                    <v-chip>followers: {{ +user.followers }} </v-chip><v-chip class="ml-2">following: {{ +user.following }} </v-chip>
                    <v-chip class="ml-2"> posts: 7</v-chip>
                </v-col>
                <v-col cols="12" sm="12" md="3">
                    <v-card class="px-3 py-1">
                        <p class="text-button text-primary"> Name </p>
                        <p> {{ user.username }} </p>
                    </v-card>
                </v-col>
                <v-col cols="12" sm="6" md="3" >
                    <v-card class="px-3 py-1">
                    <p class="text-button text-primary"> From </p>
                    <p> {{ user.Country +'/'+user.City  }} </p>
                </v-card>
                </v-col>
                <v-col cols="12" sm="6" md="3"><v-card class="px-3 py-1">
                    <p class="text-button text-primary"> Gender </p>
                    <p> {{ user.Gender }} </p></v-card>
                </v-col>
                <v-col cols="12" md="9"><v-card class="px-3 py-1">
                    <p class="text-button text-primary"> Bio </p>
                    <p> {{ `none` }} </p></v-card>
                </v-col>
                <v-col cols="12" md="9">
                    <v-card class="px-3 py-1">
                    <p class="text-button text-primary"> Birthday </p>
                    <p> {{ user.birthdate }} </p></v-card>
                </v-col>
            </v-row>
        </v-container>
    </v-app>
</template>

<script>
import axios from 'axios';

export default {
    data(){
        return{
            user:{},
            apiurl: process.env.VUE_APP_API_URL,
            id: "",
            profilephoto:""
        }
       
    },
  created: async function(){
       this.id= this.$route.params.id
       let response = await axios.get(`${this.apiurl}/users/profile/${this.id}`)
       this.user= response.data.user
       console.log(this.user);
       this.profilephoto = this.user.profilephoto.url
       
  }
}
</script>

<style scoped></style>