function validateForm() {
	var email = document.getElementById("email");
  email.addEventListener("input",function(event){
  	if(event.validity.typeMismatch){
  		email.setCustomValidity("Invalid email,Enter correct Email");
  	}
  	else
  	{
  		email.setCustomValidity("Valid Email");
  	}
  });
  
  

  

}