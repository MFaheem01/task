
// task-1

let myObj = {
    content: "hello",
    MyName: "ali",

    greet: function () {
        return ` ${this.content}  ${this.MyName}`;
    }

};
console.log(myObj.greet());

// tasl-2


for (let i = 0; i < 100; i++) {
    console.log(i);

}

// task-6

function string1(str) {
    let count = 0
    for (let i = 0; i <= str.length; i++) {
        if (str.charAt(i) == "a" || str.charAt(i) == "e" || str.charAt(i) == "i" || str.charAt(i) == "o" || str.charAt(i) == "u") {
            count += 3
        }
    }
    console.log(count);
}
string1("Ahmad")

// task-4



let sum = 0;
for (let sum = 0; sum <= 10; sum++) {
    if (sum % 2 === 0)
        console.log(sum);

}

let sum2 = 0;
for (let sum2 = 0; sum2 <= 10; sum2++) {
    if (sum2 % 3 === 0)
        console.log(sum2);

}

// task-5
let numbers = [4, 9, 2, 7, 5];

let max = numbers[0];
let min = numbers[0];

for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
        max = numbers[i];
    }
    if (numbers[i] < min) {
        min = numbers[i];
    }
}

console.log("Max:", max);
console.log("Min:", min);


// task-9


function factorialIterative(n) {
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}



console.log(factorialIterative(5));



