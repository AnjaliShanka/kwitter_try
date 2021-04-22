//YOUR FIREBASE LINKS
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

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
name1 = message_data['name'];
message = message_data['message'];
like = message_data['like'];
name_with_tag = "<h4 "+ name1 +"img class='user_tick'  src='tick.png'></h4>";
message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";

//End code
      } });  }); }
getData();

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location.replace("index.html");
}

function updateLike(message_id) {
      console/log("clicked on like button - " + message_id);
      button_id = message_id;
      likes =document.getElementById(button_id).value;
      updated_like = Number(likes) + 1;
      console.log(updated_likes);

      firebase.database().ref(room_name).child(message_id).update({
            like : updated_likes
      });

}