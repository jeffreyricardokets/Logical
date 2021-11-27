const age = 26;
const firstName = "Bram"
const isFemale = true;
const driverStatus = 'bob';
const totalAmount = 49;

/* if (age >= 18) {
    console.log("You are allowed to enter, Please enjoy in this pub")
} else {
    console.log("You are too young please kindly leave this pub")
} */

if (age >= 18 && age <= 25) {
    console.log("You get 50% off")
}

if (firstName == "Bram" || firstName == "Sarah") {
    console.log("You get free beer")
}

if (totalAmount < 50) {
    console.log("free (veggie) Bitterballen")
} else if (totalAmount >= 50 && totalAmount < 100) {
    console.log("free portion of nachos")
} else if (totalAmount >= 100) {
    console.log("you get a free bottle of champagne.")
}

/* if (isFemale && age >= 18) {
    console.log("enjoy the ladies night")
} else if (isFemale && age < 18) {
    console.log("I see you are a female but too young to drink")
} else {
    console.log("you are a man don't pretend please that you are a woman!!")
}
if (driverStatus == 'bob') {
    console.log("you are allowed to drive")
} else {
    console.log("please don't drive")
} */