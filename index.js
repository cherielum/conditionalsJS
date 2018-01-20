//Exercise 3-2
//Write an if...else statement that:
// prints "even" if the number is an even number
// prints "odd" if the number is an odd number

// change the value of `number` to test your if...else statement
var number = 12;

if (number % 2 ===0) {
    console.log("even");
} else if (number % 2 === 1) {
    console.log("odd");
}

//Exercise 3-3 
//Directions:
//Write a series of conditional statements that:
// prints "not a group" if musicians is less than or equal to 0
// prints "solo" if musicians is equal to 1
// prints "duet" if musicians is equal to 2
// prints "trio" if musicians is equal to 3
// prints "quartet" if musicians is equal to 4
// prints "this is a large group" if musicians is greater than 4

// change the value of `musicians` to test your conditional statements
var musicians = 0;

if (musicians <= 0) {
    console.log('not a group');
} else if (musicians ===1) {
    console.log("solo");
} else if (musicians ===2) {
    console.log("duet");
} else if (musicians ===3) {
    console.log("trio");
} else if (musicians ===4) {
    console.log("quartet");
} else {
    console.log("this is a large group");
}

//Exercise 3-4
// You're going to help solve a fictitious murder mystery that happened here at Udacity! A murder mystery is a game typically played at parties wherein one of the partygoers is secretly, and unknowingly, playing a murderer, and the other attendees must determine who among them is the criminal. It's a classic case of whodunnit.

// Since this might be your first time playing a murder mystery, we've simplified things quite a bit to make it easier. Here's what we know! In this murder mystery there are:

// four rooms: the ballroom, gallery, billiards room, and dining room,
// four weapons: poison, a trophy, a pool stick, and a knife,
// and four suspects: Mr. Parkes, Ms. Van Cleve, Mrs. Sparr, and Mr. Kalehoff.
// We also know that each weapon corresponds to a particular room, so...

// the poison belongs to the ballroom,
// the trophy belongs to the gallery,
// the pool stick belongs to the billiards room,
// and the knife belongs to the dining room.
// And we know that each suspect was located in a specific room at the time of the murder.

// Mr. Parkes was located in the dining room.
// Ms. Van Cleve was located in the gallery.
// Mrs. Sparr was located in the billiards room.
// Mr. Kalehoff was located in the ballroom.

// To help solve this mystery, write a combination of conditional statements that:

// sets the value of weapon based on the room and
// sets the value of solved to true if the value of room matches the suspect's room
// Afterwards, print the following to the console if the mystery was solved:

// __________ did it in the __________ with the __________!
// Fill in the blanks with the name of the suspect, the room, and the weapon.

var room = "ballroom";
var suspect = "Mr. Kalehoff";

var weapon = "";
var solved = false;

if (room === "dining room" && suspect === "Mr. Parkes") {
    weapon ="knife";
    solved = true;
    
} else if (room === "gallery" && suspect === "Ms. Van Cleve") {
    weapon = "trophy";
    solved = true;
} else if (room ==="billiards room" && suspect == "Mrs. Sparr") {
    weapon = "pool stick";
    solved = true;
} else {
    weapon="poison";
    solved = true;
}

if (solved) {
	console.log(suspect+" did it in the "+room+" with the "+weapon+"!");
}


//Exercise 3-5
//write the code to represent checking your balance at the ATM.
//If checkBalance equals true and isActive equals false, then Your account is no longer active. should be printed to the console.

var balance = 325.00;
var checkBalance = true;
var isActive = true;

// your code goes here
    if (checkBalance === false){
        console.log("Thank you. Have a nice day!");
    } else if (isActive === true && balance > 0){
        console.log("Your balance is $" +balance+".");
    } else if (isActive === false){
        console.log("Your account is no longer active.");
    } else if (balance ===0){
        console.log("Your account is empty.");
    } else {
        console.log("Your balance is negative. Please contact bank.")
    }
    

