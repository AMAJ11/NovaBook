<template>
   <v-app>
         <v-row class="mt-md-14" style="width:99%">

            <v-col style="display:flex;flex-direction: column; justify-items: space-around;margin: auto;" cols="6"> 
            <v-img style="margin:auto" width="200px" src="../assets/serch.png"></v-img>   
            <h1 v-if="this.lan==0" class=" hidden-xs text-h1 text-orange" style="text-align: center;">WELCOME</h1>
                  <h1 v-if="this.lan==0" class="text-h2 text-orange hidden-sm-and-up" style="text-align: center;">WELCOME</h1>

                  <h1 v-if="this.lan==1" class=" hidden-xs text-h1 text-orange mb-3" style="text-align: center;">أهلا و سهلا</h1>
                  <h1 v-if="this.lan==1" class="text-h2 text-orange hidden-sm-and-up mb-3" style="text-align: center;">أهلا و سهلا</h1>


                  <v-text-field color="primary" variant="outlined" style="width:100%" ></v-text-field>
                  <v-btn style="margin:auto" color="success"> <v-icon>mdi-magnify</v-icon> </v-btn>     
            </v-col>    
    
         </v-row>
      <v-row style="max-width:100%" >
        
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
        <v-btn @click="this.comment=false" variant="text" style="position: fixed; top:0;right:0;z-index:12"> <v-icon color="red">mdi-close</v-icon> </v-btn>  
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

export default {
   name: "PostView",
   data: function () {
      return {
      color1:false,
         lan: localStorage.getItem("lan"),
         active:[],
         btn: 0,
         comment: false
      }
   },
   methods:{
      btn: function(){
         console.log(this.$refs.btn);
      }
   },
   created: function () {
      let lang = localStorage.getItem("lan");
      this.lan = lang;
      
   
    
      
   },
}
</script>
<style scoped>

.land{
}
.posts {
   height: auto;
}

@media (max-width:1000px) {
   .posts {
      max-width: 98%
   }
}
</style>

<!-- <script setup>
 for(let i =0;i< this.$refs.btn.length;i++){
         console.log( hello);
      }
      
</script> -->