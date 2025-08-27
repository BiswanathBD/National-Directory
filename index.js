function getById(id) {
  return document.getElementById(id);
}

// common features:
// toggleHeart for change color and heart balance
function heartEvent() {
  const liked = parseInt(getById("liked").innerText);
  const newLiked = liked + 1;
  document.getElementById("liked").innerText = newLiked;
}
// copy function
function copyEvent(num) {
  const copiedNum = parseInt(getById("copied-num").innerText);
  navigator.clipboard.writeText(num);
  const newCopiedNum = copiedNum + 1;
  document.getElementById("copied-num").innerText = newCopiedNum;
}
// call function
function callEvent(type, num) {
  const coin = parseInt(getById("coin").innerText);
  if (coin >= 20) {
    alert("📞 Calling " + type + " " + num + " . . .");
    const newCoin = coin - 20;
    getById("coin").innerText = newCoin;
    const historyParent = getById("call-history-parent");
    const callHistory = getById("history-card");
    const cloneCallHistory = callHistory.cloneNode(true);
    cloneCallHistory.removeAttribute("id");
    cloneCallHistory.classList.remove("hidden");
    cloneCallHistory.classList.add("historyCards");
    cloneCallHistory.querySelector("#history-type").innerText = type;
    cloneCallHistory.querySelector("#history-number").innerText = num;
    cloneCallHistory.querySelector("#history-time").innerText =
      new Date().toLocaleTimeString();
    console.log(cloneCallHistory);

    historyParent.appendChild(cloneCallHistory);
  } else {
    alert("❌ You don't have enough balance");
  }
}

// national emergency features
const heartAll = getById("heartIcon-All");
heartAll.addEventListener("click", function () {
  heartEvent();
});

const copyBtnAll = getById("copy-btn-All");
const numAll = getById("Number-All").innerText;
copyBtnAll.addEventListener("click", function (e) {
  e.preventDefault();
  copyEvent(numAll);
});

const callBtnAll = getById("call-btn-All");
const typeAll = getById("type-All").innerText;
callBtnAll.addEventListener("click", function (e) {
  e.preventDefault();
  callEvent(typeAll, numAll);
});

// police helpline features
const heartPolice = getById("heartIcon-Police");
heartPolice.addEventListener("click", function () {
  heartEvent();
});

const copyBtnPolice = getById("copy-btn-Police");
const numPolice = getById("number-Police").innerText;
copyBtnPolice.addEventListener("click", function (e) {
  e.preventDefault();
  copyEvent(numPolice);
});

const callBtnPolice = getById("call-btn-Police");
const typePolice = getById("type-Police").innerText;
callBtnPolice.addEventListener("click", function (e) {
  e.preventDefault();
  callEvent(typePolice, numPolice);
});

// fire service features
const heartFire = getById("heartIcon-Fire");
heartFire.addEventListener("click", function () {
  heartEvent();
});

const copyBtnFire = getById("copy-btn-Fire");
const numFire = getById("number-Fire").innerText;
copyBtnFire.addEventListener("click", function (e) {
  e.preventDefault();
  copyEvent(numFire);
});

const callBtnFire = getById("call-btn-Fire");
const typeFire = getById("type-Fire").innerText;
callBtnFire.addEventListener("click", function (e) {
  e.preventDefault();
  callEvent(typeFire, numFire);
});

// ambulance features
const heartAmbulance = getById("heartIcon-Ambulance");
heartAmbulance.addEventListener("click", function () {
  heartEvent();
});

const copyBtnAmbulance = getById("copy-btn-Ambulance");
const numAmbulance = getById("number-Ambulance").innerText;
copyBtnAmbulance.addEventListener("click", function (e) {
  e.preventDefault();
  copyEvent(numAmbulance);
});

const callBtnAmbulance = getById("call-btn-Ambulance");
const typeAmbulance = getById("type-Ambulance").innerText;
callBtnAmbulance.addEventListener("click", function (e) {
  e.preventDefault();
  callEvent(typeAmbulance, numAmbulance);
});

// Women & Child Helpline 
const heartHelp = getById("heartIcon-Help");
heartHelp.addEventListener("click", function () {
  heartEvent();
});

const copyBtnHelp = getById("copy-btn-Help");
const numHelp = getById("number-Help").innerText;
copyBtnHelp.addEventListener("click", function (e) {
  e.preventDefault();
  copyEvent(numHelp);
});

const callBtnHelp = getById("call-btn-Help");
const typeHelp = getById("type-Help").innerText;
callBtnHelp.addEventListener("click", function (e) {
  e.preventDefault();
  callEvent(typeHelp, numHelp);
});

// Anti-Corruption Helpline
const heartGovt = getById("heartIcon-Govt");
heartGovt.addEventListener("click", function () {
  heartEvent();
});

const copyBtnGovt = getById("copy-btn-Govt");
const numGovt = getById("number-Govt").innerText;
copyBtnGovt.addEventListener("click", function (e) {
  e.preventDefault();
  copyEvent(numGovt);
});

const callBtnGovt = getById("call-btn-Govt");
const typeGovt = getById("type-Govt").innerText;
callBtnGovt.addEventListener("click", function (e) {
  e.preventDefault();
  callEvent(typeGovt, numGovt);
});

