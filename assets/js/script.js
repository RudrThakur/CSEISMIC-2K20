$(function(){
	
	var note = $('#note'),
		ts = new Date(2020, 20, 1),
		newYear = true;
	
	if((new Date()) > ts){
		// The new year is here! Count towards something else.
		// Notice the *1000 at the end - time must be in milliseconds
		ts = (new Date()).getTime() + 10*24*60*60*1000;
		newYear = false;
	}
		
	$('#countdown').countdown({
		timestamp	: ts,
		callback	: function(days, hours, minutes, seconds){
	
			var message = "";
			
			message +=" day" + ( days==1 ? '':'s ' ) + ",  ";
			message += " hour" + ( hours==1 ? '':'s' ) + ", ";
			message += " minute" + ( minutes==1 ? '':'s' ) + " and ";
			message += " second" + ( seconds==1 ? '':'s' ) + " <br />";
			
			// if(newYear){
			
			// }
			// else {
			// 	message += "left to 10 days from now!";
			// }
			message += "Get ready for the Symposium !";
			note.html(message);
		}
	});
	
});
