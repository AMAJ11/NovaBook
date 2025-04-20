<template>
    <div class="home">
        <h1 class="ml-8 text-h2" v-if="this.lan == 0">My Profile</h1>

        <h1 class="mr-8 text-h2" v-if="this.lan == 1" style="direction: rtl;">ملفي الشخصي</h1>
        <p class="text-h4 ma-9 mb-1" v-if="this.lan == 0"> My posts  </p>
        <p class="text-h4 ma-9 mb-1" v-if="this.lan == 1" style="direction: rtl;"> منشوراتي </p>
        <v-row class="pa-7 mt-3">
  
                 
               <v-col cols="12" md="4" v-for="i in this.posts">
                  <v-card elevation="0" variant="solo" class="pa-2 pa-sm-5 " style="width: 100% !important;">
                     <div style="display:flex;justify-content: space-between;text-align: center;">
                        <v-card-title>

                           <v-btn variant="text" :to="`/Person-Profile/${i.user.id}`" color="primary">
                              <v-avatar size="30">
                                 <v-img :src="i.user.profilephoto.url"></v-img>
                              </v-avatar>
                              {{
                                 i.user.username }} <v-icon> mdi-account </v-icon></v-btn>

                        </v-card-title>
                        <p style="translate: 0 14px;"> {{ i.createdAt.slice(0, 10) }}</p>
                     </div>
                     <p style="text-align: center;" class="text-button"> {{ i.title }} </p>
                     <div style="width: 100%;display: flex;justify-content: center;align-items: center;"><img
                           :src="i.image.url" style="margin:auto;height: 55vh;width: 80%;border-radius: 12px;"></div>
                     <v-card-text class="text-button">
                        {{ i.description }}
                     </v-card-text>
                     <v-chip class="mb-5" color="green" variant="flat">
                        {{ i.category }}
                     </v-chip>
                     <v-divider></v-divider>
                     <v-card-actions calss="" style="height:15px;display:flex;justify-content: space-between;">
                        <v-btn size="large"
                           @click="this.comment = true"><v-icon>mdi-message-alert-outline</v-icon></v-btn>
                          <v-icon>mdi-thumb-up-outline</v-icon>
                           <p> {{ i.likes.length }} </p>
                        
                     </v-card-actions>
                     <v-divider></v-divider>
                     <v-divider class="mt-4" thickness="8"></v-divider>
                     <v-btn color="red">Delete post</v-btn>
                  </v-card>
               </v-col>





            </v-row>




        <v-row v-if="this.lan == 0" class="px-6 px-sm-8 px-md-16 mt-6 pb-10 mt-6">

            <v-col md="6" lg="6" sm="12" cols="12">
                <v-divider></v-divider>
                <v-form ref="form1" @submit.prevent="post" >
               <p class="text-h4"> New Post</p>
                <v-divider></v-divider>
                <v-img v-if="this.image != null" width="100%" height="300px" :src="this.imageurl"></v-img>
                <v-text-field :rules="this.usernamerule" v-model="this.title" label="title"> </v-text-field>
                <v-textarea :rules="this.usernamerule" class="mt-4" label="post" prepend-icon="mdi-post-outline" v-model="this.postText">

                </v-textarea>
                <v-file-input :rules="this.usernamerule" style="border-radius: 12px !important;" class="bg-orange  mt-10 px-3 pt-1"
                    v-model="this.image" @change="onFileSelected" label="Post image" type="file" accept="image/*"
                    placeholder="Pick an avatar" append-icon="mdi-camera"></v-file-input>
                <v-select :rules="this.usernamerule" :items="['music','politic']" label="category" class="mt-3" v-model="this.cat"></v-select>
                <v-btn class="mt-4  mb-16" type="submit" @click="" color="green"> post </v-btn>
            </v-form>

            </v-col>
            <v-spacer></v-spacer>

            <v-col md="6" lg="4" sm="12" cols="12">
                <v-divider></v-divider>
                <p class="text-h4">Change Account information</p>
                <v-divider></v-divider>
                <v-expansion-panels>
                    <v-expansion-panel class="mb-3">
                        <v-expansion-panel-title collapse-icon="mdi-minus" expand-icon="mdi-plus">
                            Change Name of Account


                        </v-expansion-panel-title>
                        <v-expansion-panel-text>
                            <VTextField label="name" prepend-icon="mdi-account"></VTextField>
                            <v-btn>ok</v-btn>
                        </v-expansion-panel-text>
                    </v-expansion-panel>

                    <v-expansion-panel class="mb-3">
                        <v-expansion-panel-title collapse-icon="mdi-minus" expand-icon="mdi-plus">
                            Change Password of Account


                        </v-expansion-panel-title>
                        <v-expansion-panel-text>
                            <VTextField label="Old password" prepend-icon="mdi-key"></VTextField>
                            <VTextField label="New password" prepend-icon="mdi-key"></VTextField>
                            <VTextField label="New password again" prepend-icon="mdi-key"></VTextField>

                            <v-btn>ok</v-btn>
                        </v-expansion-panel-text>
                    </v-expansion-panel>

                    <v-expansion-panel>
                        <v-expansion-panel-title collapse-icon="mdi-minus" expand-icon="mdi-plus">
                            Change Profile image
                        </v-expansion-panel-title>
                        <v-expansion-panel-text>
                            <v-avatar color="grey" rounded="10" size="90">
                                <v-img :src="this.image2" cover></v-img>
                            </v-avatar>
                            <v-file-input style="" class="bg-orange  mt-10" v-model="this.image2"
                                @change="onFileSelected2" label="profile image" type="file" accept="image/*"
                                placeholder="Pick an avatar" append-icon="mdi-camera"></v-file-input>
                            <v-btn class="mt-4">ok</v-btn>

                        </v-expansion-panel-text>
                    </v-expansion-panel>


                </v-expansion-panels>
                <v-btn class="mt-16" color="red" @click="logout">logout <v-icon>mdi-share</v-icon> </v-btn>
            </v-col>


        </v-row>

        <v-row style="direction: rtl;" v-if="this.lan == 1" class="px-2 px-sm-8 px-md-16 mt-6 pb-10 mb-16">

            <v-col md="6" lg="6" sm="12" cols="12">
                <v-divider></v-divider>
                <v-form ref="form1" @submit.prevent="post" >
               <p class="text-h4"> منشور جديد</p>
                <v-divider></v-divider>
                <v-img v-if="this.image != null" width="100%" height="300px" :src="this.imageurl"></v-img>
               <v-text-field :rules="this.usernamerule" label="العنوان" v-model="this.title"></v-text-field>
                <v-textarea :rules="this.usernamerule" dir="rtl" v-model="this.postText" class="mt-4" label="منشور" prepend-icon="mdi-post-outline">

                </v-textarea>
                <v-file-input :rules="this.usernamerule" style="border-radius: 12px !important;" class="bg-orange  mt-10" v-model="this.image"
                    @change="onFileSelected" label="صورة المنشور" type="file" accept="image/*"
                    placeholder="Pick an avatar" append-icon="mdi-camera"></v-file-input>
                    <v-select :rules="this.usernamerule" :items="['music','politic']" label="الصنف" class="mt-3" v-model="this.cat"></v-select>
                <VBtn class="mt-4  mb-16" @click="this.post" color="green "> نشر </VBtn>
            </v-form>
            </v-col>
            <v-spacer></v-spacer>

            <v-col md="6" lg="4" sm="12" cols="12">
                <v-divider></v-divider>
              <p class="text-h4">  تغيير معلومات الحساب</p>
                <v-divider></v-divider>
                <v-expansion-panels class="mt-4">
                    <v-expansion-panel class="mb-3">
                        <v-expansion-panel-title collapse-icon="mdi-minus" expand-icon="mdi-plus">
                            تغيير اسم الحساب


                        </v-expansion-panel-title>
                        <v-expansion-panel-text>
                            <VTextField label="الاسم" prepend-icon="mdi-account"></VTextField>
                            <v-btn>تغيير</v-btn>
                        </v-expansion-panel-text>
                    </v-expansion-panel>

                    <v-expansion-panel class="mb-3">
                        <v-expansion-panel-title collapse-icon="mdi-minus" expand-icon="mdi-plus">
                            تغيير كلمة السر


                        </v-expansion-panel-title>
                        <v-expansion-panel-text>
                            <VTextField label="كلمة السر القديمة" prepend-icon="mdi-key"></VTextField>
                            <VTextField label="كلمة السر الجديدة" prepend-icon="mdi-key"></VTextField>
                            <VTextField label="كلمة السر الجديدة مرة اخرى" prepend-icon="mdi-key"></VTextField>

                            <v-btn>تغيير</v-btn>
                        </v-expansion-panel-text>
                    </v-expansion-panel>

                    <v-expansion-panel>
                        <v-expansion-panel-title collapse-icon="mdi-minus" expand-icon="mdi-plus">
                            تغيير صورة الحساب
                        </v-expansion-panel-title>
                        <v-expansion-panel-text>
                            <v-avatar color="grey" rounded="10" size="90">
                                <v-img :src="this.image2" cover></v-img>
                            </v-avatar>
                            <v-file-input style="" class="bg-orange  mt-10" v-model="this.image2"
                                @change="onFileSelected2" label="صورة الحساب" type="file" accept="image/*"
                                placeholder="Pick an avatar" append-icon="mdi-camera"></v-file-input>
                            <v-btn class="mt-4" @click="console.log(this.image2)">تغيير</v-btn>
                        </v-expansion-panel-text>
                    </v-expansion-panel>


                </v-expansion-panels>
                <v-btn color="red" @click="logout">تسجيل خروج <v-icon>mdi-share</v-icon> </v-btn>
            </v-col>


        </v-row>
        <v-dialog style="width:50%" v-model="this.dia">
            <v-card class="pa-10 pb-1">
                <h2 class="mb-10"> loading </h2>
                <v-btn color="red" @click="this.dia = false; this.$router.push('/post');" :loading="this.load">Ok</v-btn>
                <v-btn color="red" @click="this.dia = false" :loading="this.load" v-if="this.errmessage">close</v-btn>
                <p class="text-green"> {{ succmessage  }} </p>
                <p class="text-red"> {{ this.errmessage }} </p>
            </v-card>

        </v-dialog>



        <v-dialog style="width:50%" v-model="this.err">
            <v-card class="pa-10 pb-1">
                <h2 class="mb-10"> Type of file is not supported </h2>
                <v-btn color="red" @click="this.err = false;">close</v-btn>
            </v-card>

        </v-dialog>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    created: async function () {
        let response = await axios.get(`${this.apiurl}/categories`)
        console.log(response.data);
        this.categories = response.data.categories
        let MyPostRes = await axios.get(`${this.apiurl}/posts`)
         console.log(MyPostRes.data);
         this.posts = MyPostRes.data.posts.filter(e=>{
            return e.user.id==localStorage.getItem("id")
         })

    },
    data() {
        return {
            posts:{},
            lan: localStorage.getItem("lan"),
            err: false,
            image2: null,
            image: null,
            t: false,
            postText: "",
            apiurl: process.env.VUE_APP_API_URL,
            categories: [],
            cat:"",
            dia:false,
            succmessage:"",
            errmessage:"",
            imageurl:"",
            usernamerule: [(userName) => {
          if (userName) return true
          return 'You must enter this Field.'
        }],
        }
    },
    methods: {
        logout: function () {
            localStorage.removeItem("token");
            localStorage.removeItem("user");
            localStorage.removeItem("id");
            window.location.reload();
        },
        post: async function () {
            this.$refs.form1.validate()
        .then(async valid => {
          if (valid.valid == true) {

            this.dia=true
            // let ruy = new FormData();
            // ruy.append("image",this.image)
            // console.log(ruy);
            
        
            const token = localStorage.getItem("token")
            // console.log(ruy);
            console.log(this.image);
            console.log({
                title: this.title,
                description: this.postText
            });
            
            console.log(token);

   
            try {
                this.load=true
                let response = await axios.post(`${this.apiurl}/posts`,
                 {
                     title: this.title,
                    description: this.postText,
                    image: this.image,
                    category: this.cat
                    },
                    
                    {
                        headers: {
                            'Content-Type': 'multipart/form-data',
                            'Authorization': `Bearer ${token}`
                        }
                    }
                )
                console.log(response.data);
                
                this.succmessage = "Your post successfully"
               console.log(this.succmessage);
               this.load=false
               

               

            } catch (error) {
                console.log(error);
                this.load=false
                this.errmessage = "Something got wrong, please try again"

            }



          }})
           

        },
      
        onFileSelected: function () {

            const allowedTypes = ['image/jpeg', 'image/png'];
            if (this.image) {
                if (allowedTypes.includes(this.image.type)) {
                    const objectURL = URL.createObjectURL(this.image);
                    this.imageurl = objectURL;
                    console.log(this.imageurl)
                    this.t = true

                }
                 else { this.err = true; this.image = '' }
            }
        }, onFileSelected2: function () {

            const allowedTypes = ['image/jpeg', 'image/png'];
            if (this.image2) {
                if (allowedTypes.includes(this.image2.type)) {
                    const objectURL = URL.createObjectURL(this.image2);
                    this.image2 = objectURL;
                } else { this.err = true; this.image2 = '' }
            }
        },

    }
}

</script>

<style>
.home {
    padding-top: 7%;
}

@media (max-width:800px) {
    .home {
        width: 96%
    }
}
</style>