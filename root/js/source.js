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
    // Kết hợp 2
    var b_k = bia+kinh;
    var b_bc = bia+bo_cay;
    var b_kb = bia+khong_bo;
    var b_n = bia+nep;
    var b_dh = bia+dong_do;


    var k_bc = kinh+bo_cay
    var k_kb = kinh+khong_bo
    var k_n = kinh+nep
    var k_dh = kinh+dong_do

    var bc_n = bo_cay+nep
    var bc_dh = bo_cay+dong_do

    var kb_n = khong_bo+nep
    var kb_dh =khong_bo+dong_do
    // Kết hợp 3
    var b_k_bc = bia+kinh+bo_cay;
    var b_k_kb = bia+kinh+khong_bo;
    var b_k_n = bia+kinh+nep;
    var b_k_dh = bia+kinh+dong_ho;

    var k_bc_n = kinh+bo_cay+nep;
    var k_bc_dh = kinh+bo_cay+dong_ho;
    var k_kb_n = kinh+khong_bo+nep;
    var k_bc_dh = kinh+khong_bo+dong_ho;
    // Kết hợp 4
    var b_bc_nep_dh = bia+bo_cay+nep+dong_ho;
    var k_bc_n_dh =  kinh+bo_cay+nep+dong_ho;



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
        results = "<span class='message'> Kết quả là:" + Math.ceil(b_k) + " 000 VNĐ</span>";
        document.getElementById('msg').innerHTML = results;
        return false;
    //===========================BIGIN KET HOP 2================================

    } else if (math_opt[0].checked == true &&  math_opt[1].checked == true) {
            results = "<span class='message'> Kết quả là:" + Math.ceil(b_k) +" 000 VNĐ</span>";
            document.getElementById('msg').innerHTML = results;
		return false;
 } else if (math_opt[0].checked == true &&  math_opt[2].checked == true) {
            results = "<span class='message'> Kết quả là:" + Math.ceil(b_bc) +" 000 VNĐ</span>";
            document.getElementById('msg').innerHTML = results
		return false;
 } else if (math_opt[0].checked == true &&  math_opt[3].checked == true) {
            results = "<span class='message'> Kết quả là:" + Math.ceil(b_kb) +" 000 VNĐ</span>";
            document.getElementById('msg').innerHTML = results;
		return false;
 } else if (math_opt[0].checked == true &&  math_opt[4].checked == true) {
            results = "<span class='message'> Kết quả là:" + Math.ceil(b_n) +" 000 VNĐ</span>";
            document.getElementById('msg').innerHTML = results;
		return false;
 } else if (math_opt[0].checked == true &&  math_opt[5].checked == true) {
            results = "<span class='message'> Kết quả là:" + Math.ceil(b_) +" 000 VNĐ</span>";
            document.getElementById('msg').innerHTML = results;
		return false;
 } else if (math_opt[0].checked == true &&  math_opt[1].checked == true) {
            results = "<span class='message'> Kết quả là:" + Math.ceil(b_k) +" 000 VNĐ</span>";
            document.getElementById('msg').innerHTML = results;
		return false;
 } else if (math_opt[0].checked == true &&  math_opt[1].checked == true) {
            results = "<span class='message'> Kết quả là:" + Math.ceil(b_k) +" 000 VNĐ</span>";
            document.getElementById('msg').innerHTML = results;
		return false;
 } else if (math_opt[0].checked == true &&  math_opt[1].checked == true) {
            results = "<span class='message'> Kết quả là:" + Math.ceil(b_k) +" 000 VNĐ</span>";
            document.getElementById('msg').innerHTML = results;
		return false;
 } else if (math_opt[0].checked == true &&  math_opt[1].checked == true) {
            results = "<span class='message'> Kết quả là:" + Math.ceil(b_k) +" 000 VNĐ</span>";
            document.getElementById('msg').innerHTML = results;
		return false;
 } else if (math_opt[0].checked == true &&  math_opt[1].checked == true) {
            results = "<span class='message'> Kết quả là:" + Math.ceil(b_k) +" 000 VNĐ</span>";
            document.getElementById('msg').innerHTML = results;
		return false;
 } else if (math_opt[0].checked == true &&  math_opt[1].checked == true) {
            results = "<span class='message'> Kết quả là:" + Math.ceil(b_k) +" 000 VNĐ</span>";
            document.getElementById('msg').innerHTML = results;
		return false;
 } else if (math_opt[0].checked == true &&  math_opt[1].checked == true) {
            results = "<span class='message'> Kết quả là:" + Math.ceil(b_k) +" 000 VNĐ</span>";
            document.getElementById('msg').innerHTML = results;
		return false;
 } else if (math_opt[0].checked == true &&  math_opt[1].checked == true) {
            results = "<span class='message'> Kết quả là:" + Math.ceil(b_k) +" 000 VNĐ</span>";
            document.getElementById('msg').innerHTML = results;
		return false;

		//===========================END KET HOP 2================================
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

