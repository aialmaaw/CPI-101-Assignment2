var value1=window.prompt("please enter your name");
 document.write(value1 + ", welcome to the paper-scissors-rock game");

var count =0;
var num1 =0;
var num2 =0;
var num3 =0;


 function play(){
 	
	var play = ["rock","scissors","paper"];
	var computerChoice = play[Math.floor(Math.random(play.length)*3)];
	var userChoice = (document.userChoice.selection.value);
	var results =results();	
	document.getElementById('play').innerHTML = computerChoice;
	document.getElementById('computerChoice').innerHTML =computerChoice +"";
	document.getElementById('userChoice').innerHTML = userChoice +"";
	document.getElementById('results').innerHTML = results +""
	document.getElementById('count').innerHTML= ++count;
	document.getElementById('num1').innerHTML= num1;
	document.getElementById('num2').innerHTML= num2;
	document.getElementById('num3').innerHTML= num3;

	if ( userChoice =="paper"){
	 	
	num1++;
	} if ( userChoice =="scissors"){
			
	num2++;
	} if ( userChoice =="rock"){
			
	num3++;}
	
	function results() {
	if(computerChoice==userChoice){
		return results = "it is tie"
	}else if (computerChoice=="rock" && userChoice =="paper"){
		return results = "you win!"
	}else if (computerChoice=="rock" && userChoice =="scissors"){
		return results = "you lost!"
	}else if (computerChoice=="paper" && userChoice =="rock"){
		return results = "you lost!"
	}else if (computerChoice=="paper" && userChoice =="scissors"){
		return results = "you win!"
	}else if (computerChoice=="scissors" && userChoice =="rock"){
		return results = "you win!"
	}else if (computerChoice=="scissors" && userChoice =="paper"){
		return results = "you lost!"
	} 	
		
	} 
  }

  
  

  




 

