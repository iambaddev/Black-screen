const btn = document.getElementById('fsbtn');
const fsdiv = document.getElementById('fsdiv');

var isFullscreen;

//When fsbtn clicked enter/exit fullscreen
btn.onmousedown = function () {
  if (isFullscreen) {
    exitFullscreen();
    // fsdiv.style.display = "none";
    btn.innerHTML = "Enter Fullscreen";
    isFullscreen = false;
    console.log(`isFullscreen = ${isFullscreen}`);
  } else {
    goFullscreen();
    // fsdiv.style.display = "block";
    btn.innerHTML = "Exit Fullscreen";
    isFullscreen = true;
    console.log(`isFullscreen = ${isFullscreen}`);
  }
};

//Multi-browser fullscreen
{
  function goFullscreen() {
    if (fsdiv.requestFullscreen) {
      fsdiv.requestFullscreen(); //Generic
    } else if (fsdiv.mozRequestFullScreen) {
      fsdiv.mozRequestFullScreen(); //Mozilla
    } else if (fsdiv.webkitRequestFullscreen) {
      fsdiv.webkitRequestFullscreen(); //Chrome and Safari
    } else if (fsdiv.msRequestFullscreen) {
      fsdiv.msRequestFullscreen(); //Edge and (maybe) IE
    }
  }

  function exitFullscreen() {
    if (document.requestFullscreen) {
      document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    }
  }
}

//Readys page
document.addEventListener('DOMContentLoaded', function() {
  btn.innerHTML = "Enter Fullscreen";
  document.body.style.background = '#000000';
  fsdiv.style.background = '#000000';
  // fsdiv.style.display = "none";
  isFullscreen = false;
}, false);

// pls no judge, im new
