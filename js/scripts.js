

function check(){
	var q1 = document.myQuiz.q1.value;
	var q2 = document.myQuiz.q2.value;
	var q3 = document.myQuiz.q3.value;
	var q4 = document.myQuiz.q4.value;
	var q5 = document.myQuiz.q5.value;
	var q6 = document.myQuiz.q6.value;
	var q7 = document.myQuiz.q7.value;

	var count = 0;

	if(q1 == "c"){
		count ++;
	}
	if(q2 == "a"){
		count ++;
	}
	if(q3 == "b"){
		count ++;
	}
	if(q4 == "a"){
		count ++;
	}
	if(q5 == "b"){
		count ++;
	}
	if(q6 == "c"){
		count ++;
	}
	if(q7 == "b"){
		count ++;
	}

	alert(" You got " +count+ " right! ");

	if(count <= 4){
		alert("You got less than 50%, You failed");
	}
	else if (count >= 4) {
		alert("You got more than 50%, You passed!")
	}
}

debugger;
