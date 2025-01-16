<template>
    <div class="about" style="text-align: center; padding: 2%;">
      <v-alert color="grey"> ` و من جهلت نفسه قدره      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  رأى غيره منه ما لا يرى`  </v-alert>
      <v-row>
        <v-col class="" style="border: 2px dashed black;" cols="12" sm="12" md="10" lg="8">
          <v-progress-linear v-if="this.lod" indeterminate></v-progress-linear>
          <h1 v-for="s in this.surahs" class="text-primary mb-4 mt-2"> {{ s.name }} </h1>
          <h2> {{ this.i }} الصفحة </h2>
          <p class="text-button" style="font-size: 25px !important;" v-for="p in this.aayt"> {{ p.text }} <span
              class=text-orange-darken-3>{{ p.numberInSurah }}</span> </p>
        </v-col>
        <v-col lg="4" style="text-align: right
        ;">
          <div class="mb-10 mt-10">
            <p class="text-button"> الانتقال الى صفحة معينة</p>
            <v-number-input style="" max="604" control-variant="split" min="1" v-model="this.i"></v-number-input>
          </div>
         
        </v-col>
      </v-row>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  import { VNumberInput } from 'vuetify/labs/VNumberInput'
  export default {
    components: { VNumberInput },
    created: async function () {
  
      await axios.get(`https://api.alquran.cloud/v1/page/${this.i}/quran-uthmani`).then((res) => {
        this.page = res.data;
        this.aayt = res.data.data.ayahs;
        this.surahs = res.data.data.surahs
      })
  
    },
    // async mounted() {
    //   for (let i = 1; i < 115; i++) {
    //     await axios.get(`https://api.alquran.cloud/v1/surah/${i}`).then((res) => {
    //       this.s.push({ "title": res.data.data.name, "value": i })
    //     })
    //   }
    // },
    data: function () {
      return {
        s: [
          {
            "title": "سُورَةُ ٱلْفَاتِحَةِ",
            "value": 1
          },
          {
            "title": "سُورَةُ البَقَرَةِ",
            "value": 2
          },
          {
            "title": "سُورَةُ آلِ عِمۡرَانَ",
            "value": 3
          },
          {
            "title": "سُورَةُ النِّسَاءِ",
            "value": 4
          },
          {
            "title": "سُورَةُ المَائـِدَةِ",
            "value": 5
          },
          {
            "title": "سُورَةُ الأَنۡعَامِ",
            "value": 6
          },
          {
            "title": "سُورَةُ الأَعۡرَافِ",
            "value": 7
          },
          {
            "title": "سُورَةُ الأَنفَالِ",
            "value": 8
          },
          {
            "title": "سُورَةُ التَّوۡبَةِ",
            "value": 9
          },
          {
            "title": "سُورَةُ يُونُسَ",
            "value": 10
          },
          {
            "title": "سُورَةُ هُودٍ",
            "value": 11
          },
          {
            "title": "سُورَةُ يُوسُفَ",
            "value": 12
          },
          {
            "title": "سُورَةُ الرَّعۡدِ",
            "value": 13
          },
          {
            "title": "سُورَةُ إِبۡرَاهِيمَ",
            "value": 14
          },
          {
            "title": "سُورَةُ الحِجۡرِ",
            "value": 15
          },
          {
            "title": "سُورَةُ النَّحۡلِ",
            "value": 16
          },
          {
            "title": "سُورَةُ الإِسۡرَاءِ",
            "value": 17
          },
          {
            "title": "سُورَةُ الكَهۡفِ",
            "value": 18
          },
          {
            "title": "سُورَةُ مَرۡيَمَ",
            "value": 19
          },
          {
            "title": "سُورَةُ طه",
            "value": 20
          },
          {
            "title": "سُورَةُ الأَنبِيَاءِ",
            "value": 21
          },
          {
            "title": "سُورَةُ الحَجِّ",
            "value": 22
          },
          {
            "title": "سُورَةُ المُؤۡمِنُونَ",
            "value": 23
          },
          {
            "title": "سُورَةُ النُّورِ",
            "value": 24
          },
          {
            "title": "سُورَةُ الفُرۡقَانِ",
            "value": 25
          },
          {
            "title": "سُورَةُ الشُّعَرَاءِ",
            "value": 26
          },
          {
            "title": "سُورَةُ النَّمۡلِ",
            "value": 27
          },
          {
            "title": "سُورَةُ القَصَصِ",
            "value": 28
          },
          {
            "title": "سُورَةُ العَنكَبُوتِ",
            "value": 29
          },
          {
            "title": "سُورَةُ الرُّومِ",
            "value": 30
          },
          {
            "title": "سُورَةُ لُقۡمَانَ",
            "value": 31
          },
          {
            "title": "سُورَةُ السَّجۡدَةِ",
            "value": 32
          },
          {
            "title": "سُورَةُ الأَحۡزَابِ",
            "value": 33
          },
          {
            "title": "سُورَةُ سَبَإٍ",
            "value": 34
          },
          {
            "title": "سُورَةُ فَاطِرٍ",
            "value": 35
          },
          {
            "title": "سُورَةُ يسٓ",
            "value": 36
          },
          {
            "title": "سُورَةُ الصَّافَّاتِ",
            "value": 37
          },
          {
            "title": "سُورَةُ صٓ",
            "value": 38
          },
          {
            "title": "سُورَةُ الزُّمَرِ",
            "value": 39
          },
          {
            "title": "سُورَةُ غَافِرٍ",
            "value": 40
          },
          {
            "title": "سُورَةُ فُصِّلَتۡ",
            "value": 41
          },
          {
            "title": "سُورَةُ الشُّورَىٰ",
            "value": 42
          },
          {
            "title": "سُورَةُ الزُّخۡرُفِ",
            "value": 43
          },
          {
            "title": "سُورَةُ الدُّخَانِ",
            "value": 44
          },
          {
            "title": "سُورَةُ الجَاثِيَةِ",
            "value": 45
          },
          {
            "title": "سُورَةُ الأَحۡقَافِ",
            "value": 46
          },
          {
            "title": "سُورَةُ مُحَمَّدٍ",
            "value": 47
          },
          {
            "title": "سُورَةُ الفَتۡحِ",
            "value": 48
          },
          {
            "title": "سُورَةُ الحُجُرَاتِ",
            "value": 49
          },
          {
            "title": "سُورَةُ قٓ",
            "value": 50
          },
          {
            "title": "سُورَةُ الذَّارِيَاتِ",
            "value": 51
          },
          {
            "title": "سُورَةُ الطُّورِ",
            "value": 52
          },
          {
            "title": "سُورَةُ النَّجۡمِ",
            "value": 53
          },
          {
            "title": "سُورَةُ القَمَرِ",
            "value": 54
          },
          {
            "title": "سُورَةُ الرَّحۡمَٰن",
            "value": 55
          },
          {
            "title": "سُورَةُ الوَاقِعَةِ",
            "value": 56
          },
          {
            "title": "سُورَةُ الحَدِيدِ",
            "value": 57
          },
          {
            "title": "سُورَةُ المُجَادلَةِ",
            "value": 58
          },
          {
            "title": "سُورَةُ الحَشۡرِ",
            "value": 59
          },
          {
            "title": "سُورَةُ المُمۡتَحنَةِ",
            "value": 60
          },
          {
            "title": "سُورَةُ الصَّفِّ",
            "value": 61
          },
          {
            "title": "سُورَةُ الجُمُعَةِ",
            "value": 62
          },
          {
            "title": "سُورَةُ المُنَافِقُونَ",
            "value": 63
          },
          {
            "title": "سُورَةُ التَّغَابُنِ",
            "value": 64
          },
          {
            "title": "سُورَةُ الطَّلَاقِ",
            "value": 65
          },
          {
            "title": "سُورَةُ التَّحۡرِيمِ",
            "value": 66
          },
          {
            "title": "سُورَةُ المُلۡكِ",
            "value": 67
          },
          {
            "title": "سُورَةُ القَلَمِ",
            "value": 68
          },
          {
            "title": "سُورَةُ الحَاقَّةِ",
            "value": 69
          },
          {
            "title": "سُورَةُ المَعَارِجِ",
            "value": 70
          },
          {
            "title": "سُورَةُ نُوحٍ",
            "value": 71
          },
          {
            "title": "سُورَةُ الجِنِّ",
            "value": 72
          },
          {
            "title": "سُورَةُ المُزَّمِّلِ",
            "value": 73
          },
          {
            "title": "سُورَةُ المُدَّثِّرِ",
            "value": 74
          },
          {
            "title": "سُورَةُ القِيَامَةِ",
            "value": 75
          },
          {
            "title": "سُورَةُ الإِنسَانِ",
            "value": 76
          },
          {
            "title": "سُورَةُ المُرۡسَلَاتِ",
            "value": 77
          },
          {
            "title": "سُورَةُ النَّبَإِ",
            "value": 78
          },
          {
            "title": "سُورَةُ النَّازِعَاتِ",
            "value": 79
          },
          {
            "title": "سُورَةُ عَبَسَ",
            "value": 80
          },
          {
            "title": "سُورَةُ التَّكۡوِيرِ",
            "value": 81
          },
          {
            "title": "سُورَةُ الانفِطَارِ",
            "value": 82
          },
          {
            "title": "سُورَةُ المُطَفِّفِينَ",
            "value": 83
          },
          {
            "title": "سُورَةُ الانشِقَاقِ",
            "value": 84
          },
          {
            "title": "سُورَةُ البُرُوجِ",
            "value": 85
          },
          {
            "title": "سُورَةُ الطَّارِقِ",
            "value": 86
          },
          {
            "title": "سُورَةُ الأَعۡلَىٰ",
            "value": 87
          },
          {
            "title": "سُورَةُ الغَاشِيَةِ",
            "value": 88
          },
          {
            "title": "سُورَةُ الفَجۡرِ",
            "value": 89
          },
          {
            "title": "سُورَةُ البَلَدِ",
            "value": 90
          },
          {
            "title": "سُورَةُ الشَّمۡسِ",
            "value": 91
          },
          {
            "title": "سُورَةُ اللَّيۡلِ",
            "value": 92
          },
          {
            "title": "سُورَةُ الضُّحَىٰ",
            "value": 93
          },
          {
            "title": "سُورَةُ الشَّرۡحِ",
            "value": 94
          },
          {
            "title": "سُورَةُ التِّينِ",
            "value": 95
          },
          {
            "title": "سُورَةُ العَلَقِ",
            "value": 96
          },
          {
            "title": "سُورَةُ القَدۡرِ",
            "value": 97
          },
          {
            "title": "سُورَةُ البَيِّنَةِ",
            "value": 98
          },
          {
            "title": "سُورَةُ الزَّلۡزَلَةِ",
            "value": 99
          },
          {
            "title": "سُورَةُ العَادِيَاتِ",
            "value": 100
          },
          {
            "title": "سُورَةُ القَارِعَةِ",
            "value": 101
          },
          {
            "title": "سُورَةُ التَّكَاثُرِ",
            "value": 102
          },
          {
            "title": "سُورَةُ العَصۡرِ",
            "value": 103
          },
          {
            "title": "سُورَةُ الهُمَزَةِ",
            "value": 104
          },
          {
            "title": "سُورَةُ الفِيلِ",
            "value": 105
          },
          {
            "title": "سُورَةُ قُرَيۡشٍ",
            "value": 106
          },
          {
            "title": "سُورَةُ المَاعُونِ",
            "value": 107
          },
          {
            "title": "سُورَةُ الكَوۡثَرِ",
            "value": 108
          },
          {
            "title": "سُورَةُ الكَافِرُونَ",
            "value": 109
          },
          {
            "title": "سُورَةُ النَّصۡرِ",
            "value": 110
          },
          {
            "title": "سُورَةُ المَسَدِ",
            "value": 111
          },
          {
            "title": "سُورَةُ الإِخۡلَاصِ",
            "value": 112
          },
          {
            "title": "سُورَةُ الفَلَقِ",
            "value": 113
          },
          {
            "title": "سُورَةُ النَّاسِ",
            "value": 114
          }
        ],
        i: 1,
        page: {},
        aayt: [],
        surahs: "",
        juz: 1,
        sura: 1,
        sr: { title: " ", value: 1 },
        lod: false
      }
    },
    watch: {
      async i(newValue, oldValue) {
        await axios.get(`https://api.alquran.cloud/v1/page/${newValue}/quran-uthmani`).then((res) => {
          this.page = res.data;
          this.aayt = res.data.data.ayahs;
          this.surahs = res.data.data.surahs
        })
      },
      juz(newValue, oldValue) {
        axios.get(`http://api.alquran.cloud/v1/juz/${newValue}/quran-uthmani`).then((res) => {
          this.i = res.data.data.ayahs[0].page
        })
      },
      sr(newValue, oldValue) {
        if (newValue != null) {
          axios.get(`http://api.alquran.cloud/v1/surah/${newValue.value}`).then((res) => {
            this.i = res.data.data.ayahs[0].page
          })
        }
        console.log(newValue)
      }
    }
  }
  </script>
  
  <style scoped>
  @media (max-width: 1000px) {
     .about{padding-top:15% !important}
  }
  @media (max-width:350px) {
    .about{padding-top:25% !important}
  }
  @font-face {
    font-family: ff;
    src: url("../assets/Noto_Kufi_Arabic/NotoKufiArabic-VariableFont_wght.ttf")
  }
  
  * {
    font-family: ff !important
  }
  </style>