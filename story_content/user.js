function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5xaOMRQM0PC":
        Script1();
        break;
      case "6aOZ7RYjqBu":
        Script2();
        break;
  }
}

function Script1()
{
  clearInterval(waktuId);
let sec = 0;
}

function Script2()
{
  //Getting the player
const player = GetPlayer();

//Where to start
let sec = 0;

//Set up the timer
function startTimer(){
  sec += 1;
  player.SetVar("waktu",sec);
  if (sec == 30) {
    clearInterval(waktuId);
  }
}

//Start the timer
waktuId=setInterval(startTimer,1000);
}

