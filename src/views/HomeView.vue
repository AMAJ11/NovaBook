<template>
  <v-app class="app">
    <div class="pl-6" style="width:250px;display:flex;justify-content:space-between">
      <v-switch class="mr-2" @click="toggleTheme"
        :append-icon='icon == true ? "mdi-weather-night" : "mdi-white-balance-sunny"'></v-switch>
      <div style="width:60%" class="">
        <v-select :item-title="title" item-value="value" v-model="lan" :items="item">
        </v-select>
      </div>

    </div>
    <v-lazy>
      <div class="home pb-16 pt-10 pb-xl-0 hidden-xs">
        <v-row style="width:99%" v-if="lan == 0" class="pa-6 pt-5 px-3">
          <v-col class="pl-8" lg="6" md="5" sm="6" v-if="ff"
            style="backdrop-filter: blur(1px);min-height: 500px;display: flex;flex-direction: column;justify-content: center;">
            <v-window v-model="window">
              <v-window-item style="" v-if="ff" :key="0">
                <v-img style="" height="350px" width="400px" src="../assets/pic1.png"></v-img>
                <h1 class="text-h2" style="font-weight: 900 !important;"> Welcome to our blog </h1>
                <p class="text-orange-darken-3" style="font-size: 25px !important;font-weight: 600 !important;">
                  Create new account to active with</p>

                <v-btn @click=" window++; email = ''; userName = ''; password = ''; Password1 = ''" color="success"
                  variant="flat">You have acount?</v-btn>
              </v-window-item>
              <v-window-item key="1" v-if="ff">
                <v-img class="mt-5" src="../assets/pic6.png" width="400" height="350px"></v-img>
                <h1 class="text-h2" style="font-weight: 900 !important;"> Welcome Come back</h1>
                <p class="text- text-orange-darken-3" style="font-size: 25px !important;font-weight: 600 !important;">
                  Signin
                  to active with</p>
                <v-btn @click=" window--; email = ''; userName = ''; password = ''; Password1 = ''" color="success"
                  variant="flat">Dont have acount?</v-btn>
              </v-window-item>
            </v-window>
          </v-col>



          <v-col
            style="backdrop-filter: blur(7px);text-align: center;padding:10px 25px;border-radius: 15px;margin:auto;display: flex;align-items: center;justify-content: center;"
            lg="5" md="7" sm="6" cols="12">
            <v-window class="mt-5" v-model="window" style="width:100%">
              <v-window-item :key="0" v-if="ff">
                <v-card style="border-radius: 20px !important;">
                  <v-form ref="form" @submit.prevent="verifycheck" style="text-align: center;padding:3%">
                    <v-text-field :disabled="ok" append-icon="mdi-account" :rules="usernamerule" v-model="firstname"
                      label="username"></v-text-field>

                    <v-text-field :disabled="ok" append-icon="mdi-email" :rules="emailrule" v-model="email"
                      label="E-mail"></v-text-field>
                    <v-radio-group :disabled="ok" :rules="genderrules" class="ml-10" inline v-model="gender">
                      <v-radio class="mr-16" value="male"> male <v-icon>mdi-gender-male</v-icon> </v-radio>
                      <v-radio class="ml-16" value="female">female <v-icon>mdi-gender-female</v-icon> </v-radio>
                    </v-radio-group>
                    <v-date-input :disabled="ok" :rules="daterule" v-model="date" prepend-icon=""
                      append-icon="mdi-calendar-range">
                    </v-date-input>
                    <v-text-field hint="Password Must be more than 8 and mix of char and num" append-icon="mdi-key"
                      v-model="Password" label="Password" :rules="passwordrule" type=password></v-text-field>
                    <v-text-field :disabled="ok" append-icon="mdi-key" v-model="Password1" :rules="password1rule"
                      type=password label="Return password"></v-text-field>
                    <v-autocomplete :disabled="ok" :rules="usernamerule" v-model="selectedCountry" :items="countries"
                      label="choose country"></v-autocomplete>

                    <v-autocomplete :rules="usernamerule" v-model="selectedCity" :items="cities" label="choose City"
                      item-text="title" item-value="value" :disabled="!selectedCountry && ok"></v-autocomplete>
                    <div style="display: flex;width:50%;margin: auto;"> <v-btn :disabled="ok"
                        style="border-radius: 12px !important" variant="flat" color="orange-darken-3"
                        :loading="loading" class="mt-2" text="SignUp" type="submit" block></v-btn></div>
                    <p class="text-red"> {{ errmessage }} </p>
                    <p class="text-success"> {{ sucmessage }} </p>
                    <v-text-field :disabled="!ok" class="mt-3" label="Activation code" v-model="verify"></v-text-field>
                    <v-btn @click="submit" :disabled="!ok" text="verify"></v-btn>
                  </v-form>
                  <v-btn to="/about" variant="text">About</v-btn>
                </v-card>
              </v-window-item>


              <v-window-item :key="1" v-if="ff" style="height:auto;">
                <v-card style="border-radius: 20px !important;">
                  <v-form ref="form1" @submit.prevent="login" style="padding:6%">
                    <v-text-field append-icon="mdi-email" class="mb-7" :rules="emailrule" v-model="emaillog"
                      label="E-mail"></v-text-field>
                    <v-text-field append-icon="mdi-key" class="mb-7" v-model="passlog" label="Password"
                      :rules="passwordrule" type=password></v-text-field>
                    <div style="display: flex;width:50%;margin: auto;"><v-btn style="border-radius: 12px !important"
                        color="orange-darken-3" variant="flat" :loading="loading" class="mt-2" text="Sign in"
                        type="submit" block></v-btn></div>
                    <p class="text-red"> {{ errlogmessage }} </p>
                  </v-form>
                  <v-btn to="/about" variant="text">About</v-btn>
                </v-card>
              </v-window-item>






            </v-window>



          </v-col>


        </v-row>




        <v-row style="width:99%" v-if="lan == 1" class="pa-6 pt-5">


          <v-col
            style="backdrop-filter: blur(7px);text-align: center;padding:10px 25px;border-radius: 15px;margin:auto;display: flex;align-items: center;justify-content: center;"
            lg="5" md="7" sm="6">
            <v-window v-model="window" style="width:100%" class="mt-5">
              <v-window-item v-if="ff" :key="0">
                <v-card style="border-radius: 20px !important;">
                  <v-form ref="form" @submit.prevent="verifycheck" style="text-align: center;padding:3%">
                    <v-text-field :disabled="ok" append-icon="mdi-account" :rules="usernamerulea" v-model="firstname"
                      label="اسم المستخدم"></v-text-field>

                    <v-text-field :disabled="ok" append-icon="mdi-email" :rules="emailrulea" v-model="email"
                      label="الحساب الالكتروني"></v-text-field>
                    <v-radio-group :disabled="ok" :rules="genderrulesa" class="ml-10" inline v-model="gender">
                      <v-radio class="mr-16" value="male"> male <v-icon>mdi-gender-male</v-icon> </v-radio>
                      <v-radio class="ml-16" value="female">female <v-icon>mdi-gender-female</v-icon> </v-radio>
                    </v-radio-group>
                    <v-date-input :disabled="ok" :rules="daterulea" v-model="date" prepend-icon=""
                      append-icon="mdi-calendar-range">
                    </v-date-input>
                    <v-text-field :disabled="ok" hint="كلمة السر يجب ان تكون اكثر من 8 محارف و مكونة من ارقام و احرف"
                      append-icon="mdi-key" v-model="Password" label="كلمة السر" :rules="passwordrulea"
                      type=password></v-text-field>
                    <v-text-field :disabled="ok" append-icon="mdi-key" v-model="Password1" :rules="password1rulea"
                      type=password label="كلمة السر مرة أخرى😁"></v-text-field>
                    <v-autocomplete :disabled="ok" :rules="usernamerulea" v-model="selectedCountry"
                      :items="countries" label="اختر الدولة"></v-autocomplete>

                    <v-autocomplete :rules="usernamerulea" v-model="selectedCity" :items="cities" label="اختر المدينة"
                      item-text="title" item-value="value" :disabled="!selectedCountry && ok"></v-autocomplete>
                    <div style="display: flex;width:50%;margin: auto;"> <v-btn style="border-radius: 12px !important"
                        variant="flat" color="orange-darken-3" :loading="loading" class="mt-2 w-50" text="تسجيل"
                        type="submit" block></v-btn></div>
                    <p class="text-success"> {{ errmessage }} </p>
                    <p class="text-success"> {{ sucmessage }} </p>
                    <v-text-field :disabled="!ok" class="mt-3" label="Activation code" v-model="verify"></v-text-field>
                    <v-btn @click="submit" :disabled="!ok" text="verify"></v-btn>
                  </v-form>
                  <v-btn to="/about" variant="text">About</v-btn>
                </v-card>
              </v-window-item>


              <v-window-item v-if="ff" :key="1" style="height:auto;">
                <v-card style="border-radius: 20px !important;">
                  <v-form ref="form1" @submit.prevent="login" style="padding:6%">
                    <v-text-field append-icon="mdi-email" class="mb-7" :rules="emailrulea" v-model="emaillog"
                      label="الحساب الالكتروني"></v-text-field>
                    <v-text-field append-icon="mdi-key" class="mb-7" v-model="passlog" label="كلمة السر"
                      :rules="passwordrulea" type=password></v-text-field>

                    <div style="display: flex;width:50%;margin: auto;"><v-btn style="border-radius: 12px !important"
                        color="orange-darken-3" variant="flat" :loading="loading" class="mt-2" text="Sign in"
                        type="submit" block></v-btn></div>
                    <p class="text-red"> {{ errlogmessage }} </p>
                  </v-form>
                  <v-btn to="/about" variant="text">About</v-btn>
                </v-card>
              </v-window-item>





            </v-window>

          </v-col>

          <v-col lg="5" md="5" sm="6" class="hidden-xs" v-if="im != 0"
            style=" direction: rtl;backdrop-filter: blur(1px);min-height: 500px;display: flex;flex-direction: column;">
            <v-window v-model="window">
              <v-window-item key="0">
                <v-img style="" height="300px" width="400px" src="../assets/pic1.png"></v-img>
                <h1 class="text-h2" style="font-weight: 900 !important;">أهلاً بكم في هذه المدونة </h1>
                <p class="text- text-orange-darken-3" style="font-size: 25px !important;font-weight: 600 !important;">
                  قم بإنشاء حساب لتتمكن من التفاعل مع المقالات</p>
                <v-btn @click=" window++; email = ''; userName = ''; password = ''; Password1 = ''" color="success"
                  variant="flat">هل تملك حسابا مسبقاً؟</v-btn>
              </v-window-item>
              <v-window-item key="1" class="mt-4">
                <v-img class="" src="../assets/pic6.png" width="400" height="300px"></v-img>
                <h1 class="text-h2" style="font-weight: 900 !important;"> أهلاً بعودتك</h1>
                <p class="text- text-orange-darken-3" style="font-size: 25px !important;font-weight: 600 !important;">
                  سجل دخولك
                  لتتمكن من التفاعل</p>
                <v-btn @click=" window--; email = ''; userName = ''; password = ''; Password1 = ''" color="success"
                  variant="flat">لا تملك حساباً؟ أنشىء واحدا</v-btn>
              </v-window-item>
            </v-window>
          </v-col>




        </v-row>








      </div>
    </v-lazy>
    <div class="px-5 hidden-sm-and-up" style="width:99%">
      <v-row s v-if="lan == 1">
        <v-col cols="12" style="direction: rtl;">
          <v-img style="" height="250px" width="300px" src="../assets/pic6.png"></v-img>
          <h1 class="text-h3" style="font-weight: 900 !important;"> أهلاً بعودتك</h1>
          <p class="text-orange-darken-3" style="font-size: 20px !important;font-weight: 500 !important;">سجل
            دخولك
            لتتمكن من التفاعل</p>

          <v-card>
            <v-form ref="form1" @submit.prevent="login" style="padding:6%">
              <v-text-field append-icon="mdi-email" class="mb-7" :rules="emailrulea" v-model="emaillog"
                label="الحساب الالكتروني"></v-text-field>
              <v-text-field append-icon="mdi-key" class="mb-7" v-model="passlog" label="كلمة السر"
                :rules="passwordrulea" type=password></v-text-field>
              <v-btn color="warning" variant="outlined" :loading="loading" class="mt-2" text="Sign in" type="submit"
                block></v-btn>
              <p class="text-red"> {{ errlogmessage }} </p>
            </v-form>
            <v-btn to="/about" variant="text">About</v-btn>
          </v-card>
        </v-col>
        <div class="mt-8" style="width:100%">
          <h2 style="text-align:center;">OR</h2>
          <v-divider thickness="8"></v-divider>
        </div>

        <v-col cols="12" style="direction: rtl;">
          <v-img style="" height="250px" width="300px" src="../assets/pic1.png"></v-img>
          <h1 class="text-h3" style="font-weight: 900 !important;">أهلاً بكم في هذه المدونة </h1>
          <p class="text-orange-darken-3" style="font-size: 20px !important;font-weight: 500 !important;">
            قم بإنشاء حساب لتتمكن من التفاعل مع المقالات</p>

          <v-card>
            <v-form ref="form" @submit.prevent="verifycheck" style="text-align: center;padding:3%">
              <v-text-field :disabled="ok" append-icon="mdi-account" :rules="usernamerulea" v-model="firstname"
                label="اسم المستخدم"></v-text-field>
              <v-text-field :disabled="ok" append-icon="mdi-email" :rules="emailrulea" v-model="email"
                label="الحساب الالكتروني"></v-text-field>
              <v-radio-group :disabled="ok" :rules="genderrulesa" class="ml-10" inline v-model="gender">
                <v-radio class="mr-16" value="male"> male <v-icon>mdi-gender-male</v-icon> </v-radio>
                <v-radio class="ml-16" value="female">female <v-icon>mdi-gender-female</v-icon> </v-radio>
              </v-radio-group>
              <v-date-input :disabled="ok" :rules="daterulea" v-model="date" prepend-icon=""
                append-icon="mdi-calendar-range">
              </v-date-input>
              <v-text-field :disabled="ok" hint="كلمة السر يجب ان تكون اكثر من 8 محارف و مكونة من ارقام و احرف"
                append-icon="mdi-key" v-model="Password" label="كلمة السر" :rules="passwordrulea"
                type=password></v-text-field>
              <v-text-field :disabled="ok" append-icon="mdi-key" v-model="Password1" :rules="password1rulea"
                type=password label="كلمة السر مرة أخرى😁"></v-text-field>
              <v-autocomplete :disabled="ok" :rules="usernamerule" v-model="selectedCountry" :items="countries"
                label="اختر الدولة"></v-autocomplete>

              <v-autocomplete :rules="usernamerule" v-model="selectedCity" :items="cities" label="اختر المدينة"
                item-text="title" item-value="value" :disabled="!selectedCountry && ok"></v-autocomplete>
              <v-btn variant="outlined" :disabled="ok" color="warning" :loading="loading" class="mt-2" text="تسجيل"
                type="submit" block></v-btn>
              <p class="text-red"> {{ errmessage }} </p>
              <p class="text-success"> {{ sucmessage }} </p>
              <v-text-field :disabled="!ok" class="mt-3" label="رمز التحقق" v-model="verify"></v-text-field>
              <v-btn @click="submit" :disabled="!ok" text="تحقق"></v-btn>
            </v-form>
            <v-btn to="/about" variant="text">About</v-btn>
          </v-card>

        </v-col>



      </v-row>





      <!--English start   -->
      <v-row v-if="lan == 0">
        <v-col cols="12">
          <v-img style="" height="250px" width="300px" src="../assets/pic6.png"></v-img>
          <h1 class="text-h2" style="font-weight: 900 !important;"> welcome back</h1>
          <p class="text- text-orange-darken-3" style="font-size: 25px !important;font-weight: 600 !important;">Sign in
            to active with</p>

          <v-card>
            <v-form ref="form1" @submit.prevent="login" style="padding:6%">
              <v-text-field append-icon="mdi-email" class="mb-7" :rules="emailrule" v-model="emaillog"
                label="Gmail"></v-text-field>
              <v-text-field append-icon="mdi-key" class="mb-7" v-model="passlog" label="password"
                :rules="passwordrule" type=password></v-text-field>
              <v-btn color="warning" variant="outlined" :loading="loading" class="mt-2" text="Sign in" type="submit"
                block></v-btn>
              <p class="text-red"> {{ errlogmessage }} </p>
            </v-form>
          </v-card>
        </v-col>
        <div class="mt-8" style="width:100%">
          <h2 style="text-align:center;">OR</h2>
          <v-divider thickness="8"></v-divider>
        </div>
        <v-col cols="12">
          <v-img style="" height="250px" width="300px" src="../assets/pic1.png"></v-img>
          <h1 class="text-h2" style="font-weight: 900 !important;">Welcome to our BLOG</h1>
          <p class="text- text-orange-darken-3" style="font-size: 25px !important;font-weight: 600 !important;">
            Create account to active with
          </p>

          <v-card>
            <v-form ref="form" @submit.prevent="verifycheck" style="text-align: center;padding:3%">
              <v-text-field :disabled="ok" append-icon="mdi-account" :rules="usernamerule" v-model="firstname"
                label="username"></v-text-field>

              <v-text-field :disabled="ok" append-icon="mdi-email" :rules="emailrule" v-model="email"
                label="Gmail"></v-text-field>
              <v-radio-group :disabled="ok" :rules="genderrules" class="ml-10" inline v-model="gender">
                <v-radio class="mr-16" value="male"> male <v-icon>mdi-gender-male</v-icon> </v-radio>
                <v-radio class="ml-16" value="female">female <v-icon>mdi-gender-female</v-icon> </v-radio>
              </v-radio-group>
              <v-date-input :disabled="ok" :rules="daterule" v-model="date" prepend-icon=""
                append-icon="mdi-calendar-range">
              </v-date-input>
              <v-text-field :disabled="ok" hint="password must be char and number min 8" append-icon="mdi-key"
                v-model="Password" label="password" :rules="passwordrule" type=password></v-text-field>
              <v-text-field :disabled="ok" append-icon="mdi-key" v-model="Password1" :rules="password1rule"
                type=password label="password again 😁"></v-text-field>
              <v-autocomplete :disabled="ok" :rules="usernamerule" v-model="selectedCountry" :items="countries"
                label="choose country"></v-autocomplete>

              <v-autocomplete :rules="usernamerule" v-model="selectedCity" :items="cities" label="choose city"
                item-text="title" item-value="value" :disabled="!selectedCountry && ok"></v-autocomplete>
              <v-btn variant="outlined" color="warning" :loading="loading" class="mt-2" text="Signup" type="submit"
                block></v-btn>
              <p class="text-red"> {{ errmessage }} </p>
              <p class="text-success"> {{ sucmessage }} </p>
              <v-text-field :disabled="!ok" class="mt-3" label="Activation code" v-model="verify"></v-text-field>
              <v-btn @click="submit" :disabled="!ok" text="verify" :loading="verifyLoad"></v-btn>
            </v-form>
          </v-card>

        </v-col>



      </v-row>





    </div>

    <v-dialog style="width:50%" v-model="err">
      <v-card>
        <h2 class="mb-10"> Type of file is not supported </h2><v-btn color="red" @click="err = false">close</v-btn>
      </v-card>

    </v-dialog>

  </v-app>

