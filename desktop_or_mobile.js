var a=  document.getElementById("toggleButton5");
var b=  document.getElementById("toggleButton6");
var c=  document.getElementById("toggleButton7");
var d=  document.getElementById("toggleButton8");

function isMobile() {
    const regex = /Mobi|Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
    return regex.test(navigator.userAgent);
  
   }
  if (isMobile()) {
    console.log("Mobile device detected");
    a.style.display = "block";
    b.style.display = "block";
    c.style.display = "block";
    d.style.display = "block";
  } else {
    console.log("Desktop device detected");
    a.style.display = "none";
    b.style.display = "none";
    c.style.display = "none";
    d.style.display = "none";

  }
  