let user = document.getElementById("name");
let pasword =document.getElementById("pass");
let flag =1; // true 
function validate(){
    if(user.value ==""){
        document.getElementById("usererror").innerHTML="enter your name";
        flag=0; //false 
    }
    else if(user.value.length<3){
        document.getElementById("usererror").innerHTML="Use requried minium 3 characters";
        flag =0; //false 
    }
    else{
        document.getElementById("usererror").innerHTML="";
        flag =1; //true 
    }

    if(pasword.value ==""){
        document.getElementById("passerror").innerHTML="enter your password";
        flag =0;

    }
    
    else if(pasword.value.length<=6){
        document.getElementById("passerror").innerHTML="max 8 characters requried ";
        flag =0;
    }
    else{
        document.getElementById("passerror").innerHTML="";
        flag =1;
    }

    if(flag){ //if the flag is true then enter "if" statement
        return true;
    }
    else{
        return false;
    }

}