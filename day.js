
const temp = require("prompt-sync");
const prompt = temp();

let day = prompt("Enter Day: ");
let month = prompt("Enter Month: ");

if((day<=20 && month<=6) && (day>=20 && month>=3) && (day<=31))
{
    console.log("True");
}
else
{
    console.log("false");
}