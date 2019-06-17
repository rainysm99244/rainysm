function register(){
    var userId = registerForm.id;
    var userPassword = registerForm.password;
    var phoneNumber = [registerForm.phoneNumber1,
                       registerForm.phoneNumber2,
                       registerForm.phoneNumber3];
    var address = registerForm.address;
    var agree = registerForm.agree;
    
    if(userId.value == ""){
        alert('아이디가 입력되지 않았습니다.');
        userId.focus(); 
        return false;
    }
        
    
    if(userPassword.value == ""){
        alert('비밀번호가 입력되지 않았습니다.');
        userPassword.focus();
        return false;
    }
    
    if(phoneNumber[1].value == "" || phoneNumber[2].value == ""){
        alert('전화번호가 정확히 입력되지 않았습니다.');
        if(phoneNumber[1].value == "")
            phoneNumber[1].focus();
        else
            phoneNumber[2].focus();
        return false;
    }
        
    if(address.value == ""){
        alert('택배 수령지가 입력되지 않았습니다.');
        address.focus();
        return false;
    }
    
    if(!agree[0].checked){
        alert('약관에 동의하지 않으면 가입할 수 없습니다.');
        return false;
    }
    
    return true;
}

function selectedEmailChange(){
    var emailCombo = registerForm.emailCombo;
    var emailCompany = registerForm.emailCompany;
    
    switch(emailCombo.value){    
        case "etc":
            emailCompany.value = "";
            emailCompany.disable = false;
            break;
            
        case "default":
            break;
            
        default:
            emailCompany.value = emailCombo.value;
            emailCompany.disable = true;
            break;
    }
    
}

function termToggle(){
    $('#terms').slideToggle('slow');
    $('#terms-hide').toggle(0);
    $('#terms-show').toggle(0);
}
