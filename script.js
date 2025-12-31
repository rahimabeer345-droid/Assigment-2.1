function date(params) {
    var now =new Date();
    alert(now);
}

function names(firstname,lastname) {
    var fullname= firstname + " " + lastname;
    alert(fullname);
}
names("Abeer","Ahmed");


function addNumbers() {
    var num1 = prompt("Enter first number");
    var num2 = prompt("Enter second number");
    return num1 + num2;
}

alert("Sum is: " + addNumbers());


function calculator(num1, num2, operator) {
    var result;

    if (operator === "+") {
        result = num1 + num2;
    } 
    else if (operator === "-") {
        result = num1 - num2;
    } 
    else if (operator === "*") {
        result = num1 * num2;
    } 
    else if (operator === "/") {
        result = num1 / num2;
    } 
    else {
        result = "Invalid operator";
    }

    return result;
}

var n1 = prompt("Enter first number");
var n2 = prompt("Enter second number");
var op = prompt("Enter operator (+, -, *, /)");

alert("Calculator Result: " + calculator(n1, n2, op));



function square(num) {
    return num * num;
}

var number = prompt("Enter a number to find square");
alert("Square is: " + square(number));


function factorial(num) {
    var result = 1;
for (let i = 1; i <=num; i++) {
    result = result *i;
}
    return result;
}
var number = prompt("Enter a number")
alert("factorial is" + factorial(number));

function sc(start, end) {
    var result = "";

    for (let i = start; i<end; i++) {
        result = result + i + "\n";
    }

    alert(result);
}

var num1 = prompt("Enter start number");
var num2 = prompt("Enter end number");

sc(num1, num2);



function ccdd(base, perpendicular) {

    function csqs(num) {
        return num * num;
    }

    var hypotenuseSquared =
        csqs(base) + csqs(perpendicular);

    return Math.sqrt(hypotenuseSquared);
}

var base = prompt("Enter base");
var perpendicular = prompt("Enter perpendicular");

alert("Hypotenuse is: " + ccdd(base, perpendicular));


function calculateArea(Width,Height) {
    return Width * Height;
}
var area1=calculateArea(10,5)
alert("Area: " + area1)
var W = 4;
var H = 8;
var area2 = calculateArea(W,H)
alert("Area: " + area2)


function isPalindrome(str) {
    var reversed = str.split("").reverse().join("");
    return str === reversed;
}

var word = prompt("Enter a word to check palindrome:");
if (isPalindrome(word)) {
    alert(word + " is a palindrome");
} else {
    alert(word + " is not a palindrome");
}


function capitalizeWords(str) {
    var words = str.split(" ");
    for (var i = 0; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }
    return words.join(" ");
}

var text = prompt("Enter a sentence to capitalize:");
alert("Capitalized: " + capitalizeWords(text));


function findLongestWord(str) {
    var words = str.split(" ");
    var longest = "";

    for (let i = 0; i < words.length; i++) {
        if (words[i].length > longest.length) {
            longest = words[i];
        }
    }
    return longest;
}

var sentence = prompt("Enter a sentence to find longest word:");
alert("Longest word: " + findLongestWord(sentence));


function countLetter(str, letter) {
    var count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === letter) {
            count++;
        }
    }
    return count;
}

var input1 = prompt("Enter a string:");
var input2 = prompt("Enter a letter to count:");
alert("The letter '" + input2 + "' occurs " + countLetter(input1, letterInput) + " times");




function gdhn(nhuw) {
    var njsdb = 2 * Math.PI * nhuw;
    alert("The circumference is " + njsdb);
}

function bhs(nhuw) {
    var area = Math.PI * nhuw * nhuw;
    alert("The area is " + area);
}

var r = prompt("Enter radius");

gdhn(r);
bhs(r);