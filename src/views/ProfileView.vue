<template>
    <div class="home">
        <h1 class="ml-8" v-if="this.lan == 0">My Profile</h1>

        <h1 class="mr-8" v-if="this.lan == 1" style="direction: rtl;">ملفي الشخصي</h1>

        <v-row v-if="this.lan == 0" class="px-6 px-sm-8 px-md-16 mt-6 pb-10">

            <v-col md="6" lg="6" sm="12" cols="12">
                <v-divider></v-divider>
                New Post
                <v-divider></v-divider>
                <v-img v-if="this.image != null" width="100%" height="300px" :src="this.image"></v-img>
                <v-textarea class="mt-4" label="post" prepend-icon="mdi-post-outline">

                </v-textarea>
                <v-file-input style="" class="bg-orange  mt-10" v-model="this.image" @change="onFileSelected"
                    label="Post image" type="file" accept="image/*" placeholder="Pick an avatar"
                    append-icon="mdi-camera"></v-file-input>
                <VBtn class="mt-4"> post </VBtn>
            </v-col>
            <v-spacer></v-spacer>
            <v-col md="6" lg="4" sm="12" cols="12">
                <v-divider></v-divider>
                Change Account information
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
                            <v-avatar color="grey" rounded="10" size="90" >
                                <v-img  :src="this.image2" cover></v-img>
                              </v-avatar>
                            <v-file-input style="" class="bg-orange  mt-10" v-model="this.image2" @change="onFileSelected2"
                            label="profile image" type="file" accept="image/*" placeholder="Pick an avatar"
                            append-icon="mdi-camera"></v-file-input>
                            <v-btn class="mt-4">ok</v-btn>
                        </v-expansion-panel-text>
                    </v-expansion-panel>


                </v-expansion-panels>
            </v-col>


        </v-row>
        <v-row style="direction: rtl;" v-if="this.lan == 1" class="px-2 px-sm-8 px-md-16 mt-6 pb-10">
                    
            <v-col md="6" lg="6" sm="12" cols="12">
                <v-divider></v-divider>
                منشور جديد
                <v-divider></v-divider>
                <v-img v-if="this.image != null" width="100%" height="300px" :src="this.image"></v-img>
                <v-textarea dir="rtl" class="mt-4" label="منشور" prepend-icon="mdi-post-outline">

                </v-textarea>
                <v-file-input style="" class="bg-orange  mt-10" v-model="this.image" @change="onFileSelected"
                    label="صورة المنشور" type="file" accept="image/*" placeholder="Pick an avatar"
                    append-icon="mdi-camera"></v-file-input>
                <VBtn class="mt-4"> post </VBtn>
            </v-col>
<v-spacer></v-spacer>

            <v-col md="6" lg="4" sm="12" cols="12">
                <v-divider></v-divider>
                تغيير معلومات الحساب
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
                            <v-avatar color="grey" rounded="10" size="90" >
                                <v-img  :src="this.image2" cover></v-img>
                              </v-avatar>
                            <v-file-input style="" class="bg-orange  mt-10" v-model="this.image2" @change="onFileSelected2"
                            label="صورة الحساب" type="file" accept="image/*" placeholder="Pick an avatar"
                            append-icon="mdi-camera"></v-file-input>
                            <v-btn class="mt-4">تغيير</v-btn>
                        </v-expansion-panel-text>
                    </v-expansion-panel>


                </v-expansion-panels>

            </v-col>


        </v-row>




        <v-dialog  style="width:50%" v-model="this.err">
            <v-card class="pa-10 pb-1">
              <h2 class="mb-10"> Type of file is not supported </h2>
              <v-btn color="red"
                @click="this.err = false;">close</v-btn>
            </v-card>
      
          </v-dialog>
    </div>
</template>

<script>
export default {
    data() {
        return {
            lan: localStorage.getItem("lan"),
            err:false,
            image2:null,
            image: null,
            t: false
        }
    },
    methods: {
        onFileSelected: function () {

            const allowedTypes = ['image/jpeg', 'image/png'];
            if (this.image) {
                if (allowedTypes.includes(this.image.type)) {
                    const objectURL = URL.createObjectURL(this.image);
                    this.image = objectURL;
                    this.t = true
                }else { this.err = true; this.image = '' }
            }
        },onFileSelected2: function () {

const allowedTypes = ['image/jpeg', 'image/png'];
if (this.image2) {
    if (allowedTypes.includes(this.image2.type)) {
        const objectURL = URL.createObjectURL(this.image2);
        this.image2 = objectURL;
    }else { this.err = true; this.image2 = '' }
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
    .home{
        width:96%
    }
}
</style>