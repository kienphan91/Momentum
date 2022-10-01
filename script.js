let time = document.querySelector(".time");
let greeting = document.querySelector(".greeting");
let myName = document.querySelector(".myName");
let myFocus = document.querySelector(".myFocus");

//set time
function showTime() {
  let today = new Date();
  let hour = today.getHours();
  let minute = today.getMinutes();
  let second = today.getSeconds();
  time.innerHTML = hour + ":" + minute + ":" + second;
  setTimeout(showTime, 1000);
}

//set background
function showBackground() {
  let today = new Date();
  let hour = today.getHours();

  if (hour < 12) {
    document.body.style.backgroundImage = "url('./images/lake.jpg')";
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundSize = "cover";
    greeting.innerHTML = "Good morning, ";
  } else if (hour < 18) {
    document.body.style.backgroundImage = "url('./images/green.jpg')";
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundSize = "cover";
    greeting.innerHTML = "Good afternoon, ";
  } else {
    document.body.style.backgroundImage = "url('./images/people.jpg')";
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundSize = "cover";
    greeting.innerHTML = "Good evening, ";
  }
}

//get name
function getName() {
  if (localStorage.getItem("myNameInLocalStorage") === null) {
    myName.innerHTML = "Enter your name";
  } else {
    myName.innerHTML = localStorage.getItem("myNameInLocalStorage");
  }
}

//event
myName.addEventListener("keydown", setName);

//set name
function setName(event) {
  if (event.key === "Enter") {
    localStorage.setItem("myNameInLocalStorage", event.target.innerHTML);
    myName.blur();
  }
}

//get Focus
function getFocus() {
    if (localStorage.getItem("myFocusInLocalStorage") === null) {
      myFocus.innerHTML = "Enter your name";
    } else {
      myFocus.innerHTML = localStorage.getItem("myFocusInLocalStorage");
    }
  }
  
  //event
  myFocus.addEventListener("keydown", setFocus);
  
  //set Focus
  function setFocus(event) {
    if (event.key === "Enter") {
      localStorage.setItem("myFocusInLocalStorage", event.target.innerHTML);
      myFocus.blur();
    }
  }
showTime();
showBackground();
getName();
getFocus();