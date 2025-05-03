// import { createStore } from 'vuex';

// const store = createStore({
//   state: {
//     notifications: [],
//     onlineUsers: []
//   },
//   mutations: {
//     SET_NOTIFICATIONS(state, notifications) {
//       state.notifications = notifications;
//     },
//     ADD_NOTIFICATION(state, notification) {
//       state.notifications.unshift(notification);
//     },
//     SET_ONLINE_USERS(state, users) {
//       state.onlineUsers = users;
//     }
//   },
//   actions: {
//     receiveNotification({ commit }, notification) {
//       commit('ADD_NOTIFICATION', notification);
//     },
//     updateOnlineUsers({ commit }, users) {
//       commit('SET_ONLINE_USERS', users);
//     }
//   },
//   getters: {
//     allNotifications: state => state.notifications,
//     onlineUsers: state => state.onlineUsers
//   }
// });
// export default store;
import axios from 'axios';
const geusers = async function(data){
    let users=[];
for (let i = 0; i < data.length; i++) {
    if (data[i] != localStorage.getItem("id")) {
       let response = await axios.get(`${process.env.VUE_APP_API_URL}/users/profile/${data[i]+""}`)
       users.push({ Name: response.data.user.username, isonline: true, id: data[i], image: response.data.user.profilephoto.url })
    }}
    return users
}



// store/index.js
import { io } from 'socket.io-client';
import { createStore } from 'vuex';

export const socket = io('https://novaback-main.onrender.com',{
    query:{
                userId: localStorage.getItem("id")
            },
        
});


const store = createStore({
  state: {
    notifications: [],
    onlineUsers: [],
    socketConnected: false,
  },

  mutations: {  
    SET_SOCKET_CONNECTED(state, status) {
      state.socketConnected = status;
    },

    ADD_NOTIFICATION(state, notification) {
      state.notifications.unshift(notification);
    },

    SET_ONLINE_USERS(state, users) {
      state.onlineUsers = (users);
    },
  },
  actions: {
    async initSocket({ commit, dispatch }) {
        socket.on('connect', () => {
          console.log('🔌 Socket connected');
          commit('SET_SOCKET_CONNECTED', true);
    
          socket.on('GetOnlineUsers', async (data) => {
            console.log('📥 Received online user IDsbbb:', data);
            const users = await geusers(data); // ⚠️ هنا نحصل على البيانات كاملة
            commit('SET_ONLINE_USERS', users); // نمررها للمتحول
          });
        });

      socket.on('disconnect', () => {
        console.log('❌ Socket disconnected');
        commit('SET_SOCKET_CONNECTED', false);
      });
      socket.on('GetOnlineUsers', async (data) => {
        console.log('📥 Received online user IDs:', data);
      })

    },
  },

  getters: {
    allNotifications: (state) => state.notifications,
    onlineUsers: (state) => state.onlineUsers,
    isSocketConnected: (state) => state.socketConnected,
    getSocket: () => socket
  },
});
export default store;
