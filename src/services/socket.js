import { io } from "socket.io-client";

const socket = io("http://localhost:8000",{
    query:{
        userId: localStorage.getItem("id")
    }
}); // ضع هنا عنوان الخادم الخاص بك

export default socket;