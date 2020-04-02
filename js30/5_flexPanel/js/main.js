const panels = document.querySelectorAll('.panel');
console.log(panels);


function toggleElement() {
    this.classList.toggle('open');
};
function toggleActive(e) {
    if (e.propertyName.includes('flex')) {
        this.classList.toggle('open-active')
    }
}
panels.forEach(panel => {
    panel.addEventListener('click', toggleElement);
    panel.addEventListener('transitionend', toggleActive)
});
