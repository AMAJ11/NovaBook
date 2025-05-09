<template>
    <v-progress-linear class="mt-16" color="primary" :height="9" v-if="loadingPage" indeterminate></v-progress-linear>
    <div class="home" v-if="!loadingPage">

        <h1 class="ml-8 text-h2" v-if="this.lan == 0">My Profile</h1>
        <h1 class="mr-8 text-h2" v-if="this.lan == 1" style="direction: rtl;">ملفي الشخصي</h1>
        <v-row v-if="this.lan == 0" class="pa-2 pa-md-12">
            <v-col cols="12" sm="12" md="6" class="hidden-md-and-up mt-4"
                style="display: flex;justify-content: center;">
                <v-avatar style="translate: 0 -18px;" class="" size="300">
                    <v-img style="" :src="profilephoto"></v-img>
                </v-avatar> </v-col>
            <v-col cols="12" sm="8" md="6" class="mt-2"><v-card class="pa-5">
                    <p class="text-button"> name : {{ user.username }} </p>
                    <p class="text-button"> from : {{ user.Country + '/' + user.City }} </p>
                    <p class="text-button"> birthday : {{ user.birthdate }} </p>
                    <p class="text-button"> bio : {{ user.bio }} </p>
                    <p class="text-button"> Folowers : {{ followers }} </p>
                    <p class="text-button"> Following : {{ following }} </p>
                </v-card></v-col>
            <v-col cols="12" sm="12" md="6" class="hidden-sm-and-down  mt-4">
                <v-avatar style="translate: 0 -18px;margin: auto;" size="300">
                    <v-img :src="profilephoto"></v-img>
                </v-avatar> </v-col>
        </v-row>
        <v-row class="pa-2 pa-md-12" style="direction: rtl;" v-if="this.lan == 1">
            <v-col cols="12" sm="12" md="6" class="hidden-md-and-up  mt-4"
                style="display: flex;justify-content: center;">
                <v-avatar style="translate: 0 -18px;margin: auto;" size="300">
                    <v-img :src="profilephoto"></v-img>
                </v-avatar> </v-col>
            <v-col cols="12" sm="8" md="6"><v-card class="pa-5">
                    <p class="text-button"> الاسم : {{ user.username }} </p>
                    <p class="text-button"> من : {{ user.Country + '/' + user.City }} </p>
                    <p class="text-button"> ميلاد : {{ user.birthdate }} </p>
                    <p class="text-button"> النبذة : {{ user.bio }} </p>
                    <p class="text-button"> يتابعني : {{ followers }} </p>
                    <p class="text-button"> اتابع : {{ following }} </p>
                </v-card></v-col>
            <v-col cols="12" sm="12" md="6" class="hidden-sm-and-down">
                <v-avatar style="translate: 0 -18px;margin: auto;" class="" size="300">
                    <v-img :src="profilephoto"></v-img>
                </v-avatar> </v-col>

        </v-row>




        <div v-if="this.lan == 0" class="pa-4" style="display: flex;flex-direction: column;align-items: center;">
            <v-btn style="width: fit-content;" class="" @click="CreatePost = true">Create New Post</v-btn>
            <v-btn style="width: fit-content;" href="#setting" class="ml-2 mt-3"> Change Profile Setting</v-btn>
        </div>

        <div v-if="this.lan == 1" class="pa-4"
            style="direction: rtl;display: flex;flex-direction: column;align-items: center;">
            <v-btn style="width: fit-content;" class="" @click="CreatePost = true">إنشاء منشور جديد</v-btn>
            <v-btn style="width: fit-content;" href="#setting" class="ml-2 mt-3">تعديل المعلومات الشخصية</v-btn>
        </div>


        <p class="text-h4 mt-10 mb-1" v-if="this.lan == 0"> My posts </p>
        <p class="text-h4 mt-10 mr-4" v-if="this.lan == 1" style="direction: rtl;"> منشوراتي </p>

        <v-row class="pa-1 pa-md-6 mt-3">


            <v-col cols="12" sm="8" md="6" v-for="i in this.posts">
                <v-card elevation="0" variant="solo" class="pa-2" style="width: 100% !important;">
                    <div style="display:flex;justify-content: space-between">
                        <v-card-title>



                        </v-card-title>




                        <v-btn color="primary" variant="text">
                            <v-icon>mdi-dots-vertical</v-icon>

                            <v-menu activator="parent">
                                <v-list>
                                    <v-list-item>
                                        <v-list-item-title> <v-btn @click="edit(i.id)" color="warning">Edit post</v-btn>
                                        </v-list-item-title>
                                    </v-list-item>
                                    <v-list-item>
                                        <v-list-item-title> <v-btn @click="deleteUserPost(i.id)" color="red">Delete
                                                post</v-btn> </v-list-item-title>
                                    </v-list-item>
                                </v-list>
                            </v-menu>
                        </v-btn>

                    </div>
                    <p> {{ i.createdAt.slice(0, 10) }}</p>
                    <p style="text-align: center;" class="text-button"> {{ i.title }} </p>
                    <div style="width: 100%;display: flex;justify-content: center;align-items: center;"><img
                            :src="i.image.url" style="margin:auto;height: 55vh;width: 80%;border-radius: 12px;"></div>
                    <v-card-text class="text-button">
                        {{ i.description }}
                    </v-card-text>

                    <v-divider></v-divider>
                    <v-card-actions calss="" style="height:15px;display:flex;justify-content: space-between;">
                        <v-btn size="large" @click="this.comment = true" append-icon="mdi-arrow-right-bold-circle">
                            {{ i.comments.length }}
                            <v-icon>mdi-message-alert-outline</v-icon>
                            <v-menu activator="parent">
                                <v-list>
                                    <v-list-item class="mb-2" v-for="j in i.comments">
                                        <v-list-item-title style="display: flex;">
                                            <v-avatar>
                                                <v-img :src="j.user.profilephoto.url"></v-img>
                                            </v-avatar>
                                            <p class="text-button ml-2">{{ j.user.username }}</p>
                                        </v-list-item-title>

                                    </v-list-item>
                                </v-list>
                            </v-menu>
                        </v-btn>
                        <v-chip size="large">
                            {{ i.likes.length }}
                            <v-icon>mdi-thumb-up-outline</v-icon>
                        </v-chip>
                    </v-card-actions>
                    <v-divider></v-divider>
                    <v-divider class="mt-4" thickness="8"></v-divider>

                </v-card>
            </v-col>





        </v-row>

        <v-dialog class="pa-16 w-100 w-sm-50 h-75" v-model="CreatePost" style="width:60%;min-width: 300px;">
            <v-icon @click="CreatePost = false" variant="text" style="position: fixed; top:0;right:15px;z-index:12;"
                class="cls" color="red">mdi-close</v-icon>
            <v-card style="border-radius: 30px;" class="pa-4">
                <v-form class="mt-4" ref="form1" @submit.prevent="post">
                    <p class="text-h4"> New Post</p>
                    <v-divider></v-divider>
                    <v-img v-if="Fill" width="100%" height="300px" :src="this.imageurl"></v-img>
                    <v-text-field :rules="usernamerule" v-model="title" label="title"> </v-text-field>
                    <v-textarea :rules="usernamerule" class="mt-4" label="post" prepend-icon="mdi-post-outline"
                        v-model="postText">

                    </v-textarea>
                    <v-file-input :rules="fileRules" style="border-radius: 12px !important;" class="mt-10 px-3 pt-1"
                        v-model="image" @change="onFileSelected" label="Post image" accept="image/*"
                        append-icon="mdi-camera"></v-file-input>

                    <div style="display: flex;justify-content: center;"> <v-btn class="mt-4  mb-16" type="submit"
                            @click="" color="green"> post </v-btn></div>
                </v-form>
            </v-card>
        </v-dialog>


        <v-row v-if="this.lan == 0" class="px-6 px-sm-8 px-md-16 mt-6 pb-10 mt-6">

            <v-col id="setting" md="6" lg="4" sm="12" cols="12">
                <v-divider></v-divider>
                <p class="text-h4">Change Account information</p>
                <v-divider></v-divider>
                <v-expansion-panels>
                    <v-expansion-panel class="mb-3">
                        <v-expansion-panel-title collapse-icon="mdi-minus" expand-icon="mdi-plus">
                            Change Name of Account
                        </v-expansion-panel-title>
                        <v-expansion-panel-text>
                            <VTextField v-model="nameChangeText" label="name" prepend-icon="mdi-account"></VTextField>
                            <p class="text-red"> {{ errNameEnChange }} </p>
                            <v-btn :loading="NameChangeLoad" @click="NameChange()">ok</v-btn>
                        </v-expansion-panel-text>
                    </v-expansion-panel>


                  

                    <v-expansion-panel class="mb-3">
                        <v-expansion-panel-title collapse-icon="mdi-minus" expand-icon="mdi-plus">
                            Change Password of Account


                        </v-expansion-panel-title>
                        <v-expansion-panel-text>
                            <VTextField type="password" v-model="password1" label="New password" prepend-icon="mdi-key"></VTextField>
                            <VTextField type="password" v-model="password2" label="New password again" prepend-icon="mdi-key"></VTextField>

                            <v-btn @click="PasswordChange()" :loading="PasswordChangeLoad">ok</v-btn>
                            <p class="text-red"> {{ PasswordChangeErrEn }} </p>
                        </v-expansion-panel-text>
                    </v-expansion-panel>

                    <v-expansion-panel  class="mb-3">
                        <v-expansion-panel-title collapse-icon="mdi-minus" expand-icon="mdi-plus">
                            Change Profile image
                        </v-expansion-panel-title>
                        <v-expansion-panel-text>
                            <v-avatar color="grey" rounded="10" size="90">
                                <v-img :src="this.imageUrl2" cover></v-img>
                            </v-avatar>
                            <v-file-input style="" class="bg-orange  mt-10" v-model="this.image2"
                                @change="onFileSelected2" label="profile image" type="file" accept="image/*"
                                placeholder="Pick an avatar" append-icon="mdi-camera"></v-file-input>
                                <p class="text-red">  {{ PhotoChangeEnErr }} </p>
                            <v-btn class="mt-4" @click="PhotoChange()" :loading="PhotoChangeLoad">ok</v-btn>

                        </v-expansion-panel-text>
                    </v-expansion-panel>
                    <v-expansion-panel>
                        <v-expansion-panel-title collapse-icon="mdi-minus" expand-icon="mdi-plus">
                            Change Bio of Account
                        </v-expansion-panel-title>
                        <v-expansion-panel-text>
                            <v-textarea v-model="BioChangeText" label="Bio" prepend-icon="mdi-account"></v-textarea>
                            <p class="text-red"> {{ BioChangeErrEn }} </p>
                            <v-btn :loading="BioChangeload" @click="BioChange()">ok</v-btn>
                        </v-expansion-panel-text>
                    </v-expansion-panel>

                </v-expansion-panels>
                <v-btn class="mt-16" color="red" @click="logout">logout <v-icon>mdi-share</v-icon> </v-btn>
            </v-col>


        </v-row>

        <v-row style="direction: rtl;" v-if="this.lan == 1" class="px-2 px-sm-8 px-md-16 mt-6 pb-10 mb-16">

            <!-- <v-col md="6" lg="6" sm="12" cols="12">
                <v-divider></v-divider>
                <v-form ref="form1" @submit.prevent="post">
                    <p class="text-h4"> منشور جديد</p>
                    <v-divider></v-divider>
                    <v-img v-if="this.image != null" width="100%" height="300px" :src="this.imageurl"></v-img>
                    <v-text-field :rules="this.usernamerule" label="العنوان" v-model="this.title"></v-text-field>
                    <v-textarea :rules="this.usernamerule" dir="rtl" v-model="this.postText" class="mt-4" label="منشور"
                        prepend-icon="mdi-post-outline">

                    </v-textarea>
                    <v-file-input :rules="this.usernamerule" style="border-radius: 12px !important;"
                        class="bg-orange  mt-10" v-model="this.image" @change="onFileSelected" label="صورة المنشور"
                        type="file" accept="image/*" placeholder="Pick an avatar"
                        append-icon="mdi-camera"></v-file-input>
                    <v-select :rules="this.usernamerule" :items="['music', 'politic']" label="الصنف" class="mt-3"
                        v-model="this.cat"></v-select>
                    <VBtn class="mt-4  mb-16" @click="this.post" color="green "> نشر </VBtn>
                </v-form>
            </v-col> -->
            <v-col id="setting" md="6" lg="4" sm="12" cols="12">
                <v-divider></v-divider>
                <p class="text-h4"> تغيير معلومات الحساب</p>
                <v-divider></v-divider>
                <v-expansion-panels class="mt-4">
                    <v-expansion-panel class="mb-3">
                        <v-expansion-panel-title collapse-icon="mdi-minus" expand-icon="mdi-plus">
                            تغيير اسم الحساب


                        </v-expansion-panel-title>
                        <v-expansion-panel-text>
                            <VTextField v-model="nameChangeText" label="الاسم" prepend-icon="mdi-account"></VTextField>
                            <p class="text-red"> {{ errNameChange }} </p>
                            <v-btn @click="NameChange()" :loading="NameChangeLoad">تغيير</v-btn>
                        </v-expansion-panel-text>
                    </v-expansion-panel>

                    <v-expansion-panel class="mb-3">
                        <v-expansion-panel-title collapse-icon="mdi-minus" expand-icon="mdi-plus">
                            تغيير كلمة السر


                        </v-expansion-panel-title>
                        <v-expansion-panel-text>
                            <VTextField type="password" v-model="password1" label="كلمة السر الجديدة" prepend-icon="mdi-key"></VTextField>
                            <VTextField type="password" v-model="password2" label="كلمة السر الجديدة مرة اخرى" prepend-icon="mdi-key"></VTextField>
                            <v-btn @click="PasswordChange()" :loading="PasswordChangeLoad">تغيير</v-btn>
                            <p class="text-red"> {{ PasswordChangeErr }} </p>
                        </v-expansion-panel-text>
                    </v-expansion-panel>

                    <v-expansion-panel  class="mb-3">
                        <v-expansion-panel-title collapse-icon="mdi-minus" expand-icon="mdi-plus">
                            تغيير صورة الحساب
                        </v-expansion-panel-title>
                        <v-expansion-panel-text>
                            <v-avatar color="grey" rounded="10" size="90">
                                <v-img :src="imageUrl2" cover></v-img>
                            </v-avatar>
                            <v-file-input style="" class="bg-orange  mt-10" v-model="image2"
                                @change="onFileSelected2" label="صورة الحساب" type="file" accept="image/*"
                                placeholder="Pick an avatar" append-icon="mdi-camera"></v-file-input>
                              <p class="text-red">{{ PhotoChangeErr }}</p>  
                            <v-btn class="mt-4" @click="PhotoChange" :loading="PhotoChangeLoad">تغيير</v-btn>
                        </v-expansion-panel-text>
                    </v-expansion-panel>
                    <v-expansion-panel>
                        <v-expansion-panel-title collapse-icon="mdi-minus" expand-icon="mdi-plus">
                           تعديل النبذة الشخصية
                        </v-expansion-panel-title>
                        <v-expansion-panel-text>
                            <v-textarea v-model="BioChangeText" label="النبذة" prepend-icon="mdi-account"></v-textarea>
                            <p class="text-red"> {{ BioChangeErr }} </p>
                            <v-btn :loading="BioChangeload" @click="BioChange()">ok</v-btn>
                        </v-expansion-panel-text>
                    </v-expansion-panel>

                </v-expansion-panels>
                <v-btn color="red" @click="logout" class="mt-4">تسجيل خروج <v-icon>mdi-share</v-icon> </v-btn>
            </v-col>


        </v-row>
        <v-dialog style="width:50%" class="w-sm-75" v-model="this.dia">
            <v-card class="pa-10 pb-1">
                <h2 class="mb-10"> loading </h2>
                <v-btn color="red" @click="this.dia = false; this.$router.push('/post');"
                    :loading="this.load">Ok</v-btn>
                <v-btn color="red" @click="this.dia = false" :loading="this.load" v-if="this.errmessage">close</v-btn>
                <p class="text-green"> {{ succmessage }} </p>
                <p class="text-red"> {{ this.errmessage }} </p>
            </v-card>

        </v-dialog>


        <v-dialog style="width:50%" class="w-75 w-sm-50" v-model="diaDelete">
            <v-card class="pa-10 pb-1">

                <h2 class="mb-10"> Are You sure To delete this post </h2>
                <v-btn color="red" @click="DletePost" style="width: 40%;margin: auto;" variant="outlined"
                    :loading="deleteLoad" class="mb-3">DELETE</v-btn>
                <v-btn color="green" @click="diaDelete = false;" style="width: 40%;margin: auto;">close</v-btn>
            </v-card>

        </v-dialog>


        <v-dialog style="width:50%" class="w-sm-75" v-model="this.err">
            <v-card class="pa-10 pb-1">
                <h2 class="mb-10"> Type of file is not supported </h2>
                <v-btn color="red" @click="this.err = false;">close</v-btn>
            </v-card>

        </v-dialog>

        <v-dialog class="pa-16 w-100 w-sm-75 h-75" v-model="Editdia" style="width:60%;min-width: 300px;">
            <v-icon @click="Editdia = false" variant="text" style="position: fixed; top:0;right:15px;z-index:12;"
                class="cls" color="red">mdi-close</v-icon>
            <v-card style="border-radius: 30px;" class="pa-4">
                <v-form class="mt-4" ref="form2" @submit.prevent="EditPost">
                    <p class="text-h4"> New Post</p>
                    <v-divider></v-divider>
                    <v-img v-if="Fill" width="100%" height="300px" :src="this.imageurl"></v-img>
                    <v-text-field :rules="usernamerule" v-model="title" label="title"> </v-text-field>
                    <v-textarea :rules="usernamerule" class="mt-4" label="post" prepend-icon="mdi-post-outline"
                        v-model="postText">

                    </v-textarea>
                    <v-file-input style="border-radius: 12px !important;" class="mt-10 px-3 pt-1" v-model="image"
                        @change="onFileSelected" label="Post image" accept="image/*"
                        append-icon="mdi-camera"></v-file-input>

                    <div style="display: flex;justify-content: center;"> <v-btn class="mt-4  mb-16" type="submit"
                            @click="" color="green" :loading="editload"> Edit </v-btn></div>
                </v-form>
            </v-card>
        </v-dialog>





    </div>
