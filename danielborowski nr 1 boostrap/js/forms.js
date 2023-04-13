if(contactEmail.value =="")
{
    document.getElementById("contactEmail").className="formcontrol is-invalid";
    document.getElementById("errorEmail").innerHTML="Adres email jest wymagany";
    error=true;
} else {
    document.getElementById("contactEmail").className="formcontrol is-valid";
     var email = contactEmail.value;
     var regex = /^[a-zA-Z0-9._-]+@([a-zA-Z0-9.-]+\.)+[a-zA-Z0-9.-]{2,4}$/;
    
     if(regex.test(email)==false) {
     errorText += "błędny email\n";
     error=true;
     document.getElementById("contactEmail").className="form-control is-valid";
    }
} 
   
