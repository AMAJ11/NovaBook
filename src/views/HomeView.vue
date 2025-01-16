<template>
  
  <div class="home pb-16 pt-10 pb-xl-0">
    <v-row v-if="this.lan==0" class="pa-6 pt-10 px-3">
      <v-col lg="5"
       v-if="this.window !=2"
        style="margin:auto;backdrop-filter: blur(1px);min-height: 500px;display: flex;flex-direction: column;justify-content: center;align-items: flex-start;">
        <v-window v-model="window">
          <v-window-item key="0">
            <h1 class="text-black text-h2" style="font-weight: 900 !important;"> Welcome to our blog </h1>
            <p class="text- text-orange-darken-3" style="font-size: 25px !important;font-weight: 600 !important;">
               Create new account to active with</p>
            <v-btn @click="this.window++;this.email='';this.userName='';this.password='';this.Password1=''" variant="flat">You have acount?</v-btn>
          </v-window-item>
          <v-window-item key="1">

            <h1 class="text-black text-h2" style="font-weight: 900 !important;"> Welcome Come back</h1>
            <p class="text- text-orange-darken-3" style="font-size: 25px !important;font-weight: 600 !important;">Signin
              to active with</p>
            <v-btn @click="this.window--;this.email='';this.userName='';this.password='';this.Password1=''" variant="flat">Dont have acount?</v-btn>
          </v-window-item>
        </v-window>
      </v-col>



      <v-col
        style="border:2px solid white;backdrop-filter: blur(7px);text-align: center;padding:10px 25px;border-radius: 15px;margin:auto;display: flex;align-items: center;justify-content: center;" 
        lg="5" md="7" sm="12" cols="12">
        <v-window v-model="window" style="width:100%">
          <v-window-item :value="0">
            <v-card class="mt-0" rounded="2">
              <v-form ref="form" @submit.prevent="submit" style="text-align: center;padding:3%">
               <v-text-field append-icon="mdi-account" :rules="this.usernamerule" v-model="this.firstname"
                  label="username"></v-text-field>
                   
                <v-text-field append-icon="mdi-email" :rules="this.emailrule" v-model="this.email"
                  label="E-mail"></v-text-field>
                  <v-radio-group :rules="this.genderrules" class="ml-10"     inline
                  v-model="this.gender">
                    <v-radio class="mr-16" value="male"> male <v-icon>mdi-gender-male</v-icon>  </v-radio>
                    <v-radio class="ml-16" value="female">female <v-icon>mdi-gender-female</v-icon> </v-radio>
                  </v-radio-group>
                  <v-date-input :rules="this.daterule" v-model="this.date" prepend-icon="" append-icon="mdi-calendar-range">
                  </v-date-input>
                <v-text-field hint="Password Must be more than 8 and mix of char and num" append-icon="mdi-key" v-model="this.Password" label="Password" :rules="this.passwordrule"
                  type=password></v-text-field>
                <v-text-field append-icon="mdi-key" v-model="this.Password1" :rules="this.password1rule" type=password
                  label="Return password"></v-text-field>
                <v-btn variant="outlined" color="warning" :loading="this.loading" class="mt-2" text="Submit" type="submit" block></v-btn>
              </v-form>
            </v-card>
          </v-window-item>


          <v-window-item :value="1" style="height:auto;">
            <v-card>
              <v-form ref="form1" @submit.prevent="login" style="padding:6%">
                <v-text-field append-icon="mdi-email" class="mb-7" :rules="this.emailrule" v-model="this.email"
                  label="E-mail"></v-text-field>
                <v-text-field append-icon="mdi-key" class="mb-7" v-model="this.Password" label="Password"
                  :rules="this.passwordrule" type=password></v-text-field>
                <v-btn color="warning" variant="outlined" :loading="this.loading" class="mt-2" text="Sign in" type="submit" block></v-btn>
              </v-form>
            </v-card>
          </v-window-item>


            <v-window-item :value="2" v-if="this.t" style="margin:auto">
              <v-avatar
             
                color="grey"
                rounded="10"
                size="140"
                class="mt-10"
              >
               
                <v-img :src="this.image" cover></v-img>
                <v-sheet class="hv" style="right:60px;top:0;position: absolute;opacity: 0.4;"><v-icon @click="this.show=false;this.image=''">mdi-close</v-icon> </v-sheet>
              </v-avatar>
              <v-file-input
              v-if="!this.show"
              style=""
              class="bg-primary  mt-10"
              v-model="this.image"
              @change="onFileSelected"
              label="Avatar"
              type="file"
              accept="image/*"
              placeholder="Pick an avatar"
              append-icon="mdi-camera"
            ></v-file-input>
            <v-alert class="mt-10" color="warning"> Choose picture or skip with defualt image </v-alert>
              <v-btn class="mt-10" to="/post" >OK</v-btn>
            </v-window-item>



        </v-window>



      </v-col>


    </v-row>




      <v-row v-if="this.lan==1" class="pa-6 pt-6" >
        <v-col lg="5"
        class="hidden-md-and-up"
        v-if="this.window !=2"
         style=" direction: rtl;;margin:auto;backdrop-filter: blur(1px);min-height: 500px;display: flex;flex-direction: column;justify-content: center;align-items: flex-start;">
         <v-window v-model="window">
           <v-window-item key="0">
             <h1 class="text-black text-h2" style="font-weight: 900 !important;">أهلاً بكم في هذه المدونة </h1>
             <p class="text- text-orange-darken-3" style="font-size: 25px !important;font-weight: 600 !important;">
               قم بإنشاء حساب لتتمكن من التفاعل مع المقالات</p>
             <v-btn @click="this.window++;this.email='';this.userName='';this.password='';this.Password1=''" variant="flat">هل تملك حسابا مسبقاً؟</v-btn>
           </v-window-item>
           <v-window-item key="1">
 
             <h1 class="text-black text-h2" style="font-weight: 900 !important;"> أهلاً بعودتك</h1>
             <p class="text- text-orange-darken-3" style="font-size: 25px !important;font-weight: 600 !important;">سجل دخولك
               لتتمكن من التفاعل</p>
             <v-btn @click="this.window--;this.email='';this.userName='';this.password='';this.Password1=''" variant="flat">لا تملك حساباً؟ أنشىء واحدا</v-btn>
           </v-window-item>
         </v-window>
       </v-col>
 
        <v-col
          style="border:2px solid white;backdrop-filter: blur(7px);text-align: center;padding:10px 25px;border-radius: 15px;margin:auto;display: flex;align-items: center;justify-content: center;" 
          lg="5" md="7" sm="12" cols="12">
          <v-window v-model="window" style="width:100%">
            <v-window-item :key="0">
              <v-card class="mt-0" >
                <v-form ref="form" @submit.prevent="submit" style="text-align: center;padding:3%">
                 <v-text-field append-icon="mdi-account" :rules="this.usernamerulea" v-model="this.firstname"
                    label="اسم المستخدم"></v-text-field>
                     
                  <v-text-field append-icon="mdi-email" :rules="this.emailrulea" v-model="this.email"
                    label="الحساب الالكتروني"></v-text-field>
                    <v-radio-group :rules="this.genderrulesa" class="ml-10"     inline
                    v-model="this.gender">
                      <v-radio class="mr-16" value="male"> male <v-icon>mdi-gender-male</v-icon>  </v-radio>
                      <v-radio class="ml-16" value="female">female <v-icon>mdi-gender-female</v-icon> </v-radio>
                    </v-radio-group>
                    <v-date-input :rules="this.daterulea" v-model="this.date" prepend-icon="" append-icon="mdi-calendar-range">
                    </v-date-input>
                  <v-text-field hint="كلمة السر يجب ان تكون اكثر من 8 محارف و مكونة من ارقام و احرف" append-icon="mdi-key" v-model="this.Password" label="كلمة السر" :rules="this.passwordrulea"
                    type=password></v-text-field>
                  <v-text-field append-icon="mdi-key" v-model="this.Password1" :rules="this.password1rulea" type=password
                    label="كلمة السر مرة أخرى😁"></v-text-field>
                  <v-btn variant="outlined" color="warning" :loading="this.loading" class="mt-2" text="تسجيل" type="submit" block></v-btn>
                </v-form>
              </v-card>
            </v-window-item>
  
  
            <v-window-item :key="1" style="height:auto;">
              <v-card>
                <v-form ref="form1" @submit.prevent="login" style="padding:6%">
                  <v-text-field append-icon="mdi-email" class="mb-7" :rules="this.emailrulea" v-model="this.email"
                    label="الحساب الالكتروني"></v-text-field>
                  <v-text-field append-icon="mdi-key" class="mb-7" v-model="this.Password" label="كلمة السر"
                    :rules="this.passwordrulea" type=password></v-text-field>
                  <v-btn color="warning" variant="outlined" :loading="this.loading" class="mt-2" text="Sign in" type="submit" block></v-btn>
                </v-form>
              </v-card>
            </v-window-item>
  
  
              <v-window-item key="2" v-if="this.t" style="margin:auto">
                <v-avatar
               
                  color="grey"
                  rounded="10"
                  size="140"
                  class="mt-10"
                >
                 
                  <v-img :src="this.image" cover></v-img>
                  <v-sheet class="hv" style="right:60px;top:0;position: absolute;opacity: 0.4;"><v-icon @click="this.show=false;this.image=''">mdi-close</v-icon> </v-sheet>
                </v-avatar>
                <v-file-input
                v-if="!this.show"
                style=""
                class="bg-primary  mt-10"
                v-model="this.image"
                @change="onFileSelected"
                label="صورة الحساب"
                type="file"
                accept="image/*"
                placeholder="Pick an avatar"
                append-icon="mdi-camera"
              ></v-file-input>
              <v-alert class="mt-10" color="warning"> اختر صورة من جهازك أو سيتم اختيار الصورة الافتراضية </v-alert>
                <v-btn class="mt-10" to="/post" >تم</v-btn>
              </v-window-item>
  
  
  
          </v-window>
  
  
  
        </v-col>
        <v-col lg="5"
        class="hidden-sm-and-down"
        v-if="this.window !=2"
         style=" direction: rtl;;margin:auto;backdrop-filter: blur(1px);min-height: 500px;display: flex;flex-direction: column;justify-content: center;align-items: flex-start;">
         <v-window v-model="window">
           <v-window-item key="0">
             <h1 class="text-black text-h2" style="font-weight: 900 !important;">أهلاً بكم في هذه المدونة </h1>
             <p class="text- text-orange-darken-3" style="font-size: 25px !important;font-weight: 600 !important;">
               قم بإنشاء حساب لتتمكن من التفاعل مع المقالات</p>
             <v-btn @click="this.window++;this.email='';this.userName='';this.password='';this.Password1=''" variant="flat">هل تملك حسابا مسبقاً؟</v-btn>
           </v-window-item>
           <v-window-item key="1">
 
             <h1 class="text-black text-h2" style="font-weight: 900 !important;"> أهلاً بعودتك</h1>
             <p class="text- text-orange-darken-3" style="font-size: 25px !important;font-weight: 600 !important;">سجل دخولك
               لتتمكن من التفاعل</p>
             <v-btn @click="this.window--;this.email='';this.userName='';this.password='';this.Password1=''" variant="flat">لا تملك حساباً؟ أنشىء واحدا</v-btn>
           </v-window-item>
         </v-window>
       </v-col>
 
 
 
  
      </v-row>







   <v-dialog  style="width:50%" v-model="this.err">
        <v-card> <h2 class="mb-10"> Type of file is not supported </h2><v-btn color="red" @click="this.err=false">close</v-btn> </v-card>
        
   </v-dialog>
  </div>
