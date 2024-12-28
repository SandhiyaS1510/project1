const container = document.querySelector('.pattern-container');
const backgroundColors = ["#ff6f61", "#6a5acd", "#20b2aa", "#ff6347", "#4682b4", "#32cd32"];
let bgIndex = 0;

// Create dynamic squares
for (let i = 0; i < 100; i++) {
  const square = document.createElement('div');
  square.classList.add('square');
  const delay = Math.random() * 3;
  square.style.animationDelay = `${delay}s`;
  container.appendChild(square);
}

// Change background color every 3 seconds
function changeBackgroundColor() {
  document.body.style.backgroundColor = backgroundColors[bgIndex];
  bgIndex = (bgIndex + 1) % backgroundColors.length;
}

setInterval(changeBackgroundColor, 3000);
