// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCz95E4rcmP5A50gWEedlOHNMVXPKrCCYE",
    authDomain: "imlproject3.firebaseapp.com",
    projectId: "imlproject3",
    storageBucket: "imlproject3.appspot.com",
    messagingSenderId: "7402682038",
    appId: "1:7402682038:web:ccc6487d42e2c0304f1817"
  };


firebase.initializeApp(firebaseConfig);

const db = firebase.database();
let dbRef = db.ref("text");

//  var data ={
//    name: "q",
//    word: "hello"
//  }
 
// dbRef.push(data);


let chatContainer = document.getElementById("chat-container");
let entry = document.getElementById("text-input-entry");
let share = document.getElementById("text-input-submit");


dbRef.on("child_added", gotText);

function gotText(data) {
  let id = data.key;
  let value = data.val();
  console.log(value);
  chatContainer.innerHTML =
    "<div class='response'>" + value + "</div>" + chatContainer.innerHTML;
}

//click button will run this function
const textInputSubmit = document.getElementById("text-input-submit");
textInputSubmit.addEventListener("click", submitText);

let textContainerElement = document.getElementById("text-input-entry");

function submitText() {
  let textToSubmit = textContainerElement.value; //gets text value from textbox
  let newKey = dbRef.push().key; //ask firebase to give you a new key / 'name'
  let updates = {}; //send firebase list of values
  updates[newKey] = textToSubmit;
  dbRef.update(updates);
}

function submitlock() {
  entry.remove();
  share.value = "Thanks for telling me.";
  share.disabled = true;
  share.style.width = "70%";
}
