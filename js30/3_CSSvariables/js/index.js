// First solution. separate listening


// const spacing = document.querySelector('#spacing');
// const blur = document.querySelector('#blur');
// const color = document.querySelector('#base');
// const img = document.querySelector('img');



// spacing.addEventListener('input', (e) => {
//     const value = e.srcElement.value;
//     document.documentElement.style.setProperty('--spacing', `${value}px`)
// })
// blur.addEventListener('input', (e) => {
//     const value = e.srcElement.value;
//     document.documentElement.style.setProperty('--blur', `${value}px`)
// })
// color.addEventListener('input', (e) => {
//     const value = e.srcElement.value;
//     document.documentElement.style.setProperty('--base', `${value}`)

// })

// Second solution. Use of loops


const inputs = document.querySelectorAll('.controls input');
inputs.forEach(input => input.addEventListener('input', e => {
    const value = e.srcElement
    document.documentElement.style.setProperty(`--${value.name}`, `${value.value}${value.dataset.sizing || ''}`)
}))