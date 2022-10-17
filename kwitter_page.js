//YOUR FIREBASE LINKS
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCG42I0-lkBXpBJCsfo8hLCxANubVyp3bU",
    authDomain: "lets-chat-web-app-31803.firebaseapp.com",
    databaseURL: "https://lets-chat-web-app-31803-default-rtdb.firebaseio.com",
    projectId: "lets-chat-web-app-31803",
    storageBucket: "lets-chat-web-app-31803.appspot.com",
    messagingSenderId: "1088224713826",
    appId: "1:1088224713826:web:0ee51e78e7799f16ce053b"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

function send(){
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
          name:user_name,
          message:msg,
          like:0
    });
    document.getElementById("msg").value = "";
}