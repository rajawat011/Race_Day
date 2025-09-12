let raceNumber = Math.floor(Math.random() * 1000);

let earlyRegistered = true;
let age = 16;

if(earlyRegistered && age > 18) {
    raceNumber += 1000;
    console.log(raceNumber + " will race at 9:30 am");
} else if (!earlyRegistered && age > 18) {
    console.log(raceNumber + " will race at 11:00 am");
} else if (age < 18) {
    console.log(raceNumber + " will run at 12:30 pm");
} else {
   console.log(raceNumber + " see the registration desk");
};
     


