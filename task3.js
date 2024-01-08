// Реалізуйте програму, яка по натисканню на кнопку видалятиме обраний елемент випадаючого списку. 
// Можуть видалятися всі елементи в будь-якому порядку.
// Список з елементами знаходиться у файлі index.html
// Для запуску використовувати Live Server
// Для перевірки виконання виконати команду node tests/task3.test.js

const deleteButton = document.getElementById("deleteButton")

deleteButton.onclick = function() {
    const selectElement = document.getElementById("dropdown")
    const selectedOption = selectElement.options[selectElement.selectedIndex];

    if(selectedOption) {
        selectElement.removeChild(selectedOption);
    }
}
