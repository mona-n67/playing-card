var cardface = ['A', 'K','Q', 'J','10', '9', '8', '7', '6', '5', '4', '3', '2' ];
var suits = ['♠', '♣', '♥', '♦'];
var output = document.getElementById('output');
var cards = [];
function buildcards(){
var k = 0 ;
 for (var i=0 ; i < suits.length ; i ++){
    for (var j=0 ; j < cardface.length ; j ++){
        cards [k++] = cardface[j] + suits[i]  ;
        cards.push(cards);
     }
        cards [k++] = '<br>';
 }
 console.log(cards);
}
function shuffle(array){
    for(var i = array.length - 1 ; i > 0 ; i--){
        var random = Math.floor(Math.random() * i);
        var temp = array[i];
        array[i] = array[random];
        array[random] = temp;
    }
    return array;
}
function deal(){
    shuffle(cards);
    output.innerHTML = '<h4>player 01 cards are:</h4>'+cards[0] + cards[1] + cards[2] + cards[3];
    output.innerHTML += '<h4>player 02 cards are:</h4>'+cards[4] + cards[5] + cards[6] + cards[7];
    cards =[];
}
