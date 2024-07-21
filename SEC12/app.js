let age = 32;
let userName = "AB" + " Sharma";
let userHobbies = ["sports", "cooking", "music"];
let job = {
  title: "Developer",
  place: "Ontario",
  salary: 50000,
};

let adultYears;
function findAdultYears(age) {
  return age - 18;
}

adultYears = findAdultYears(age);
alert("eligible to vote since " + adultYears + " years.");

age = 45;
adultYears = findAdultYears(age);
alert("eligible to vote since " + adultYears + " years.");


// This is how a comment is added to JavaScript
// Comments are not executed - they are just there to provide extra
// information to you or other developers

// Exercise Time!

// 1) Create three new variables:
//    - A variable that stores the name of an online course of your choice
let titleName = "WebDev";
//    - A variable that stores the price of that course
let price = 400;
//    - A variable that stores the three main goals that you have, when taking this course
let goals = ["mastering programming", "making beautiful webpages", "becoming a developer"];
// 2) Output ("alert") the three variable values
alert(titleName);
alert(price);
alert(goals);
// 3) Try "grouping" the three variables together and still output their values thereafter
let course = {
    title: titleName,
    cost: price,
    objectives: goals,
};
// 4) Also output the second element in your "main goals" variable
alert(course.objectives[1]);
// 5) Add a custom command that does the following:
//    - Use your "main goals" variable and access an element by its identifier
//    - The concrete identifier value should be dynamic / flexible 
//      (i.e. the command can be executed for different identifier)
//    - The "main goals" variable should also be dynamic: The command should work 
//      with ANY list of values
//    - The custom command should provide the accessed value (i.e. the list element)
function accessArrayElement(array, elementNumber) {
    return array[elementNumber];
}
// 6) Execute your custom command from (5) and output ("alert") the result
alert(accessArrayElement(goals, 2));