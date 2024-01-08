// Реалізуйте програму, яка відслідковуватиме зміну розміру (ширини і висоти) вікна браузера
//  і виводитиме на поточну сторінку при її розтязі/стисканні відповідні значення.
// Для запуску використовувати Live Server
// Для перевірки node tests/task4.test.js

function displayWindowSize() {
    const windowWidth = innerWidth
    const windowHeight = innerHeight

    document.getElementById("widthValue").textContent = windowWidth
    document.getElementById("heightValue").textContent = windowHeight

}

window.addEventListener("resize", displayWindowSize)
displayWindowSize();
