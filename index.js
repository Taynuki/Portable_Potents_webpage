const elem = selector => document.querySelector(selector);

// Bubble Creator..................///
//***********************************************
const bubble = elem(".bubble");

bubble.addEventListener("click", e => {
  const x = e.offsetX;
  const y = e.offsetY;

  let bubbleGroup = document.createElement("ul");
  bubbleGroup.style.left = x + "px";
  bubbleGroup.style.top = y + "px";
  for (let i = 0; i < 3; i++) {
    let bb = document.createElement("li");
    bubbleGroup.appendChild(bb);
  }
  bubble.appendChild(bubbleGroup);
});
