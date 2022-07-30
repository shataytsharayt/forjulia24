var message = "С днём рождения моя любимая <br></br> и самая <br></br> лучшая жена, <br></br>        Юля !";
var msgCount = 0;
var blinkCount = 0;
var blinkFlg = 0;
var timer1, timer2;
var messageLabel = document.getElementById("messageLabel");

function textFunc() {
   messageLabel.innerHTML = message.substring(0, msgCount);
   
   if (msgCount == message.length) {
      // Stop Timer
      clearInterval(timer1);
      
      // Start blinking animation!
      timer2 = setInterval("blinkFunc()", 10);
      
   } else {
      msgCount++;
   }
}




timer1 = setInterval("textFunc()", 70); // Every 150 milliseconds