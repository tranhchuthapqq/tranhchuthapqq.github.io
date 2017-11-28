var hesos = [ 120, 60, 26, 11, 9, 35, 25, 45, 60, 90, 100];
var sum = 0;
var dai = 0, rong = 0;

$('#no1').change(function() {
	dai =  $('#no1').val();
	tinhTong();
	$('#totalcost').val((sum != 0) ? sum.toFixed(3) : 0);
});

$('#no2').change(function() {
	rong =  $('#no2').val();
	tinhTong();
	$('#totalcost').val((sum != 0) ? sum.toFixed(3) : 0);
});

function tinhTong() {
	sum = 0;
	for (let i = 2; i < $('.game').length; i++) {
		var money = dai * rong * hesos[i];
		if (($('#game'+(i)).is(':checked'))) {
			sum += money;
		}
	}
}

$('.game').click(function() {
	var index = $('.game').index(this);
	var money = dai * rong * hesos[index];
	if (!($('#game'+(index)).is(':checked'))) {
		money = -money;
	}
	sum += money;
 	$('#totalcost').val((sum != 0) ? sum.toFixed(2) : 0);
});
