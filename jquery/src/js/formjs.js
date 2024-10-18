$(document).ready(function(){
	$("#regForm").submit(function(clear){
                let valid=true;
    		clear.preventDefault(); 
    		var name=$('#name').val();
   		var phone=$('#phone').val();
    		var dob=$('#dob').val();
		var age=$('#age').val();
                var email=$('#mail').val();
                var password=$('#pass').val();
		var cPassword=$('#cpass').val();
                $(".error").remove();
		if (name === '' || !/^[a-zA-z]+$/.test(name)) {
      			$('#name').after('<span class="error text-danger">This field is required</span>');
                        valid=false;
    		}
                if (phone === ''){
		        $('#phone').after('<span class="error text-danger">This field is required</span>');
			valid=false;
                }
                else if ( !/^\d{10}$/.test(phone)){
		        $('#phone').after('<span class="error text-danger">Enter Numbers only</span>');
			valid=false;
		}  
		if (dob === ''){
		        $('#dob').after('<span class="error text-danger">This field is required</span>');
			valid=false;
                }
		if (age === ''){
		        $('#age').after('<span class="error text-danger">This field is required</span>');
			valid=false;
                }
		if (email === ''){
		        $('#mail').after('<span class="error text-danger">This field is required</span>');
			valid=false;
                }
		else if ( !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)){
		        $('#mail').after('<span class="error text-danger">Enter valid email</span>');
			valid=false;
		}
                if ($("#gender:checked").length == 0){
		        $('#genderId').after('<span class="error text-danger">Please select gender</span>');
		        valid=false;
                }
                if ($("#terms:checked").length == 0){
		        $('#terms').after('<span class="error text-danger">Please select gender</span>');
		        valid=false;
                }
		if (password ==""){
		        $('#pass').after('<span class="error text-danger">This field is required</span>');
			valid=false;
                }
                else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).*$/.test(password)){
		        $('#pass').after('<span class="error text-danger">Enter a strong password</span>');
			valid=false;
                }
		if (cPassword ==""){
			$('#cpass').after('<span class="error text-danger">This field is required</span>');
			valid=false;
 		}
		else if (cPassword !=password){
			$('#cpass').after('<span class="error text-danger">Password not matching</span>');
			valid=false;
 		}
                if (valid){
                        $(".error").remove;
                        alert('Form Submitted');  
	        }
                
  	});
});