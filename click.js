var click = 0;
var autoClicks = 0;
var number = 1;
var addClickAmount = 0;
var totalTime = 0;
var number2 = 1;

function buyAuto(){
    var autoCost = Math.floor(10 * Math.pow(1.1, autoClicks));       //works out the cost of auto click
    if (click >= autoCost) {                                         //checks that the palyer can afford the auto click
        autoClicks = autoClicks + 1;                                 //increase number of Auto Clicks
        click = click - autoCost;                                    //remove clicks spent
        document.getElementById('autoClicks').innerHTML = autoClicks;//update number of auto clicks for user
        document.getElementById('click').innerHTML = click;          //update number of clicks for users
    };
    var nextCost = Math.floor(10 * Math.pow(1.1, autoClicks));       //work out the cost of next auto Click
    document.getElementById('autoCost').innerHTML = nextCost;        //updates the cursor cost for the user
}

function counterClick(number){                                       //function to increase clicks once button is clicked
    click = click + number;                                          //adds one click to total clicks
    document.getElementById("click").innerHTML = click;              //assigns an ID to clicks for it can be pulled into HTML
};

function buyClickAmount() {
    var addClickCost = Math.floor(10 * Math.pow(1.1, addClickAmount));
    if (click >= addClickCost) {
        addClickAmount = addClickAmount + 1;
        click = click - addClickCost;
        document.getElementById('addClickAmount').innerHTML = addClickAmount;
        document.getElementById('click').innerHTML = click;
    }
    var nextClickCost = Math.floor(10 * Math.pow(1.1, addClickAmount));
    document.getElementById('nextClickCost').innerHTML = nextClickCost;
    
    number++;                                                        //adds +1 to number which will increase amount added when 'Click Here' button is clicked.     ~~Credit to Michael Reese~~
}                                             
function timeRecord(number2){
    totalTime = totalTime + number2;
    document.getElementById('totalTime').innerHTML = totalTime;
     
}

window.setInterval(function(){                                       
    counterClick(autoClicks);                                        //adds autoClick value to total clicks everyone 1 second (1000ms)                         
}, 1000);

window.setInterval(function(){
    timeRecord(1);
}, 1000);
