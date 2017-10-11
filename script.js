var diceAdd = [];




//this is the function to add a new die to the page//
document.addEventListener('DOMContentLoaded', function () {

    var getDice = document.getElementById('btn1');
    getDice.innerText = 'Generate Die';
    var rollDice = document.getElementById('btn2');
    rollDice.innerText = 'Roll Dice'
    var sumDice = document.getElementById('btn3');
    sumDice.innerText = 'Sum Dice';

    //this is the function to add a new die to the page//
    getDice.addEventListener('click', function () {
        diceAdd.push(new Die(getRandom()));
    });


// this rolls the dice //
    rollDice.addEventListener('click', function () {
        for (num = 0; num < diceAdd.length; num++) {
            var dieNum = diceAdd[num];
            dieNum.value = getRandom();
            dieNum.div.innerText = dieNum.value;
        }
    });


    // Sum of dice button
    function sum() {
        let total = 0;
    
        dieArray.forEach(function(die) {
            total += dieNum.value;
        });
    
        alert(`the sum of all die values is ${total}`);
    }
});
// Randomizer function
function getRandom() {
    return (Math.floor(Math.random() * 6) + 1);
}
var Die = function (value) {
    this.value = value;
    this.div = document.createElement('div');
    this.div.className = 'die';
    document.body.appendChild(this.div);
    this.div.innerText = this.value;
    this.div.addEventListener('click', this.roll.bind(this));
    this.div.addEventListener('dblclick', this.plzRemove.bind(this));
}





//  function to roll die//
Die.prototype.roll = function () {
    console.log(this);
    this.value = getRandom();
    this.div.innerText = this.value;
}

// removes the Die //
Die.prototype.plzRemove = function() {
    dieAdd.splice(dieAdd.indexOf(this), 1);
    this.div.plzRemove();
};


