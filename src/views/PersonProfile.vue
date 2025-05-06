<template>
    <v-app class="pa-2 pa-md-16 pb-0">
        <v-progress-linear
        class="mt-16"
      color="primary"
      :height="9"
      v-if="loadingPage"
      indeterminate
    ></v-progress-linear>
        <v-container v-if="!loadingPage">
            <v-row>
                <v-col cols="12">
                    <v-avatar style="" size="300">
                        <v-img :src="profilephoto"></v-img>
                    </v-avatar>
                    <div class="mb-3 mt-4" style="display: block !important;">
                        <v-btn variant="text"> <v-icon color="primary"> mdi-message </v-icon>
                            <v-tooltip location="top" activator="parent"> Chat with him </v-tooltip>
                        </v-btn>
                        <v-btn variant="text" href="#UserPost"> <v-icon color="primary"> mdi-post-outline </v-icon>
                            <v-tooltip location="bottom" activator="parent"> view all posts </v-tooltip>
                        </v-btn>
                        <v-btn v-if="!IsFollow && !FollowBack" @click="FollowAdd" color="warning"
                            append-icon="mdi-plus">Follow</v-btn>
                        <v-btn v-if="IsFollow" @click="FollowAdd" color="red"
                            append-icon="mdi-close">unFollow</v-btn>
                        <v-btn v-if="FollowBack && !IsFollow" @click="FollowAdd" color="success"
                            append-icon="mdi-check-outline">FollowBack</v-btn>
                    </div>
                    <v-chip>followers: {{ followersNum }} </v-chip><v-chip class="ml-2">following: {{ followingNum
                        }} </v-chip>
                    <v-chip class="ml-2">posts: {{ postsnum }} </v-chip>
                </v-col>
                <v-col cols="12" sm="12" md="3">
                    <v-card class="px-3 py-1">
                        <p class="text-button text-primary"> Name </p>
                        <p> {{ user.username }} </p>
                    </v-card>
                </v-col>
                <v-col cols="12" sm="6" md="3">
                    <v-card class="px-3 py-1">
                        <p class="text-button text-primary"> From </p>
                        <p> {{ user.Country + '/' + user.City }} </p>
                    </v-card>
                </v-col>
                <v-col cols="12" sm="6" md="3"><v-card class="px-3 py-1">
                        <p class="text-button text-primary"> Gender </p>
                        <p> {{ user.Gender }} </p>
                    </v-card>
                </v-col>
                <v-col cols="12" md="9"><v-card class="px-3 py-1">
                        <p class="text-button text-primary"> Bio </p>
                        <p> {{user.bio ? user.bio : "none"  }} </p>
                    </v-card>
                </v-col>
                <v-col cols="12" md="9">
                    <v-card class="px-3 py-1">
                        <p class="text-button text-primary"> Birthday </p>
                        <p> {{ user.birthdate }} </p>
                    </v-card>
                </v-col>
            </v-row>


            <v-row class="mt-16" id="UserPost">
                <v-col cols="12" md="6" v-for="i in this.user.posts">
                    <v-card elevation="0" variant="solo" class="pa-1 pa-sm-5 " style="width: 100% !important;">
                        <div style="display:flex;justify-content: space-between;">
                               {{ user.username }} 
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
                            <!-- <v-btn size="large" class="hidden-sm-and-down"
                                @click="this.comment = true; this.comments = i.comments; postid = i.id" color=""
                                append-icon="mdi-message-alert-outline">Comment {{ i.comments.length != 0 ?
                                    i.comments.length
                                    : '' }} </v-btn> -->
                            <v-btn size="large" class="hidden-sm-and-down" :loading="this.WillLike"
                                :append-icon="islike(i.id) ? 'mdi-heart' : 'mdi-heart-outline'" @click="addLike(i.id)"
                                :color="islike(i.id) ? 'red' : ''">Love {{ i.likes.length != 0 ? i.likes.length : '' }}
                            </v-btn>

                            <v-btn size="md" class="hidden-md-and-up"
                                :v-ripple="{ class: 'ripple-blue' }"><v-icon>mdi-share</v-icon></v-btn>
                            <!-- <v-btn size="md" class="hidden-md-and-up"
                                @click="this.comment = true; this.comments = i.comments; postid = i.id; console.log(comments)"><v-icon>mdi-message-alert-outline</v-icon>
                                {{ i.comments.length != 0 ? i.comments.length : '' }} </v-btn> -->
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
            </v-row>
        </v-container>
    </v-app>
