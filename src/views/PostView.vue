<template>
   <v-app class="pt-5">
        
      <v-row class="mt-12 mb-6 dd">
        
         <v-col cols="12" class="dd" >
            <v-row class="px-1 px-md-7" style="backdrop-filter: blur(4px);width:70%;margin:auto">
               <v-col md="2" cols="4"> <v-icon>mdi-weather-sunset</v-icon> <p >الفجر</p> <p class="bg-blue" style="width:fit-content"> {{ this.fajr }} </p>  </v-col>
               <v-spacer></v-spacer>
               <v-col md="2" cols="4"> <v-icon>mdi-white-balance-sunny</v-icon> <p >الظهر</p> <p class="bg-blue" style="width:fit-content"> {{ this.zhr }} </p>  </v-col>
               <v-spacer></v-spacer>
               <v-col md="2" cols="4"> <v-icon>mdi-sun-clock-outline</v-icon><p >العصر</p> <p class="bg-blue" style="width:fit-content"> {{ this.asr }} </p>  </v-col>
               <v-spacer></v-spacer>
               <v-col md="2" cols="4"><v-icon>mdi-weather-sunset-down</v-icon> <p >المغرب</p> <p class="bg-blue" style="width:fit-content"> {{ this.mughrib }} </p>  </v-col>
               <v-spacer></v-spacer>
               <v-col md="2" cols="4"><v-icon>mdi-moon-full</v-icon> <p >العشاء</p> <p class="bg-blue" style="width:fit-content"> {{  this.isha }} </p>  </v-col>
               
            </v-row>
         </v-col>
      </v-row>
      <v-row class="mt-5" style="max-width:100%" >
        
         <v-col cols="12" md="9">
            <v-row class="pa-8 pt-4 px-lg-16 px-md-16 px-sm-8 px-3  mb-6" style="max-width:1000px">
               <v-col cols="12" v-for="i in 4">
                  <v-card elevation="0" variant="text" class="pa-2 pa-sm-5 " style="">
                     <div style="display:flex;justify-content: space-between;"> <v-card-title>Ahmad moh
                        </v-card-title><p class="text-button">2020/8/8</p></div>
                     <v-img src="../assets/logo.png" width="100%" height="200px"></v-img>
                     <v-card-text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat commodi pariatur vero,
                        velit
                        eligendi repudiandae magnam laboriosam, tempora corporis modi temporibus! Minima et ipsum at
                        sit, iste
                        quos veritatis tempora?</v-card-text>
                        <v-divider></v-divider>
                        <v-card-actions calss="" style="height:15px;display:flex;justify-content: space-between;">
                   
                        <v-btn size="large" class="hidden-sm-and-down"  append-icon="mdi-plus">Readmore</v-btn>
                        <v-btn size="large" class="hidden-sm-and-down" @click="this.comment=true" color="" append-icon="mdi-message-alert-outline">Comment</v-btn>
                        <v-btn size="large" class="hidden-sm-and-down"  append-icon="mdi-thumb-up-outline">Like</v-btn>

                        <v-btn size="large" class="hidden-md-and-up"   :v-ripple="{ class: 'ripple-blue' }"><v-icon>mdi-plus</v-icon></v-btn>
                        <v-btn size="large" class="hidden-md-and-up" @click="this.comment=true" ><v-icon>mdi-message-alert-outline</v-icon></v-btn>
                        <v-btn size="large" class="hidden-md-and-up"><v-icon>mdi-thumb-up-outline</v-icon></v-btn>
                     </v-card-actions>
                     <v-divider></v-divider>
                     <v-divider class="mt-4" thickness="8"></v-divider>
                  </v-card>
               </v-col>
            </v-row></v-col>
         <v-col class="pa-8" cols="12" md="3" >
            <h1 style="opacity: 0.4;" v-if="this.lan == 0">Categories</h1>
               <h1  style="direction: rtl;opacity: 0.4;" v-if="this.lan == 1">الاقسام</h1>
            <v-list class="pa-5">
               
               <v-list-item value="home" v-for="i in 4">home</v-list-item>
            </v-list>
               <h2 class="mt-6" style="opacity: 0.4;"> </h2>
               <h1 style="opacity: 0.4;"  v-if="this.lan == 0">Your Friends</h1>
               <h1  style="direction: rtl;opacity: 0.4;" v-if="this.lan == 1">أصدقاؤك</h1>
               <v-card class="pa-6" style="height: 75vh;width:100%;overflow: scroll;">
               
               <span class="mb-3" v-for="i in 33" style="display: flex;align-items: center;cursor: pointer;"><v-avatar> <v-img src="../assets/logo.png" width="150px"></v-img></v-avatar> <p>Ammar AJ</p><v-spacer></v-spacer><v-btn to="/freinds/:id" variant="text"><v-icon>mdi-eye</v-icon></v-btn></span>
               <v-divider thickness="2"></v-divider>
            </v-card>
         </v-col>
      </v-row>
    <V-dialog style="height:400px;max-width:700px" v-model="this.comment">
       <h2>Comments</h2>
        <v-card style="width:100%;margin:auto;min-height: 300px;border-radius: 15px;">
         <v-icon @click="this.comment=false" variant="text" style="position: fixed; top:0;right:0;z-index:12" class="cls" color="red">mdi-close</v-icon> 
         <div style="min-height:100%">
            <v-row class="pa-9 pb-16">
               <v-col class="mb-5" style="display: flex;flex-direction: column;" cols="12" v-for="i in 14">
                 
                  <span style="display: flex;"><v-avatar> <v-img src="../assets/logo.png" width="150px"></v-img></v-avatar> <h3>Ammar AJ</h3></span> <p> {{ i }}  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam unde accusamus deleniti nesciunt, ab, cumque porro ut, dolorum sapiente aliquid laborum praesentium? Sed iure dolorem aperiam veritatis ab! Quidem, corrupti.ر</p>
                  <v-divider thickness="4"></v-divider>
               </v-col>
               
            </v-row>
         </div>
        </v-card>
       <div style="display: flex;"  class="mt-4">
        <v-text-field class="mr-3" label="New Comment" variant="solo"></v-text-field>
        <v-btn style="translate: 0 10px" color="warning" variant="flat">Comment</v-btn></div>
    </V-dialog>