</template>

<style scoped>
.home {
  height: auto;
  background-image: url("../assets/pexels-belle-co-99483-1000444.jpg");
  background-size: cover;
  background-position: center;
  
}
@media (max-width:1000px) {
  .home{
    max-width:99%
  }
}
.hv:hover{opacity: 1 !important;cursor: pointer;}
</style>


<script>
export default {
  name: 'HomeView',
  data: function () {
    return {
      window: 1,
      loading: false,
      firstname: '',
      lastname: '',
      Password: '',
      Password1: '',
      email: '',
      isValid: false,
      image:'data:image/png;base64,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',
      show:false,
      err:false,
      sh:false,
      gender:'',
      date:null,
      lan:localStorage.getItem("lan"),
      t:false,
      passwordrule: [(Password) => {
        if (Password) {
          if (this.hasTextAndNumbers(Password) && Password && Password.length>=8) {
            return true
          }
          else if(Password.length<8){return "password must be more than 8"}
          else { return 'Password Must be char and numbers' }
        }

        return 'You must Write a password .'
      }],
      password1rule: [(Password1) => {
        if (Password1 && Password1 == this.Password) return true
        else if (Password1 && Password1 != this.Password) return 'Passwords do not match'
        else if (!Password1) return 'You must Rewrite a password .';

      }],
      usernamerule:
        [(userName) => {
          if (userName) return true
          return 'You must enter this Field.'
        }],
        genderrules:
        [(gender) => {
          if (gender) return true
          return 'You must choose gender.'
        }],
        daterule:
        [(date) => {
          if (date) return true
          return 'You must choose birth date.'
        }],
      emailrule: [
        v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid '
      ],



      passwordrulea: [(Password) => {
        if (Password) {
          if (this.hasTextAndNumbers(Password) && Password && Password.length>=8) {
            return true
          }
          else if(Password.length<8){return "يجب ان تكون كلمة السر اكثر من 8 محارف"}
          else { return 'كلمة السر يجب ان تكون من احرف و ارقام' }
        }

        return 'يجب عليك كتابة كلمة المرور.'
      }],
      password1rulea: [(Password1) => {
        if (Password1 && Password1 == this.Password) return true
        else if (Password1 && Password1 != this.Password) return 'كلمات المرور غير متطابقة'
        else if (!Password1) return 'يجب عليك اعادة كلمة المرور..';

      }],
      usernamerulea:
        [(userName) => {
          if (userName) return true
          return 'يجب عليك كتابة اسم المستخدم.'
        }],
        genderrulesa:
        [(gender) => {
          if (gender) return true
          return 'يجب عليك اختيار الجنس.'
        }],
        daterulea:
        [(date) => {
          if (date) return true
          return 'يجب عليك اختيار عيد ميلادك.'
        }],
      emailrulea: [
        v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'البريد الالكتروني غير صحيح '
      ]






    }
  },
  methods: {
    submit: function () {
      console.log(this.gender);
      console.log(this.date);
      
      this.$refs.form.validate()
        .then(valid => {
          if (valid.valid == true) {
            this.loading = true
            setTimeout(() => {
              let obj ={
                "username":this.firstname,
                "email":this.email,
                "gender":this.gender,
                "date":this.date,
                "password":this.Password,
              };
              console.log(obj)
              this.loading = false
            }, 2000);
            this.t=true
            this.window=2
          };
          
          console.log(this.image);
          
        })
        
    },
   login:function(){
    this.$refs.form1.validate()
        .then(valid => {
          if (valid.valid == true) {
            this.loading = true
            setTimeout(() => {
              let obj ={
                "username":this.firstname,
                "email":this.email,
                "img":this.image,
                "pass":this.Password,
              };
              console.log(obj)
              this.loading = false
            }, 2000)}})
   },
    hasTextAndNumbers: function (str) {
      return /\d/.test(str) && /[a-zA-Z]/.test(str);
    },
    onFileSelected:function(){
      {
        const allowedTypes = ['image/jpeg', 'image/png'];
        if (this.image )
         {if(allowedTypes.includes(this.image.type)){
    const objectURL = URL.createObjectURL(this.image); 
    this.image = objectURL;
    this.show=true}else{this.err=true;this.image=''}
  }
    }
  },
  hov:function(){
    this.sh=true
  }

  },
  mounted() {
  },

  created: function(){
    let lang = localStorage.getItem("lan");
    this.lan=lang;
  },
  watch:{
    }
};


</script>
