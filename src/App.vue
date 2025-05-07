<template>
  <v-layout v-if="!$route.meta.hideNavbar">
    <v-app-bar class="bar">
      <v-toolbar class="hidden-xs">
        <v-btn to="/profile-setting" rounded="10" height="auto" :ripple="false" style="cursor: pointer"
          class="hidden-sm-and-down">
          <v-avatar router :to="{ path: '/profile' }" color="grey" rounded="10" size="60">
            <v-img to="/profile" :src="photoUrl" cover></v-img>

          </v-avatar></v-btn>
        <v-btn class="hidden-xs" style="font-size: 13px;" size="small" to="/post"
          color="warning"><v-icon>mdi-home</v-icon>posts</v-btn>
        <v-btn class="hidden-xs" style="font-size: 13px;" size="small"
          to="/about"><v-icon>mdi-help</v-icon>About</v-btn>
        <v-btn class="hidden-xs" style="font-size: 13px;" size="small"
          to="/quraan"><v-icon>mdi-book</v-icon>Quraan</v-btn>
        <v-spacer></v-spacer>
        <v-chip> {{ time }} </v-chip>
        <v-spacer></v-spacer>

        <div style="align-items: center;display: flex;justify-content: space-between;width: 22%;">
          <v-badge class="mr-6" style="cursor: pointer;" :content="notify.length" value="8" color="red" overlap>
            <v-icon large>
              mdi-bell
            </v-icon>
            <v-menu activator="parent" transition="slide-x-transition">
              <v-list>
                <v-list-item v-if="notify.length == 0">
                  <v-list-item-title style="display: flex;">
                    <v-avatar>
                      <v-img src="https://cdn.icon-icons.com/images/no_results2.png"></v-img>
                    </v-avatar>
                    <p class="text-button ml-2 text-red"> لا يوجد اية اشعارات </p>
                  </v-list-item-title>
                </v-list-item>
                <v-list-item class="mb-2" v-for="j in notify">
                  <v-list-item-title style="display: flex;">
                    <!-- <v-avatar>
                      <v-img src="../src/assets/Mosque_PNG_image_with_transparent_background-removebg-preview.png"></v-img>
                    </v-avatar>
                    <p class="text-button ml-2">تم التعليق على منشورك بواسطة Ammar aj</p> -->
                    <v-avatar>
                      <v-img :src="j.src"></v-img>
                    </v-avatar>

                    <p class="text-button ml-2">{{ j.text }}</p>
                  </v-list-item-title>
                  <p style="font-size: 10px;text-align: right;"> {{ timeSlice }} {{ " , " + date }}
                  </p>
                  <v-divider></v-divider>
                </v-list-item>

              </v-list>
            </v-menu>
          </v-badge>
          <v-switch style="translate: 0 10px;" class="mr-2 hidden-xs" @click="toggleTheme"
            :append-icon='icon == true ? "mdi-weather-night" : "mdi-white-balance-sunny"'></v-switch>
          <div style="width: 40%;" class="mr-4 hidden-sm">
            <v-select style="translate: 0 10px;" :item-title="title" item-value="value" v-model="lan" :items="item">
            </v-select>
          </div>
        </div>
      </v-toolbar>

      <v-toolbar class="hidden-sm-and-up" style="width:99%">
        <v-btn class="hidden-sm-and-up" to="/about"><v-icon>mdi-help</v-icon></v-btn>
        <v-spacer></v-spacer>
        <v-btn class="hidden-sm-and-up" to="/post" color="warning"><v-icon>mdi-home</v-icon></v-btn>
        <v-spacer></v-spacer>
        <v-btn class="hidden-sm-and-up" to="/quraan"><v-icon>mdi-book</v-icon></v-btn>
        <v-spacer></v-spacer>
        <v-switch class="hidden-sm-and-up" @click="toggleTheme" style="translate: 0 10px;"
          :append-icon='icon == true ? "mdi-weather-night" : "mdi-white-balance-sunny"'></v-switch>
      </v-toolbar>



      <!-- <v-btn class="hidden-sm-and-down" variant="outlined"
      color="primary"
    >
     <v-icon>mdi-menu-down</v-icon>

      <v-menu activator="parent">
        <v-list>
          <v-list-item
          >
            <v-list-item-title title="" value="sign"><v-btn to="/" variant="text" color="primary">Sign in/up</v-btn>  </v-list-item-title>
            <v-list-item-title title="" value="posts"><v-btn to="/post" variant="text" color="primary">Posts</v-btn>  </v-list-item-title>
            <v-list-item-title title="" value="About"><v-btn to="/about" variant="text" color="primary">About</v-btn>  </v-list-item-title>
            <v-list-item-title title="" value="About"><v-btn to="/quraan" variant="text" color="primary">Quraan</v-btn>  </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-btn> -->




    </v-app-bar>
    <!-- <v-system-bar class=""  style="height: 75px !important;padding-right: 10px;"> -->
    <v-toolbar class="pt-2 mt-16 hidden-md-and-up" color="orange-darken-3" style="height: auto;width:100%">

      <v-btn to="/profile-setting" rounded="10" height="auto" :ripple="false" v-if="token != '1'"
        style="translate: 0 0px;cursor: pointer" class="pa-4">
        <v-avatar router :to="{ path: '/profile' }" color="grey" rounded="10" size="60">
          <v-img to="/profile" :src="photoUrl" cover></v-img>

        </v-avatar></v-btn>
      <v-spacer></v-spacer>
      <v-badge class="mr-6 hidden-sm-and-up" style="cursor: pointer;" :content="notify.length" value="8" color="red"
        overlap>
        <v-icon large>
          mdi-bell
        </v-icon>
        <v-menu style="border-radius: 15px;" activator="parent" transition="slide-x-transition">
          <v-list height="250px" style="border-radius: 15px;">
            <v-list-item v-if="notify.length == 0">
              <v-list-item-title style="display: flex;">
                <v-avatar>
                  <v-img src="https://cdn.icon-icons.com/images/no_results2.png"></v-img>

                </v-avatar>
                <p class="ml-2 text-red"> لا يوجد اية اشعارات </p>
              </v-list-item-title>
            </v-list-item>
            <v-list-item class="mb-2" v-for="j in notify">
              <v-list-item-title style="display: flex;flex-direction: column;">
                <!-- <v-avatar>
                      <v-img src="../src/assets/Mosque_PNG_image_with_transparent_background-removebg-preview.png"></v-img>
                    </v-avatar>
                    <p class="text-button ml-2">تم التعليق على منشورك بواسطة Ammar aj</p> -->
                <v-avatar>
                  <v-img :src="j.src"></v-img>
                </v-avatar>

                <p class="" style="font-size: 12px;">{{ j.text }}</p>



              </v-list-item-title>
              <v-divider></v-divider>
            </v-list-item>

          </v-list>
        </v-menu>
      </v-badge>
      <div style="width: 40%;" class="mr-4 hidden-md-and-up">
        <v-select :item-title="title" :item-value="value" v-model="lan" :items="item">
        </v-select>
      </div><br>
    </v-toolbar>
  </v-layout>
  <router-view />
  <v-btn variant="flat" v-if="showButton" color="warning" @click="scrollToTop" class="scroll-to-top" size="small">
    <v-icon>mdi-arrow-up</v-icon>
  </v-btn>
  <!-- <v-overlay absolute location="bottom" close-delay="3000" v-model="menuShow" style="">
    <v-card style="width:30%; min-width: 300px;height: 100px;display: flex;flex-direction: column;justify-content: center;">

      <v-card-title style="display: flex;align-items: center;justify-content: space-between;"> <v-icon color="success" size="x-large">mdi-bell-alert</v-icon>لديك اشعار جديد</v-card-title>
    </v-card>
  </v-overlay> -->
  <v-snackbar v-model="menuShow" :timeout="4000" color="primary" bottom right>
    <v-icon left>mdi-bell</v-icon>
    لديك إشعار جديد
    <template v-slot:action="{ attrs }">
      <v-btn text v-bind="attrs" @click="snackbar = false">
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </template>
  </v-snackbar>

