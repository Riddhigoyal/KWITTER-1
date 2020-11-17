
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyDnFoT2SLiMaqHCRHphFWgI6F-y04GzWns",
      authDomain: "kwitter-e72d2.firebaseapp.com",
      databaseURL: "https://kwitter-e72d2.firebaseio.com",
      projectId: "kwitter-e72d2",
      storageBucket: "kwitter-e72d2.appspot.com",
      messagingSenderId: "671652694358",
      appId: "1:671652694358:web:6cd5ab45e485fd7a21aef7"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
     
    function addUser(){
        get_user=document.getElementById("userName").value;
        firebase.database().ref("/").child(get_user).update({
            purpose : "Add User"
        }) ;
    }
      //End code
      });});}
getData();
