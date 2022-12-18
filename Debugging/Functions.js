function betterBlastOff(){
    var startTime = 10
    var currTime = 10
    var increment = 1
    console.log(currTime + " seconds left until Blast Off!");
    for(var i = 0; i <= startTime; i += increment){
        setTimeout(function(){ 
        console.log(currTime + " seconds left!");
            document.getElementById("blastOffText").innerHTML = currTime;
            if(currTime == 0){
                document.getElementById("blastOffText").innerHTML = "We've Blasted Off!";
            }
            else if(currTime == startTime / 2){
                document.getElementById("blastOffText").innerHTML = currTime + "! Halfway there!";
            }
            else{
                document.getElementById("blastOffText").innerHTML = currTime + " seconds left!";
            }
            currTime = currTime - increment;
        }, 1000 * i);
    }
}
//variable needs to be global so that the other function can see it
var yourCardName = "Blank of Blank"
//defines the card that you pick
function yourCard(){
    //sets up each local variable, randomSuit and randomValue pull from the craps example of choosing a random number, cardSuit and cardValue are just initializing
    var randomSuit = Math.ceil(Math.random()*4);
    var randomValue = Math.ceil(Math.random()*13);
    var cardSuit = "Hearts";
    var cardValue = "Ace";
    console.log(randomSuit + " and " + randomValue)
    //turns the randomSuit number into a common card suit
    if (randomSuit == 1){
        cardSuit = "Hearts";
    }
    else if (randomSuit == 2){
        cardSuit = "Spades";
    }
    else if (randomSuit == 3){
        cardSuit = "Diamonds";
    }
    else {
        cardSuit = "Clubs";
    };
    console.log(cardSuit);
    //turns randomValue's commonly exchanged numbers into works, like Ace for 1, King for 13, etc. Leaves other values alone
    if (randomValue == 1){
        cardValue = "Ace";
    }
    else if (randomValue == 11){
        cardValue = "Jack";
    }
    else if (randomValue == 12){
        cardValue = "Queen";
    }
    else if (randomValue == 13){
        cardValue = "King";
    }
    else {
        cardValue = randomValue;
    };
    console.log(cardValue);
    //turns the value and suit into a proper card title
    yourCardName = cardValue + " of " + cardSuit;
    //makes your picked card a part of the website
    document.getElementById("yourCard").innerHTML = "*You picked " + yourCardName + "*";
    //checks if he got your card right, by picking the same card as you or not
    if (pickedCardName == yourCardName){
        document.getElementById("isThisYourCard").innerHTML = "I was right!"
    }
    else {
        document.getElementById("isThisYourCard").innerHTML = "Just kidding! Pick again!"
    }
}
//variable needs to be global so the other function can see it
var pickedCardName = "Value of Suit"
//defines the card that the website picks
function pickedCard(){
    //sets up each local variable, randomSuit and randomValue pull from the craps example of choosing a random number, cardSuit and cardValue are just initializing
    var randomSuit = Math.ceil(Math.random()*4);
    var randomValue = Math.ceil(Math.random()*13);
    var cardSuit = "Suit";
    var cardValue = "Value";
    console.log(randomSuit + " and " + randomValue)
    //turns the randomSuit number into a common card suit
    if (randomSuit == 1){
        cardSuit = "Hearts";
    }
    else if (randomSuit == 2){
        cardSuit = "Spades";
    }
    else if (randomSuit == 3){
        cardSuit = "Diamonds";
    }
    else {
        cardSuit = "Clubs";
    };
    console.log(cardSuit);
    //turns randomValue's commonly exchanged numbers into works, like Ace for 1, King for 13, etc. Leaves other values alone
    if (randomValue == 1){
        cardValue = "Ace";
    }
    else if (randomValue == 11){
        cardValue = "Jack";
    }
    else if (randomValue == 12){
        cardValue = "Queen";
    }
    else if (randomValue == 13){
        cardValue = "King";
    }
    else {
        cardValue = randomValue;
    };

    console.log(cardValue);
    //turns the value and suit into a proper card title
    pickedCardName = cardValue + " of " + cardSuit;
    //makes the guessed card a part of the website
    document.getElementById("pickedCard").innerHTML = "Your card is " + pickedCardName + "!";
    //checks if he got your card right, by picking the same card as you or not
    if (pickedCardName == yourCardName){
        document.getElementById("isThisYourCard").innerHTML = "I was right!"
    }
    else {
        document.getElementById("isThisYourCard").innerHTML = "Just kidding! Pick again!"
    }
}