document.addEventListener("DOMContentLoaded", () => {
    const lightThemeBtn = document.getElementById("lightTheme");
    const darkThemeBtn = document.getElementById("darkTheme");
    const bgColorInput = document.getElementById("bgColor");
    const textColorInput = document.getElementById("textColor");
    const saveColorsBtn = document.getElementById("saveColors");
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
        document.body.className = savedTheme;
    }
const savedColors = JSON.parse(localStorage.getItem("customColors"));
if (savedColors) {
        document.body.style.backgroundColor = savedColors.bgColor;
        document.body.style.color = savedColors.textColor;
        bgColorInput.value = savedColors.bgColor;
        textColorInput.value = savedColors.textColor;
    }
lightThemeBtn.addEventListener("click", () => {
        document.body.className = ""; 
        document.body.style.backgroundColor = "";
        document.body.style.color = "";
        localStorage.setItem("theme", "");
    });
darkThemeBtn.addEventListener("click", () => {
        document.body.className = "dark-theme";
        document.body.style.backgroundColor = "";
        document.body.style.color = "";
        localStorage.setItem("theme", "dark-theme");
    });
saveColorsBtn.addEventListener("click", () => {
        const bgColor = bgColorInput.value;
        const textColor = textColorInput.value;
        document.body.style.backgroundColor = bgColor;
        document.body.style.color = textColor;
        localStorage.setItem("customColors", JSON.stringify({ bgColor, textColor }));
    });
});
