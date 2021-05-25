// VARIABLES
const modalBG = document.querySelector(".modal-bg");
const modalContainer = document.querySelector(".modal-container");
const modalSuccess = document.querySelector(".modal-success");
var buttons = document.querySelectorAll("main .btn");
var radios = document.querySelectorAll("input[type='radio']");
var closeModal = document.querySelector(".close-modal");
var continueBtns = document.getElementsByClassName("continue");
var closeSuccess = document.querySelector(".modal-success");
var menu = document.querySelector(".menu");
var closeMenu = document.querySelector(".close-menu");
var navUL = document.querySelector(".nav-ul");
var amountBacked = 89914;
var backers = 5007;
var backedNum = document.getElementById("backed-num");
// ##################################################################################
// ##################################################################################

// Open modal
for (i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", openModal);
}

// Open pledge on checked radio
for (rad of radios) {
  rad.addEventListener("change", openPledge);
}

// Close modal
closeModal.addEventListener("click", () => {
  modalBG.style.display = "none";
});

// Close success modal
closeSuccess.addEventListener("click", () => {
  modalSuccess.style.display = "none";
  modalBG.style.display = "none";
});

// ##################################################################################

//Submit pledge
for (i = 0; i < continueBtns.length; i++) {
  continueBtns[i].addEventListener("click", (e) => {
    if (validate(true)) {
      if (e.target.id == "pledge1submit") {
        let added = e.target.previousElementSibling.childNodes[1].value;
        backers++;
        updateStats(added, backers);
      }

      if (e.target.id == "pledge2submit") {
        let added = e.target.previousElementSibling.childNodes[1].value;
        backers++;
        let remains = document.getElementsByClassName("101left");
        // remains.innerHTML = Number(remains) - 1;
        for (i = 0; i < remains.length; i++) {
          remains[i].innerHTML = Number(remains[i].innerHTML) - 1;
        }
        updateStats(added, backers);
      }
      if (e.target.id == "pledge3submit") {
        let added = e.target.previousElementSibling.childNodes[1].value;
        backers++;
        let remains = document.getElementsByClassName("64left");
        // remains.innerHTML = Number(remains) - 1;
        for (i = 0; i < remains.length; i++) {
          remains[i].innerHTML = Number(remains[i].innerHTML) - 1;
        }
        updateStats(added, backers);
      }

      modalContainer.style.display = "none";
      modalSuccess.style.display = "flex";
    } else {
      alert("Not working!");
    }
  });
}

// ##################################################################################

// Clear pledge boxes
function clearPledgeBoxes() {
  let pledges = document.querySelectorAll(".card");
  for (let i = 0; i < pledges.length; i++) {
    pledges[i].classList.remove("selected");
  }
}
// ##################################################################################

// Open MODAL
function openModal(e) {
  if (e.target.id == "bamboo-stand-btn") {
    var radio = document.getElementById("bamboo-reward");
    radio.checked = true;
    var card = document.getElementById("bamboo-reward-card");
    clearPledgeBoxes();
    card.classList.toggle("selected");
  }

  if (e.target.id == "blackEdition-stand-btn") {
    var radio = document.getElementById("blackEdition-reward");
    radio.checked = true;
    var card = document.getElementById("blackEdition-reward-card");
    clearPledgeBoxes();
    card.classList.toggle("selected");
  }

  modalBG.style.display = "block";
  modalContainer.style.display = "block";
}
// ##################################################################################

// Open PLEDGE
function openPledge(e) {
  if (e.target.id == "no-reward") {
    var card = document.getElementById("no-reward-card");
    clearPledgeBoxes();
    card.classList.toggle("selected");
  }
  if (e.target.id == "bamboo-reward") {
    var card = document.getElementById("bamboo-reward-card");
    clearPledgeBoxes();
    card.classList.toggle("selected");
  }

  if (e.target.id == "blackEdition-reward") {
    var card = document.getElementById("blackEdition-reward-card");
    clearPledgeBoxes();
    card.classList.toggle("selected");
  }
}
// ##################################################################################

// validate pledge
function validate() {
  let pledge2 = document.getElementById("pledge2").value;
  let pledge3 = document.getElementById("pledge3").value;

  if (pledge2 == null || pledge2 < 25) {
    alert("Pledge must be $25 or higher");
    return false;
  }
  if (pledge3 == null || pledge3 < 75) {
    alert("Pledge must be $75 or higher");
    return false;
  }

  return true;
}

// ##################################################################################

//Update Stats
function updateStats(amt, backers) {
  amountBacked += Number(amt);
  backedNum.innerHTML = amountBacked.toLocaleString("en-US");
  document.getElementById("backers").innerHTML =
    backers.toLocaleString("en-US");

  if (amountBacked < 100000) {
    document.querySelector(".progress").style.width =
      "calc(" + String(amountBacked) + " / 100000 * 100%";
  } else {
    document.getElementsByClassName("progress").style.width = "100%";
  }
}

// ##################################################################################

// Menu icon
menu.addEventListener("click", () => {
  menu.style.display = "none";
  closeMenu.style.display = "block";
  navUL.style.display = "block";
});

closeMenu.addEventListener("click", () => {
  menu.style.display = "block";
  closeMenu.style.display = "none";
  navUL.style.display = "none";
});
