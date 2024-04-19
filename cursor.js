/* CURSOR */
var cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", function (e) {
  var x = e.clientX;
  var y = e.clientY;
  cursor.style.left = x + "px";
  cursor.style.top = y + "px";
});

var a = document.querySelectorAll("a");

a.forEach((item) => {
  item.addEventListener("mouseover", () => {
    cursor.classList.add("hover");
  });
  item.addEventListener("mouseleave", () => {
    cursor.classList.remove("hover");
  });
});

var buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("mouseover", () => {
    cursor.classList.add("hover");
  });
  button.addEventListener("mouseleave", () => {
    cursor.classList.remove("hover");
  });
});

/* TABS */
function openTab(evt, tabName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
    tabcontent[i].setAttribute("aria-hidden", "true"); // Hiding from assistive technologies
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
    tablinks[i].setAttribute("aria-selected", "false");
  }
  document.getElementById(tabName).style.display = "block";
  document.getElementById(tabName).setAttribute("aria-hidden", "false");
  evt.currentTarget.className += " active";
  evt.currentTarget.setAttribute("aria-selected", "true");
}

// Add keyboard navigation
document.querySelectorAll(".tablinks").forEach((item) => {
  item.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      openTab(event, item.getAttribute("aria-controls"));
    }
  });
});
