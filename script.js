
let i = 1;
let sum = 0;

while (i <= 100) {

    sum = sum + i;
    i++;

}

document.getElementById("result").textContent =
    "The sum is: " + sum;
