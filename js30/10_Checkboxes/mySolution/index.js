const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');
let lastChecked;

const handleCheck = () => {
    const indexes = []

    checkboxes.forEach((checkbox, index) => {
        if (checkbox.checked) {
            indexes.push(index)
            indexes.sort()
            // console.log(indexes);
        }

    });

    for (let i = 0; i < checkboxes.length; i++) {
        if (i >= indexes[0] && i <= indexes[indexes.length - 1]) {
            checkboxes[i].checked = true;
        }
    }
}

checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', handleCheck)
})