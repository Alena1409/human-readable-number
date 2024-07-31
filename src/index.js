module.exports = function toReadable(number) {
    const units = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
    const tens = ["twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];

    let result = 0;

    if (number <= 19) {
        result = units[number];
    } else {
        if (String(number).length === 2) {
            if (String(number)[1] === "0") {
                result = tens[Math.floor(number / 10) - 2];
            } else {
                result = tens[Math.floor(number / 10) - 2] + " " + units[number % 10];;
            }
        } else {
            if (String(number)[1] === "0" && String(number)[2] === "0") {
                result = units[Math.floor(number / 100)] + " " + "hundred";
            } else if (String(number)[1] === "1") {
                result = units[Math.floor(number / 100)] + " " + "hundred" + " " + units[number % 100];
            } else if (String(number)[1] === "0" && String(number)[2] !== "0") {
                result = units[Math.floor(number / 100)] + " " + "hundred" + " " + units[number % 10];
            } else if (String(number)[1] !== "0" && String(number)[2] === "0") {
                result = units[Math.floor(number / 100)] + " " + "hundred" + " " + tens[Math.floor((number % 100) / 10) - 2];
            } else {
                result = units[Math.floor(number / 100)] + " " + "hundred" + " " + tens[Math.floor((number % 100) / 10) - 2] + ' ' + units[number % 10];
            }
        }
    }
    return result;
}
