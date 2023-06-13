`use strict`;

const minutes = document.getElementById("minutesInput");
const hours = document.getElementById("hoursInput");
const convertSeconds = document.getElementById("btnSubmit");
const timeInseconds = document.getElementById("result-seconds");

// functions
function calculateSeconds() {
  timeInseconds.style.display = "block";
  let hoursVal = hours.value;
  let minutesVal = minutes.value;
  let numOfSeconds = hoursVal * 3600 + minutesVal * 60;
  timeInseconds.textContent = numOfSeconds + "seconds";
}

// eventlisteners
convertSeconds.addEventListener("click", calculateSeconds);
