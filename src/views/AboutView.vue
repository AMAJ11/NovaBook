<template>
  <v-container class="about-page">
    <v-btn to="/post" class="mb-3" variant="text"> <v-icon>mdi-arrow-left</v-icon> </v-btn>
    <v-row justify="center" dir="rtl">
      <v-col cols="12" md="8">
        <v-card class="pa-2 pa-md-6" elevation="2">
          <v-icon size="x-large" color="primary" class="mr-2  hidden-md-and-uo">mdi-star-circle</v-icon>
          <v-card-title class="text-h4 primary--text mb-4">
            <v-icon large color="primary" class="mr-2  hidden-sm-and-down">mdi-star-circle</v-icon>
            حول NovaWrite
          </v-card-title>

          <v-divider class="my-4"></v-divider>

          <v-card-text>
            <p class="text-h6 mb-4">
              مرحبًا بكم في NovaWrite، منصة التواصل الاجتماعي للكتاب والمبدعين!
            </p>

            <p class="mb-3">
              NovaWrite هي منصة مصممة خصيصًا للكتاب، المدونين، الشعراء وجميع محبي الكتابة. نقدم مساحة آمنة وإبداعية
              لمشاركة أعمالكم، التواصل مع قراءكم واكتشاف مواهب جديدة.
            </p>

            <v-list class="mt-4">
              <v-list-item v-for="(feature, i) in features" :key="i">
                <v-list-item-icon>
                  <v-icon color="primary">{{ feature.icon }}</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title>{{ feature.title }}</v-list-item-title>
                  <v-list-item-subtitle>{{ feature.desc }}</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-list>

            <v-alert type="info" class="mt-6">
              <strong>انضم إلينا اليوم</strong> وابدأ رحلتك الإبداعية مع مجتمع من الكتاب المتحمسين!
            </v-alert>
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" @click="$router.push('/Auth')">
              <v-icon left>mdi-account-plus</v-icon>
              انضم إلينا
            </v-btn>
          </v-card-actions>
        </v-card>

        <v-card class="mt-6 pa-4" elevation="2">
          <v-card-title class="text-h5 secondary--text">
            <v-icon color="secondary" class="mr-2">mdi-account-group</v-icon>
            فريقنا
          </v-card-title>

          <v-row style="display: flex;justify-content: space-between;">
            <v-col cols="12" sm="6" md="6">
              <v-card>
                <v-img src="../assets/WhatsApp Image 2025-05-09 at 9.45.57 PM.jpeg" height="250"
                  class="rounded-circle mx-auto" style="width: 250px;"></v-img>
                <v-card-title>عمار أبو جيب</v-card-title>
                <v-card-text>مطور ال front-end && مصمم ال ui/ux</v-card-text>
              </v-card>
            </v-col>
            <v-col cols="12" sm="6" md="6">
              <v-card>
                <v-img src="../assets/WhatsApp Image 2025-05-09 at 9.41.00 PM.jpeg" height="250"
                  class="rounded-circle mx-auto" style="width: 250px;"></v-img>
                <v-card-title>عمر ضاهر</v-card-title>
                <v-card-text>مطور ال backend و Data Management</v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      features: [
        {
          icon: 'mdi-pencil',
          title: 'منصة كتابة متكاملة',
          desc: 'أدوات كتابة غنية بمميزات التنسيق والتعديل'
        },
        {
          icon: 'mdi-share',
          title: 'مشاركة الأعمال',
          desc: 'انشر أعمالك مع مجتمع القراء والكتاب'
        },
        {
          icon: 'mdi-comment',
          title: 'تفاعل مباشر',
          desc: 'احصل على تعليقات ونقد بناء من القراء'
        },
        {
          icon: 'mdi-shield',
          title: 'بيئة آمنة',
          desc: 'نحن نحمي حقوقك الفكرية ونحترم خصوصيتك'
        }
      ],

    }
  }
}
</script>

<style scoped>
.about-page {
  padding-top: 40px;
  padding-bottom: 60px;
  position: relative;
}

.rounded-circle {
  border-radius: 50% !important;
}
</style>