
// Switch to dark mode
const switchElement = document.querySelector('.switch')

switchElement.addEventListener('click', () => {
  document.body.classList.toggle('dark')
})

// Image slider
function imgSlider(anything) {
  document.querySelector('.brew').src = anything;
} 




