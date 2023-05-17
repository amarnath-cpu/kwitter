
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyC6T2KZ7nQwIQPdLfvT_5wGRz52FjzmN7k",
      authDomain: "kwitter-3dfa3.firebaseapp.com",
      databaseURL: "https://kwitter-3dfa3-default-rtdb.firebaseio.com",
      projectId: "kwitter-3dfa3",
      storageBucket: "kwitter-3dfa3.appspot.com",
      messagingSenderId: "1076533052940",
      appId: "1:1076533052940:web:20acda58d637af80241029",
      measurementId: "G-PMHHZKLDSS"
    };
    firebase.initializeApp(firebaseConfig);
    user_name=localStorage.getItem("user_name");
    room_name=localStorage.getItem("room_name");
    document.getElementById("user_name").innerHTML="Welcome "+user_name+" !";
    function addRoom(){
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name "
      });
      localStorage.setItem("room_name",room_name);
      window.location="kwitter_page.html";
    }


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name- "+Room_names);
      row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div> <hr>";  
      document.getElementById("output").innerHTML+=row;



      //End code
      });});}
getData();

function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location="kwitter_page.html";
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}

