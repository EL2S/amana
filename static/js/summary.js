const currentYear = new Date().getFullYear();
const endYear = currentYear + 6;
const selectAnnee = document.getElementById('year');

for (let year = 2020; year <= endYear; year++) {
    const option = document.createElement('option');
    option.value = year;
    option.textContent = year;
    if (year === currentYear) {
        option.selected = true;
    }
    selectAnnee.appendChild(option);
}