
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyDtVRnaBSspwV_3KWzu4NYUo-lHH8Q0FX0",
      authDomain: "social-website-30047.firebaseapp.com",
      databaseURL: "https://social-website-30047-default-rtdb.firebaseio.com",
      projectId: "social-website-30047",
      storageBucket: "social-website-30047.appspot.com",
      messagingSenderId: "303314070410",
      appId: "1:303314070410:web:4a639b729ae7b262ecb673"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    function addRoom(){
      room_name = document.getElementById("Room_name").value;
      firebase.database().ref("/").child(room_name).update({
        purpose : "adding room name"
    });
      localStorage.setItem("room_name",room_name);
      window.location = "kwitter_page.html";
    }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room name" + room_name);
                
       row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
                   document.getElementById("output").innerHTML;
       
      });});}
getData();
 
    function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html"
    }
    
    function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
    }
    
    function send(){
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
        name:user_name,
        message:msg,
        like:0,
    });}