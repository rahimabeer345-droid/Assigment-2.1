function power(a,b) {
    var result = 1
    for (let i = 1; i <=b; i++) {
        result = result*a;
    }
    return result;
}
alert(power(2,3));


function isLeapYear(year) {
    if (year % 400 === 0) {
        return true;
    } else if (year % 100 === 0) {
        return false;
    } else if (year % 4 === 0) {
        return true;
    } else {
        return false;
    }
}

var year = prompt("Enter a year");


if (isLeapYear(year)) {
    alert(year + " is a leap year");
} else {
    alert(year + " is not a leap year");
}



function calculateS(a, b, c) {
    return (a + b + c) / 2;
}

function calculateArea(a, b, c) {
    let S = calculateS(a, b, c);
    let area = Math.sqrt(S * (S - a) * (S - b) * (S - c));
    return area;
}
let a = 5, b = 6, c = 7;
console.log("Area of triangle:", calculateArea(a, b, c));


function average(m1, m2, m3) {
    return (m1 + m2 + m3) / 3;
}

function percentage(m1, m2, m3) {
    let totalMarks = m1 + m2 + m3;
    return (totalMarks / 300) * 100;  // Assuming each subject is out of 100
}

function mainFunction(m1, m2, m3) {
    let avg = average(m1, m2, m3);
    let perc = percentage(m1, m2, m3);
    console.log("Average:", avg.toFixed(2));
    console.log("Percentage:", perc.toFixed(2) + "%");
}

mainFunction(80, 90, 70);


function customIndexOf(str, char) {
    for (let i = 0; i < str.length; i++) {
        if (str[i] === char) {
            return i;
        }
    }
    return -1;
}

alert("Index of 'l' in 'hello': " + customIndexOf("hello", "l"));
alert("Index of 'x' in 'hello': " + customIndexOf("hello", "x"));



function removeVowels(sentence) {
    let result = "";
    for (let i = 0; i < sentence.length; i++) {
        if (!"aeiouAEIOU".includes(sentence[i])) {
            result += sentence[i];
        }
    }
    return result;
}

alert(removeVowels("Hello World"));


function toMeters(km) {
    return km * 1000;
}

function toFeet(km) {
    return km * 3280.84;
}

function toInches(km) {
    return km * 39370.1;
}

function toCentimeters(km) {
    return km * 100000;
}

let km = 5;
alert("Meters:", toMeters(km));
alert("Feet:", toFeet(km));
alert("Inches:", toInches(km));
alert("Centimeters:", toCentimeters(km));


function calculateOvertime(hours) {
    let overtimeHours = hours > 40 ? hours - 40 : 0;
    return overtimeHours * 12;
}



let hoursWorked = 45;
alert("Overtime pay:", calculateOvertime(hoursWorked));

function calculateNotes(amount) {
    let hundreds = Math.floor(amount / 100);
    let remainder = amount % 100;

    let notes100 = Math.floor(hundreds);
    let notes50 = Math.floor(remainder / 50);
    let notes10 = Math.floor((remainder % 50) / 10);

    alert("100 notes:", notes100);
    alert("50 notes:", notes50);
   alert("10 notes:", notes10);
}


calculateNotes(780); 


function mobileAlert(params) {
        alert("Thanks for purchasing a phone from us!");
}


function deleteRow(rowNumber) {
    document.getElementById("studentTable").deleteRow(rowNumber);
}
var count = 0;