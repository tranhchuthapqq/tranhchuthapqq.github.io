function solve() {
 	var math_opt = document.getElementsByName("math");
	var no_one = document.getElementById("no1").value;
	var no_two = document.getElementById("no2").value;	 
	if (no_one=="") {	
		var msg = "<span class='warning'>Vui long nhap chieu dai</span>";
		document.getElementById('msg').innerHTML = msg;
		return false;
	} 
	else if (no_two=="") {
		var msg = "<span class='warning'>vui long nhap chieu rong</span>";
		document.getElementById('msg').innerHTML = msg;
		return false;	
	}
				 
	if (math_opt[0].checked == true &&  math_opt[1].checked == true) {			 
		kq = ((parseInt(no_one) + parseInt(no_two))*2+(parseInt(no_one) + parseInt(no_two))*2*0.2) +((parseInt(no_one) + parseInt(no_two))*2+ (parseInt(no_one) + parseInt(no_two))*2*0.1);				
		results = "<span class='message'> ket qua la:" + kq +".</span>";
		document.getElementById('msg').innerHTML = results;
		return false;
	} else if (math_opt[1].checked == true) {
	 	diff = (parseInt(no_one) + parseInt(no_two))*2+(parseInt(no_one) + parseInt(no_two))*2*0.2;				
		results = "<span class='message'> ket qua la:" + diff +".</span>";
		document.getElementById('msg').innerHTML = results;
		return false;

	} else if (math_opt[0].checked == true) {
		sum = (parseInt(no_one) + parseInt(no_two))*2+ (parseInt(no_one) + parseInt(no_two))*2*0.1;					
		results = "<span class='message'> ket qua la " + sum +".</span>";
		document.getElementById('msg').innerHTML = results;
		return false;
	}			
								
	else {
		var msg = "<span class='warning'>You must select your math operator.</span>";
		document.getElementById('msg').innerHTML = msg;
		return false;
	}
				return true;
}
function reset_msg() {
document.getElementById('msg').innerHTML = '';
	 }
	  function clear()
			 {
			document.getElementById('msg').innerHTML = "";
			no_one="";
			no_two="";
			no_one.focus();
			 }
			 
