
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

// for off loop on array


let nume = ["apple", "mango", "cherry", "banna"];

for (const nmbe of nume) {
    console.log(`fruits name are ${nmbe}`);

}

// map method
const map = new Map();

map.set('pak', "pakistan")
map.set('In', "india")
map.set('fr', "france")
map.set('jp', "japan")

console.log(map);

for (const [key, value] of map) {
    console.log(key, ':-', value);

}

// for in-loop on object

const myobject = {
    js: 'jawascript',
    cpp: 'c++',
    swift: 'swift',
    java: 'java',
}

for (const key1 in myobject) {
    // console.log(myobject[key1]);


}

// diffrent way 

Object.keys(myobject).length
console.log(myobject);

// for-in loop on Array

let programing = ["jawa", "python", "cpp", "swifty"];
for (const key in programing) {
    console.log(programing[key]);
}

// filter mathod 


const newnum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const nnewnum = newnum.filter((num) => num > 4)
// console.log(nnewnum);

// for each mathod 

const mynum = [];
newnum.forEach((num) => {
    if (num > 4) {
        mynum.push(num)
    }
});

// dousra filter mathod  

console.log(mynum);

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];


// let UserBooks = books.filter( (bk) => bk.genre === 'History')
let UserBooks = books.filter((bk) => bk.publish <= 2000 && bk.genre === "History")


// kahhi pr b agar humm scope mtlb "{}" use kray gay to waha pr "return lihkna zarori hota hy ni to error.........."

console.log(UserBooks);


// again map method 

let mynmbr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let mynum3 = mynmbr.map((num2) => num2 + 10)

console.log(mynum3);


// using  forEach
mynmbr.forEach(num3 => {

    // console.log(num3 + 10);
})

// reduce method 

let AgnNum = [1, 2, 3, 4, 5]

let AgnNum1 = AgnNum.reduce(function (acc, currval) {
    console.log(`acc: ${acc} and currval: ${currval}`);
    return acc + currval




}, 0)
// console.log(AgnNum1);

// arrro function

    let AgnNum3 = AgnNum.reduce((acc, currval) => acc + currval, 0)

    // console.log(AgnNum3);
    