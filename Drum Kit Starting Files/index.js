// document.querySelector("button").addEventListner("click",function (){
//     alert("hello buton is clicked");
// });



 number = document.querySelectorAll(".drum").length;
 for(var i=0;i<number;i++){
 document.querySelectorAll("button")[i].addEventListener("click",function(){
  var buttoninnerHTML = this.innerHTML;
  getmusicdata(buttoninnerHTML);
  animationChange(buttoninnerHTML);
 });
// function myfun(){

//   // console.log(this)      here consoling get to know more about the this property
//   // this.style.color = 'white'
//   // console.log("Lets play")
//   // var audio = new Audio ('sounds/crash.mp3')
//   // audio.play();


//   var buttoninnerHTML = this.innerHTML;
 
// }


}


document.addEventListener("keypress",function(event){
  getmusicdata(event.key);
  animationChange(event.key);
});


function getmusicdata(key){
  switch (key) {
    case 'w':
        var audio = new Audio ('sounds/crash.mp3')
        audio.play();
      break;
      case 'a':
        var audio = new Audio ('sounds/kick-bass.mp3')
        audio.play();
      break;
      case 's':
        var audio = new Audio ('sounds/snare.mp3')
        audio.play();
      break;
      case  'd':
        var audio = new Audio ('sounds/tom-4.mp3')
        audio.play();
      break;
      case 'j':
        var audio = new Audio ('sounds/tom-1.mp3')
        audio.play();
      break;
      case 'k':
        var audio = new Audio ('sounds/tom-2.mp3')
        audio.play();
      break;
      case 'l':
        var audio = new Audio ('sounds/tom-3.mp3')
        audio.play();
      break;
  
    default:
      break;
  }
}

function animationChange(currentkey){
var currentbutton = document.querySelector("."+currentkey);
currentbutton.classList.add("pressed");
setTimeout(function(){
  currentbutton.classList.remove("pressed")
},100);
}


