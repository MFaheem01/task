
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

// task-

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


const numb = [2, 345, 56, 7, 78, 7, 7, 7];
let max1 = numb[0];
let min1 = numb[0];
for (let mn = 1; mn < numb.length; mn++) {
    if (numb[mn] > max1) {
        max1 = numb[mn];
    }
    if (numb[mn] < min1) {
        min1 = numb[mn];
    }
}
console.log("max=", max1);
console.log("min=", min1);



// task-6

function reversewithloop(str1) {
    let reversed = "";
    for (let g = str1.length - 1; g >= 0; g--) {
        reversed += str1[g]
    }
    return reversed;
}
console.log(reversewithloop("hello"));


// task-6

const reves = "maxcore";

let rever = [];

for (let fv = reves.length - 1; fv >= 0; fv--) {
    rever.push(reves.charAt(fv))
}
console.log(rever.join(""));

// task-7

function palindrome(data) {
    let start = 0;
    let end = data.length - 1;
    result = true;
    while (end > start) {
        if (data[start] != data[end]) {
            result = false;
        }
        start++;
        end--;
    }
    return result;
}
let str6 = "level";
console.log(palindrome(str6));

// task-8

function paramet(vovels) {
    let text = "";
    for (let vd = 0; vd < vovels.length; vd++) {
        switch (vovels.charAt(vd)) {
            case "a":
            case "h":
            case "i":
            case "m":
            case "f":
                text += vovels.charAt(vd);
                break;
        }
    }
    return text
};
let out = paramet("faheem")
console.log(out.length +
    ''
    + out
);

// task-9

function factorialIterative1(d) {
    let result = 1;
    for (let re = 1; re <= d; re++) {
        result *= re
    }
    return result;
}

console.log(factorialIterative1(6));


for (let i = 0; i <= 10; i++) {
    console.log(`outer loop value is ${i}`);
    for (let j = 0; j <= 4; j++) {
        console.log(i + '*' + j + '=' + i * j);

    }
}


for (let index = 1; index < 10; index++) {
    if (index == 6) {
        console.log(`detected 6`);
        continue

    }

    console.log(`values are ${index}`);
}