</template>

<script>
// import socket from '@/services/socket';
import io from 'socket.io-client';
import axios from 'axios';
import { Howler } from 'howler';
export default {
  name: 'App',
  created: async function () {

   this.saveuser();
    this.playSound();
    this.timeSlice = this.time.slice(0, 5);

    if (!localStorage.getItem("photourl")) {
      localStorage.setItem("photourl", " ")
    } else {
      this.photoUrl = localStorage.getItem("photourl")
    }
    try {
      const date = new Date();
      const year = date.getFullYear();
      const month = date.getMonth() + 1;
      const day = date.getDate();

      const lat = JSON.parse(localStorage.getItem("user")).lat;
      const long = JSON.parse(localStorage.getItem("user")).lat;
      this.date = `${year}/${month}/${day}`
      console.log(lat, long);
      console.log(this.date);



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

      console.log(this.fajr);

      console.log(this.zhr);

      console.log(this.asr);

      console.log(this.mughrib);

      console.log(this.isha);



    } catch (error) {
      console.error('Error fetching prayer times:', error);;
    } finally {
      this.loading = false;
    }

    setInterval(() => {
      const now = new Date();

      const hours = now.getHours();   // الساعة (0-23)
      const minutes = now.getMinutes(); // الدقائق (0-59)
      const seconds = now.getSeconds();
      const formattedHours = this.formatTime(hours);
      const formattedMinutes = this.formatTime(minutes);
      const formattedSeconds = this.formatTime(seconds);
      this.time = `${formattedHours}:${formattedMinutes
        }:${formattedSeconds}`
      this.CheakTime();
    }, 1000);

    setInterval(() => {
      if (localStorage.getItem("token")) {
        const randomNumber = Math.floor(Math.random() * 5);
        console.log(randomNumber);
        this.notify.push(this.SecNotify[randomNumber]);
        this.alarmSound.play();
      }
    }, 600000);
  },
  data() {
    return {
      date: "",
      menuShow: false,
      time: "",
      SecNotify: [
        { src: "https://images.icon-icons.com/1380/PNG/96/vcsconflicting_93497.png", text: "قاطع المنتجات الاسرائيلية" },
        { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxxnoXsYdQ-UWV1B75zl1EVHf63WqCjaNscQ&s", text: "Stop war of GAZA" },
        { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Muhammad_Masjid_an-Nabawi_Calligraphy.svg/960px-Muhammad_Masjid_an-Nabawi_Calligraphy.svg.png", text: "اللهم صلّ على سيدنا محمد" },
        { src: "https://images.icon-icons.com/2922/PNG/96/ramadhan_moslem_fasting_islam_god_allah_icon_183494.png", text: "لا تنسَ ذكر الله" },
        { src: "https://images.icon-icons.com/3379/PNG/96/faith_spiritual_hand_god_hope_prayer_religion_pray_icon_212473.png", text: "اقل ما يمكننا فعله هو الدعاء لاهلنا في غزة" },
        { src: "https://images.icon-icons.com/4069/PNG/96/islamic_muslim_islam_quran_book_holy_icon_258696.png", text: "قراءة القرآن تولد الطمأنينة و السكينة" },

      ],
      fajr: "",
      zhr: "",
      asr: "",
      mughrib: "",
      isha: "",
      notify: [],
      menuShow: false,
      showButton: false,
      photoUrl: "",
      icon: true,
      sw: false,
      icon: true,
      sw: false,
      path: false,
      alarmSound: null,
      apiurl: process.env.VUE_APP_API_URL,
      item: [
        { title: "EN", value: 0 },
        { title: "AR", value: 1 },
      ],
      lan: +localStorage.getItem("lan")

    }
  },
  watch: {
    icon(newvalue, oldvalue) {
      console.log(newvalue);
      this.icon = newvalue;
    },
    lan(newvalue, oldvalue) {
      console.log(this.lan);
      localStorage.setItem("lan", newvalue);
      window.location.reload();
    },

  },
  computed: {
    socket() {
      return this.$store.getters.getSocket;
    },
    // notifications() {
    //      return this.$store.getters.allNotifications;
    //   },
    showNavbar() {
      // إخفاء الـ Navbar في صفحات معينة
      return this.$route.name !== 'Auth';
    },

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
    CheakTime: function () {
      if (localStorage.getItem("token")) {
        if (this.time == this.zhr + ":00") {
          this.notify.push({ src: "https://images.icon-icons.com/4015/PNG/96/muslim_islam_religion_prayer_masjid_worship_mosque_adha_eid_icon_255587.png", text: "حان موعد اذان الظهر" },)
          this.alarmSound.play();
          this.menuShow = true
        }
        else if (this.time == this.asr + ":00") {
          this.notify.push({ src: "https://images.icon-icons.com/4015/PNG/96/muslim_islam_religion_prayer_masjid_worship_mosque_adha_eid_icon_255587.png", text: "حان موعد اذان العصر" },)
          this.alarmSound.play();
          this.menuShow = true
        }
        else if (this.time == this.mughrib + ":00") {
          this.notify.push({ src: "https://images.icon-icons.com/4015/PNG/96/muslim_islam_religion_prayer_masjid_worship_mosque_adha_eid_icon_255587.png", text: "حان موعد اذان المغرب" },)
          this.alarmSound.play();
          this.menuShow = true
        }
        else if (this.time == this.isha + ":00") {
          this.notify.push({ src: "https://images.icon-icons.com/4015/PNG/96/muslim_islam_religion_prayer_masjid_worship_mosque_adha_eid_icon_255587.png", text: "حان موعد اذان العشاء" },)
          this.alarmSound.play();
          this.menuShow = true
        }
        else if (this.time == this.fajr + ":00") {
          this.notify.push({ src: "https://images.icon-icons.com/4015/PNG/96/muslim_islam_religion_prayer_masjid_worship_mosque_adha_eid_icon_255587.png", text: "حان موعد اذان الفجر" },)
          this.alarmSound.play();
          this.menuShow = true
        }
        else if (this.time == this.CutTime(this.zhr)) {
          this.notify.push({ src: "https://images.icon-icons.com/567/PNG/96/clock_icon-icons.com_54407.png", text: "تبقى ساعة على اذان صلاة الظهر" },)
          this.alarmSound.play();
          this.menuShow = true
        }
        else if (this.time == this.CutTime(this.asr)) {
          this.notify.push({ src: "https://images.icon-icons.com/567/PNG/96/clock_icon-icons.com_54407.png", text: "تبقى ساعة على اذان صلاة العصر" },)
          this.alarmSound.play();
          this.menuShow = true
        }


        else if (this.time == this.CutTime(this.mughrib)) {
          this.notify.push({ src: "https://images.icon-icons.com/567/PNG/96/clock_icon-icons.com_54407.png", text: "تبقى ساعة على اذان صلاة المغرب" },)
          this.alarmSound.play();

          this.menuShow = true
        }
        else if (this.time == this.CutTime(this.isha)) {
          this.notify.push({ src: "https://images.icon-icons.com/567/PNG/96/clock_icon-icons.com_54407.png", text: "تبقى ساعة على اذان صلاة العشاء" },)
          this.alarmSound.play();
          this.menuShow = true
        }
        else if (this.time == this.CutTime(this.fajr)) {

          this.notify.push({ src: "https://images.icon-icons.com/567/PNG/96/clock_icon-icons.com_54407.png", text: "تبقى ساعة على اذان صلاة الفجر" },)
          this.alarmSound.play();
          this.menuShow = true
        }
        console.log(this.CutTime(this.mughrib));
      }

    },
    playSound() {
      this.alarmSound = new Howl({
        src: ["/sounds/notification-alert-269289.mp3"], // تأكد من وجود الملف في مجلد public/sounds
        loop: false,
        volume: 0.7,
        onloaderror: () => {
          console.error('حدث خطأ في تحميل الصوت');
        },
        onplayerror: () => {
          console.error('حدث خطأ في تشغيل الصوت');
        }
      });
    },
    CutTime: function (time) {
      if (time.slice(0, 1) == "0") {
        return +"0" + "" + (time.slice(1, 2) - 1) + time.slice(2, 7) + ":00"
      } else {
        return (time.slice(0, 2) - 1) + time.slice(2, 7) + ":00"
      }
    },
    formatTime: function (time) {
      return time < 10 ? `0${time}` : time;
    },
    ch: function () {
      console.log(this.lan)
      localStorage.setItem("lan", JSON.stringify(this.lan));
      window.location.reload();
    },
    handleScroll() {
      this.showButton = window.scrollY > 200;
    },
    scrollToTop: () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
  },

  mounted: function () {

    this.$store.dispatch('initSocket');
    this.socket.on('notification', async (data) => {
      console.log(data);
      if (data.data.type == "new_like") {
        console.log("eveeet");

        let response = await axios.get(`${this.apiurl}/users/profile/${data.data.userId}`)

        let user = response.data.user.username;
        this.notify.push({ src: "https://images.icon-icons.com/2857/PNG/96/instagram_like_heart_love_icon_181632.png", text: ` على منشورك ${user} تم التفاعل بواسطة ` })
      } else if (data.data.type == "new_post") {
        let response = await axios.get(`${this.apiurl}/users/profile/${data.data.userId}`)

        let user = response.data.user.username;
        this.notify.push({ src: " https://images.icon-icons.com/3237/PNG/96/tool_social_media_edit_edit_post_aplication_icon_197319.png", text: ` ${user} تم نشر منشور بواسطة ` })

      } else if (data.data.type == "new_follow") {

        let user = data.data.currentUser.username;
        this.notify.push({ src: " https://images.icon-icons.com/3939/PNG/96/user_girl_female_follow_icon_250745.png", text: ` ${user} تمت متابعتك بواسطة ` })

      } else if (data.data.type == "new_comment") {

        let response = await axios.get(`${this.apiurl}/users/profile/${data.data.userId}`)

        let user = response.data.user.username;
        this.notify.push({ src: "https://images.icon-icons.com/402/PNG/96/comment-edit_40480.png", text: ` ${user} تمت التعليق على منشورك بواسطة ` })

      }
      this.menuShow = true
      this.alarmSound.play();
      console.log(data);
    })
    if (!localStorage.getItem("lan")) {
      localStorage.setItem("lan", 0)
    }
    window.addEventListener("scroll", this.handleScroll);
    // socket.on('GetOnlineUsers', (users) => {
    //   this.$store.dispatch('updateOnlineUsers', users);
    // });
    // socket.on('connect', () => {
    //   console.log('Connected to server');
    // }); 
  },
  beforeUnmount: () => {
    window.removeEventListener("scroll", this.handleScroll);
  },

}

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

<style scoped>
.scroll-to-top {
  position: fixed;
  bottom: 20px;
  right: 20px;
  border-radius: 45%;
}

.sh {
  transition: 0.4s;
  cursor: pointer;
  font-size: 35px !important;
}

.bar {
  width: 100% !important;
}

.sh:hover {
  rotate: 360deg;
}

@font-face {
  font-family: ff;
  src: url("../src/assets/Noto_Kufi_Arabic/NotoKufiArabic-VariableFont_wght.ttf")
}

* {
  font-family: ff !important
}
</style>
