var hesos = [ 120, 60, 26, 11, 9, 35, 25, 45, 60, 90, 100];
var sum = 0;
var dai;
var	rong;
$('#no1').change(function() {
	dai =  $('#no1').val();
	tinhTong();
	$('#totalcost').val((sum != 0) ? Math.ceil(sum) : 0);
});

$('#no2').change(function() {
	rong =  $('#no2').val();
	tinhTong();
	$('#totalcost').val((sum != 0) ? Math.ceil(sum) : 0);
});

function tinhTong() {
	sum = 0;
	for (var i = 0; i < $('.game').length; i++) {

		money = (parseInt(dai) + parseInt(rong))*2*hesos[i];
		if (($('#game'+(i)).is(':checked'))) {
			sum += money;
		}
	}
}

$('.game').click(function() {
	var index = $('.game').index(this);
    money = (parseInt(dai) + parseInt(rong))*2*hesos[index];
	if (!($('#game'+(index)).is(':checked'))) {
		money = -money;
	}
	sum += money;
 	$('#totalcost').val((sum != 0) ? Math.ceil(sum) : 0);
});