</v-app>

</template>

<script>
import { onActivated } from 'vue';
import axios from 'axios';
export default {
   name: "PostView",
   data: function () {
      return {
      color1:false,
         lan: localStorage.getItem("lan"),
         active:[],
         btn: 0,
         comment: false,
         prayerTimes:{},
         fajr:0,
         zhr:0,
         asr:0,
         mughrib:0,
         isha:0
      }
   },
   methods:{
      btn: function(){
         console.log(this.$refs.btn);
      }
   },
   created: async function () {
      let lang = localStorage.getItem("lan");
      this.lan = lang;
      try {
        const date = new Date();
        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        const day = date.getDate();
     const lat= JSON.parse(localStorage.getItem("lat"));
     const long= JSON.parse(localStorage.getItem("long"));
     console.log(lat, long);
     
     
        const response = await axios.get(
          `http://api.aladhan.com/v1/timings/${day}-${month}-${year}`,
          {
            params: {
              latitude: lat ,
              longitude: long,
              method: 4,
            }
          }
        );
this.fajr= response.data.data.timings.Fajr
this.zhr= response.data.data.timings.Dhuhr
this.asr= response.data.data.timings.Asr
this.mughrib= response.data.data.timings.Maghrib
this.isha= response.data.data.timings.Isha
      
        
      } catch (error) {
        console.error('Error fetching prayer times:', error);;
      } finally {
        this.loading = false;
      }
     
    
      
   },
}
</script>
<style scoped>
.cls{
   transition: 0.4s;
}
.cls:hover{
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
.dd{
   min-height: 20vh;
   background-image: url('../assets/Mosque_PNG_image_with_transparent_background-removebg-preview.png');
   background-repeat: repeat-x;
   background-size: contain;


}
@media (max-width:450px) {
    .dd{min-height: 100vh;background-size: cover;}
}
</style>

<!-- <script setup>
 for(let i =0;i< this.$refs.btn.length;i++){
         console.log( hello);
      }
      
</script> -->