// Завдання 1
function checkAge() {
    let age = prompt("Введіть ваш вік:");
    if (age < 18) {
        alert("Вам заборонено вхід.");
        console.log("Вік:", age, "- Вам заборонено вхід.");
    } else if (age <= 65) {
        alert("Ласкаво просимо!");
        console.log("Вік:", age, "- Ласкаво просимо!");
    } else {
        alert("Будь ласка, будьте обережні!");
        console.log("Вік:", age, "- Будь ласка, будьте обережні!");
    }
}
document.getElementById("checkAgeButton").addEventListener("click", checkAge);


// Завдання 2
function showEvenNumbers() {
    let n = prompt("Введіть число:");
    for (let i = 2; i <= n; i += 2) {
        console.log(i);
    }
}
document.getElementById("showEvenNumbersButton").addEventListener("click", showEvenNumbers);


//Завдання 3
function calculateFactorial() {
    let n = prompt("Введіть число:");
    n = parseInt(n); 
    let result = 1;  
    let i = 1;       

    while (i <= n) {
        result *= i; 
        i++;         
    }
    console.log("Факторіал числа", n, "=", result);
}
function runCalculator() {
    let a = parseFloat(prompt("Введіть перше число:")); 
    let b = parseFloat(prompt("Введіть друге число:")); 
    let operation = prompt("Введіть операцію (+, -, *, /):"); 
    let result;

    switch (operation) {
        case '+':
            result = a + b;
            break;
        case '-':
            result = a - b;
            break;
        case '*':
            result = a * b;
            break;
        case '/':
            if (b !== 0) {
                result = a / b;
            } else {
                alert("Помилка: ділення на 0 неможливе");
                console.log(`Введено: a = ${a}, b = ${b}, операція = ${operation} — Помилка: ділення на 0`);
                return;
            }
            break;
        default:
            alert("Невідома операція!");
            console.log(`Введено: a = ${a}, b = ${b}, операція = ${operation} — Невідома операція`);
            return;
    }
    alert("Результат: " + result);
    console.log(`Введено: a = ${a}, b = ${b}, операція = ${operation}, результат = ${result}`); 
}
document.getElementById("runCalculatorButton").addEventListener("click", runCalculator);


//Завдання 5
function guessNumber() {
    let randomNumber = Math.floor(Math.random() * 100) + 1; 
    console.log("Загадане число:", randomNumber); 
    let guess;

    do {
        guess = parseInt(prompt("Вгадайте число від 1 до 100:")); 
        console.log("Ви ввели:", guess); 

        if (guess < randomNumber) {
            alert("Загадане число більше");
        } else if (guess > randomNumber) {
            alert("Загадане число менше");
        } else {
            alert("Вітаємо! Ви вгадали число!");
        }
    } while (guess !== randomNumber); 
}

document.getElementById("guessNumberButton").addEventListener("click", guessNumber);


//Додаткове завдання
function findGCD() {
    let g = parseInt(prompt("Введіть перше число:")); 
    let j = parseInt(prompt("Введіть друге число:")); 
    console.log("Введені числа: g =", g, ", j =", j); 
    while (j !== 0) {
        let temp = j; 
        j = g % j;      
        g = temp;     
    }
    console.log("Найбільший спільний дільник (НСД):", g); 
}

document.getElementById("findGCDButton").addEventListener("click", findGCD);
