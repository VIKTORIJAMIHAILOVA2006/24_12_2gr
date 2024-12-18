const form = document.querySelector('form');
const dataTable = document.getElementById('data-table');
const averageTempDisplay = document.getElementById('average-temp');

let temperatures = [];

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const temperature = parseFloat(document.getElementById('temperature').value);
    const city = document.getElementById('city').value;

    if (!isNaN(temperature) && city) {
        // Добавляем данные в таблицу
        const row = document.createElement('tr');
        row.innerHTML = `<td>${city}</td><td>${temperature}</td>;`
        dataTable.appendChild(row);

        // Обновляем среднюю температуру
        temperatures.push(temperature);
        const averageTemp = (
            temperatures.reduce((sum, temp) => sum + temp, 0) / temperatures.length
        ).toFixed(2);
        averageTempDisplay.textContent = averageTemp;

        // Очищаем поля формы
        form.reset();
    } else {
        alert('Lūdzu, ievadiet pareizus datus!');
    }
});