</template>

<script>
import axios from 'axios';

export default {
    created: async function () {
        let MyPostRes = await axios.get(`${this.apiurl}/posts`)
        console.log(MyPostRes.data);
        this.posts = MyPostRes.data.posts.filter(e => {
            return e.user.id == localStorage.getItem("id")
        })
        this.loadingPage = true
        let resUser = await axios.get(`${this.apiurl}/users/profile/${localStorage.getItem("id")}`)
        this.user = resUser.data.user
        this.loadingPage = false
        console.log(this.user);
        this.followers = this.user.followers.length
        this.following = this.user.following.length
        this.profilephoto = this.user.profilephoto.url

    },
    data() {
        return {
            BioChangeload:false,
            BioChangeErr:"",
            BioChangeErrEn:"",
            BioChangeText:"",
            PasswordChangeErr:"",
            PasswordChangeErrEn:"",
            password1:"",
            password2:"",
            PasswordChangeLoad:false,
            PhotoChangeEnErr:"",
            PhotoChangeErr:"",
            PhotoChangeLoad:false,
            errNameEnChange:"",
            errNameChange:"",
            nameChangeText: "",
            NameChangeLoad: false,
            Fill: false,
            editPostId: "",
            loadingPage: true,
            profilephoto: "",
            following: 0,
            followers: 0,
            user: {},
            Editdia: false,
            CreatePost: false,
            idDelete: "",
            posts: {},
            editload: false,
            lan: localStorage.getItem("lan"),
            err: false,
            image2: null,
            image: null,
            t: false,
            postText: "",
            apiurl: process.env.VUE_APP_API_URL,
            categories: [],
            cat: "",
            dia: false,
            deleteLoad: false,
            title: "",
            succmessage: "",
            errmessage: "",
            imageurl: "",
            diaDelete: false,
            imageUrl2:"",
            usernamerule: [(userName) => {
                if (userName) return true
                return 'You must enter this Field.'
            }],
            fileRules: [() => {
                if (this.image == null) return 'You must enter this Field.'
                else { return true }

            }],

        }
    },
    methods: {
        BioChange: async function(){
            if (this.BioChangeText != "") {
                this.BioChangeload = true;
                try {
                    let token = localStorage.getItem("token")
                    let response = await axios.patch(`${this.apiurl}/users/profile/${localStorage.getItem("id")}`,
                    {
                        bio: this.BioChangeText,
                    },
                    {
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': `Bearer ${token}`
                        }
                    })
                   let save =  await this.saveuser();
                    window.location.reload()
                } catch (error) {
                    console.log(error);
                    
                }
            }else{
                this.BioChangeErr = 'املأ الحقل'
                this.BioChangeErrEn="You must enter A Bio"
            }
        },
        EditPost: async function () {
            this.$refs.form2.validate()
                .then(async valid => {
                    if (valid.valid == true) {
                        let token = localStorage.getItem("token")
                        this.editload = true
                        try {
                            let response = await axios.patch(`${this.apiurl}/posts/${this.editPostId}`,
                                {
                                    title: this.title,
                                    description: this.postText,
                                },
                                {
                                    headers: {
                                        'Authorization': `Bearer ${token}`,
                                        'Content-Type': 'application/json'
                                    }
                                }

                            )
                            if (this.image != null) {
                                try {
                                    let response2 = await axios.patch(`${this.apiurl}/posts/upload-image/${this.editPostId}`,
                                        {
                                            image: this.image
                                        },
                                        {
                                            headers: {
                                                'Authorization': `Bearer ${token}`,
                                                'Content-Type': 'multipart/form-data'
                                            }
                                        }

                                    )
                                    console.log(response2);

                                } catch (error) {
                                    console.log(error);

                                }

                            }
                            console.log(response);
                            window.location.reload()
                        } catch (error) {
                            console.log();

                        }
                        this.editload = false
                        this.Editdia = false

                    }
                })
        },
        edit: async function (id) {
            this.editPostId = id
            this.Editdia = true
            console.log(id + "hghgh");
            let response = await axios.get(`${this.apiurl}/posts/${id}`)
            console.log("hhhhhh", response)
            const post = response.data.post
            console.log("poooost", post);
            this.postText = post.description
            this.title = post.title
            this.imageurl = post.image.url
            this.Editdia = true
            this.image = "AMMARHELLO"
            this.Fill = true

        },
        PasswordChange: async function(){
             if(this.password1 !="" && this.password2 !=""){
                     if(this.password1 == this.password2){
                        this.PasswordChangeLoad=true
                        try {

                    let token = localStorage.getItem("token")
                    let response = await axios.patch(`${this.apiurl}/users/profile/${localStorage.getItem("id")}`,
                    {
                        password: this.password1,
                    },
                    {
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': `Bearer ${token}`
                        }
                    })
                          this.PasswordChangeLoad =false
                    window.location.reload()
                } catch (error) {
                    console.log(error);
                    
                }



                     }else{
                        this.PasswordChangeErrEn = "Passwords do not match"
                        this.PasswordChangeErr= "كلمات السر غير متطابقة"
                     }
                  

             }else{
                this.PasswordChangeErrEn = "You Must enter the filed "
                this.PasswordChangeErr= "يجب عليك ملئ الحقول"
             }
        },
        PhotoChange: async function() {
            if (this.image2 != null) {
                
                this.PhotoChangeLoad = true;
                try {
                    let token = localStorage.getItem("token")
                    let response = await axios.post(`${this.apiurl}/users/profile/profile-photo-upload`,
                    {
                        image: this.image2,
                    },
                    {
                        headers: {
                            'Content-Type': 'multipart/form-data',
                            'Authorization': `Bearer ${token}`
                        }
                    })
                    let id = localStorage.getItem("id")
                    let userres = await axios.get(`${this.apiurl}/users/profile/${id}`)
                
                localStorage.setItem("user", JSON.stringify(userres.data.user))
                localStorage.setItem("photourl", userres.data.user.profilephoto.url)

                    window.location.reload()
                } catch (error) {
                    console.log(error);
                    
                }
                this.NameChangeLoad = false
            }else{
                this.PhotoChangeErr = 'اختر صورة'
                this.PhotoChangeEnErr="You must choose a photo"
            }
            


        },
        NameChange: async function () {
            if (this.nameChangeText != "") {
                this.NameChangeLoad = true;
                try {
                    let token = localStorage.getItem("token")
                    let response = await axios.patch(`${this.apiurl}/users/profile/${localStorage.getItem("id")}`,
                    {
                        username: this.nameChangeText,
                    },
                    {
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': `Bearer ${token}`
                        }
                    })
                    let save =  await this.saveuser();
                    window.location.reload()
                } catch (error) {
                    console.log(error);
                    
                }
                this.NameChangeLoad = false
            }else{
                this.errNameChange = 'اكتب الاسم'
                this.errNameEnChange="You must enter A name"
            }
            

            
        },
        logout: function () {
            localStorage.clear();
            window.location.reload();
        },
        deleteUserPost: function (id) {
            console.log("hghgh");
            this.idDelete = id;
            this.diaDelete = true

        },
        DletePost: async function () {
            this.deleteLoad = true
            let token = localStorage.getItem("token")
            console.log(token);

            try {
                let response = await axios.delete(`${this.apiurl}/posts/${this.idDelete}`, {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                    }
                }
                )
                console.log(response);
                this.deleteLoad = false
                window.location.reload()
            } catch (error) {
                console.log(error);

            }


        },
        saveuser: async function () {
            try {
                let id = localStorage.getItem("id")
                let userres = await axios.get(`${this.apiurl}/users/profile/${id}`)
                console.log(userres);
                
                localStorage.setItem("user", JSON.stringify(userres.data.user))
                localStorage.setItem("photourl", userres.data.user.profilephoto.url)

            } catch (error) {
                console.log(error);

            }
        },
        post: async function () {
            this.$refs.form1.validate()
                .then(async valid => {
                    if (valid.valid == true) {

                        this.dia = true
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
                            this.load = true
                            let response = await axios.post(`${this.apiurl}/posts`,
                                {
                                    title: this.title,
                                    description: this.postText,
                                    image: this.image,
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
                            this.load = false




                        } catch (error) {
                            console.log(error);
                            this.load = false
                            this.errmessage = "Something got wrong, please try again"

                        }



                    }
                })


        },

        onFileSelected: function () {

            const allowedTypes = ['image/jpeg', 'image/png'];
            if (this.image) {
                if (allowedTypes.includes(this.image.type)) {
                    const objectURL = URL.createObjectURL(this.image);
                    this.imageurl = objectURL;
                    console.log(this.imageurl)
                    this.t = true
                    this.Fill = true
                }
            }
        }, onFileSelected2: function () {

            const allowedTypes = ['image/jpeg', 'image/png'];
            if (this.image2) {
                if (allowedTypes.includes(this.image2.type)) {
                    const objectURL = URL.createObjectURL(this.image2);
                    this.imageUrl2 = objectURL;
                } else { this.err = true; }
            }
        },

    }
}

</script>

<style>
* {
    scroll-behavior: smooth;
}

.cls {
    transition: 0.4s;
}

.cls:hover {
    rotate: 240deg;
}

.home {
    padding-top: 7%;
}

@media (max-width:800px) {
    .home {
        width: 96%
    }
}
</style>