function asubmit() {

    var name = document.forms["myForm"]["name"].value;
    var page = document.forms["myForm"]["page"].value;
    var feedback = document.forms["myForm"]["feedback"].value;

    if (name == null || name == "") {
	alert("Please enter your name");
	return false;
    }
    else if (page == null || page == "") {
	alert("Please enter the desired page");
	return false;
    }
    else if (feedback == null || feedback == "") {
	alert("Please enter your feedback");
	return false;
    }
    else {
	alert("Thanks for your feedback!");
	return true;
    }
    
}
