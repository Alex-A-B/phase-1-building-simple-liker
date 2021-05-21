// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

// HTML DOM variables
const modal = document.getElementById("modal");
const heart = document.querySelectorAll("like");


// eventListeners

// document.addEventListener("DOMContentLoaded", (e) => {
    modal.className = "hidden";
// });


heart.forEach( item => {
item.addEventListener("click", (e) => {
  mimicServerCall(); // will need to move function to top so it can be located by the event listener (or move below)
  if (response == reject) {
      modal.className = "";
      setTimeout(function() {
        modal.className = "hidden"
      }, 3000);
  } else {
    e.target.innerText = `${FULL_HEART}`;
    e.target.className = "activated-heart";
  }  
})
});



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
