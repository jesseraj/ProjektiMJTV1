// Videojs

let myPlayer = document.querySelector(".video-js");
console.log(myPlayer);
videojs(myPlayer, {
controls: true,
poster: "http://placekitten.com/1920/1083",
loop: "true",
});


myPlayer.classList.add("vjs-TeemaMain");

