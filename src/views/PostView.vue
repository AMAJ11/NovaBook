<template>
   <v-app class="pt-3">

      <v-row class="hidden-md-and-up">

         <v-col cols="12" class="bg-primary" style="display: flex;justify-content: space-between;">

            <v-chip class="pa-5">الفجر <br> {{ this.fajr }}</v-chip>
            <!-- <v-chip class="pa-5">الفجر <br> {{ this.fajr }}</v-chip>
                  <v-chip class="pa-5">الفجر <br> {{ this.fajr }}</v-chip>
                  <v-chip class="pa-5">الفجر <br> {{ this.fajr }}</v-chip>
                  <v-chip class="pa-5">الفجر <br> {{ this.fajr }}</v-chip> -->
            <v-chip class="pa-5">الظهر <br>{{ this.zhr }}</v-chip>
            <v-chip class="pa-5">العصر <br>{{ this.asr }}</v-chip>
            <v-chip class="pa-5">المغرب <br>{{ this.mughrib }}</v-chip>
            <v-chip class="pa-5">العشاء <br>{{ this.isha }}</v-chip>


         </v-col>
      </v-row>

      <v-row>

         <v-col cols="12" class="bg-primary hidden-sm-and-down mt-8"
            style="flex-wrap: wrap;display: flex;justify-content: space-between;">

            <v-chip>الفجر {{ this.fajr }}</v-chip>
            <v-chip>الظهر {{ this.zhr }}</v-chip>
            <v-chip>العصر {{ this.asr }}</v-chip>
            <v-chip>المغرب {{ this.mughrib }}</v-chip>
            <v-chip>العشاء {{ this.isha }}</v-chip>


         </v-col>
      </v-row>
      <v-row class="mt-5" style="max-width:100%">

         <v-col cols="12" md="8">
            <v-row class="pa-2 pt-4 px-lg-16 px-md-16 px-sm-8 px-3  mb-6" style="">
               <v-col cols="12" v-for="i in this.posts">
                  <v-card elevation="0" variant="solo" class="pa-1 pa-sm-5 " style="width: 100% !important;">
                     <div style="display:flex;justify-content: space-between;">

                           <v-btn variant="text" :to="`/Person-Profile/${i.user.id}`" color="primary">
                              <v-avatar size="30">
                                 <v-img :src="i.user.profilephoto.url"></v-img>
                              </v-avatar>
                              {{
                                 i.user.username }} <v-icon> mdi-account </v-icon></v-btn>
                        <p style="translate: 0 14px;font-size: 10px;"> {{ i.createdAt.slice(0, 10) }}</p>
                     </div>
                     <p style="text-align: center;" class="text-button"> {{ i.title }} </p>
                     <div style="width: 100%;display: flex;justify-content: center;align-items: center;">
                        <img
                        class="w-100 w-md-75"
                           :src="i.image.url" style="margin:auto;height: 50vh;width: 80%;border-radius: 12px;"></div>
                     <v-card-text class="text-button">
                        {{ i.description }}
                     </v-card-text>
                     <v-chip class="mb-5" color="green" variant="flat">
                        {{ i.category }}
                     </v-chip>
                     <v-divider></v-divider>
                     <v-card-actions calss="" style="height:15px;display:flex;justify-content: space-between;">

                        <v-btn size="large" class="hidden-sm-and-down" append-icon="mdi-share">Share</v-btn>
                        <v-btn size="large" class="hidden-sm-and-down"
                           @click="this.comment = true; this.comments = i.comments;postid=i.id" color=""
                           append-icon="mdi-message-alert-outline">Comment {{ i.comments.length != 0 ? i.comments.length
                           : '' }} </v-btn>
                        <v-btn size="large" class="hidden-sm-and-down" :loading="this.WillLike"
                           :append-icon="islike(i.id) ? 'mdi-heart' : 'mdi-heart-outline'" @click="addLike(i.id)"
                           :color="islike(i.id) ? 'red' : ''">Love {{ i.likes.length != 0 ? i.likes.length : '' }} </v-btn>

                        <v-btn size="md" class="hidden-md-and-up"
                           :v-ripple="{ class: 'ripple-blue' }"><v-icon>mdi-share</v-icon></v-btn>
                        <v-btn size="md" class="hidden-md-and-up"
                           @click="this.comment = true; this.comments = i.comments;postid=i.id;console.log(comments)"><v-icon>mdi-message-alert-outline</v-icon>
                           {{ i.comments.length != 0 ? i.comments.length : '' }} </v-btn>
                        <v-btn size="md" class="hidden-md-and-up" @click="addLike(i.id)" :loading="this.WillLike"
                           :color="islike(i.id) ? 'red' : ''"><v-icon> {{ islike(i.id) ? 'mdi-heart' : 'mdi-heart-outline'
                              }}</v-icon>
                           <p> {{ i.likes.length != 0 ? i.likes.length : null }} </p>
                        </v-btn>
                     </v-card-actions>
                     <v-divider></v-divider>
                     <v-divider class="mt-4" thickness="8"></v-divider>
                  </v-card>
               </v-col>
            </v-row></v-col>
         <v-spacer></v-spacer>
         <v-col class="pa-8" cols="12" md="3">
            <h1 style="opacity: 0.4;" v-if="this.lan == 0">Categories</h1>
            <h1 style="direction: rtl;opacity: 0.4;" v-if="this.lan == 1">الاقسام</h1>
            <v-list class="pa-5">

               <v-list-item value="home" v-for="i in 4">home</v-list-item>
            </v-list>
            <h2 class="mt-6" style="opacity: 0.4;"> </h2>
            <h1 style="opacity: 0.4;" v-if="this.lan == 0">Your Friends</h1>
            <h1 style="direction: rtl;opacity: 0.4;" v-if="this.lan == 1">أصدقاؤك</h1>
            <v-card class="pa-6" style="height: 75vh;width:100%;overflow: scroll;">

               <span class="mb-3" v-for="i in 33" style="display: flex;align-items: center;cursor: pointer;"><v-avatar>
                     <v-img src="../assets/logo.png" width="150px"></v-img></v-avatar>
                  <p>Ammar AJ</p><v-spacer></v-spacer><v-btn to="/Person-Profile/:87986"
                     variant="text"><v-icon>mdi-eye</v-icon></v-btn>
               </span>
               <v-divider thickness="2"></v-divider>
            </v-card>
         </v-col>
      </v-row>
      <V-dialog style="height:400px;width: 60%;min-width: 300px" v-model="this.comment">
         <h2>Comments</h2>
         <v-card style="width:100%;margin:auto;min-height: 300px;border-radius: 15px;">
            <v-icon @click="this.comment = false" variant="text" style="position: fixed; top:0;right:0;z-index:12"
               class="cls" color="red">mdi-close</v-icon>
            <div style="min-height:100%">
               <v-row class="pa-9 pb-16">
                  <v-col class="mb-5" style="display: flex;flex-direction: column;" cols="12" v-for="i in comments">

                     <span style="display: flex;align-items: center;"><v-avatar> <v-img :src="i.profilephoto"
                              width="150px"></v-img></v-avatar>
                        <v-btn :to="`/Person-Profile/${i.user}`" append-icon="mdi-account" variant="text" size="small"> {{ i.username }} </v-btn>
                     </span>
                     <p class="mt-1"> {{ i.text }} </p>
                     <v-divider thickness="2"></v-divider>
                  </v-col>

               </v-row>
            </div>
         </v-card>
         <div style="display: flex;" class="mt-4">
            <v-text-field style="border-radius: 20px;" class="mr-3" v-model="CommentText" :label="this.comments.length == 0 ? 'Be First one comment' : 'Comment with'+' '+ username.toUpperCase() +' '+'name'" variant="solo"></v-text-field>
            <v-btn style="translate: 0 10px" color="warning" variant="flat" @click="CommentPost()">Comment</v-btn>
         </div>
      </V-dialog>

      <!-- <v-card class="pa-2 pt-0" v-if="notify" style="position: fixed;top: 15%;left:1%;width:20%;height: 20vh;display: flex;align-items: center;justify-content: center;flex-direction: column;">
      <div style="display: flex;align-items: center;">
         <v-icon size="x-large" color="warning"variant="flat">mdi-help</v-icon>
      <v-card-text>
        Lorem ipsum dolor sit 
      </v-card-text>
      </div>
      <v-progress-linear color="primary" style="" :indeterminate="true"></v-progress-linear>
    </v-card> -->


      

