/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- You can Google / use StackOverflow BUT only when you think you need something we didn't cover during lessons yet
- You can test your code in a separate file or de-commenting the single exercises in this one.
- You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
- The solution must be pushed to the repository and be available for the tutors by the end of the day (5PM CET)
*/

/* EXERCISE 1
 Write a function called "area" which receives 2 parameters (l1, l2) and calculates the area of the associated rectangle.
*/
let a=20
let b=40
function area(l1,l2) {
    let areaOfRectangle= l1*l2
    return areaOfRectangle
    
}
let result=0
console.log(result=area(a,b))

function printTitle(title) {
    console.log(`\n===========[[[ Task${title}IsAbove ]]]===========\n`)
  }

  printTitle("One")

/* EXERCISE 2
 Write a function called "crazySum" which receives two integers as parameters.
 It should return the sum of those two values, but if the two values are the same then it should return their sum multiplied by 3.
*/
c=23
d=24
function crazySum(int1,int2) {
    if (int1===int2) {
        let Crazy= (int1+ int2)*3
        return Crazy
        
    }
    let Sum=int1+int2
    return Sum
    
}
let Result2=0
console.log(Result2=crazySum(c,d))
printTitle("Two")


/* EXERCISE 3
 Write a function called "crazyDiff" that computes the absolute difference between a given number and 19.
 It should return triple their absolute difference if the given number is greater than 19.
*/

function crazyDiff(gNumber) {
    if (gNumber>19) {
        let absDiff3= Math.abs(gNumber-19)*3
        return absDiff3
        
    }
    let absDiff=Math.abs(gNumber-19)
    return absDiff
    
}
let k=0
console.log(k=crazyDiff(12))
printTitle("Three")

/* EXERCISE 4
 Write a function called "boundary" which accept an integer parameter n and returns true if n is within 20 and 100 (included) or if n it's equal to 400.
*/
function boundry(n) {
    if ((n>20 && n<=100)|| n===400) {
        let Says= true
        return Says
        
    }
    let Says = false
    return Says
    
}

console.log(boundry(19))
printTitle("Four")


/* EXERCISE 5
 Write a function called "strivify" which accepts a string as a parameter.
 It should add the word "Strive" in front of the given string, but if the given string already begins with "Strive", then it should just return the original string.
*/




/* EXERCISE 6
 Write a function called "check3and7" which accepts a positive number as a parameter and checks if it is a multiple of 3 or a multiple of 7.
 HINT: Modulus Operator
*/

function check3and7(Pnumber) {
    if (Pnumber<=0) {
        console.log("Parameter of this function has to be a positive number")
        return 0
        
    }
    else{
    if (Pnumber%3===0) {
        console.log("The number",Pnumber,"is a multiple of 3")
        
    }
    else{
        console.log("The number",Pnumber,"is not a multiple of 3")
    }
    if (Pnumber%7===0) {
        console.log("The number",Pnumber,"is a multiple of 7")
        
    }
    else{
        console.log("The number",Pnumber,"is not a multiple of 7")
    }

    }
    
}
console.log(check3and7(11))
printTitle("Six")
/* EXERCISE 7
 Write a function called "reverseString" which programmatically reverses a given string (es.: Strive => evirtS).
*/
function reverseString(r) {
    let resultString=""
    
    for (let index = r.length-1; index >=0 ; index--) {
        resultString += r[index]
        
        
    }
    return resultString
    
}
console.log(reverseString("Strive"))
printTitle("Seven")



/* EXERCISE 8
 Write a function called "upperFirst" which capitalizes the first letter of each word of a given string passed as a parameter.
*/

function upperFirst(Strung) {
    Strung[0].toUpperCase
    
    for (let i=1; i < Strung.length; i++) {
        
        
    
    if (Strung[1]===" ") {
        Strung[i+1].toUpperCase
        

        

    }

}
    let ResultString2= Strung
    return ResultString2
}

console.log(upperFirst("amake me so soft"))
printTitle("Eight")

/* EXERCISE 9
 Write a function called "cutString" which creates a new string without the first and last character of a given string passed as a parameter.
*/

function cutString(passedString) {
    let ssString =passedString.slice(1,-1);
    console.log(ssString)
}
cutString("Apple Banana Kiwi")
printTitle("Nine")

/* EXERCISE 10
 Write a function called "giveMeRandom" which accepts a number n and returns an array containing n random numbers between 0 and 10.
*/

function giveMeRandom(n) {
    let RandomNumbers=[]
    for (let index = 0; index < n; index++) {
        RandomNumbers[index]=Math.floor(Math.random() * 11);
        
        
    }

    return RandomNumbers
}
console.log(giveMeRandom(6))
printTitle("Ten")

/* WHEN YOU ARE FINISHED
 Commit and push the code to your personal GitHub repository; then post the link of your commit on the Homework section of today's Eduflow.
*/
