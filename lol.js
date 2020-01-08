$(document).ready(function(){
	//function declaration
	function handler(){
		//змінній value присвоюємо введення юзера
		var value = $("#input").val();
		//зі sting в number
		value = parseInt(value);
		console.log(value);
		if(value > ans){
		    $("#result").text("Число менше");
		}
		else if(value < ans){
			$("#result").text("Число більше");
		}
		else if(isNaN(value)){
			$("#result").text("Некоректне введення");
		}
		else {
			$("#result").text("Так ти вгадав! Це число : "+ ans + "!");
		}
	}
	var ans = Math.floor(Math.random() * 100);
	//console.log(ans);
	
	$("#input").blur(handler);
});