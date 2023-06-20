function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    if (this.interval === null) {
        display.textContent = 0;
      }
    setInterval(function () {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}


function funcStart() {
  const inputMinutes = prompt("Enter number of minutes:");
   if (inputMinutes >=0) {
    var minutes = 60 * inputMinutes,
    display = document.querySelector('#time');

startTimer(minutes, display);
  }
}