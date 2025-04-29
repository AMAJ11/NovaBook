import { io } from "socket.io-client";

const socket = io("http://localhost:8000"); // ضع هنا عنوان الخادم الخاص بك

export default socket;