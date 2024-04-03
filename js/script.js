// Function to make navigation bar responsive, change to hamburger when screen size reduces
function responsiveNav(y) {
    y.classList.toggle("change");
    let x = document.getElementById("myNav");
    if (x.className === "navbar") {
      x.className += " responsive";
    } else {
      x.className = "navbar";
    }
  }