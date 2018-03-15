var wins = 0;
var losses = 0;

var addition = 0;

var total = Math.floor((Math.random()* 100) + 19);
var  sc1 = Math.floor((Math.random()* 12) + 1);
var  sc2 = Math.floor((Math.random()* 12) + 1);
var  sc3 = Math.floor((Math.random()* 12) + 1);
var  sc4 = Math.floor((Math.random()* 12) + 1);
var audio = new Audio('');

//updates addition in html
var updateAddition = function (){
	$('.addition').empty();
	$('.addition').append(addition);
	$('#wins').empty();
	$('#wins').append(wins);
	$('#losses').empty();
	$('#losses').append(losses);
}

var restart = function(){
	addition = 0;
    total = Math.floor((Math.random()* 100) + 19);

	$('.total').empty();
	$('.total').append(total);

	sc1 = Math.floor((Math.random()* 12) + 1);
    sc2 = Math.floor((Math.random()* 12) + 1);
    sc3 = Math.floor((Math.random()* 12) + 1);
    sc4 = Math.floor((Math.random()* 12) + 1);

    updateAddition();
}
var logic = function (){
	if (addition == total) {
		wins = wins + 1;    
		
		restart();
	}else if(addition > total){
		losses = losses + 1;
		
		restart();
	}else{
		updateAddition();
	}
}
$('.total').append(total);

$('.addition').append(addition);
//function

$(document).ready(function(){
	$('#sc1').click(function(){
		addition = addition + sc1;
		logic();
	})
	$('#sc2').click(function(){
		addition = addition + sc2;
		logic();
	})
	$('#sc3').click(function(){
		addition = addition + sc3;
		logic();
	})
	$('#sc4').click(function(){
		addition = addition + sc4;
		logic();
	})
});



