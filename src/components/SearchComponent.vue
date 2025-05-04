<template>
    <v-container>
      <v-text-field
        v-model="searchQuery"
        :label= "lan=='1' ? 'اكتشف اصدقاء جدد':'Discover the world around you'"
        outlined
        
        @input="onSearchInput"
        @keyup.enter="searchUsers"
        :loading="isLoading"
        prepend-inner-icon="mdi-magnify"
      ></v-text-field>
  
      <v-list v-if="searchResults.length > 0">
        <v-list-item
          v-for="user in searchResults"
          :key="user._id"
          @click="goToProfile(user._id)"
        >
          <v-list-item-avatar>
            
          </v-list-item-avatar>
          <v-list-item-content >
            <v-list-item-title style="display:flex; justify-content: space-between" >
              <p>  {{ user.username }}  </p>
                
              <v-avatar size="25">
                <v-img :src="user.profilephoto.url || defaultAvatar"></v-img>
              </v-avatar>

            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
  
      <v-alert
        v-else-if="searchQuery && !isLoading"
        type="info"
      >
        لا توجد نتائج لـ "{{ searchQuery }}"
      </v-alert>
    </v-container>
  </template>
  
  <script>
  import axios from 'axios';
  import _ from 'lodash';
  
  export default {
    data() {
      return {
        lan: +localStorage.getItem("lan"),
        apiurl: process.env.VUE_APP_API_URL,
        searchQuery: '',
        searchResults: [],
        isLoading: false,
        defaultAvatar: '/default-avatar.jpg',
        debouncedSearch: null
      };
    },
    created() {
      this.debouncedSearch = _.debounce(this.searchUsers, 500);
    },
    methods: {
      onSearchInput() {
        if (this.searchQuery.trim() === '') {
          this.searchResults = [];
          return;
        }
        this.debouncedSearch();
      },
      async searchUsers() {
        if (this.searchQuery.trim() === '') {
          this.searchResults = [];
          return;
        }
  
        this.isLoading = true;
        try {
  const response = await axios.post(`${this.apiurl}/users/searchbyname`, {
    name: this.searchQuery
  });
  
  // تحقق من وجود البيانات في الاستجابة
  if (response.data && Array.isArray(response.data)) {
    this.searchResults = response.data;
  } else {
    throw new Error('Invalid response format');
  }
  
} catch (error) {
  console.error('Search error:', error);
  
  // عرض رسالة الخطأ بشكل آمن
  this.$toast.error(error.response?.data?.message || 
                   error.message || 
                   'حدث خطأ أثناء البحث');
  
  this.searchResults = []; // إفراغ نتائج البحث في حالة الخطأ
} finally {
  this.isLoading = false;
}
      },
      goToProfile(userId) {
        this.$router.push(`Person-Profile/${userId}`);
      }
    }
  };
  </script>
  
  <style scoped>
  .v-list {
    max-height: 400px;
    overflow-y: auto;
  }
  </style>