<!-- 
      <v-dialog location="top-left" v-model="notify" :persistent="false" style="width:30%;height: 30vh">
    <v-card>
      <v-card-title>notify</v-card-title>
      <v-card-text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae accusantium quia soluta voluptas in, quibusdam
        expedita ea minima, molestias omnis sint. Omnis eaque cum excepturi eos minima accusantium architecto
        perferendis!
      </v-card-text>
    </v-card>
  </v-dialog> -->
   </v-app>

</template>

<script>
import { onActivated } from 'vue';
import axios from 'axios';
export default {
   name: "PostView",
   data: function () {
      return {
         notify:false,
         CommentText:"",
         postid:"",
         comments: [],
         posts: {},
         color1: false,
         lan: localStorage.getItem("lan"),
         active: [],
         btn: 0,
         comment: false,
         prayerTimes: {},
         fajr: 0,
         zhr: 0,
         asr: 0,
         mughrib: 0,
         isha: 0,
         apiurl: process.env.VUE_APP_API_URL,
         WillLike: false,
         username:""
      }
   },
   methods: {
      CommentPost: async function(){
         if(this.CommentText !=""){
         let token = localStorage.getItem("token")
         try {
            let response =  await axios.post(`${this.apiurl}/comments`,
        {
         postId: this.postid,
         text: this.CommentText
        },
               {
                  headers: {
                     'Authorization': `Bearer ${token}`,
                     'Content-Type': 'application/json'
                  }
               }
        )
        console.log(response.data);

                let j=0
        let o = this.posts.filter(e=>{
         return e.id == this.postid
        })
        console.log(o);
        
        console.log(o[0]);
        console.log(o[0].id);
        
        for(let i=0;i<this.posts.length;i++){
         console.log(o.id,this.posts[i].id);
         
         if(o[0].id==this.posts[i].id){
            j=i 
         }
        }
        this.posts[j].comments.push({text: this.CommentText,  username: this.username })
    this.CommentText= ""
        this.comment=false

 console.log(j);
 
        
         } catch (error) {
            this.comment=false
         }
      }
      
      },
      saveuser: async function () {
         try {
            let id = localStorage.getItem("id")
            let userres = await axios.get(`${this.apiurl}/users/profile/${id}`)
            localStorage.setItem("user", JSON.stringify(userres.data.user))
            console.log(userres.data);
            localStorage.setItem("photourl", userres.data.user.profilephoto.url)

         } catch (error) {
            console.log(error);

         }
      },
      addLike: async function (id) {
         this.WillLike = true
         this.likedpost = JSON.parse(localStorage.getItem("user")).likeposts;
         if (this.islike(id) == false) {
            this.likedpost.push(id)
            this.posts.map(e => {
               if (e.id == id) {
                  e.likes.push(id)
               }
            })

         } else {
            this.likedpost = this.likedpost.filter(item => item !== id);
            this.posts.map(e => {
               if (e.id == id) {
                  let i = e.likes.indexOf(id)
                  e.likes.splice(i, 1)

               }
            })
         }
         this.WillLike = false
         let token = localStorage.getItem("token")
         try {
            let response = await axios.patch(`${this.apiurl}/posts/like/${id}`,
               {},
               {
                  headers: {
                     'Authorization': `Bearer ${token}`,
                     'Content-Type': 'application/json'
                  }
               }
            );
            console.log(response.data);

         } catch (error) {
            console.log(error);

         }
         this.saveuser()
        
         console.log(this.islike(id));

         console.log(this.likedpost);
      
      },
      notifyLoad: function(){
      },
      islike: function (id) {

         if (this.likedpost.includes(id)) {
            return true
         } else {
            return false
         }
      },
      btn: function () {
         console.log(this.$refs.btn);
      }
   },
   created: async function () {
      setInterval(() => {
      this.notify=true
      setTimeout(() => {
         this.notify=false
      }, 5000);
    }, 10000);

      this.saveuser();
      try {
         let posts = await axios.get(`${this.apiurl}/posts`)
         console.log(posts.data.posts);
         this.posts = posts.data.posts.reverse();

      } catch (error) {
         console.log(error);

      }

      let lang = localStorage.getItem("lan");
      this.lan = lang;
      try {
         const date = new Date();
         const year = date.getFullYear();
         const month = date.getMonth() + 1;
         const day = date.getDate();
         const lat = JSON.parse(localStorage.getItem("user")).lat;
         const long = JSON.parse(localStorage.getItem("user")).lat;
         console.log(lat, long);


         const response = await axios.get(
            `https://api.aladhan.com/v1/timings/${day}-${month}-${year}`,
            {
               params: {
                  latitude: lat,
                  longitude: long,
                  method: 4,
               }
            }
         );
         this.fajr = response.data.data.timings.Fajr
         this.zhr = response.data.data.timings.Dhuhr
         this.asr = response.data.data.timings.Asr
         this.mughrib = response.data.data.timings.Maghrib
         this.isha = response.data.data.timings.Isha


      } catch (error) {
         console.error('Error fetching prayer times:', error);;
      } finally {
         this.loading = false;
      }

   },
   mounted: function () {
      this.likedpost = JSON.parse(localStorage.getItem("user")).likeposts
      console.log(this.likedpost);
      this.username = JSON.parse(localStorage.getItem("user")).username
   }
}
</script>
<style scoped>
.cls {
   transition: 0.4s;
}

.cls:hover {
   rotate: 240deg;
}

.posts {
   height: auto;
}

@media (max-width:1000px) {
   .posts {
      max-width: 98%
   }
}

.dd {
   min-height: 20vh;
   background-image: url('../assets/Mosque_PNG_image_with_transparent_background-removebg-preview.png');
   background-repeat: repeat-x;
   background-size: contain;


}

@media (max-width:450px) {
   .dd {
      min-height: 100vh;
      background-size: cover;
   }
}
</style>

<!-- <script setup>
 for(let i =0;i< this.$refs.btn.length;i++){
         console.log( hello);
      }
      
</script> -->