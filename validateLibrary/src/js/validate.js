$(document).ready(function(){

    $("#regForm").validate({
		rules:{
			name:{
                              required:true
			},
			phone:{
				required:true,
                                minlength:10,
                                maxlength:10
                        
			},
			dob:{
                              required:true
			},
			age:{
				required:true,
                                range: [1, 100]
			},
			gender:{
                              	required:true
			},
			mail:{
				required:true,
                                email:true
			},
			pass:{
                              	required:true,
                              	minlength: 8,
                              	pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).*$/
			},
			cpass:{
				required:true,
				equalTo:"#pass"
			},
			terms:{
				required:true
			}
                },
                messages:{
			name:"Please enter your name",
			dob:"Please enter your date of birth",
			gender:"Please select your gender",
			phone:{
				required: "Please enter your phone number",
				minlength: "Number must contain 10 digits",
				maxlength: "Number must contain only 10 digits",
				
			      },
			age:{
                                required:"Please enter your age",
				range:"Enter valid age"
			    },

			mail:{
                                required:"Please enter email",
                                email:"Please enter a valid email"
			     },
			pass:{
                                required:"Please enter password",
                                minlength:"Must contain mininum 8 character",
 				pattern:"Enter a strong password"
			     },
			cpass:{
				
                                required:"Please enter password",
                                password:"Password not matching",
                        },
			terms:"Please accept the terms"                     
		}             
     });
	$("#regForm").on("submit", function(event) {
        if ($(this).valid()) { 
            alert("Form submitted");           
        } else {
            event.preventDefault(); 
        }
    });
		
});