</template>

<style scoped>
.home {
  height: auto;
  min-height: 100vh;

}

@media (max-width:1000px) {
  .home {
    max-width: 100%
  }

}

@media (max-width:700px) {}

.hv:hover {
  opacity: 1 !important;
  cursor: pointer;
}
</style>


<script>
import axios from 'axios';
import { City, Country } from 'country-state-city';
import emailjs from 'emailjs-com';
export default {
  name: 'HomeView',
  data() {
    return {
      verifyLoad: false,
      verify: "",
      apiurl: process.env.VUE_APP_API_URL,
      selectedCountry: null,
      selectedCity: null,
      countries: [],
      cities: [],
      im: null,
      window: 1,
      loading: false,
      firstname: '',
      lastname: '',
      Password: '',
      Password1: '',
      email: '',
      passlog: '',
      emaillog: '',
      isValid: false,
      image: 'data:image/png;base64,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',
      show: false,
      err: false,
      sh: false,
      gender: '',
      date: null,
      ok: false,
      item: [
        { title: "EN", value: 0 },
        { title: "AR", value: 1 },
      ],
      lan: +localStorage.getItem("lan"),
      t: false,
      ff: true,
      errmessage: "",
      errlogmessage: "",
      passwordrule: [(Password) => {
        if (Password) {
          if (this.hasTextAndNumbers(Password) && Password && Password.length >= 8) {
            return true
          }
          else if (Password.length < 8) { return "password must be more than 8" }
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
      sucmessage: "",


      passwordrulea: [(Password) => {
        if (Password) {
          if (this.hasTextAndNumbers(Password) && Password && Password.length >= 8) {
            return true
          }
          else if (Password.length < 8) { return "يجب ان تكون كلمة السر اكثر من 8 محارف" }
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
      ],
      otp: null






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
    async loadCountries() {
      this.countries = Country.getAllCountries().map(country => ({
        value: { name: country.name, code: country.isoCode },
        title: country.translations?.ar || country.name,
      })).sort((a, b) => a.title.localeCompare(b.name));
    },
    submit: async function () {
      let date = "" + this.date;

      if (this.verify == this.code) {
        this.verifyLoad = true
        try {
          let response = await axios.post(`${this.apiurl}/users/register`,
            {
              username: this.firstname,
              email: this.email,
              password: this.Password,
              Gender: this.gender,
              Country: this.selectedCountry.code,
              City: this.selectedCity.name,
              lat: this.selectedCity.lat,
              long: this.selectedCity.long,
              birthdate: date.slice(4, 16)
            }
          )
          localStorage.setItem("token", response.data.user.token)
          localStorage.setItem("id", response.data.user._id)
          let save = await this.saveuser();
          localStorage.setItem("lat", this.selectedCity.lat)
          localStorage.setItem("long", this.selectedCity.long)
          this.loading = false

          window.location.reload();




          this.im = 0;
          this.window = 0;
          this.ff = false
          this.t = true;
        }
        catch (error) {
          if (error) {
            this.firstname = null
            this.email = null
            this.Password = null
            this.gender = null
            this.Password1 = null
          }
        }
      } else {
        this.errmessage = "The code is wrong"
      }

    },
    loadCities: async function () {
      this.cities = City.getCitiesOfCountry(this.selectedCountry.code).map(city => ({
        title: city.name,
        value: { name: city.name, long: city.longitude, lat: city.latitude }
      }));
    },

    verifycheck: async function () {
      let date = "" + this.date;

      let res
      this.$refs.form.validate()
        .then(valid => {
          if (valid.valid == true) {
            this.loading = true
            setTimeout(async () => {
              try {
                res = await axios.get(`${this.apiurl}/users/checkemail`, {
                  params: {
                    email: this.email,
                  }
                })

              } catch (error) {
                console.log(error);
              }

              const otp = Math.floor(100000 + Math.random() * 900000);

              emailjs.init('pzhtPhukIgsST1zI7');
              if (res.data.message == "user allowed") {
                this.ok = true
                let ressss = await emailjs.send("service_z1nezne", "template_7bxf08c", {
                  passcode: otp,
                  time: 15,
                  email: this.email,
                })
                this.code = otp
                this.sucmessage = "Enter a code which send you on email"
                this.errmessage = ""
                this.loading = false
              } else {
                this.errmessage = "you aleredy registered"
                this.loading = false

              }


            }, 2000)

          }
        })

    },

    submitph: function () {
      this.$refs.form.validate()
        .then(valid => {
          if (valid.valid == true) {
            this.loading = true
            setTimeout(() => {
              let obj = {
                "username": this.firstname,
                "email": this.email,
                "gender": this.gender,
                "date": this.date,
                "password": this.Password,
              };
              this.loading = false
            }, 2000);

          };


        })

    },
    login: async function () {
      this.$refs.form1.validate()
        .then(valid => {
          if (valid.valid == true) {
            this.loading = true
            setTimeout(async () => {
              try {
                let response = await axios.post(`${this.apiurl}/users/login`,
                  {
                    email: this.emaillog,
                    password: this.passlog
                  }
                )
                localStorage.setItem("token", response.data.token)
                localStorage.setItem("id", response.data.userId)
                try {
                  let userres = await axios.get(`${this.apiurl}/users/profile/${response.data.userId}`)
                  localStorage.setItem("user", JSON.stringify(userres.data.user))
                  localStorage.setItem("photourl", userres.data.user.profilephoto.url)
                  let save = await this.saveuser();
                  this.loading = false
                  window.location.reload();
                } catch (error) {
                  console.log(error);

                }


              }
              catch (error) {
                console.log(error.response.data.message);
                this.errlogmessage = error.response.data.message
                this.emaillog = null
                this.passlog = null
                this.loading = false
              }

            }, 2000)
          }
        })
    },
    hasTextAndNumbers: function (str) {
      return /\d/.test(str) && /[a-zA-Z]/.test(str);
    },
    onFileSelected: function () {
      {
        const allowedTypes = ['image/jpeg', 'image/png'];
        if (this.image) {
          if (allowedTypes.includes(this.image.type)) {
            const objectURL = URL.createObjectURL(this.image);
            this.image = objectURL;
            let im = objectURL;
            this.show = true

          } else { this.err = true; this.image = '' }
        }
      }
    },
    hov: function () {
      this.sh = true
    }

  },
  created: async function () {
    this.loadCountries()
  },
  watch: {
    selectedCountry(newvalue, old) {
      this.loadCities()

    },
    selectedCity(newvalue, old) {

      localStorage.setItem("long", JSON.stringify(newvalue.long));
      localStorage.setItem("lat", JSON.stringify(newvalue.lat));
    }
  },
  icon(newvalue, oldvalue) {
    this.icon = newvalue;
  },
  lan(newvalue, oldvalue) {
    localStorage.setItem("lan", newvalue);
    window.location.reload();
  }
};


</script>
<script setup>
import { useTheme } from 'vuetify'
const theme = useTheme()
let icon = true
function toggleTheme() {
  icon = !icon;
  theme.global.name.value = theme.global.current.value.dark ? 'myCustomLightTheme' : 'dark'
}
</script>
