function RegisVal()
{
    var fname = document.getElementsByName("Fname").value;
    var lname = document.getElementsByName("Lname").value;
    var gender = document.getElementsByName("gender").value;
    var dob =  document.getElementsByName("date").value;
    var age = parseInt (document.getElementsByName("Age").value);
    var email = document.getElementsByName("Email").value;
    var address = document.getElementsByName("Address").value;
    var contact = document.getElementsByName("Contact").value;
    var Currdate = document.getElementsByName("today").value;
    var branch = document.getElementsByName("Branch").value;
    
    if((isAlphabet(fname, "Please enter only letters for your first name"))&&(lengthRestriction(fname, 3, 12)))
    {
        if ((isAlphabet(lname, "Please enter only letters for your last name"))&&(lengthRestriction(lname, 4, 16) ))
        {           
            if (notEmpty(gender,"Please enter a value gender"))
            {
                if (notEmpty(Currdate,"Please enter a value for currdate"))
                {
                    if (notEmpty(dob,"Please enter a value DOB"))
                    {
                        if (isNumeric(age,"Please insert only numbers for your age"))
                        {
                            if (emailValidator(email,"invalid email character inserted"))
                            {
                                if (notEmpty(address,"Please enter a value for address"))
                                {
                                    if (notEmpty(contact,"Please enter a value contact"))
                                    {
                                        
                                    }
                                }
                            }
                        }
                    }
                }
                
            }               
        }    
    }

    return false;   
}

function notEmpty(elem, helperMsg){
    if(elem?.value.length == 0){
        alert(helperMsg);
        elem.focus(); // set the focus to this input
        return false;
    }
    return true;
}

function isNumeric(elem, helperMsg){
    var numericExpression = /^[0-9]+$/;
    if(elem?.value.match(numericExpression)){
        return true;
    }else{
        alert(helperMsg);
        elem.focus();
        return false;
    }
}

function isAlphabet(elem, helperMsg){
    var alphaExp = /^[A-Za-z]+$/;
    if(elem?.value.match(alphaExp)){
        return true;
    }else{
        alert(helperMsg);
        elem?.focus();
        return false;
    }
}

function isAlphanumeric(elem, helperMsg){
    var alphaExp = /^[0-9a-zA-Z]+$/;
    if(elem?.value.match(alphaExp)){
        return true;
    }else{
        alert(helperMsg);
        elem.focus();
        return false;
    }
}

function lengthRestriction(elem, min, max){
    var uInput = elem?.value;
    if(uInput.length >= min && uInput.length <= max){
        return true;
    }else{
        alert("Please enter between " +min+ " and " +max+ " characters");
        elem?.focus();
        return false;
    }
}

function madeSelection(elem, helperMsg){
    if(elem?.value == "Please Choose"){
        alert(helperMsg);
        elem?.focus();
        return false;
    }else{
        return true;
    }
}

function emailValidator(elem, helperMsg){
    var emailExp = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;
    if(elem.value.match(emailExp)){
        return true;
    }else{
        alert(helperMsg);
        elem.focus();
        return false;
    }
}