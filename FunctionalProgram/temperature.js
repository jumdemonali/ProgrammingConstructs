const prompt = require('prompt-sync')({ sigint: true });

console.log("\nCelsius and Fahrenheit temperature conversions:\nMake a choice:\n1. °C to °F\n2. °F to °C");
let choice = Number(prompt("Your choice: "));

function degCtoDegF(degC) {
    return (degC * 9 / 5) + 32;
}