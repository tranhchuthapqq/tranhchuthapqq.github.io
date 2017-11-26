function solve() {
 	var math_opt = document.getElementsByName("math");
	var no_one = document.getElementById("no1").value;
	var no_two = document.getElementById("no2").value;
    // Biến unit price

    // Biến percent
    var bia = (parseInt(no_one) * parseInt(no_two))*60;
    var kinh = (parseInt(no_one) * parseInt(no_two))*120;
    var bo_cay = (parseInt(no_one) + parseInt(no_two))*2*26;
    var khong_bo = (parseInt(no_one) + parseInt(no_two))*2*11;
    var nep = (parseInt(no_one) + parseInt(no_two))*2*9;
    var dong_ho = (parseInt(no_one) + parseInt(no_two))*2*35;

    // var b_k = bia+kinh
    // var b_bc = bia+bo_cay
    // var b_kb = bia+khong_bo
    // var b_n = bia+nep
    // var b_dh = bia+dong_do
    //
    //
    // kinh+bo_cay
    // kinh+khong_bo
    // kinh+nep
    // kinh+dong_do
    //
    // bo_cay+khong_bo
    // bo_cay+nep
    // bo_cay+dong_do
    //
    // khong_bo+nep
    // khong_bo+dong_do
    //
    // var b_k = bia+kinh+bo_cay
    // var b_k = bia+kinh+khong_bo
    // var b_k = bia+kinh+nep
    // var b_k = bia+kinh+dong_ho
    //
    // kinh+bo_cay+nep
    // kinh+bo_cay+dong_ho
    // kinh+khong_bo+nep
    // kinh+khong_bo+dong_ho
    //
    // var b_k = bia+bo_cay+nep+dong_ho
    // kinh+bo_cay+nep+dong_ho
    // var bia_kinh = bia + kinh;


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
    //TÍNH THEO DIỆN TÍCH
    //	CHECKBOX BÌA VÀ KÍNH
	if (math_opt[0].checked == true &&  math_opt[1].checked == true) {
		// bia_kinh = (parseInt(no_one) * parseInt(no_two)) + (parseInt(no_one) * parseInt(no_two))*60 + (parseInt(no_one) * parseInt(no_two)) + (parseInt(no_one) * parseInt(no_two))*120;
		results = "<span class='message'> Kết quả là:" + Math.ceil(bia_kinh) +" 000 VNĐ</span>";
		document.getElementById('msg').innerHTML = results;
		return false;
	//	CHECKBOX BÌA, đơn giá 60
	} else if (math_opt[0].checked == true) {
	 	// bia = (parseInt(no_one) * parseInt(no_two)) + (parseInt(no_one) * parseInt(no_two))*60;
		results = "<span class='message'> Kết quả là: " + Math.ceil(bia) +" 000 VNĐ</span>";
		document.getElementById('msg').innerHTML = results;
		return false;
        //	CHECKBOX KÍNH, đơn giá 120
	} else if (math_opt[1].checked == true) {
        // kinh = (parseInt(no_one) * parseInt(no_two)) + (parseInt(no_one) * parseInt(no_two))*120;
		results = "<span class='message'> Kết quả là " + Math.ceil(kinh) +" 000 VNĐ</span>";
		document.getElementById('msg').innerHTML = results;
		return false;
        //======================TÍNH THEO CHU VI============================
        //	CHECKBOX BO CÂY ,26K
	} else if (math_opt[2].checked == true) {
        // bo_cay = (parseInt(no_one) + parseInt(no_two))*2+ (parseInt(no_one) + parseInt(no_two))*2*0.1;
        results = "<span class='message'> Kết quả là " + bo_cay +".</span>";
        document.getElementById('msg').innerHTML = results;
        return false;
    //	CHECKBOX KHÔNG BO, 11K
	} else if (math_opt[3].checked == true) {
    // khong_bo = (parseInt(no_one) + parseInt(no_two))*2+ (parseInt(no_one) + parseInt(no_two))*2*0.1;
    results = "<span class='message'> Kết quả là " + khong_bo +".</span>";
    document.getElementById('msg').innerHTML = results;
    return false;

//	CHECKBOX NẸP, 9K
	} else if (math_opt[4].checked == true) {
    // nep = (parseInt(no_one) + parseInt(no_two))*2+ (parseInt(no_one) + parseInt(no_two))*2*0.1;
    results = "<span class='message'> Kết quả là " + nep +".</span>";
    document.getElementById('msg').innerHTML = results;
    return false;
        //	CHECKBOX ĐỒNG HỒ, 35K
	} else if (math_opt[5].checked == true) {
        // dong_ho = (parseInt(no_one) + parseInt(no_two))*2+ (parseInt(no_one) + parseInt(no_two))*2*0.1;
        results = "<span class='message'> Kết quả là " + dong_ho +".</span>";
        document.getElementById('msg').innerHTML = results;
        return false;
	}

//	TRƯỜNG HỢP CÒN LẠI
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
	  /*function clear()
			 {
			document.getElementById('msg').innerHTML = "";
			no_one="";
			no_two="";
			no_one.focus();
			 }
		*/
