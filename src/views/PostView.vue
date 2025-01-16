<template>
   <div class="posts">
      
      <v-row class="mt-md-10">
         <v-col cols="12">
            <div class="land" style="min-height: 25vh;max-height: 100vh;display: flex;text-align: center;flex-direction: column;justify-content: center;align-items: center;">
                  <div class="pa-5" style="backdrop-filter: blur(2px);"><h1 v-if="this.lan==0" class=" hidden-xs text-h1 text-orange" style="text-align: center;">WELCOME</h1>
                     <h1 v-if="this.lan==0" class="text-h2 text-orange hidden-sm-and-up" style="text-align: center;">WELCOME</h1>

                     <h1 v-if="this.lan==1" class=" hidden-xs text-h1 text-orange mb-3" style="text-align: center;">أهلا و سهلا</h1>
                     <h1 v-if="this.lan==1" class="text-h2 text-orange hidden-sm-and-up mb-3" style="text-align: center;">أهلا و سهلا</h1>


                     <v-text-field color="primary" variant="outlined" style="width:100%" append-icon="mdi-magnify"></v-text-field>     
                  </div>
                              
            </div>
         </v-col>
         <v-col cols="12" md="9">
            <v-row class="pa-8 pt-4 px-lg-16 px-md-16 px-sm-8 px-3  mb-6" style="max-width:1000px">
               <v-col cols="12" v-for="i in 4">
                  <v-card elevation="10" variant="flat" class="pa-5" style="">
                     <div style="display:flex;justify-content: space-between;"> <v-card-title>Ahmad moh
                        </v-card-title><p class="text-button">2020/8/8</p></div>
                     <v-img src="../assets/logo.png" width="100%" height="200px"></v-img>
                     <v-card-text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat commodi pariatur vero,
                        velit
                        eligendi repudiandae magnam laboriosam, tempora corporis modi temporibus! Minima et ipsum at
                        sit, iste
                        quos veritatis tempora?</v-card-text>
                     <v-card-actions>
                        <v-btn color="success">Readmore</v-btn>
                     </v-card-actions>
                  </v-card>
               </v-col>
            </v-row></v-col>
         <v-col class="pa-8" cols="12" md="3" >
            <v-list class="pa-5">
               <v-divider thickness="8"></v-divider>
               <h1 v-if="this.lan == 0">Categories</h1>
               <h1 style="direction: rtl;" v-if="this.lan == 1">الاقسام</h1>
               <v-divider thickness="8"></v-divider>
               <v-list-item value="home" v-for="i in 4">home</v-list-item>
            </v-list>
         </v-col>
      </v-row>
   </div>


</template>

<script>
export default {
   name: "PostView",
   data: function () {
      return {
         lan: localStorage.getItem("lan"),
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
   background-image: url("../assets/book.jpg");
   background-position: center;
   background-size: cover;
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