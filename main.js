// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

// HTML DOM variables
const modal = document.getElementById("modal");
const modalMessage = document.getElementById("modal-message")
const hearts = document.querySelectorAll(".like-glyph");

// set modal to initial start hidden (and pass the learn test).
modal.className = "hidden";

// callback function

function heartCallBack(e) {
  mimicServerCall() 
    .then(function() {
      if ( e.target.innerText === EMPTY_HEART) {
      e.target.innerText = FULL_HEART;
      e.target.className = "activated-heart";
      } else {
        e.target.innerText = EMPTY_HEART;
        e.target.className = "";
      }
    })    
    .catch(function(error) {
      modal.className = "";
      modalMessage.innerText = error;
      setTimeout(function() {
        modal.className = "hidden"
      }, 3000);
  }); 
};

// for loop to add to the eventListener to each of the hearts 

for (const eachHeart of hearts) {
  eachHeart.addEventListener("click", heartCallBack);
}


//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
