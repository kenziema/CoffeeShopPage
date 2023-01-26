var errorMsg = document.getElementById("error");

function fnValidate() {
    if        (!ValidateName()) {
        return;
    } else if (!ValidateEmail()) {
        return;
    } else if (!ValidateCity()) {
        return;
    } else if (!ValidateAddress()) {
        return;
    } else if (!ValidatePayment()){
        return;
    } else if (!ValidateCvv() ) {
        return;
    } else if (!ValidateAgree()){
        return;
    }  else {
        errorMsg.innerHTML = '';
        alert("Thank you for your order!");

        var summaryOrder = 'Name : ' + document.getElementById('form-name').value + '\n' +
            'Email : ' + document.getElementById('form-email').value + '\n' +
            'City :' + document.getElementById('form-city') + '\n' +
            'Address : ' + document.getElementById('form-address').value + '\n' +
            'Payment : ' + document.getElementById('pay-method').value + '\n' ;

        if (confirm(summaryOrder)) {
            // confirm(summaryOrder)
            if (prompt('Input if you have any additional message for your order!') == '') {
                alert("ThankYou!");

            } else {
                alert("Thank you for your message");
            }
        }
    }
}
function ValidateName() {
    var pName = document.getElementById("form-name").value;
  
    // isAlpha(pName);


    if (pName == '') {
        errorMsg.innerHTML = 'Name Must Be Filled';
        return false;
    } else if (pName.length < 5) {
        errorMsg.innerHTML = 'Name must be more than 5 characters';
        return false;
    } else if (!isAlpha(pName)) {
        errorMsg.innerHTML = 'Name Must be alphabet Only!';
             return false;
        }
    return true;
    }
    
   





function isAlpha(pName) {
        // alert(pName.charAt(0));  
        for (var i = 0; i < pName.length; i++) {
            // a - z & A - z
            if (
                !(pName.charCodeAt(i) > 64 && pName.charCodeAt(i) < 91) &&
                !(pName.charCodeAt(i) > 96 && pName.charCodeAt(i) < 123) && !(pName.charCodeAt(i) == 32)) {
                 return false;
            }
                errorMsg.innerHTML = '';
               return true;
        }
     
};

function ValidateEmail() {
  
    
    var str;
    var t = 1;
    str = document.getElementById('form-email').value;
    if (document.getElementById('form-email').value == '')
    {
        errorMsg.innerHTML = 'Email must be filled!';
           return false;

    }
    var res = str.split('@');
    if (str.split('@').length != 2)
    {
        errorMsg.innerHTML = 'Email is invalid! ';
     
        t = 0;
    }
    var part1 = res[0];
    var part2 = res[1];

    // part1
    if (part1.length == 0) {
        
        errorMsg.innerHTML = 'Email is invalid! ';
        t = 0;
    }
    if (part1.split(' ').length > 2) {
        
        errorMsg.innerHTML = 'Email is invalid! ';
        t = 0;
    }

  
    var dotsplt = part2.split('.');  
    if (part2.split('.').length < 2) {
        errorMsg.innerHTML = 'Email is invalid! ';
        
        t = 0;
    }
    if (dotsplt[0].length == 0) {
        errorMsg.innerHTML = 'Email is invalid! ';
       
        t = 0;
    }
    if (dotsplt[1].length < 2 || dotsplt[1].length > 4) {

        errorMsg.innerHTML = 'Email is invalid! ';
        t = 0;
    }

    if (t == 1)
        errorMsg.innerHTML = '';
        return true;
}


function ValidateAddress() {
    var pAddress = document.getElementById('form-address').value;
    

    if (pAddress == '') {
        errorMsg.innerHTML = 'Address must be filled!';
        return false;
    } else if (pAddress.split(' ').length < 5) {
        errorMsg.innerHTML = 'Address must be more than 5 words!';
        return false;
    }
    errorMsg.innerHTML = '';
    return true;
}

function ValidatePayment() {
    var pPayment = document.getElementById('pay_method').value;

    if (pPayment == '') {
        errorMsg.innerHTML = 'Payment Method must be chosen!';
        return false;
    }
    errorMsg.innerHTML = '';
    return true;
}



function ValidateCity() {


    var pCity = document.getElementById('form-city').value;
            if(pCity == ''){
                errorMsg.innerHTML = 'City Name Must Be Filled!';
                return false;
            } else if (pCity.length < 4){
                errorMsg.innerHTML = 'City Name Must at least had 4 characters!';
                return false;
             } 
        
        errorMsg.innerHTML = '';
        return true;
    
}

function isBeta(pCity) {

    for (var i = 0; i < pCity.length; i++) {

        if (!(pCity.charAt(i) >= 'a' && pCity.charAt(i) <= 'z') && !(pCity.charAt(i) >= 'A' && pCity.charAt(i) <= 'Z')) {
            return false;
        }
    }
    errorMsg.innerHTML = '';
    return true;
}

function ValidateCard() {
    var pCard = document.getElementById('form-Cardnumber').value;

    if(pCard == ''){
        errorMsg.innerHTML = 'Card Number Must Be Filled!';
        return false;
    }
    errorMsg.innerHTML = '';
    return true;

}

function ValidateCvv() {
    var pCvv = document.getElementById('form-cvv').value;
    var pay_method = document.getElementById("pay_method").value;

    
   
  if (pay_method == "visa"){
        if(pCvv == '') {
            errorMsg.innerHTML = 'CVV Number Must Be Filled!';
            return false;
        } else if (pCvv.length < 3) {
            errorMsg.innerHTML = 'CVV must have 3 numbers';
            return false;
        }
    }
    errorMsg.innerHTML = '';
    return true;
}

function ValidateAgree() {
    var pAgree = document.getElementById('form_agree').checked;

    if (!pAgree) {
        errorMsg.innerHTML = 'You must agree with the T&C!';
        return false;
    }
    errorMsg.innerHTML = '';
    return true;
}

function displayPayment() {

    var pay_method = document.getElementById("pay_method");

    var divVisa = document.getElementById("visa_pay");
    var divPaypal = document.getElementById("paypal_pay");


    divVisa.style.display = pay_method.value == "visa" ? "block" : "none";

    divPaypal.style.display = pay_method.value == "paypal" ? "block" : "none";
}
