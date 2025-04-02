function getRandomNumber() {
    return new Promise((resolve) => {
        setTimeout(() => {
            const randomNumber = Math.floor(Math.random() * 100) + 1;
            resolve(randomNumber);
        }, 1000);
    });
}
async function processNumber() {
    const outputDiv = document.getElementById("output"); 
    try {
        const number = await getRandomNumber(); 
        console.log("Generated number:", number); 
        outputDiv.innerText = `Згенероване число: ${number}`;
if (number < 55) {
            const increasedNumber = await Promise.resolve(number + 22); 
            console.log("Increased number:", increasedNumber); 
            outputDiv.innerText += `\nЗбільшене число: ${increasedNumber}`;
        } else {
            throw new Error("Number too large!"); 
        }
    } catch (error) {
        console.error("Error handled:", error.message); 
        outputDiv.innerText = `Оброблено помилку: ${error.message}`;
    } }
 document.getElementById("processButton").addEventListener("click", processNumber);