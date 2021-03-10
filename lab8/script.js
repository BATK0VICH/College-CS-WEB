function substraction()
{
    var num = prompt("Enter first number: ");
    num = Number(num);
    var num2 = prompt("Enter second number: ");
    num2 = Number(num2);
    return num - num2;
}

function substractionToAlert()
{
    var num = prompt("Enter first number: ");
    num = Number(num);
    var num2 = prompt("Enter second number: ");
    num2 = Number(num2);
    window.alert("Result is " + (num - num2));
}

function checkAge(age)
{
    if (Number(age) < 18)
        alert("Hello, baby!");
    else
        alert("Hello, young man!");
}

window.alert("Result is " + substraction());
substractionToAlert();
var age = prompt("Enter your age: ");
checkAge(age);