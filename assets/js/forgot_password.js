$(document).ready(function(){
	
	var forgot_password = $("#forgot");
	
	var validator = forgot_password.validate({
		
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