</template>

<script>
import axios from 'axios';
import { isReadonly } from 'vue';

export default {
    data() {
        return {
            loadingPage:true,
            IsFollow: "",
            user: {},
            apiurl: process.env.VUE_APP_API_URL,
            id: "",
            profilephoto: "",
            FollowBack: "",
            HeFollowMe: "",
            followingNum: 0,
            followersNum: 0,
            postsnum: 0,
            CommentText: "",
            comments: [],
            comment: false,
            WillLike: false,
            likedpost:[]

        }

    },
    mounted: async function () {
        this.likedpost = JSON.parse(localStorage.getItem("user")).likeposts
        console.log(this.likedpost);
        this.username = JSON.parse(localStorage.getItem("user")).username
    },
    created: async function () {
        this.saveuser();
        this.id = this.$route.params.id
        let response = await axios.get(`${this.apiurl}/users/profile/${this.id}`)
        this.user = response.data.user
        console.log(this.user);
        this.followersNum = this.user.followers.length
        this.followingNum = this.user.following.length
        this.postsnum = this.user.posts.length
        this.profilephoto = this.user.profilephoto.url
        if (this.user.following.includes(JSON.parse(localStorage.getItem("user")).id)) {
            this.HeFollowMe = true
        } 
        if (this.user.followers.includes(JSON.parse(localStorage.getItem("user")).id) && this.HeFollowMe == true) {
            console.log("i follow him");
            this.IsFollow = true
            this.FollowBack = false
        }
        else if (!this.user.followers.includes(JSON.parse(localStorage.getItem("user")).id) && !this.user.following.includes(localStorage.getItem("id"))) {
            this.IsFollow = false
            this.FollowBack=false
        }
        else if (this.HeFollowMe == true && !this.user.followers.includes(localStorage.getItem("id"))) {
            this.FollowBack = true
            this.IsFollow =false
        }
        else if( this.HeFollowMe==false &&  this.user.followers.includes(JSON.parse(localStorage.getItem("user")).id)){
            this.FollowBack = false;
            this.IsFollow =true
        }
        console.log(this.user.following.includes(JSON.parse(localStorage.getItem("user")).id));
        console.log(this.user.followers.includes(localStorage.getItem("id")));
        this.loadingPage=false

    },

    methods: {
        CommentPost: async function () {
            if (this.CommentText != "") {
                let token = localStorage.getItem("token")
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

                    for (let i = 0; i < this.user.posts.length; i++) {
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

        },
        islike: function (id) {

            if (this.likedpost.includes(id)) {
                return true
            } else {
                return false
            }
        },
        addLike: async function (id) {
            this.WillLike = true
            this.likedpost = JSON.parse(localStorage.getItem("user")).likeposts;
            if (this.islike(id) == false) {
                this.likedpost.push(id)
                this.user.posts.map(e => {
                    if (e.id == id) {
                        e.likes.push(id)
                    }
                })

            } else {
                this.likedpost = this.likedpost.filter(item => item !== id);
                this.user.posts.map(e => {
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
        FollowAdd: async function () {
            const token = localStorage.getItem("token")
            if (this.HeFollowMe && this.FollowBack) {
                this.FollowBack = false;
                this.IsFollow = true
                this.followersNum++
            } else if (this.HeFollowMe && !this.FollowBack) {
                this.IsFollow = false
                this.FollowBack = true
                this.followersNum--
            }else if (!this.HeFollowMe && !this.FollowBack && !this.IsFollow) {
                this.IsFollow = true
                this.followersNum++
            }
            else if (!this.HeFollowMe && !this.FollowBack && this.IsFollow) {
                this.IsFollow = false
                this.followersNum--
            }
            try {
                let response = await axios.patch(`${this.apiurl}/users/follow/${this.user.id}`,
                    {},
                    {
                        headers: {
                            'Authorization': `Bearer ${token}`,
                            'Content-Type': 'application/json'
                        }
                    }
                )
                console.log(response.data);
                this.saveuser();
            } catch (error) {
                console.log(error);

            }


        },
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
    },

}
</script>

<style scoped></style>