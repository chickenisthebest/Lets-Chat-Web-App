const firebaseConfig = {
    apiKey: "AIzaSyCG42I0-lkBXpBJCsfo8hLCxANubVyp3bU",
    authDomain: "lets-chat-web-app-31803.firebaseapp.com",
    databaseURL: "https://lets-chat-web-app-31803-default-rtdb.firebaseio.com",
    projectId: "lets-chat-web-app-31803",
    storageBucket: "lets-chat-web-app-31803.appspot.com",
    messagingSenderId: "1088224713826",
    appId: "1:1088224713826:web:0ee51e78e7799f16ce053b"
  };
  
function getData() {
    firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
          console.log("Room Name - " + Room_names);
          row = "<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
          document.getElementById("output").innerHTML+=row;
    //End code
    });});}
getData();

function addRoom(){
    room_name = document.getElementById("room_name").value;

    firebase.database().ref("/").child(room_name).update({
          purpose: "adding room name"
    });

    localStorage.setItem("room_name", room_name);
    window.location = "kwitter_page.html";
}

function redirectToRoomName(name){
    console.log(name);
    localStorage.setItem("room_name", name);
          window.location = "kwitter_page.html";
}
