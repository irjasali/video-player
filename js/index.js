const $video = document.querySelector("#video");
const $play = document.querySelector("#play");
const $pause = document.querySelector("#pause");
const $backward = document.querySelector("#backward");
const $fordward = document.querySelector("#fordward");

$play.addEventListener("click", handlePlay);
$pause.addEventListener("click", handlePause);
$pause.addEventListener("click", handlePause);
$backward.addEventListener("click", handleBackward);
$fordward.addEventListener("click", handleFordward);

function handlePlay() {
  $video.play();
  $play.hidden = true;
  $pause.hidden = false;
  console.log("click al botón...");
}

function handlePause() {
  $video.pause();
  $play.hidden = false;
  $pause.hidden = true;
  console.log("click al botón...");
}

function handleBackward() {
  console.log("Entrando..");
  $video.currentTime -= 10;
}

function handleFordward() {
  console.log("Entrando..", $video.currentTime);
  $video.currentTime += 10;
}
const $progress = document.querySelector("#progress");

$video.addEventListener("loadedmetadata", handleLoaded);
$video.addEventListener("timeupdate", handleTimeUpdate);

function handleLoaded() {
  $progress.max = $video.duration;
  console.log("Cangando víde..", $video.duration, $progress.max);
}
function handleTimeUpdate() {
  $progress.value = $video.currentTime;
  // console.log("time..", $video.currentTime);
}

$progress.addEventListener("input", handleInput);

function handleInput() {
  console.log($progress.value);
  $video.currentTime = $progress.value;
}
