
// // COMMMEENENNTTT
// let num = prompt("Enter a Number.")
// function challenge (num){
//     if (num > 20){
//        let numBool = true;
//         console.log(numBool);
//     } else{
//         let numBool = false;
//         console.log(numBool);    }
// }

// challenge(num);

// let letterArr = ['a', 'b', 'c', 'd', 'e'];

// let letterD = letterArr[3];
// console.log(letterD);

// let myStr = "Example of strings";
// let arrStr = myStr.split(" ");
// console.log(arrStr);




let myStr = prompt("type some stuff");
let myStr1 = prompt("type some ,more stuff");

function longestString (myStr, myStr1) {
    if (myStr.length > myStr1.length) {
        console.log("the first string typed has more characters");
    } else {
        console.log("the second string typed has more characters")
    }
}

longestString(myStr, myStr1);