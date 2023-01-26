var errorMsg = document.getElementById("error");


function formFunction(){
   if(!formFunctionName()){
       return;
   }else if(!formFunctionEmail()){
       return;
   }else if(!formFunctionMessage()){
       return;
   }else{
        errorMsg.innerHTML = '';
        alert("Success");
        return true;
   }
}

function formFunctionName() {
    var pName = document.getElementById("name").value;

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
    

function formFunctionEmail() {
  
    var str;
    var t = 1;
    str = document.getElementById('email').value;
    if (document.getElementById('email').value == '')
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

  function formFunctionMessage() {
    let comments;
  
    comments = document.getElementById("comments").value;

  
   
    if(comments === ""){
        errorMsg.innerHTML = 'coomment must be filled';
        return false;
    }
    else{
        return true;
    }
  }