function Divide(){
   let first = document.getElementById('first').value;
   let second = document.getElementById('second').value;
   document.getElementById('answer').value =first / second;
}
function Multiply(){
   let first = document.getElementById('first').value;
   let second = document.getElementById('second').value;
   document.getElementById('answer').value =first * second;
   var audio = new Audio('music.mp3');
audio.play();
}
function rotate() {
   document.getElementById("title").animate([
       // keyframes
       { transform: 'rotate(360deg)' },
   ], {
       // timing options
       duration: 500   ,
      });
}
