const names = ["Анна", "Вікторія", "Олександр", "Михайло"];

const button = document.getElementById("generateButton");
const output = document.getElementById("output");

button.addEventListener("click", () => {
    const nameLengths = {};
    names.forEach(name => {
        nameLengths[name] = name.length;
    });

    console.log(nameLengths);

    output.textContent = JSON.stringify(nameLengths, null, 2);
});
