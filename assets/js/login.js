$(document).ready(function(){
	
	var login = $("#login");
	
	var validator = login.validate({
		
		rules:{
			email : { required : true, email : true },
			password : { required : true },
			
		},
		messages:{
			email : { required : "This field is required", email : "Please enter valid email address" },
			password : { required : "This field is required" },
				
		}
	});
});
