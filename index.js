function getById(id) {
  return document.getElementById(id);
}

const coin = parseInt(getById("coin").innerText);
const copiedNum = parseInt(getById("copied-num").innerText);

// common features:
// toggleHeart for change color and heart balance
function toggleHeart(heartBtn) {
  const clicked = heartBtn.classList.toggle("text-red-500");
  const liked = parseInt(getById("liked").innerText);

  if (clicked) {
    const newLiked = liked + 1;
    document.getElementById("liked").innerText = newLiked;
  } else {
    const newLiked = liked - 1;
    document.getElementById("liked").innerText = newLiked;
  }
}
// 

// heart icon function
const heartAll = getById("heartIcon-All");
heartAll.addEventListener("click", function () {
  toggleHeart(heartAll);
});
