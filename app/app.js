$(document).ready(function(){
	var oneDay = 24*60*60*1000; 
	var classDay = new Date(2014,06,30);
	var Today = new Date();

	var diffDay = Math.round(( Today.getTime() - classDay.getTime()) / oneDay);

	$('.num').append(diffDay);

	console.log(diffDay);

});
