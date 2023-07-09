// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
let emptyHearts = document.getElementsByClassName("like-glyph");
let modal = document.getElementById("modal");

for (let item of emptyHearts){
  item.addEventListener("click", likeMe);

  function likeMe(){
    let response = mimicServerCall();

    response.then(() => {
      if(item.innerHTML === EMPTY_HEART){
        item.innerHTML = FULL_HEART;
        item.setAttribute("class", "activated-heart")
      }else{
        item.innerHTML = EMPTY_HEART;
        item.setAttribute("class", "like-glyph");
      }
      
    })

    response.catch((error) => {
      modal.removeAttribute("class");
      document.getElementById("modal-message").innerHTML = error;
      setTimeout(hideModal, 3000);
      console.log(item)

      function hideModal(){
        modal.setAttribute("class", "hidden");
      }
    })
  }
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
