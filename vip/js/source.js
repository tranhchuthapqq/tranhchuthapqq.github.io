function solve() {
 	var math_opt = document.getElementsByName("math");
	var no_one = document.getElementById("no1").value;
	var no_two = document.getElementById("no2").value;	 
	if (no_one=="") {	
		var msg = "<span class='warning'>Vui lòng nhập chiều dài</span>";
		document.getElementById('msg').innerHTML = msg;
		return false;
	} 
	else if (no_two=="") {
		var msg = "<span class='warning'>Vui lòng nhập chiều rộng </span>";
		document.getElementById('msg').innerHTML = msg;
		return false;	
	}
    //	CHECKBOX BÌA VÀ KÍNH
	if (math_opt[0].checked == true &&  math_opt[1].checked == true) {			 
		bia_kinh = (parseInt(no_one) * parseInt(no_two)) + (parseInt(no_one) * parseInt(no_two))*60 + (parseInt(no_one) * parseInt(no_two)) + (parseInt(no_one) * parseInt(no_two))*120;
		results = "<span class='message'> Kết quả là:" + Math.ceil(bia_kinh) +" 000 VNĐ</span>";
		document.getElementById('msg').innerHTML = results;
		return false;
	//	CHECKBOX BÌA
	} else if (math_opt[0].checked == true) {
	 	bia = (parseInt(no_one) * parseInt(no_two)) + (parseInt(no_one) * parseInt(no_two))*60;
		results = "<span class='message'> Kết quả là: " + Math.ceil(bia) +" 000 VNĐ</span>";
		document.getElementById('msg').innerHTML = results;
		return false;
        //	CHECKBOX KÍNH
	} else if (math_opt[1].checked == true) {
        kinh = (parseInt(no_one) * parseInt(no_two)) + (parseInt(no_one) * parseInt(no_two))*120;
		results = "<span class='message'> Kết quả là " + Math.ceil(kinh) +" 000 VNĐ</span>";
		document.getElementById('msg').innerHTML = results;
		return false;
	}			
								
	else {
		var msg = "<span class='warning'>Chọn loại ở checbox.</span>";
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
			 
