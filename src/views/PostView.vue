<template>
   <v-progress-linear class="mt-16" color="primary" :height="9" v-if="loadingPage" indeterminate></v-progress-linear>
   <v-app class="pt-3" v-if="!loadingPage">

      <v-row style="max-width: 100% !important;">

         <v-col cols="12" class="bg-myCustomColor1 hidden-sm-and-up"
            style="display: flex;justify-content: space-between;">

            <v-chip style="font-size: 12px;" class="pa-4">الفجر <br> {{ this.fajr }}</v-chip>
            <v-chip style="font-size: 12px;" class="pa-4">الظهر <br>{{ this.zhr }}</v-chip>
            <v-chip style="font-size: 12px;" class="pa-4">العصر <br>{{ this.asr }}</v-chip>
            <v-chip style="font-size: 12px;" class="pa-4">المغرب <br>{{ this.mughrib }}</v-chip>
            <v-chip style="font-size: 12px;" class="pa-4">العشاء <br>{{ this.isha }}</v-chip>


         </v-col>
         <v-col cols="12" class="hidden-xs mt-md-16 bg-myCustomColor1"
            style="flex-wrap: wrap;display: flex;justify-content: space-between ;">
            <v-chip>الفجر {{ this.fajr }}</v-chip>
            <v-chip>الظهر {{ this.zhr }}</v-chip>
            <v-chip>العصر {{ this.asr }}</v-chip>
            <v-chip>المغرب {{ this.mughrib }}</v-chip>
            <v-chip>العشاء {{ this.isha }}</v-chip>

         </v-col>

      </v-row>

      <v-row class="mt-5" style="max-width:100%">
         <v-col cols="12" class="hidden-md-and-up  pl-2">
            <div class="w-100 w-sm-50 mx-auto">
               <SearchComponent />
            </div>
            <h3 style="direction: rtl;text-align: center;" v-if="lan==1">أصدقاؤك</h3>
            <h3 style="text-align: center;" v-if="lan==0">Your Friends</h3>
            <v-slide-group class="custom-slide-group">
               <v-slide-group-item v-for="i in allUsers" :key="i.id">
                  <v-card variant="text" height="140" width="110" @click="GoToProfile(i.id)"
                  
                     style=" overflow: hidden; cursor: pointer;">
                     <div style="height: 100%; display: flex; flex-direction: column">
                        <div style="position: relative;">
                           <v-avatar size="80" style="margin: 0 auto; display: block">
                              <v-img :src="i.image" v-if="i.image"></v-img>
                           </v-avatar>

                           <v-badge v-if="i.isonline && i.image" color="green" dot offset-x="-10" offset-y="10"
                              style="position: absolute; bottom: 10px; right: 20px">
                              <v-tooltip activator="parent">نشط الآن</v-tooltip>
                           </v-badge>
                        </div>

   
                        <v-card-text class="text-center pt-2 pb-0" style="height: 60px; overflow: hidden">
                           <strong
                              style="display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; line-height: 1.2;">
                              {{ i.Name }}
                           </strong>
                        </v-card-text>
                        
                     </div>
                     
                  </v-card>
               </v-slide-group-item>
            </v-slide-group>
         </v-col>





         <v-col cols="12" sm="10" md="8">
            <v-row class="pa-2 pt-4 px-lg-16 px-md-16 px-sm-8 px-3  mb-6" style="">
               <v-col cols="12" v-for="i in this.posts">
                  <v-card elevation="0" variant="solo" class="pa-1 pa-sm-5 w-sm-75 " style="width: 100% !important;">
                     <div style="display:flex;justify-content: space-between;">

                        <v-btn variant="text" :to="getUrl(i.user.id)" color="primary">
                           <v-avatar size="30">
                              <v-img :src="i.user.profilephoto.url"></v-img>
                           </v-avatar>
                           {{
                              i.user.username }} <v-icon> mdi-account </v-icon></v-btn>
                        <p style="translate: 0 14px;font-size: 10px;"> {{ i.createdAt.slice(0, 10) }}</p>
                     </div>
                     <p style="text-align: center;" class="text-button"> {{ i.title }} </p>
                     <div style="width: 100%;display: flex;justify-content: center;align-items: center;">
                        <img class="w-100 w-md-75" :src="i.image.url"
                           style="margin:auto;height: 50vh;width: 80%;border-radius: 12px;">
                     </div>
                     <v-card-text class="text-button">
                        {{ i.description }}
                     </v-card-text>

                     <v-divider></v-divider>
                     <v-card-actions calss="" style="height:15px;display:flex;justify-content: space-between;">

                        <v-btn size="large" class="hidden-sm-and-down" append-icon="mdi-share">Share</v-btn>
                        <v-btn size="large" class="hidden-sm-and-down"
                           @click="this.comment = true; this.comments = i.comments; postid = i.id" color=""
                           append-icon="mdi-message-alert-outline">Comment {{ i.comments.length != 0 ? i.comments.length
                              : '' }} </v-btn>
                        <v-btn size="large" class="hidden-sm-and-down" :loading="this.WillLike"
                           :append-icon="islike(i.id) ? 'mdi-heart' : 'mdi-heart-outline'" @click="addLike(i.id)"
                           :color="islike(i.id) ? 'red' : ''">Love {{ i.likes.length != 0 ? i.likes.length : '' }}
                        </v-btn>

                        <v-btn size="md" class="hidden-md-and-up"
                           :v-ripple="{ class: 'ripple-blue' }"><v-icon>mdi-share</v-icon></v-btn>
                        <v-btn size="md" class="hidden-md-and-up"
                           @click="this.comment = true; this.comments = i.comments; postid = i.id; console.log(comments)"><v-icon>mdi-message-alert-outline</v-icon>
                           {{ i.comments.length != 0 ? i.comments.length : '' }} </v-btn>
                        <v-btn size="md" class="hidden-md-and-up" @click="addLike(i.id)" :loading="this.WillLike"
                           :color="islike(i.id) ? 'red' : ''"><v-icon> {{ islike(i.id) ? 'mdi-heart' :
                              'mdi-heart-outline'
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
         <v-col class="hidden-sm-and-down" cols="12" md="3">
            <v-row class="pt-10">
               <!-- <v-col cols="12" class="hidden-sm-and-down">
                  <v-text-field append-icon="mdi-magnify"></v-text-field>
               </v-col> -->
               <SearchComponent class="hidden-sm-and-down" />
               <v-col cols="12"
                  style="display: flex;justify-content: center;flex-direction: column;align-items: center;">
                  <div style="display: flex;justify-content: space-between;align-items: center;">

                     <h1 style="opacity: 0.4;" v-if="this.lan == 0">Your Friends</h1>
                     <h1 style="direction: rtl;opacity: 0.4;" v-if="this.lan == 1">أصدقاؤك</h1>
                  </div>
                  <v-card class="pa-6" style="height: 75vh;width:90%;overflow: scroll;">
                     <span class="mb-3" v-for="i in allUsers"
                        style="display: flex;align-items: center;cursor: pointer;">
                        <v-badge size="x-small" class="mr-3" v-if="i.isonline && i.image" style="" color="green">
                           <v-tooltip activator="parent">نشط الآن</v-tooltip>
                           <v-avatar>

                              <v-img v-if="i.image" :src="i.image" width="150px"></v-img>
                           </v-avatar></v-badge>

                        <v-avatar class="mr-3" v-if="!i.isonline">

                           <v-img v-if="i.image" :src="i.image" width="150px"></v-img>
                        </v-avatar>
                        <p v-if="i.image"> {{ i.Name }} </p><v-spacer></v-spacer><v-btn v-if="i.image"
                           :to="`/Person-Profile/${i.id}`" variant="text"><v-icon>mdi-eye</v-icon></v-btn>
                     </span>
                     <v-divider thickness="2"></v-divider>
                  </v-card>
               </v-col>
            </v-row>
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
                        <v-btn :to="getUrl(i.user)" append-icon="mdi-account" variant="text" size="small"> {{ i.username
                           }} </v-btn>
                     </span>
                     <p class="mt-1"> {{ i.text }} </p>
                     <v-divider thickness="2"></v-divider>
                  </v-col>

               </v-row>
            </div>
         </v-card>
         <div style="display: flex;" class="mt-4">
            <v-text-field style="border-radius: 20px;" class="mr-3" v-model="CommentText"
               :label="this.comments.length == 0 ? 'Be First one comment' : 'Comment with' + ' ' + username.toUpperCase() + ' ' + 'name'"
               variant="solo"></v-text-field>
            <v-btn style="translate: 0 10px" color="warning" variant="flat" @click="CommentPost()"
               :loading="CommentLoad">Comment</v-btn>
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
import SearchComponent from '@/components/SearchComponent.vue';
import { onActivated } from 'vue';
import axios from 'axios';
import { useGoTo } from 'vuetify/lib/framework.mjs';
export default {
   name: "PostView",
   components: {
      SearchComponent
   },
   data: function () {
      return {
         CommentLoad: null,
         loadingPage: true,
         notify: false,
         CommentText: "",
         postid: "",
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
         likedpost: [],
         followers: [],
         following: [],
         FreindsOnline: [],
         mughrib: 0,
         isha: 0,
         apiurl: process.env.VUE_APP_API_URL,
         WillLike: false,
         username: "",
         freinds: []
      }
   },
   methods: {
      saveuser: async function () {
         try {
            let id = localStorage.getItem("id")
            let userres = await axios.get(`${this.apiurl}/users/profile/${id}`)
            localStorage.setItem("user", JSON.stringify(userres.data.user))
            localStorage.setItem("photourl", userres.data.user.profilephoto.url)

         } catch (error) {
            console.log(error);

         }
      },
      getUrl: function (id) {
         if (id != localStorage.getItem("id")) {
            return `/Person-Profile/${id}`
         }
         else { return "profile-setting" }
      },
      CommentPost: async function () {
         if (this.CommentText != "") {
            let token = localStorage.getItem("token")
            this.CommentLoad = true
            try {
               let response = await axios.post(`${this.apiurl}/comments`,
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

               let j = 0
               let o = this.posts.filter(e => {
                  return e.id == this.postid
               })
               console.log(o);

               console.log(o[0]);
               console.log(o[0].id);

               for (let i = 0; i < this.posts.length; i++) {
                  console.log(o.id, this.posts[i].id);

                  if (o[0].id == this.posts[i].id) {
                     j = i
                  }
               }
               this.posts[j].comments.push({ text: this.CommentText, username: this.username })
               this.CommentText = ""
               this.comment = false

               console.log(j);


            } catch (error) {
               this.comment = false
            }
         }
         this.CommentLoad = false
      },
      SocketConnect: function () {
         //    socket.on('connect', () => {
         //    console.log('Connected to server');
         // });
         // socket.on('GetOnlineUsers', async (data) => {
         //    console.log(this.freinds.length);
         //    if (this.freinds.length > 1) {
         //       for (let j = 0; j < data.length; j++) {
         //          for (let i = 0; i < this.freinds.length; i++) {
         //             if (data[j] != localStorage.getItem("id")) {
         //                if (this.freinds[i].id == data[j]) {
         //                   this.freinds[i].isonline = true
         //                }
         //             }
         //          }
         //       }
         //    }
         //    else {
         //          console.log("length" , data.length);           
         //       for (let i = 0; i < data.length; i++) {
         //          if (data[i] != localStorage.getItem("id")) {
         //             let response = await axios.get(`${this.apiurl}/users/profile/${data[i]}`)
         //             this.FreindsOnline.push(data[i])
         //             this.online = true
         //             console.log(response);
         //             this.freinds.push({ Name: response.data.user.username, isonline: true, id: data[i], image: response.data.user.profilephoto.url })
         //          }
         //       }

         //       this.getFollower();

         //    }

         //    console.log(data);
         //    // سيحدث الواجهة تلقائيًا
         // });
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
      getFollower: async function () {
         this.followers = JSON.parse(localStorage.getItem("user")).followers
         this.following = JSON.parse(localStorage.getItem("user")).following
         for (let i = 0; i < this.followers.length; i++) {
            if (!this.following.includes(this.followers[i])) {
               this.following.push(this.followers[i])
            }
         }
         for (let i = 0; i < this.following.length; i++) {
            let response = await axios.get(`${this.apiurl}/users/profile/${this.following[i]}`)
            this.freinds.push({ Name: response.data.user.username, isonline: false, id: this.following[i], image: response.data.user.profilephoto.url })


         }



         console.log("khara", this.following);
         console.log("freind", this.freinds);




      },
      GoToProfile: function(id){
         this.$router.push(`/Person-Profile/${id}`);
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
      notifyLoad: function () {
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
      this.saveuser()
      localStorage.setItem("islogin", "AMAJHELLO0937379312.omarDH")
      this.getFollower();
      setInterval(() => {
         this.notify = true
         setTimeout(() => {
            this.notify = false
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
      console.log("freind", this.followers);
      console.log("freind2", this.following);

      this.likedpost = JSON.parse(localStorage.getItem("user")).likeposts
      console.log(this.likedpost);
      this.username = JSON.parse(localStorage.getItem("user")).username
      this.loadingPage = false


   },
   computed: {
      allUsers() {
         const merged = [];
         const seenIds = new Set();

         // أولاً: ضف الأصدقاء مع تعديل isonline حسب المتصلين
         for (const friend of this.freinds) {
            const onlineMatch = this.onlineUsers.find((u) => u.id === friend.id);

            const user = {
               ...friend,
               isonline: !!onlineMatch,
            };

            merged.push(user);
            seenIds.add(friend.id);
         }

         // ثانياً: أضف المتصلين غير الموجودين في friends
         for (const online of this.onlineUsers) {
            if (!seenIds.has(online.id)) {
               merged.push({ ...online, isonline: true });
               seenIds.add(online.id);
            }
         }

         return merged;
      },
      onlineUsers() {
         return this.$store.getters.onlineUsers;
      }
   },
   mounted() {

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
.custom-slide-group {
  max-width: 100%;
  margin: 0 auto;
}

.custom-slide-group .v-slide-group__content {
  justify-content: center;
  gap: 4px;
}

/* تعديلات للأجهزة الصغيرة */
@media (max-width: 600px) {
  .custom-slide-group .v-slide-group__content {
    justify-content: flex-start;
  }
}
</style>

<!-- <script setup>
 for(let i =0;i< this.$refs.btn.length;i++){
         console.log( hello);
      }
      
</script> -->