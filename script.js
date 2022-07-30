const toggleClass = function(element, className) {
  element.classList.toggle(className);
}

const removeClass = function(element, className) {
    if (element.classList.contains(className)) {
    element.classList.remove(className);
  }
}

document.querySelectorAll('.dropdownbutton').forEach(item => {
  item.addEventListener('click', event => {
    const id = event.target.id;
    const dropdown = document.getElementById(`${id}-dropdown`);
    toggleClass(dropdown,'hidden')
  })
  item.addEventListener('mouseover', event => {
    const id = event.target.id;
    const dropdown = document.getElementById(`${id}-dropdown`);
    removeClass(dropdown,'hidden')
  })
})