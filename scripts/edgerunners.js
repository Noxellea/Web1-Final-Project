const submitBtn= document.getElementById("submitBtn");

submitBtn.addEventListener("click", submitBtnPressed);

function submitBtnPressed(e){
	e.preventDefault();
	
	const question0 = [document.getElementById("q0answer0"), document.getElementById("q0answer1"), document.getElementById("q0answer2")];
	const question1 = [document.getElementById("q1answer0"), document.getElementById("q1answer1"), document.getElementById("q1answer2")];
	const question2 = [document.getElementById("q2answer0"), document.getElementById("q2answer1"), document.getElementById("q2answer2")];
	var answer0 = "";
	var answer1 = "";
	var answer2 = "";
	for (i= 0; i<question0.length; i++){
		if (question0[i].checked == true){
			answer0 = question0[i].value;
		}
	}
	for (i= 0; i<question1.length; i++){
		if (question1[i].checked == true){
			answer1 = question1[i].value;
		}
	}
	for (i= 0; i<question2.length; i++){
		if (question2[i].checked == true){
			answer2 = question2[i].value;
		}
	}
	var counter = 0;
	if (answer0 == "1"){counter++};
	if (answer1 == "1"){counter++};
	if (answer2 == "0"){counter++};
	document.getElementById("results").textContent = "You got " + counter + " correct answers.";
}