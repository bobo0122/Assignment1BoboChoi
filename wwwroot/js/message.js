var submit = document.getElementById("submitButton");


submit.addEventListener("click", function () {
	//calculate the numeric grade first
	var numericGrade = document.getElementById("Assignments").value * 0.5 + document.getElementById("group").value * 0.1 +
		document.getElementById("Quizzes").value * 0.1 +
		document.getElementById("Exams").value * 0.2 +
		document.getElementById("INTEX").value * 0.1;
	var letterGrade = "";
	//if statements to see which letter grade they get
	if (numericGrade >= 94) {
		var letterGrade = "A";
	}
	else if (numericGrade >= 90) {
		var letterGrade = "A-";
	}
	else if (numericGrade >= 87) {
		var letterGrade = "B+";
	}
	else if (numericGrade >= 84) {
		var letterGrade = "B";
	}
	else if (numericGrade >= 80) {
		var letterGrade = "B-";
	}
	else if (numericGrade >= 77) {
		var letterGrade = "C+";
	}
	else if (numericGrade >= 74) {
		var letterGrade = "C";
	}
	else if (numericGrade >= 70) {
		var letterGrade = "C-";
	}
	else if (numericGrade >= 67) {
		var letterGrade = "D+";
	}
	else if (numericGrade >= 64) {
		var letterGrade = "D";
	}
	else if (numericGrade >= 60) {
		var letterGrade = "D-";
	}
	else  {
		var letterGrade = "E";
	}
	//show on the page bottom
	document.getElementById("numericGrade").innerHTML = "Your Numeric Grade is: " + numericGrade;
	document.getElementById("letterGrade").innerHTML = "Your Letter Grade is: " + letterGrade;
});

