var click = 0;
var autoClicks = 0;

function buyAuto(){
    var autoCost = Math.floor(10 * Math.pow(1.1, autoClicks));          //works out the cost of auto click
    if (click >= autoCost) {                                         //checks that the palyer can afford the auto click
        autoClicks = autoClicks + 1;                                 //increase number of Auto Clicks
        click = click - autoCost;                                    //remove clicks spent
        document.getElementById('autoClick').innerHTML = autoClicks; // update number of auto clicks for user
        document.getElementById('click').innerHTML = click;          //update number of clicks for users
    };
    var nextCost = Math.floor(10 * Math.pow(1.1, autoClicks));          //work out the cost of next auto Click
    document.getElementById('autoCost').innerHTML = nextCost;        //updates the cursor cost for the user
}

function counterClick(number){
    click = click + number;
    document.getElementById("click").innerHTML = click;
};

window.setInterval(function(){
    counterClick(autoClicks);
    
}, 1000);
