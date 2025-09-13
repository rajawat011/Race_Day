
const userName = document.getElementById("name");
const userage = document.getElementById("age");
const result = document.getElementById("result");
const early = document.getElementById("early");



document.getElementById("form").addEventListener("submit", function(e){
    e.preventDefault();

    let myName = userName.value;
    let raceNumber = Math.floor(Math.random() * 1000);
    let age = userage.value;
    if(early.checked) {
        earlyRegistered = true;
    } else {
        earlyRegistered = false
    }
    // console.log(age);
    // console.log(earlyRegistered);
    
    if(earlyRegistered === true && age > 18) {
        raceNumber += 1000;
        // console.log(raceNumber + " will race at 9:30 am");
        result.innerText = `${myName} , your Racenumber ${raceNumber} and you will ract at 09:30 am`
        result.style.visibility = "visible"


    } else if (earlyRegistered === false && age > 18) {
        // console.log(raceNumber + " will race at 11:00 am");
        result.innerText = `${myName} , your Racenumber ${raceNumber} and you will ract at 11:00 am`
        result.style.visibility = "visible"

    } else if (age < 18) {
        // console.log(raceNumber + " will run at 12:30 pm");
        result.innerText = `${myName} , your Racenumber ${raceNumber} and you will ract at 12:30 am`
        result.style.visibility = "visible"


    } else {
        // console.log(raceNumber + " see the registration desk");
         result.innerText = `${myName} , your Racenumber ${raceNumber} please check the registration desk`
        result.style.visibility = "visible"
    };
     
})



