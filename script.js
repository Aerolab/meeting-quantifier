$(document).ready(function(){

	var timeStart = null;
	var cost = 0.0;
	var averageCost = 0.0;
	var numPeople = 1;
	var $cost = $('#cost');

	$('#setup').submit(function(event){
		event.preventDefault();
		numPeople = parseFloat( $('input[name=num_people]').val() );
		averageCost = parseFloat( $('input[name=avg_cost]').val() );
		timeStart = Date.now();
		$('body').addClass('running');
	});

	var animate = function() {
		requestAnimationFrame(animate);

		if( timeStart === null ){ return; }
		var timeElapsed = Date.now() - timeStart;
		// Convert to hours
		cost = (timeElapsed / 1000 / 60 / 60) * (averageCost * numPeople);

		$cost.text("$ "+ cost.toFixed(2));
	};

	requestAnimationFrame(animate);

	$('input[name=num_people').focus();

});